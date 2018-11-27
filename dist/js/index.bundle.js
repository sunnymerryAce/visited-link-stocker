/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/webpack/helper/util.js":
/*!************************************!*\
  !*** ./src/webpack/helper/util.js ***!
  \************************************/
/*! exports provided: getNumberFromString, isSpView, getRandomInt, enablePassiveEventListeners, getOuterWidth, getComputedTranslateXY, setComputedTranslateXY, getTransitionendName, hasCssProperty, getQueryObject, getQueryParameters, getCookieParameters, getLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberFromString", function() { return getNumberFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpView", function() { return isSpView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enablePassiveEventListeners", function() { return enablePassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOuterWidth", function() { return getOuterWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedTranslateXY", function() { return getComputedTranslateXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setComputedTranslateXY", function() { return setComputedTranslateXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionendName", function() { return getTransitionendName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCssProperty", function() { return hasCssProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryObject", function() { return getQueryObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryParameters", function() { return getQueryParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookieParameters", function() { return getCookieParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalStorage", function() { return getLocalStorage; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_4__);





var getNumberFromString = function getNumberFromString(string) {
  return parseInt(string, 10);
};
var isSpView = function isSpView() {
  return matchMedia('(max-width: 768px)').matches;
};
/**
 * 乱数取得
 * min から max までの乱整数を返す関数
 * Math.round() を用いると非一様分布
 * @param {Number} min
 * @param {Number} max
 */

var getRandomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
/**
 * passive:trueが使えるかどうかを判定する
 */

var enablePassiveEventListeners = function enablePassiveEventListeners() {
  var result = false;
  var opts = Object.defineProperty && Object.defineProperty({}, 'passive', {
    get: function get() {
      result = true;
    }
  });
  document.addEventListener('test', function () {}, opts);
  return result;
};
/*
 * Outer Width With Margin
 */

var getOuterWidth = function getOuterWidth(el) {
  var width = el.offsetWidth;
  var style = getComputedStyle(el);
  width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
  return width;
};
var getComputedTranslateXY = function getComputedTranslateXY(dom) {
  var transArr = [];
  if (!window.getComputedStyle) return;
  var style = getComputedStyle(dom);
  var transform = style.transform || style.webkitTransform || style.mozTransform;
  var mat = transform.match(/^matrix3d\((.+)\)$/);
  if (mat) return parseFloat(mat[1].split(', ')[13]);
  mat = transform.match(/^matrix\((.+)\)$/);
  mat ? transArr.push(parseFloat(mat[1].split(', ')[4])) : 0;
  mat ? transArr.push(parseFloat(mat[1].split(', ')[5])) : 0;
  return transArr;
};
var setComputedTranslateXY = function setComputedTranslateXY(dom, position) {
  var style = getComputedStyle(dom);
  var transform = style.transform || style.webkitTransform || style.mozTransform;

  if (transform) {
    var mat = transform.match(/^matrix3d\((.+)\)$/);

    if (mat) {
      dom.style.transform = "matrix3d(".concat(position.x, "px,").concat(position.y, "px)");
      return;
    }

    mat = transform.match(/^matrix\((.+)\)$/);

    if (mat) {
      dom.style.transform = "matrix(".concat(position.x, "px,").concat(position.y, "px)");
    }
  } else {
    dom.style.transform = "matrix(".concat(position.x, "px,").concat(position.y, "px)");
    return;
  }
};
var getTransitionendName = function getTransitionendName() {
  var el = document.createElement('test');
  var transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd'
  };
  var key;

  for (key in transitions) {
    if (el.style[key] !== undefined) {
      return transitions[key];
    }
  }

  return false;
};
var hasCssProperty = function hasCssProperty(key) {
  var styles = getComputedStyle(document.body);
  var vendors = ['', 'ms', 'moz', 'webkit', 'o'];
  var result = false;
  var style;
  vendors.forEach(function (vendor) {
    if (result) return;

    if (vendor === '') {
      style = key;
    } else {
      style = key.replace(/^[a-z]/, key.charAt(0).toUpperCase());
    }

    result = styles.hasOwnProperty("".concat(vendor).concat(style));
  });
  return result;
};
var getQueryObject = function getQueryObject() {
  var object = {};
  var arrQueries = location.search.replace(/^\?/, '').split('&');
  arrQueries.forEach(function (query) {
    var key = query.split('=')[0];
    var val = query.split('=')[1];
    object[key] = val;
  });
  return object;
};
/**
 * [getQueryParameters description]
 *
 * location.search.substr(1)
 * element.getAttribute('href').replace(/^http(.*?)\?/, '')
 */

var getQueryParameters = function getQueryParameters(target) {
  var text = target;
  return text.split('&').reduce(function (obj, v) {
    var pair = v.split('=');
    obj[pair[0]] = pair[1];
    if (obj[pair[0]]) return obj;
  }, {});
};
/**
 * Cookieの値を全件返す
 * @returns {object}
 */

var getCookieParameters = function getCookieParameters() {
  return document.cookie.split("; ").reduce(function (obj, v) {
    var pair = v.split('=');
    obj[pair[0]] = pair[1];
    if (obj[pair[0]]) return obj;
  }, {});
};
/**
 * LocalStorageの値を全件返す
 * @returns {object}
 */

var getLocalStorage = function getLocalStorage() {
  var obj = {};

  for (var i = 0; i < localStorage.length; i += 1) {
    var key = localStorage.key(i);
    obj[key] = localStorage.getItem(key);
  }

  return obj;
};

/***/ }),

/***/ "./src/webpack/index.js":
/*!******************************!*\
  !*** ./src/webpack/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");
/* harmony import */ var core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_entries__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helper_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helper/util */ "./src/webpack/helper/util.js");









function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Index =
/*#__PURE__*/
function () {
  /**
   * constructor
   */
  function Index() {
    _classCallCheck(this, Index);

    // 閲覧履歴を格納するオブジェクト
    // this.linkHistory = getLocalStorage();
    this.linkHistory = Object(_helper_util__WEBPACK_IMPORTED_MODULE_8__["getCookieParameters"])(); // リンクのDOM

    this.$links = document.querySelectorAll('.link');
    this.$visitedArea = document.querySelector('.visited'); // 業務処理

    this.initialize(); // 既存リンクにイベント登録

    this.bind();
  }

  _createClass(Index, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      // 閲覧履歴からリンクを作成
      if (this.linkHistory) {
        this.linkHistory = this.constructor.convertStringValueToObjectValue(this.linkHistory);
        console.log(this.linkHistory);
        Object.entries(this.linkHistory).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          _this.$visitedArea.appendChild(_this.constructor.createLink(value));
        });
      }
    } // イベント登録

  }, {
    key: "bind",
    value: function bind() {
      // リンククリック時の処理
      _toConsumableArray(this.$links).forEach(function ($link) {
        $link.addEventListener('click', function (e) {
          var link = e.target;
          var key = link.dataset['id']; // 初回アクセスの場合

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
            document.cookie = "".concat(key, "=").concat(JSON.stringify({
              href: link.getAttribute('href'),
              title: link.textContent
            }));
          }
        });
      });
    } // Valueをオブジェクトに変換する

  }], [{
    key: "convertStringValueToObjectValue",
    value: function convertStringValueToObjectValue(obj) {
      var newObj = {};
      Object.entries(obj).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        newObj[key] = JSON.parse(value);
      });
      return newObj;
    } // リンク要素を作成する

  }, {
    key: "createLink",
    value: function createLink(_ref5) {
      var href = _ref5.href,
          title = _ref5.title;
      var node = document.createElement('a');
      node.setAttribute('href', href);
      node.setAttribute('class', 'link');
      node.appendChild(document.createTextNode(title));
      return node;
    }
  }]);

  return Index;
}();


window.addEventListener('DOMContentLoaded', function () {
  window.DEV_ENV_MODEL = window.DEV_ENV_MODEL || {};
  window.DEV_ENV_MODEL.INDEX = window.DEV_ENV_MODEL.INDEX || new Index();
});

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./src/webpack/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yoichiro.hirano/Documents/MyPlayground/20181126_faq_mock/src/webpack/index.js */"./src/webpack/index.js");


/***/ })

/******/ });