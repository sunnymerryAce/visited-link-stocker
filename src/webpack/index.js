import { getCookieParameters, getLocalStorage } from './helper/util';

class Index {
  /**
   * constructor
   */
  constructor() {
    // 閲覧履歴を格納するオブジェクト
    this.linkHistory = {};
    // リンクのDOM
    this.$links = document.querySelectorAll('.link');
    this.$visitedArea = document.querySelector('.visited');
    this.initialize();
  }

  initialize() {
    this.getHistory();
    this.bind();
  }

  // 閲覧履歴を取得する
  getHistory() {
    // this.linkHistory = getLocalStorage();
    this.linkHistory = getCookieParameters();
    if (this.linkHistory) {
      for (let key of Object.keys(this.linkHistory)) {
        // 情報をオブジェクトに変換して格納
        this.linkHistory[key] = JSON.parse(this.linkHistory[key]);
        // DOM要素を生成する
        this.appendLink(this.linkHistory[key]);
      }
    }
    console.log(this.linkHistory);
  }

  // リンク要素を追加する
  appendLink(data) {
    const node = document.createElement('a');
    node.setAttribute('href', data.href);
    node.setAttribute('class', 'link');
    node.appendChild(document.createTextNode(data.title));
    this.$visitedArea.appendChild(node);
  }

  // イベント登録
  bind() {
    // リンククリック時の処理
    [...this.$links].forEach(($link) => {
      $link.addEventListener('click', (e) => {
        const link = e.target;
        const key = link.dataset['id'];
        // 初回アクセスの場合
        if (!localStorage.getItem(key)) {
          // LocalStorageに履歴として登録
          // localStorage.setItem(
          //   key,
          //   JSON.stringify({
          //     href: link.getAttribute('href'),
          //     title: link.textContent,
          //   }),
          // );
          // Cookieの場合
          document.cookie = `${key}=${JSON.stringify({
            href: link.getAttribute('href'),
            title: link.textContent,
          })}`;
        }
      });
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.DEV_ENV_MODEL = window.DEV_ENV_MODEL || {};
  window.DEV_ENV_MODEL.INDEX = window.DEV_ENV_MODEL.INDEX || new Index();
});
