/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/create.ts":
/*!**********************!*\
  !*** ./js/create.ts ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ create
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Взято из 2020Q1 Live Coding for task Virtual Keyboard  https://www.youtube.com/watch?v=nuQW_cBLR6Q&t=2888s&ab_channel=RollingScopesSchool
// eslint-disable-next-line max-len
function create(el, classNames, child, parent) {
  var _element$classList;

  var element = null;

  try {
    element = document.createElement(el);
  } catch (error) {
    throw new Error('Something went wrong with creating HTMLElement');
  }

  if (classNames) (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classNames.split(' '))); // "class1 class2 class3"

  if (child && Array.isArray(child)) {
    child.forEach(function (childElement) {
      return childElement && element.append(childElement);
    });
  } else if (child && _typeof(child) === 'object') {
    element.append(child);
  } else if (child && typeof child === 'string') {
    element.innerHTML = child;
  }

  if (parent) {
    parent.append(element);
  }

  for (var _len = arguments.length, dataAttr = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    dataAttr[_key - 4] = arguments[_key];
  }

  if (dataAttr.length) {
    dataAttr.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attrName = _ref2[0],
          attrValue = _ref2[1];

      if (attrValue === '') {
        element.setAttribute(attrName, '');
      }

      if (attrName.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck/)) {
        element.setAttribute(attrName, attrValue);
      } else {
        element.dataset[attrName] = attrValue;
      }
    });
  }

  return element;
}

/***/ }),

/***/ "./js/game.ts":
/*!********************!*\
  !*** ./js/game.ts ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ "../node_modules/highlight.js/lib/core.js");
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "../node_modules/highlight.js/lib/languages/xml.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helping__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helping */ "./js/helping.ts");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table */ "./js/table.ts");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./levels */ "./js/levels.ts");
/* harmony import */ var _levelMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./levelMenu */ "./js/levelMenu.ts");
/* harmony import */ var _htmlCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./htmlCode */ "./js/htmlCode.ts");
/* harmony import */ var _helpTooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpTooltip */ "./js/helpTooltip.ts");








highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().registerLanguage("HTML", (highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_1___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  currentLevel: 1,
  usersNodeList: [],
  winNodeList: [],
  levelTimeout: 1000,
  winSelector: '',
  input: document.querySelector('.css-editor__input'),
  init: function init() {
    this.getCurrentLevel();
    _table__WEBPACK_IMPORTED_MODULE_3__.default.renderItemsToTable(_levels__WEBPACK_IMPORTED_MODULE_4__.levels[this.currentLevel - 1].items);
    _table__WEBPACK_IMPORTED_MODULE_3__.default.renderTaskDescription(_levels__WEBPACK_IMPORTED_MODULE_4__.levels[this.currentLevel - 1].title);
    _levelMenu__WEBPACK_IMPORTED_MODULE_5__.default.init();
    _levelMenu__WEBPACK_IMPORTED_MODULE_5__.default.setCurrentLevel(this.currentLevel);
    _htmlCode__WEBPACK_IMPORTED_MODULE_6__.default.renderMarkup();
    this.addStartAnimation();
    this.addEvents();
    this.setColorToCod();
    _helpTooltip__WEBPACK_IMPORTED_MODULE_7__.default.getItems();
  },
  setColorToCod: function setColorToCod() {
    highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().configure({
      useBR: true
    });
    document.querySelectorAll('.code').forEach(function (block) {
      highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().highlightBlock(block);
    });
  },
  getCurrentLevel: function getCurrentLevel() {
    var curLevel = localStorage.getItem('currentLevel');

    if (localStorage.getItem('currentLevel')) {
      this.currentLevel = curLevel;
    }
  },
  setCurrentLevel: function setCurrentLevel() {
    localStorage.setItem('currentLevel', "".concat(this.currentLevel));
  },
  changeCurrentLevel: function changeCurrentLevel(event) {
    var currentLevel = event.target.closest('a').querySelector('.menu-level__num').innerText;
    this.currentLevel = currentLevel;
    this.changeLevel();
    _levelMenu__WEBPACK_IMPORTED_MODULE_5__.default.toggleMenu();
  },
  changeLevel: function changeLevel() {
    this.setCurrentLevel();
    this.input.value = '';
    _levelMenu__WEBPACK_IMPORTED_MODULE_5__.default.setCurrentLevel(this.currentLevel);
    _table__WEBPACK_IMPORTED_MODULE_3__.default.renderItemsToTable(_levels__WEBPACK_IMPORTED_MODULE_4__.levels[this.currentLevel - 1].items);
    this.addStartAnimation();
    _table__WEBPACK_IMPORTED_MODULE_3__.default.renderTaskDescription(_levels__WEBPACK_IMPORTED_MODULE_4__.levels[this.currentLevel - 1].title);
    _htmlCode__WEBPACK_IMPORTED_MODULE_6__.default.renderMarkup();
    this.setColorToCod();
    _helpTooltip__WEBPACK_IMPORTED_MODULE_7__.default.getItems();
  },
  getUsersNodeList: function getUsersNodeList(event) {
    if (event.type === 'keydown' && event.keyCode === 13 || event.type === 'click') {
      var button = document.querySelector('.css-editor__button');
      var selector = this.input.value;
      button.classList.add('enterhit');

      button.onanimationend = function () {
        return button.classList.remove('enterhit');
      };

      try {
        var tableElem = document.querySelector('.table__items');
        this.usersNodeList = tableElem.querySelectorAll(selector);
        this.checkWinState();
      } catch (err) {
        console.log(err);
        _table__WEBPACK_IMPORTED_MODULE_3__.default.addFalseAnimation();
      }
    }
  },
  getWinNodeList: function getWinNodeList() {
    var winSelector = _levels__WEBPACK_IMPORTED_MODULE_4__.levels[this.currentLevel - 1].winSelector;
    var items = document.querySelector('.items');
    this.winSelector = winSelector;
    this.winNodeList = items.querySelectorAll(this.winSelector);
  },
  addStartAnimation: function addStartAnimation() {
    this.getWinNodeList();
    _table__WEBPACK_IMPORTED_MODULE_3__.default.toggleWinsItemsAnimation(this.winNodeList);
  },
  changeNextLevel: function changeNextLevel() {
    if (this.currentLevel == _levels__WEBPACK_IMPORTED_MODULE_4__.levels.length) return;
    this.currentLevel = +this.currentLevel + 1;
    this.changeLevel();
  },
  winGame: function winGame(help) {
    var _this = this;

    _levelMenu__WEBPACK_IMPORTED_MODULE_5__.default.setDoneLevels(+this.currentLevel, help);
    _levelMenu__WEBPACK_IMPORTED_MODULE_5__.default.addDoneStyle();
    alert('you are the best, man');
    this.currentLevel = 1;
    setTimeout(function () {
      return _this.changeLevel();
    }, this.levelTimeout);
  },
  checkWinGame: function checkWinGame(help) {
    var _this2 = this;

    if (this.currentLevel == _levels__WEBPACK_IMPORTED_MODULE_4__.levels.length) {
      this.winGame(help);
    } else {
      this.winLevel(help);
      setTimeout(function () {
        return _this2.changeNextLevel();
      }, this.levelTimeout);
    }
  },
  winLevel: function winLevel(help) {
    _table__WEBPACK_IMPORTED_MODULE_3__.default.toggleWinsItemsAnimation(this.winNodeList);
    _table__WEBPACK_IMPORTED_MODULE_3__.default.addWinAnimation(this.winNodeList);
    _levelMenu__WEBPACK_IMPORTED_MODULE_5__.default.setDoneLevels(+this.currentLevel, help);
    _levelMenu__WEBPACK_IMPORTED_MODULE_5__.default.addDoneStyle();
  },
  checkWinState: function checkWinState() {
    var _this3 = this;

    var items = document.querySelector('.items');
    var editor = document.querySelector('.editor');
    var isWin = true;

    if (this.usersNodeList.length === 0) {
      isWin = false;
      _table__WEBPACK_IMPORTED_MODULE_3__.default.addFalseAnimation();
    }

    this.usersNodeList.forEach(function (e, i) {
      if (e !== _this3.winNodeList[i]) {
        isWin = false;
      }
    });

    if (isWin) {
      this.checkWinGame();
    } else {
      this.usersNodeList.forEach(function (elem) {
        elem.classList.add('shake'); // eslint-disable-next-line no-param-reassign

        elem.onanimationend = function () {
          return elem.classList.remove('shake');
        };
      });
    }
  },
  getHelp: function getHelp() {
    var _this4 = this;

    var TABLE_ANIMATION_DELAY = 1000;
    var delay = 300;
    var helpButton = document.querySelector('#help-button');
    helpButton.disabled = true;
    _helping__WEBPACK_IMPORTED_MODULE_2__.default.help(this.winSelector, this.input, delay);
    setTimeout(function () {
      return _this4.checkWinGame(true);
    }, this.winSelector.length * delay); // eslint-disable-next-line max-len

    setTimeout(function () {
      helpButton.disabled = false;
    }, this.winSelector.length * delay + TABLE_ANIMATION_DELAY);
  },
  resetProgress: function resetProgress() {
    _levelMenu__WEBPACK_IMPORTED_MODULE_5__.default.resetProgress();
    this.currentLevel = 1;
    this.changeLevel();
    _levelMenu__WEBPACK_IMPORTED_MODULE_5__.default.toggleMenu();
  },
  addEvents: function addEvents() {
    var _this5 = this;

    document.querySelector('.menu-level__levels').addEventListener('click', function (e) {
      return _this5.changeCurrentLevel(e);
    });
    document.querySelector('.css-editor__button').addEventListener('click', function (e) {
      return _this5.getUsersNodeList(e);
    });
    document.addEventListener('keydown', function (e) {
      return _this5.getUsersNodeList(e);
    });
    document.querySelector('#help-button').addEventListener('click', function () {
      return _this5.getHelp();
    });
    document.querySelector('#reset-button').addEventListener('click', function () {
      return _this5.resetProgress();
    });
    document.querySelector('.menu-button').addEventListener('click', function () {
      return _levelMenu__WEBPACK_IMPORTED_MODULE_5__.default.toggleMenu();
    });
    document.addEventListener('mouseover', function (e) {
      return _helpTooltip__WEBPACK_IMPORTED_MODULE_7__.default.showTooltip(e);
    });
    document.addEventListener('mouseout', function (e) {
      return _helpTooltip__WEBPACK_IMPORTED_MODULE_7__.default.hideTooltip(e);
    });
  }
});

/***/ }),

/***/ "./js/helpTooltip.ts":
/*!***************************!*\
  !*** ./js/helpTooltip.ts ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
//появление подсказки взято с https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getItems: function getItems() {
    this.items = Array.from(document.querySelectorAll('.items *'));
    this.codeItems = Array.from(document.querySelectorAll('.markup__viewer div'));
    this.helper = document.querySelector('.helper');
  },
  showTooltip: function showTooltip(e) {
    if (e.target.closest('.items')) {
      this.showTableTooltip(e);
      return;
    }

    if (e.target.closest('.markup__viewer')) {
      this.showEditor(e);
    }
  },
  hideTooltip: function hideTooltip(e) {
    if (e.target.closest('.items')) {
      this.hideTableTooltip(e);
      return;
    }

    if (e.target.closest('.markup__viewer')) {
      this.hideEditor(e);
    }
  },
  showText: function showText(target) {
    this.helper.style.display = 'block';
    var coords = target.getBoundingClientRect(); // позиционируем подсказку над центром элемента

    var left = coords.left + target.offsetWidth - this.helper.offsetWidth / 2;
    if (left < 0) left = 0;
    var top = coords.top - this.helper.offsetHeight - 25;

    if (top < 0) {
      top = coords.top + this.helper.offsetHeight + 25;
    }

    this.helper.style.left = "".concat(left, "px");
    this.helper.style.top = "".concat(top, "px");
    var template = '';
    var elemTag = target.tagName.toLowerCase();
    var elemClass = Array.from(target.classList).filter(function (elem) {
      return elem !== 'open' && elem !== 'strobe';
    });
    var elemId = target.id;
    var elemData = target.getAttribute('for');
    if (elemTag) template += "<".concat(elemTag);
    if (elemClass.length > 0) template += " class=\"".concat(elemClass, "\"");
    if (elemId) template += " id=\"".concat(elemId, "\"");
    if (elemData) template += " for=\"".concat(elemData, "\"");
    if (elemTag) template += ">";
    if (elemTag) template += "</".concat(elemTag, ">");
    this.helper.innerText = template;
  },
  showTableTooltip: function showTableTooltip(e) {
    e.stopPropagation();
    if (e.target.classList.contains('items')) return;
    var target = e.target;
    var ind = this.items.indexOf(target);
    this.items[ind].dataset.hovered = true;
    this.codeItems[ind].classList.add('hovered');
    this.showText(target);
  },
  showEditor: function showEditor(e) {
    e.stopPropagation();
    if (e.target.classList.contains('markup__viewer')) return;
    var ind = this.codeItems.indexOf(e.target.closest('div'));

    if (ind !== -1) {
      this.items[ind].dataset.hovered = true;
      this.codeItems[ind].classList.add('hovered');
      this.showText(this.items[ind]);
    }
  },
  hideTableTooltip: function hideTableTooltip(e) {
    e.stopPropagation();
    if (e.target.classList.contains('items')) return;
    var ind = this.items.indexOf(e.target);
    this.items[ind].dataset.hovered = false;
    this.codeItems[ind].classList.remove('hovered');
    this.helper.style.display = 'none';
  },
  hideEditor: function hideEditor(e) {
    e.stopPropagation();
    if (e.target.classList.contains('markup__viewer')) return;
    var ind = this.codeItems.indexOf(e.target.closest('div'));

    if (ind !== -1) {
      this.items[ind].dataset.hovered = false;
      this.codeItems[ind].classList.remove('hovered');
      this.helper.style.display = 'none';
    }
  }
});

/***/ }),

/***/ "./js/helping.ts":
/*!***********************!*\
  !*** ./js/helping.ts ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  currentLetter: 0,
  help: function help(text, input, delay) {
    this.currentLetter = 0;
    this.text = text;
    this.input = input;
    this.delay = delay;
    this.write();
  },
  write: function write() {
    var _this = this;

    this.input.value += this.text.substr(this.currentLetter, 1);
    this.currentLetter += 1;

    if (this.currentLetter < this.text.length) {
      setTimeout(function () {
        return _this.write();
      }, this.delay);
    }
  }
});

/***/ }),

/***/ "./js/htmlCode.ts":
/*!************************!*\
  !*** ./js/htmlCode.ts ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./js/create.ts");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable no-restricted-syntax */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  markup: document.querySelector('.markup__viewer'),
  items: document.querySelector('.items').children,
  renderMarkup: function renderMarkup() {
    this.markup.innerHTML = '';

    var _iterator = _createForOfIteratorHelper(this.items),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var e = _step.value;
        var elem = this.renderElement(e);
        this.markup.appendChild(elem);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },
  renderElement: function renderElement(e) {
    var wrapper = (0,_create__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'code');
    var template = '';
    var elemTag = e.tagName.toLowerCase();
    var elemClass = Array.from(e.classList).filter(function (elem) {
      return elem !== 'open' && elem !== 'strobe';
    });
    var elemId = e.id;
    var elemData = e.getAttribute('for');
    if (elemTag) template += "<".concat(elemTag);
    if (elemClass.length > 0) template += " class=\"".concat(elemClass, "\"");
    if (elemId) template += " id=\"".concat(elemId, "\"");
    if (elemData) template += " for=\"".concat(elemData, "\"");
    if (elemTag) template += ">";
    wrapper.append(template);

    if (e.children.length > 0) {
      var _iterator2 = _createForOfIteratorHelper(e.children),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var elem = _step2.value;
          wrapper.appendChild(this.renderElement(elem));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    var closeTag = "</".concat(elemTag, ">");
    if (elemTag) wrapper.append(closeTag);
    return wrapper;
  }
});

/***/ }),

/***/ "./js/index.ts":
/*!*********************!*\
  !*** ./js/index.ts ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./js/game.ts");


document.addEventListener("DOMContentLoaded", function () {
  return _game__WEBPACK_IMPORTED_MODULE_1__.default.init();
});

/***/ }),

/***/ "./js/levelMenu.ts":
/*!*************************!*\
  !*** ./js/levelMenu.ts ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levels */ "./js/levels.ts");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "./js/create.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  doneLevels: [],
  helpLevels: [],
  isOpen: false,
  menu: document.querySelector('.menu-level__levels'),
  init: function init() {
    var _this = this;

    _levels__WEBPACK_IMPORTED_MODULE_0__.levels.forEach(function (level, i) {
      (0,_create__WEBPACK_IMPORTED_MODULE_1__.default)('a', 'menu-level__link link', [(0,_create__WEBPACK_IMPORTED_MODULE_1__.default)('span', 'menu-level__check-mark check-mark', null, null), (0,_create__WEBPACK_IMPORTED_MODULE_1__.default)('span', 'menu-level__num', "".concat(i + 1), null), (0,_create__WEBPACK_IMPORTED_MODULE_1__.default)('span', 'menu-level__selector', level.taskSelector, null)], _this.menu);
    });
    this.links = this.menu.querySelectorAll('.menu-level__link');
    this.addDoneStyle();
  },
  setDoneLevels: function setDoneLevels(num, help) {
    if (help) {
      if (!this.helpLevels.includes(num)) {
        this.helpLevels.push(num);
      }

      localStorage.setItem('help-levels', JSON.stringify(this.helpLevels));
    } else {
      if (!this.doneLevels.includes(num)) {
        this.doneLevels.push(num);
      }

      localStorage.setItem('done-levels', JSON.stringify(this.doneLevels));
    }
  },
  getDoneLevels: function getDoneLevels() {
    var localStorageList = JSON.parse(localStorage.getItem('done-levels'));
    var localStorageHelpList = JSON.parse(localStorage.getItem('help-levels'));
    this.doneLevels = localStorageList ? localStorageList : [];
    this.helpLevels = localStorageHelpList ? localStorageHelpList : [];
  },
  addDoneStyle: function addDoneStyle() {
    var _this2 = this;

    this.getDoneLevels();
    this.links.forEach(function (e) {
      var mark = e.querySelector('.menu-level__check-mark');
      var number = +e.querySelector('.menu-level__num').innerText;

      if (_this2.helpLevels.includes(number)) {
        mark.classList.add('check-mark__helped');
      }

      if (_this2.doneLevels.includes(number)) {
        mark.classList.add('check-mark__completed');
      }
    });
  },
  removeDoneStyle: function removeDoneStyle() {
    this.links.forEach(function (e) {
      var mark = e.querySelector('.menu-level__check-mark');
      mark.classList.remove('check-mark__completed');
      mark.classList.remove('check-mark__helped');
    });
  },
  setCurrentLevel: function setCurrentLevel(num) {
    this.menu.querySelectorAll('a').forEach(function (e) {
      e.classList.remove('link__current');
    });
    this.menu.querySelector("a:nth-child(".concat(num, ")")).classList.add('link__current');
  },
  resetProgress: function resetProgress() {
    localStorage.removeItem('done-levels');
    localStorage.removeItem('help-levels');
    this.doneLevels = [];
    this.helpLevels = [];
    this.removeDoneStyle();
  },
  toggleMenu: function toggleMenu() {
    var menu = document.querySelector('.aside');

    if (this.isOpen) {
      menu.classList.remove('menu_open');
      this.isOpen = false;
    } else {
      menu.classList.add('menu_open');
      this.isOpen = true;
    }
  }
});

/***/ }),

/***/ "./js/levels.ts":
/*!**********************!*\
  !*** ./js/levels.ts ***!
  \**********************/
/*! namespace exports */
/*! export levels [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "levels": () => /* binding */ levels
/* harmony export */ });
var levels = [{
  title: 'Select the plates',
  winSelector: 'plate',
  taskSelector: 'A',
  items: '<plate></plate><plate></plate>'
}, {
  title: 'Select the bento boxes',
  winSelector: 'bento',
  taskSelector: 'A',
  items: "\n      <bento></bento>\n      <plate></plate>\n      <bento></bento>"
}, {
  title: 'Select the fancy plate',
  winSelector: '#fancy',
  taskSelector: 'ID Selector',
  items: "<plate id=\"fancy\"></plate>\n      <plate></plate>\n      <bento></bento>"
}, {
  title: 'Select the apple on the plate',
  winSelector: 'plate apple',
  taskSelector: 'A&nbsp;&nbsp;B',
  items: "<bento></bento>\n      <plate>\n        <apple></apple>\n      </plate>\n      <apple></apple>"
}, {
  title: 'Select the pickle on the fancy plate',
  winSelector: '#fancy pickle',
  taskSelector: '#id&nbsp;&nbsp;A',
  items: "<bento>\n        <orange></orange>\n      </bento>\n      <plate id=\"fancy\">\n        <pickle></pickle>\n      </plate>\n      <plate>\n        <pickle></pickle>      \n      </plate>"
}, {
  title: 'Select the small apples',
  winSelector: '.small',
  taskSelector: '.classname',
  items: "<apple></apple>\n      <apple class=\"small\"></apple>\n      <plate>\n        <apple class=\"small\"></apple>\n      </plate>\n      <plate></plate>"
}, {
  title: 'Select the small oranges',
  winSelector: 'orange.small',
  taskSelector: 'A.className',
  items: "<apple></apple>\n      <apple class=\"small\"></apple>\n      <bento>\n        <orange class=\"small\"></orange>     \n      </bento>\n      <plate>\n        <orange></orange>     \n      </plate>\n      <plate>\n        <orange class=\"small\"></orange>     \n      </plate>"
}, {
  title: 'Select the small oranges in the bentos',
  winSelector: 'bento orange.small',
  taskSelector: 'Put your back into it!',
  items: "<bento>\n        <orange></orange>\n      </bento>\n      <orange class=\"small\"></orange>\n      <bento>\n        <orange class=\"small\"></orange>\n      </bento>\n      <bento>\n        <apple class=\"small\"></apple>\n      </bento>\n      <bento>\n        <orange class=\"small\"></orange>\n      </bento>"
}, {
  title: 'Select all the plates and bentos',
  winSelector: 'plate,bento',
  taskSelector: 'A, B',
  items: "<pickle class=\"small\"></pickle>\n      <pickle></pickle>\n      <plate>\n        <pickle></pickle>\n      </plate>\n      <bento>\n        <pickle></pickle>\n      </bento>\n      <plate>\n        <pickle></pickle>\n      </plate>\n      <pickle></pickle>\n      <pickle class=\"small\"></pickle>"
}, {
  title: 'Select all the things!',
  winSelector: '*',
  taskSelector: '*',
  items: "<apple></apple>\n      <plate>\n        <pickle></pickle>\n      </plate>\n      <apple class=\"small\"></apple>\n      <bento></bento>"
}, {
  title: 'Select everything on a plate',
  winSelector: 'plate *',
  taskSelector: 'A&nbsp;&nbsp;*',
  items: "<plate id=\"fancy\">\n        <orange class=\"small\"></orange>      \n      </plate>\n      <plate>\n        <pickle></pickle>\n      </plate>\n      <apple class=\"small\"></apple>\n      <plate>\n        <apple></apple>\n      </plate>"
}, {
  title: 'Select every apple that\'s next to a plate',
  winSelector: 'plate + apple',
  taskSelector: 'A + B',
  items: "<bento>\n        <apple class=\"small\"></apple>\n      </bento>\n      <plate></plate>\n      <apple class=\"small\"></apple>\n      <plate></plate>\n      <apple></apple>\n      <apple class=\"small\"></apple>\n      <apple class=\"small\"></apple>"
}, {
  title: 'Select the pickles beside the bento',
  winSelector: 'bento ~ pickle',
  taskSelector: 'A ~ B',
  items: "<pickle></pickle>\n      <bento>\n        <orange class=\"small\"></orange>\n      </bento>\n      <pickle class=\"small\"></pickle>\n      <pickle></pickle>\n      <plate>\n        <pickle></pickle>\n      </plate>\n      <plate>\n        <pickle class=\"small\"></pickle>\n      </plate>"
}, {
  title: 'Select the apple directly on a plate',
  winSelector: 'plate > apple',
  taskSelector: 'A > B&nbsp',
  items: "<plate>\n        <bento>\n          <apple></apple>\n        </bento>\n      </plate>\n      <plate>\n        <apple></apple>\n      </plate>\n      <plate></plate>\n      <apple></apple>\n      <apple class=\"small\"></apple>"
}, {
  title: 'Select the top orange',
  winSelector: 'plate :first-child',
  taskSelector: ':first-child',
  items: "<bento></bento>\n      <plate></plate>\n      <plate>\n        <orange></orange>\n        <orange></orange>\n        <orange></orange>\n      </plate>\n      <pickle></pickle>"
}, {
  title: 'Select the apple and the pickle on the plates',
  winSelector: 'plate :only-child',
  taskSelector: ':only-child',
  items: "<plate>\n        <apple></apple>\n      </plate>\n      <plate>\n        <pickle></pickle>\n      </plate>\n      <bento>\n        <pickle></pickle>\n      </bento>\n      <plate>\n        <orange class=\"small\"></orange>\n        <orange></orange>\n      </plate>\n      <pickle class=\"small\"></pickle>"
}, {
  title: 'Select the small apple and the pickle',
  winSelector: '.small:last-child',
  taskSelector: ':last-child',
  items: "<plate id=\"fancy\">\n        <apple class=\"small\"></apple>\n      </plate>\n      <plate></plate>\n      <plate>\n        <orange class=\"small\"></orange>\n        <orange></orange>    \n      </plate>\n      <pickle class=\"small\"></pickle>"
}, {
  title: 'Select the 3rd plate',
  winSelector: ':nth-child(3)',
  taskSelector: ':nth-child(A)',
  items: "<plate></plate>\n    <plate></plate>\n    <plate></plate>\n    <plate id=\"fancy\"></plate>"
}, {
  title: 'Select the 1st bento',
  winSelector: 'bento:nth-last-child(3)',
  taskSelector: ':nth-last-child(A)',
  items: "<plate></plate>\n    <bento></bento>\n    <plate>\n      <orange></orange>\n      <orange></orange>\n      <orange></orange>\n    </plate>\n    <bento></bento>"
}, {
  title: 'Select first apple',
  winSelector: 'apple:first-of-type',
  taskSelector: ':first-of-type',
  items: "<orange class=\"small\"></orange>\n    <apple></apple>\n    <apple class=\"small\"></apple>\n    <apple></apple>\n    <apple class=\"small\"></apple>\n    <plate>\n      <orange class=\"small\"></orange>\n      <orange></orange>\n    </plate>"
}, {
  title: 'Select all even plates',
  winSelector: 'plate:nth-of-type(even)',
  taskSelector: ':nth-of-type(A)',
  items: "<plate></plate>\n    <plate></plate>\n    <plate></plate>\n    <plate></plate>\n    <plate id=\"fancy\"></plate>\n    <plate></plate>"
}, {
  title: 'Select every 2nd plate, starting from the 3rd',
  winSelector: 'plate:nth-of-type(2n+3)',
  taskSelector: ':nth-of-type(An+B)',
  items: "<plate></plate>\n    <plate>\n      <pickle class=\"small\"></pickle>\n    </plate>\n    <plate>\n      <apple class=\"small\"></apple>\n    </plate>\n    <plate></plate>\n    <plate>\n      <apple></apple>\n    </plate>\n    <plate></plate>"
}, {
  title: 'Select the apple on the middle plate',
  winSelector: 'apple:only-of-type',
  taskSelector: ':only-of-type',
  items: "<plate>\n      <apple class=\"small\"></apple>\n      <apple></apple>\n    </plate>\n    <plate>\n      <apple class=\"small\"></apple>  \n    </plate>\n    <plate>\n      <pickle></pickle>  \n    </plate>"
}]; // eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./js/table.ts":
/*!*********************!*\
  !*** ./js/table.ts ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  renderItemsToTable: function renderItemsToTable(items) {
    var table = document.querySelector('.items');
    table.innerHTML = items;
    this.setTableWidth();
  },
  renderTaskDescription: function renderTaskDescription(title) {
    var taskDescription = document.querySelector('.task-description');
    taskDescription.innerHTML = title;
  },
  toggleWinsItemsAnimation: function toggleWinsItemsAnimation(list) {
    list.forEach(function (e) {
      e.classList.toggle('strobe');
    });
  },
  addWinAnimation: function addWinAnimation(list) {
    list.forEach(function (e) {
      e.classList.add('win');
    });
  },
  addFalseAnimation: function addFalseAnimation() {
    var editor = document.querySelector('.editor');
    editor.classList.add('shake');

    editor.onanimationend = function () {
      return editor.classList.remove('shake');
    };
  },
  setTableWidth: function setTableWidth() {
    var tableSurface = document.querySelector('.table__surface');
    var tableEdge = document.querySelector('.table__edge');

    var _getComputedStyle = getComputedStyle(tableSurface),
        width = _getComputedStyle.width;

    tableEdge.style.width = width;
  }
});

/***/ }),

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["../node_modules/@babel/polyfill/lib/index.js","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_highlight_js_lib_core_js-node_m-3b4b9e"],
/******/ 			["./js/index.ts","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_highlight_js_lib_core_js-node_m-3b4b9e"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=main.js.map
