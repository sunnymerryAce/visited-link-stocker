import { getCookieParameters, getLocalStorage } from './helper/util';

export default class Index {
  /**
   * constructor
   */
  constructor() {
    // 閲覧履歴を格納するオブジェクト
    // this.linkHistory = getLocalStorage();
    this.linkHistory = getCookieParameters();
    // リンクのDOM
    this.$links = document.querySelectorAll('.link');
    this.$visitedArea = document.querySelector('.visited');
    // 業務処理
    this.initialize();
    // 既存リンクにイベント登録
    this.bind();
  }

  initialize() {
    // 閲覧履歴からリンクを作成
    if (this.linkHistory) {
      this.linkHistory = this.constructor.convertStringValueToObjectValue(
        this.linkHistory,
      );
      Object.entries(this.linkHistory).forEach(([key, value]) => {
        this.$visitedArea.appendChild(this.constructor.createLink(value));
      });
    }
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

  // Valueをオブジェクトに変換する
  static convertStringValueToObjectValue(obj) {
    const newObj = {};
    Object.entries(obj).forEach(([key, value]) => {
      newObj[key] = JSON.parse(value);
    });
    return newObj;
  }

  // リンク要素を作成する
  static createLink({ href, title }) {
    const node = document.createElement('a');
    node.setAttribute('href', href);
    node.setAttribute('class', 'link');
    node.appendChild(document.createTextNode(title));
    return node;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.DEV_ENV_MODEL = window.DEV_ENV_MODEL || {};
  window.DEV_ENV_MODEL.INDEX = window.DEV_ENV_MODEL.INDEX || new Index();
});
