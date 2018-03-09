(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["meer"] = factory();
	else
		root["meer"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Affix/index.vue":
/*!************************************!*\
  !*** ./components/Affix/index.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/Affix/index.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_6616a448_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-6616a448","hasScoped":true,"buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6616a448\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./components/Affix/index.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-6616a448","scoped":true,"sourceMap":true}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6616a448\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./components/Affix/index.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6616a448"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_6616a448_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_6616a448_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/Affix/index.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./components/Breadcrumb/index.js":
/*!****************************************!*\
  !*** ./components/Breadcrumb/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  name: 'Breadcrumb',
  props: {
    split: {
      type: String,
      default: '/'
    },
    tag: {
      type: String,
      default: 'div'
    },
    pathColor: {
      type: String,
      default: 'red'
    },
    splitColor: {
      type: String,
      default: 'skyblue'
    }
  },
  render: function render(h) {
    var _this = this;

    // notice: this.$router.currentRoute.path is not useful. willnot change after change route.
    if (!this.$route) return console.error('食用Breadcrumb前请配合食用vue-router');
    var currentPath = this.$route.path;
    var currentPathArr = [];
    currentPath.split('/').map(function (path) {
      if (path) currentPathArr.push(path);
    });
    var renderPath = currentPathArr.map(function (path) {
      return h('span', [h('span', {
        style: {
          color: _this.pathColor
        }
      }, [path]), h('span', {
        style: {
          color: _this.splitColor
        }
      }, ['/'])]);
    });
    return h(this.tag, renderPath);
  }
};
exports.default = _default;

/***/ }),

/***/ "./components/Button/index.vue":
/*!*************************************!*\
  !*** ./components/Button/index.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!./index.js */ "./node_modules/babel-loader/lib/index.js!./components/Button/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b2f97e0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-0b2f97e0","hasScoped":true,"buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0b2f97e0\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./components/Button/index.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-0b2f97e0","scoped":true,"sourceMap":true}!./index.css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b2f97e0\",\"scoped\":true,\"sourceMap\":true}!./components/Button/index.css")
}
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0b2f97e0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b2f97e0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b2f97e0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/Button/index.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./components/Col/index.js":
/*!*********************************!*\
  !*** ./components/Col/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  name: 'Col',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: String,
      default: '0'
    },
    offset: {
      type: String,
      default: '0'
    }
  },
  computed: {
    style: function style() {
      var _ref;

      return _ref = {
        display: 'inline-flex'
      }, _defineProperty(_ref, "display", '-webkit-inline-flex'), _defineProperty(_ref, 'flex-flow', 'row wrap'), _defineProperty(_ref, 'justify-content', 'flex-start'), _defineProperty(_ref, "width", "".concat(100 / 24 * this.span, "%")), _defineProperty(_ref, "marginLeft", "calc(100%/24*".concat(this.offset, ")")), _ref;
    }
  },
  render: function render(h) {
    return h(this.tag, {
      style: this.style
    }, this.$slots.default);
  }
};
exports.default = _default;

/***/ }),

/***/ "./components/Dropdown/index.js":
/*!**************************************!*\
  !*** ./components/Dropdown/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  name: 'Dropdown',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    action: {
      type: String,
      default: 'click'
    },
    title: {
      type: String,
      default: 'Dropdown title'
    },
    initStatus: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      // avoid use this.initStatus direct, use data or computed instead of
      sessionStatus: this.initStatus
    };
  },
  render: function render(h) {
    var _this = this;

    var handleClick = function handleClick(e) {
      _this.sessionStatus = !_this.sessionStatus;
    };

    var renderChildChild = [this.title];

    if (this.sessionStatus) {
      renderChildChild.push(h('div', [this.$slots.default]));
    }

    var renderChild = [h('div', renderChildChild)];
    var event = {
      on: {}
    };
    this.action === 'click' && (event.on.click = handleClick);
    this.action === 'hover' && (event.on.mouseenter = event.on.mouseleave = handleClick);
    return h(this.tag, event, renderChild);
  }
};
exports.default = _default;

/***/ }),

/***/ "./components/Liner/index.vue":
/*!************************************!*\
  !*** ./components/Liner/index.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/Liner/index.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fda0014_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-7fda0014","hasScoped":true,"buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./index.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7fda0014\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./components/Liner/index.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-7fda0014","scoped":true,"sourceMap":true}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7fda0014\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./components/Liner/index.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7fda0014"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fda0014_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7fda0014_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/Liner/index.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./components/Menu/index.vue":
/*!***********************************!*\
  !*** ./components/Menu/index.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./index.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/Menu/index.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-2e2342bd","scoped":true,"sourceMap":true}!./index.css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2e2342bd\",\"scoped\":true,\"sourceMap\":true}!./components/Menu/index.css")
}
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2e2342bd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/Menu/index.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./components/Menu/item.vue":
/*!**********************************!*\
  !*** ./components/Menu/item.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./item.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/Menu/item.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-49297578","scoped":true,"sourceMap":true}!./item.css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49297578\",\"scoped\":true,\"sourceMap\":true}!./components/Menu/item.css")
}
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-49297578"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/Menu/item.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./components/Menu/menu.vue":
/*!**********************************!*\
  !*** ./components/Menu/menu.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./menu.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/Menu/menu.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-4205ec78","scoped":true,"sourceMap":true}!./menu.css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4205ec78\",\"scoped\":true,\"sourceMap\":true}!./components/Menu/menu.css")
}
/* script */


/* template */
var __vue_render__, __vue_static_render_fns__
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4205ec78"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  __vue_render__,
  __vue_static_render_fns__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "components/Menu/menu.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./components/Row/index.js":
/*!*********************************!*\
  !*** ./components/Row/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  name: 'Row',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    style: function style() {
      var _ref;

      return _ref = {
        display: 'flex'
      }, _defineProperty(_ref, "display", '-webkit-flex'), _defineProperty(_ref, 'flex-flow', 'row wrap'), _defineProperty(_ref, "width", '100%'), _ref;
    }
  },
  render: function render(h) {
    return h(this.tag, {
      style: this.style
    }, this.$slots.default);
  }
};
exports.default = _default;

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(__webpack_require__(/*! ./Button/index.vue */ "./components/Button/index.vue"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ./Liner/index.vue */ "./components/Liner/index.vue"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ./Row/index.js */ "./components/Row/index.js"));

var _index4 = _interopRequireDefault(__webpack_require__(/*! ./Col/index.js */ "./components/Col/index.js"));

var _index5 = _interopRequireDefault(__webpack_require__(/*! ./Affix/index.vue */ "./components/Affix/index.vue"));

var _index6 = _interopRequireDefault(__webpack_require__(/*! ./Breadcrumb/index.js */ "./components/Breadcrumb/index.js"));

var _index7 = _interopRequireDefault(__webpack_require__(/*! ./Dropdown/index.js */ "./components/Dropdown/index.js"));

var _index8 = _interopRequireDefault(__webpack_require__(/*! ./Menu/index.vue */ "./components/Menu/index.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.mixin({
    components: {
      Buttoner: _index.default,
      Liner: _index2.default,
      Rower: _index3.default,
      Coler: _index4.default,
      Affixer: _index5.default,
      Breadcrumber: _index6.default,
      Dropdowner: _index7.default,
      'Menuer-group': _index8.default,
      Menuer: _index8.default.menu,
      'Menuer-item': _index8.default.item
    }
  });
}

var _default = {
  install: install
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./components/Button/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./components/Button/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Button',

  data() {
    return {
      disabled: false,
      childText: ''
    };
  },

  computed: {
    buttonClass() {
      return ['meer-button', 'meer-button-' + this.type, 'meer-button-size-' + this.size];
    }

  },

  mounted() {
    this.childText = this.text;
  },

  methods: {
    formatSecond() {
      if (!this.second && this.second !== 0 || this.second < 0) return false;
      return true;
    },

    beforeCountDown() {
      this.disabled = true;
      this.childText = this.second;
      this.buttonClass.push('meer-button-count-down');
    },

    afterCountDown() {
      this.disabled = false;
      this.childText = this.text;
      this.buttonClass.pop();
    },

    outerClick() {
      if (!this.formatSecond() || this.disabled) return;
      this.beforeCountDown();
      this.countDownTime = setInterval(() => {
        this.childText -= 1;

        if (this.childText === -1) {
          clearInterval(this.countDownTime);
          this.afterCountDown();
        }
      }, 1000);
    }

  },

  beforeDestroy() {
    if (this.countDownTime) {
      clearInterval(this.countDownTime);
    }
  },

  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'normal'
    },
    click: {
      type: Function,
      default: e => {// console.log(e)
      }
    },
    size: {
      type: String,
      default: 'default'
    },
    second: {
      type: Number,
      default: -1
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/Affix/index.vue":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/Affix/index.vue ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Affix',

  data() {
    return {
      affixStyle: {}
    };
  },

  mounted() {
    const win = this.win();
    const self = this.$el;
    const offsetLeft = self.offsetLeft;
    const offsetTop = self.offsetTop;
    win.addEventListener('scroll', e => {
      if (win.scrollY > parseInt(this.offsetTop)) {
        this.affixStyle = {
          position: 'fixed',
          left: offsetLeft + 'px',
          top: offsetTop + 'px'
        };
      } else {
        this.affixStyle = {};
      }
    });
  },

  props: {
    offsetTop: {
      type: String,
      default: '0'
    },
    win: {
      type: Function,
      default: () => window
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/Liner/index.vue":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/Liner/index.vue ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Liner',
  props: {
    width: {
      type: String,
      default: '100%'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/Menu/index.vue":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/Menu/index.vue ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.vue */ "./components/Menu/item.vue");
/* harmony import */ var _menu_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.vue */ "./components/Menu/menu.vue");
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Menu-group',
  item: _item_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  menu: _menu_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  props: {
    direction: {
      type: String,
      default: 'horizon'
    }
  },

  render(h) {
    return h('div', [this.$slots.default]);
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/Menu/item.vue":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/Menu/item.vue ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Menu-item',
  props: {
    title: {
      type: String,
      default: 'menu-item'
    },
    click: {
      type: Function,
      default: e => {}
    },
    path: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      show: true,
      direction: this.$parent.direction
    };
  },

  render(h) {
    const styles = {
      'horizon': {
        normalItem: {
          normalItem: true
        }
      },
      'vertical': {
        normalItem: {
          normalItem: true
        }
      }
    }[this.direction];
    return h('div', {
      on: {
        click: e => {
          ;
          this.path !== '' && this.$router.push(this.path);
          return this.click(e);
        }
      }
    }, [h('div', {
      class: styles.normalItem
    }, [this.title])]);
  }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/Menu/menu.vue":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./components/Menu/menu.vue ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Menu',
  props: {
    title: {
      type: String,
      default: 'menu-title'
    },
    type: {
      type: String,
      default: 'click'
    },
    disabled: {
      type: String,
      default: 'false'
    },
    click: {
      type: Function,
      default: e => {}
    }
  },

  data() {
    return {
      show: false,
      fixVerticakItemsHoverTop: '-20px',
      direction: this.$parent.direction
    };
  },

  render(h) {
    const styles = {
      'horizon': {
        button: {
          menuButtonHorizon: this.disabled !== 'true',
          disabledMenuButtonHorizon: this.disabled === 'true'
        },
        menuLine: {
          menuLineHorizon: true
        },
        menuItems: {
          menuItemsContainHorizon: true
        }
      },
      'vertical': {
        button: {
          verticalButton: this.disabled !== 'true',
          disabledVerticalButton: this.disabled === 'true'
        },
        menuLine: {
          verticalMenuLine: true
        },
        menuItems: {
          verticalMenuItemsClick: this.type === 'click',
          verticalMenuItemsHover: this.type === 'hover'
        },
        fixVerticakItemsHoverTop: {
          top: this.type === 'hover' ? this.fixVerticakItemsHoverTop : null
        }
      }
    }[this.direction];
    const menuItems = [];

    if (this.show) {
      menuItems.push(h('div', {
        class: styles.menuItems
      }, [this.$slots.default]));
    }

    return h('button', {
      class: styles.button,
      style: {
        cursor: this.disabled !== 'true' ? 'pointer' : 'not-allowed'
      },
      attrs: {
        disabled: this.disabled === 'true' ? true : false
      },
      on: {
        click: e => {
          e.preventDefault();
          this.show = !this.show;
          return this.click(e);
        },
        mouseenter: e => {
          if (this.type !== 'hover') return;
          console.log(e); // this.fixVerticakItemsHoverTop = -e.target.offsetHeight + 'px'

          this.show = true;
        },
        mouseleave: e => {
          this.show = false;
        }
      }
    }, [h('div', [this.title]), h('div', {
      class: styles.menuLine,
      style: styles.fixVerticakItemsHoverTop
    }, menuItems)]);
  }

});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b2f97e0\",\"scoped\":true,\"sourceMap\":true}!./components/Button/index.css":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-0b2f97e0","scoped":true,"sourceMap":true}!./components/Button/index.css ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.meer-button[data-v-0b2f97e0]{\n    font-size: 14px;\n    width: auto;\n    padding: 0 15px;\n    line-height: 1.5;\n    text-align: center;\n    font-weight: 400;\n    border-radius: 4px;\n    transition: all .5s;\n    outline:none;\n    cursor: pointer;\n}\n.meer-button-normal[data-v-0b2f97e0]{\n    background: #1890ff;\n    border-color: #1890ff;\n    color: white;\n}\n.meer-button-normal[data-v-0b2f97e0]:hover, .meer-button-normal[data-v-0b2f97e0]:focus{\n    opacity: .8;\n}\n.meer-button-simple[data-v-0b2f97e0]{\n    border: 1px solid #d9d9d9;\n}\n.meer-button-simple[data-v-0b2f97e0]:hover, .meer-button-simple[data-v-0b2f97e0]:focus{\n    color: #1890ff;\n    border: 1px solid #1890ff;\n}\n.meer-button-dotted[data-v-0b2f97e0]{\n    border: 1px dotted #d9d9d9;\n}\n.meer-button-dotted[data-v-0b2f97e0]:hover, .meer-button-dotted[data-v-0b2f97e0]:focus{\n    border: 1px dotted #1890ff;\n    color: #1890ff;\n}\n.meer-button-danger[data-v-0b2f97e0]{\n    color: red;\n}\n.meer-button-danger[data-v-0b2f97e0]:hover,.meer-button-danger[data-v-0b2f97e0]:focus{\n    color: white;\n    background: red;\n    border: 1px solid red;\n}\n.meer-button-size-large[data-v-0b2f97e0]{\n    font-size: 18px;\n    width: auto;\n    padding: 0 20px;\n    line-height: 2;\n    font-weight: 800;\n}\n.meer-button-size-small[data-v-0b2f97e0]{\n    font-size: 10px;\n    width: auto;\n    padding: 0 10px;\n    line-height: 1;\n    font-weight: 200;\n}\n.meer-button-count-down[data-v-0b2f97e0]{\n    opacity: .5;\n}", "", {"version":3,"sources":["/Users/mallow/Code/npm/meer/components/Button/index.css"],"names":[],"mappings":";AAAA;IACI,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,oBAAoB;IACpB,aAAa;IACb,gBAAgB;CACnB;AACD;IACI,oBAAoB;IACpB,sBAAsB;IACtB,aAAa;CAChB;AACD;IACI,YAAY;CACf;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,eAAe;IACf,0BAA0B;CAC7B;AACD;IACI,2BAA2B;CAC9B;AACD;IACI,2BAA2B;IAC3B,eAAe;CAClB;AACD;IACI,WAAW;CACd;AACD;IACI,aAAa;IACb,gBAAgB;IAChB,sBAAsB;CACzB;AACD;IACI,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,iBAAiB;CACpB;AACD;IACI,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,iBAAiB;CACpB;AACD;IACI,YAAY;CACf","file":"index.css","sourcesContent":[".meer-button{\n    font-size: 14px;\n    width: auto;\n    padding: 0 15px;\n    line-height: 1.5;\n    text-align: center;\n    font-weight: 400;\n    border-radius: 4px;\n    transition: all .5s;\n    outline:none;\n    cursor: pointer;\n}\n.meer-button-normal{\n    background: #1890ff;\n    border-color: #1890ff;\n    color: white;\n}\n.meer-button-normal:hover, .meer-button-normal:focus{\n    opacity: .8;\n}\n.meer-button-simple{\n    border: 1px solid #d9d9d9;\n}\n.meer-button-simple:hover, .meer-button-simple:focus{\n    color: #1890ff;\n    border: 1px solid #1890ff;\n}\n.meer-button-dotted{\n    border: 1px dotted #d9d9d9;\n}\n.meer-button-dotted:hover, .meer-button-dotted:focus{\n    border: 1px dotted #1890ff;\n    color: #1890ff;\n}\n.meer-button-danger{\n    color: red;\n}\n.meer-button-danger:hover,.meer-button-danger:focus{\n    color: white;\n    background: red;\n    border: 1px solid red;\n}\n.meer-button-size-large{\n    font-size: 18px;\n    width: auto;\n    padding: 0 20px;\n    line-height: 2;\n    font-weight: 800;\n}\n.meer-button-size-small{\n    font-size: 10px;\n    width: auto;\n    padding: 0 10px;\n    line-height: 1;\n    font-weight: 200;\n}\n.meer-button-count-down{\n    opacity: .5;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2e2342bd\",\"scoped\":true,\"sourceMap\":true}!./components/Menu/index.css":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-2e2342bd","scoped":true,"sourceMap":true}!./components/Menu/index.css ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"index.css","sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4205ec78\",\"scoped\":true,\"sourceMap\":true}!./components/Menu/menu.css":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-4205ec78","scoped":true,"sourceMap":true}!./components/Menu/menu.css ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.menuButtonHorizon[data-v-4205ec78], .disabledMenuButtonHorizon[data-v-4205ec78]{\n    display: inline-block;\n    text-align: center;\n    border: none;\n    padding: 0;\n    outline: none;\n    font-size: 20px\n}\n.menuButtonHorizon[data-v-4205ec78]:focus,\n .menuButtonHorizon[data-v-4205ec78]:hover,\n .verticalButton[data-v-4205ec78]:focus,\n .verticalButton[data-v-4205ec78]:hover{\n    color: skyblue;\n    background: transparent;\n    border-bottom: 2px solid skyblue;\n}\n.menuItemsContainHorizon[data-v-4205ec78]{\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.menuLineHorizon[data-v-4205ec78],.verticalMenuLine[data-v-4205ec78]{\n    position: relative;\n}\n.verticalButton[data-v-4205ec78], .disabledVerticalButton[data-v-4205ec78]{\n    display: block;\n    border: none;\n    padding: 0;\n    text-align: left;\n    outline: none;\n    font-size: 20px;\n}\n.verticalMenuItemsClick[data-v-4205ec78]{\n    display: block;\n}\n.verticalMenuItemsHover[data-v-4205ec78]{\n    position: absolute;\n    left: 100%;\n    width: 300px;\n}", "", {"version":3,"sources":["/Users/mallow/Code/npm/meer/components/Menu/menu.css"],"names":[],"mappings":";AAAA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,WAAW;IACX,cAAc;IACd,eAAe;CAClB;AACD;;;;IAII,eAAe;IACf,wBAAwB;IACxB,iCAAiC;CACpC;AACD;IACI,mBAAmB;IACnB,OAAO;IACP,QAAQ;CACX;AACD;IACI,mBAAmB;CACtB;AACD;IACI,eAAe;IACf,aAAa;IACb,WAAW;IACX,iBAAiB;IACjB,cAAc;IACd,gBAAgB;CACnB;AACD;IACI,eAAe;CAClB;AACD;IACI,mBAAmB;IACnB,WAAW;IACX,aAAa;CAChB","file":"menu.css","sourcesContent":[".menuButtonHorizon, .disabledMenuButtonHorizon{\n    display: inline-block;\n    text-align: center;\n    border: none;\n    padding: 0;\n    outline: none;\n    font-size: 20px\n}\n.menuButtonHorizon:focus,\n .menuButtonHorizon:hover,\n .verticalButton:focus,\n .verticalButton:hover{\n    color: skyblue;\n    background: transparent;\n    border-bottom: 2px solid skyblue;\n}\n.menuItemsContainHorizon{\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.menuLineHorizon,.verticalMenuLine{\n    position: relative;\n}\n.verticalButton, .disabledVerticalButton{\n    display: block;\n    border: none;\n    padding: 0;\n    text-align: left;\n    outline: none;\n    font-size: 20px;\n}\n.verticalMenuItemsClick{\n    display: block;\n}\n.verticalMenuItemsHover{\n    position: absolute;\n    left: 100%;\n    width: 300px;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49297578\",\"scoped\":true,\"sourceMap\":true}!./components/Menu/item.css":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-49297578","scoped":true,"sourceMap":true}!./components/Menu/item.css ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.normalItem[data-v-49297578]{\n    color: black;\n}", "", {"version":3,"sources":["/Users/mallow/Code/npm/meer/components/Menu/item.css"],"names":[],"mappings":";AAAA;IACI,aAAa;CAChB","file":"item.css","sourcesContent":[".normalItem{\n    color: black;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6616a448\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./components/Affix/index.vue":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-6616a448","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./components/Affix/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"index.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7fda0014\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./components/Liner/index.vue":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-7fda0014","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./components/Liner/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.meer-line[data-v-7fda0014]{\n    background: #d9d9d9;\n    height: 2px;\n}\n", "", {"version":3,"sources":["/Users/mallow/Code/npm/meer/components/Liner/components/Liner/index.vue"],"names":[],"mappings":";AAeA;IACA,oBAAA;IACA,YAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"meer-line\" :style=\"{'width': width}\" />\n</template>\n<script>\n    export default {\n        name: 'Liner',\n        props: {\n            width: {\n                type: String,\n                default: '100%'\n            }\n        }\n    }\n</script>\n<style scoped>\n    .meer-line{\n        background: #d9d9d9;\n        height: 2px;\n    }\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/component-normalizer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/component-normalizer.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0b2f97e0\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./components/Button/index.vue":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0b2f97e0","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./components/Button/index.vue ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", { on: { click: _vm.outerClick } }, [
    _c("button", { class: _vm.buttonClass, on: { click: _vm.click } }, [
      _c("span", [_vm._v(_vm._s(_vm.childText))])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6616a448\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./components/Affix/index.vue":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6616a448","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./components/Affix/index.vue ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { style: _vm.affixStyle, attrs: { id: "Affix" } },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7fda0014\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./components/Liner/index.vue":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7fda0014","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./components/Liner/index.vue ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "meer-line", style: { width: _vm.width } })
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b2f97e0\",\"scoped\":true,\"sourceMap\":true}!./components/Button/index.css":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-0b2f97e0","scoped":true,"sourceMap":true}!./components/Button/index.css ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-0b2f97e0","scoped":true,"sourceMap":true}!./index.css */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b2f97e0\",\"scoped\":true,\"sourceMap\":true}!./components/Button/index.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1af4d814", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2e2342bd\",\"scoped\":true,\"sourceMap\":true}!./components/Menu/index.css":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-2e2342bd","scoped":true,"sourceMap":true}!./components/Menu/index.css ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-2e2342bd","scoped":true,"sourceMap":true}!./index.css */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2e2342bd\",\"scoped\":true,\"sourceMap\":true}!./components/Menu/index.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3c9bada8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4205ec78\",\"scoped\":true,\"sourceMap\":true}!./components/Menu/menu.css":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-4205ec78","scoped":true,"sourceMap":true}!./components/Menu/menu.css ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-4205ec78","scoped":true,"sourceMap":true}!./menu.css */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4205ec78\",\"scoped\":true,\"sourceMap\":true}!./components/Menu/menu.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("bf8fe70c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49297578\",\"scoped\":true,\"sourceMap\":true}!./components/Menu/item.css":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-49297578","scoped":true,"sourceMap":true}!./components/Menu/item.css ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-49297578","scoped":true,"sourceMap":true}!./item.css */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49297578\",\"scoped\":true,\"sourceMap\":true}!./components/Menu/item.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("a04d977a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6616a448\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./components/Affix/index.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-6616a448","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./components/Affix/index.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-6616a448","scoped":true,"sourceMap":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6616a448\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./components/Affix/index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5a3b15a6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7fda0014\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./components/Liner/index.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-7fda0014","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./components/Liner/index.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-7fda0014","scoped":true,"sourceMap":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7fda0014\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./components/Liner/index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3088e4e8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9tZWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lZXIvLi9jb21wb25lbnRzL0FmZml4L2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9tZWVyLy4vY29tcG9uZW50cy9CcmVhZGNydW1iL2luZGV4LmpzIiwid2VicGFjazovL21lZXIvLi9jb21wb25lbnRzL0J1dHRvbi9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vbWVlci8uL2NvbXBvbmVudHMvQ29sL2luZGV4LmpzIiwid2VicGFjazovL21lZXIvLi9jb21wb25lbnRzL0Ryb3Bkb3duL2luZGV4LmpzIiwid2VicGFjazovL21lZXIvLi9jb21wb25lbnRzL0xpbmVyL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9tZWVyLy4vY29tcG9uZW50cy9NZW51L2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9tZWVyLy4vY29tcG9uZW50cy9NZW51L2l0ZW0udnVlIiwid2VicGFjazovL21lZXIvLi9jb21wb25lbnRzL01lbnUvbWVudS52dWUiLCJ3ZWJwYWNrOi8vbWVlci8uL2NvbXBvbmVudHMvUm93L2luZGV4LmpzIiwid2VicGFjazovL21lZXIvLi9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL21lZXIvLi9jb21wb25lbnRzL0J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZWVyL2NvbXBvbmVudHMvQWZmaXgvaW5kZXgudnVlIiwid2VicGFjazovL21lZXIvY29tcG9uZW50cy9MaW5lci9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vbWVlci9jb21wb25lbnRzL01lbnUvaW5kZXgudnVlIiwid2VicGFjazovL21lZXIvY29tcG9uZW50cy9NZW51L2l0ZW0udnVlIiwid2VicGFjazovL21lZXIvY29tcG9uZW50cy9NZW51L21lbnUudnVlIiwid2VicGFjazovL21lZXIvLi9jb21wb25lbnRzL0J1dHRvbi9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbWVlci8uL2NvbXBvbmVudHMvTWVudS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbWVlci8uL2NvbXBvbmVudHMvTWVudS9tZW51LmNzcyIsIndlYnBhY2s6Ly9tZWVyLy4vY29tcG9uZW50cy9NZW51L2l0ZW0uY3NzIiwid2VicGFjazovL21lZXIvLi9jb21wb25lbnRzL0FmZml4L2luZGV4LnZ1ZT9hMmVkIiwid2VicGFjazovL21lZXIvLi9jb21wb25lbnRzL0xpbmVyL2luZGV4LnZ1ZT8zYzhmIiwid2VicGFjazovL21lZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vbWVlci8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovL21lZXIvLi9jb21wb25lbnRzL0J1dHRvbi9pbmRleC52dWU/N2Q1MSIsIndlYnBhY2s6Ly9tZWVyLy4vY29tcG9uZW50cy9BZmZpeC9pbmRleC52dWU/MzJiMyIsIndlYnBhY2s6Ly9tZWVyLy4vY29tcG9uZW50cy9MaW5lci9pbmRleC52dWU/Nzc3MSIsIndlYnBhY2s6Ly9tZWVyLy4vY29tcG9uZW50cy9CdXR0b24vaW5kZXguY3NzP2YzN2MiLCJ3ZWJwYWNrOi8vbWVlci8uL2NvbXBvbmVudHMvTWVudS9pbmRleC5jc3M/M2RmMCIsIndlYnBhY2s6Ly9tZWVyLy4vY29tcG9uZW50cy9NZW51L21lbnUuY3NzP2U2NjkiLCJ3ZWJwYWNrOi8vbWVlci8uL2NvbXBvbmVudHMvTWVudS9pdGVtLmNzcz9hMmYzIiwid2VicGFjazovL21lZXIvLi9jb21wb25lbnRzL0FmZml4L2luZGV4LnZ1ZT9lNDUxIiwid2VicGFjazovL21lZXIvLi9jb21wb25lbnRzL0xpbmVyL2luZGV4LnZ1ZT8zYjhjIiwid2VicGFjazovL21lZXIvLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovL21lZXIvLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIl0sIm5hbWVzIjpbIm5hbWUiLCJwcm9wcyIsInNwbGl0IiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJ0YWciLCJwYXRoQ29sb3IiLCJzcGxpdENvbG9yIiwicmVuZGVyIiwiaCIsIiRyb3V0ZSIsImNvbnNvbGUiLCJlcnJvciIsImN1cnJlbnRQYXRoIiwicGF0aCIsImN1cnJlbnRQYXRoQXJyIiwibWFwIiwicHVzaCIsInJlbmRlclBhdGgiLCJzdHlsZSIsImNvbG9yIiwic3BhbiIsIm9mZnNldCIsImNvbXB1dGVkIiwiZGlzcGxheSIsIiRzbG90cyIsImFjdGlvbiIsInRpdGxlIiwiaW5pdFN0YXR1cyIsIkJvb2xlYW4iLCJkYXRhIiwic2Vzc2lvblN0YXR1cyIsImhhbmRsZUNsaWNrIiwiZSIsInJlbmRlckNoaWxkQ2hpbGQiLCJyZW5kZXJDaGlsZCIsImV2ZW50Iiwib24iLCJjbGljayIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwiaW5zdGFsbCIsIlZ1ZSIsIm1peGluIiwiY29tcG9uZW50cyIsIkJ1dHRvbmVyIiwiTGluZXIiLCJSb3dlciIsIkNvbGVyIiwiQWZmaXhlciIsIkJyZWFkY3J1bWJlciIsIkRyb3Bkb3duZXIiLCJNZW51ZXIiLCJtZW51IiwiaXRlbSIsImRpc2FibGVkIiwiY2hpbGRUZXh0IiwiYnV0dG9uQ2xhc3MiLCJzaXplIiwibW91bnRlZCIsInRleHQiLCJtZXRob2RzIiwiZm9ybWF0U2Vjb25kIiwic2Vjb25kIiwiYmVmb3JlQ291bnREb3duIiwiYWZ0ZXJDb3VudERvd24iLCJwb3AiLCJvdXRlckNsaWNrIiwiY291bnREb3duVGltZSIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImJlZm9yZURlc3Ryb3kiLCJGdW5jdGlvbiIsIk51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsOGpCQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytOO0FBQy9OO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFhQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQzlDZTtBQUNYQSxRQUFNLFlBREs7QUFFWEMsU0FBTztBQUNIQyxXQUFPO0FBQ0hDLFlBQU1DLE1BREg7QUFFSEMsZUFBUztBQUZOLEtBREo7QUFLSEMsU0FBSztBQUNESCxZQUFNQyxNQURMO0FBRURDLGVBQVM7QUFGUixLQUxGO0FBU0hFLGVBQVc7QUFDUEosWUFBTUMsTUFEQztBQUVQQyxlQUFTO0FBRkYsS0FUUjtBQWFIRyxnQkFBWTtBQUNSTCxZQUFNQyxNQURFO0FBRVJDLGVBQVM7QUFGRDtBQWJULEdBRkk7QUFvQlhJLFFBcEJXLGtCQW9CSkMsQ0FwQkksRUFvQkQ7QUFBQTs7QUFDTjtBQUNBLFFBQUcsQ0FBQyxLQUFLQyxNQUFULEVBQWlCLE9BQU9DLFFBQVFDLEtBQVIsQ0FBYyw4QkFBZCxDQUFQO0FBQ2pCLFFBQU1DLGNBQWMsS0FBS0gsTUFBTCxDQUFZSSxJQUFoQztBQUNBLFFBQU1DLGlCQUFpQixFQUF2QjtBQUNBRixnQkFBWVosS0FBWixDQUFrQixHQUFsQixFQUF1QmUsR0FBdkIsQ0FBNEIsZ0JBQVE7QUFDaEMsVUFBR0YsSUFBSCxFQUFTQyxlQUFlRSxJQUFmLENBQW9CSCxJQUFwQjtBQUNaLEtBRkQ7QUFHQSxRQUFNSSxhQUFhSCxlQUFlQyxHQUFmLENBQW9CLGdCQUFRO0FBQzNDLGFBQU9QLEVBQ0gsTUFERyxFQUVILENBQ0lBLEVBQUUsTUFBRixFQUFTO0FBQ0xVLGVBQU87QUFDSEMsaUJBQU8sTUFBS2Q7QUFEVDtBQURGLE9BQVQsRUFJRyxDQUFDUSxJQUFELENBSkgsQ0FESixFQU1JTCxFQUFFLE1BQUYsRUFBUztBQUNMVSxlQUFPO0FBQ0hDLGlCQUFPLE1BQUtiO0FBRFQ7QUFERixPQUFULEVBSUcsQ0FBQyxHQUFELENBSkgsQ0FOSixDQUZHLENBQVA7QUFlSCxLQWhCa0IsQ0FBbkI7QUFpQkEsV0FBT0UsRUFBRSxLQUFLSixHQUFQLEVBQVlhLFVBQVosQ0FBUDtBQUNIO0FBOUNVLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZjtBQUFBO0FBQ0E7QUFDQTtBQUNBLGtjQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUMrTjtBQUMvTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBYUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUM3Q2U7QUFDWG5CLFFBQU0sS0FESztBQUVYQyxTQUFPO0FBQ0hLLFNBQUs7QUFDREgsWUFBTUMsTUFETDtBQUVEQyxlQUFTO0FBRlIsS0FERjtBQUtIaUIsVUFBTTtBQUNGbkIsWUFBTUMsTUFESjtBQUVGQyxlQUFTO0FBRlAsS0FMSDtBQVNIa0IsWUFBUTtBQUNKcEIsWUFBTUMsTUFERjtBQUVKQyxlQUFTO0FBRkw7QUFUTCxHQUZJO0FBZ0JYbUIsWUFBVTtBQUNOSixTQURNLG1CQUNFO0FBQUE7O0FBQ0o7QUFDSUssaUJBQVM7QUFEYiwwQ0FFYSxxQkFGYix5QkFHSSxXQUhKLEVBR2lCLFVBSGpCLHlCQUlJLGlCQUpKLEVBSXVCLFlBSnZCLDRDQUtlLE1BQUksRUFBTCxHQUFTLEtBQUtILElBTDVCLG9FQU1nQyxLQUFLQyxNQU5yQztBQVFIO0FBVkssR0FoQkM7QUE0QlhkLFFBNUJXLGtCQTRCSkMsQ0E1QkksRUE0QkQ7QUFDTixXQUFPQSxFQUNILEtBQUtKLEdBREYsRUFFSDtBQUNJYyxhQUFPLEtBQUtBO0FBRGhCLEtBRkcsRUFLSCxLQUFLTSxNQUFMLENBQVlyQixPQUxULENBQVA7QUFPSDtBQXBDVSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VDQUE7QUFDWEwsUUFBTSxVQURLO0FBRVhDLFNBQU87QUFDSEssU0FBSztBQUNESCxZQUFNQyxNQURMO0FBRURDLGVBQVM7QUFGUixLQURGO0FBS0hzQixZQUFRO0FBQ0p4QixZQUFNQyxNQURGO0FBRUpDLGVBQVM7QUFGTCxLQUxMO0FBU0h1QixXQUFPO0FBQ0h6QixZQUFNQyxNQURIO0FBRUhDLGVBQVM7QUFGTixLQVRKO0FBYUh3QixnQkFBWTtBQUNSMUIsWUFBTTJCLE9BREU7QUFFUnpCLGVBQVM7QUFGRDtBQWJULEdBRkk7QUFvQlgwQixNQXBCVyxrQkFvQko7QUFDSCxXQUFPO0FBQ0g7QUFDQUMscUJBQWUsS0FBS0g7QUFGakIsS0FBUDtBQUlILEdBekJVO0FBMEJYcEIsUUExQlcsa0JBMEJKQyxDQTFCSSxFQTBCRDtBQUFBOztBQUNOLFFBQU11QixjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCLFlBQUtGLGFBQUwsR0FBcUIsQ0FBQyxNQUFLQSxhQUEzQjtBQUNILEtBRkQ7O0FBR0EsUUFBTUcsbUJBQW1CLENBQUMsS0FBS1AsS0FBTixDQUF6Qjs7QUFDQSxRQUFHLEtBQUtJLGFBQVIsRUFBdUI7QUFDbkJHLHVCQUFpQmpCLElBQWpCLENBQXNCUixFQUFFLEtBQUYsRUFBUyxDQUFDLEtBQUtnQixNQUFMLENBQVlyQixPQUFiLENBQVQsQ0FBdEI7QUFDSDs7QUFDRCxRQUFNK0IsY0FBYyxDQUFDMUIsRUFBRSxLQUFGLEVBQVF5QixnQkFBUixDQUFELENBQXBCO0FBQ0EsUUFBTUUsUUFBUTtBQUFDQyxVQUFJO0FBQUwsS0FBZDtBQUNFLFNBQUtYLE1BQUwsS0FBZ0IsT0FBakIsS0FBOEJVLE1BQU1DLEVBQU4sQ0FBU0MsS0FBVCxHQUFpQk4sV0FBL0M7QUFDQyxTQUFLTixNQUFMLEtBQWdCLE9BQWpCLEtBQThCVSxNQUFNQyxFQUFOLENBQVNFLFVBQVQsR0FBc0JILE1BQU1DLEVBQU4sQ0FBU0csVUFBVCxHQUFzQlIsV0FBMUU7QUFDRCxXQUFPdkIsRUFDSCxLQUFLSixHQURGLEVBRUgrQixLQUZHLEVBR0hELFdBSEcsQ0FBUDtBQUtIO0FBM0NVLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZjtBQUFBO0FBQ0E7QUFDQTtBQUNBLDhqQkFBc0w7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrTjtBQUMvTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBYUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozt3Q0M5Q0E7QUFBQTtBQUNBO0FBQ0E7QUFDQSxnY0FBc0w7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQWFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7d0NDOUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsOGJBQXNMO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFhQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O3dDQzlDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLDhiQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBYUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUM5Q2U7QUFDWHBDLFFBQU0sS0FESztBQUVYQyxTQUFPO0FBQ0hLLFNBQUs7QUFDREgsWUFBTUMsTUFETDtBQUVEQyxlQUFTO0FBRlI7QUFERixHQUZJO0FBUVhtQixZQUFVO0FBQ05KLFNBRE0sbUJBQ0U7QUFBQTs7QUFDSjtBQUNJSyxpQkFBUztBQURiLDBDQUVhLGNBRmIseUJBR0ksV0FISixFQUdpQixVQUhqQixrQ0FJVyxNQUpYO0FBTUg7QUFSSyxHQVJDO0FBa0JYaEIsUUFsQlcsa0JBa0JKQyxDQWxCSSxFQWtCRDtBQUNSLFdBQU9BLEVBQ0wsS0FBS0osR0FEQSxFQUVMO0FBQ0ljLGFBQU8sS0FBS0E7QUFEaEIsS0FGSyxFQUtMLEtBQUtNLE1BQUwsQ0FBWXJCLE9BTFAsQ0FBUDtBQU1EO0FBekJVLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWY7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQSxTQUFTcUMsT0FBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDbkJBLE1BQUlDLEtBQUosQ0FBVTtBQUNOQyxnQkFBWTtBQUNSQyw4QkFEUTtBQUVSQyw0QkFGUTtBQUdSQyw0QkFIUTtBQUlSQyw0QkFKUTtBQUtSQyw4QkFMUTtBQU1SQyxtQ0FOUTtBQU9SQyxpQ0FQUTtBQVFSLHFDQVJRO0FBU1JDLGNBQVEsZ0JBQVVDLElBVFY7QUFVUixxQkFBZSxnQkFBVUM7QUFWakI7QUFETixHQUFWO0FBY0g7O2VBRWM7QUFBQ2I7QUFBRCxDOzs7Ozs7Ozs7Ozs7OztBQ3pCZiwrREFBZTtBQUNYMUMsUUFBTSxRQURLOztBQUVYK0IsU0FBTztBQUNILFdBQU87QUFDSHlCLGdCQUFVLEtBRFA7QUFFSEMsaUJBQVc7QUFGUixLQUFQO0FBSUgsR0FQVTs7QUFRWGpDLFlBQVU7QUFDTmtDLGtCQUFjO0FBQ1YsYUFBTyxDQUNILGFBREcsRUFFSCxpQkFBaUIsS0FBS3ZELElBRm5CLEVBR0gsc0JBQXNCLEtBQUt3RCxJQUh4QixDQUFQO0FBS0g7O0FBUEssR0FSQzs7QUFpQlhDLFlBQVU7QUFDTixTQUFLSCxTQUFMLEdBQWlCLEtBQUtJLElBQXRCO0FBQ0gsR0FuQlU7O0FBb0JYQyxXQUFTO0FBQ0xDLG1CQUFlO0FBQ1gsVUFBSSxDQUFDLEtBQUtDLE1BQU4sSUFBZ0IsS0FBS0EsTUFBTCxLQUFnQixDQUFqQyxJQUF1QyxLQUFLQSxNQUFMLEdBQWMsQ0FBeEQsRUFBMkQsT0FBTyxLQUFQO0FBQzNELGFBQU8sSUFBUDtBQUNILEtBSkk7O0FBS0xDLHNCQUFrQjtBQUNkLFdBQUtULFFBQUwsR0FBaUIsSUFBakI7QUFDQSxXQUFLQyxTQUFMLEdBQWlCLEtBQUtPLE1BQXRCO0FBQ0EsV0FBS04sV0FBTCxDQUFpQnhDLElBQWpCLENBQXNCLHdCQUF0QjtBQUNILEtBVEk7O0FBVUxnRCxxQkFBaUI7QUFDYixXQUFLVixRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQixLQUFLSSxJQUF0QjtBQUNBLFdBQUtILFdBQUwsQ0FBaUJTLEdBQWpCO0FBQ0gsS0FkSTs7QUFlTEMsaUJBQWE7QUFDVCxVQUFHLENBQUMsS0FBS0wsWUFBTCxFQUFELElBQXdCLEtBQUtQLFFBQWhDLEVBQTBDO0FBQzFDLFdBQUtTLGVBQUw7QUFDQSxXQUFLSSxhQUFMLEdBQXFCQyxZQUFZLE1BQU07QUFDbkMsYUFBS2IsU0FBTCxJQUFrQixDQUFsQjs7QUFDQSxZQUFHLEtBQUtBLFNBQUwsS0FBbUIsQ0FBQyxDQUF2QixFQUEwQjtBQUN0QmMsd0JBQWMsS0FBS0YsYUFBbkI7QUFDQSxlQUFLSCxjQUFMO0FBQ0g7QUFDSixPQU5vQixFQU1sQixJQU5rQixDQUFyQjtBQU9IOztBQXpCSSxHQXBCRTs7QUErQ1hNLGtCQUFnQjtBQUNaLFFBQUcsS0FBS0gsYUFBUixFQUF1QjtBQUNuQkUsb0JBQWMsS0FBS0YsYUFBbkI7QUFDSDtBQUNKLEdBbkRVOztBQW9EWHBFLFNBQU87QUFDSDRELFVBQU07QUFDRjFELFlBQU1DLE1BREo7QUFFRkMsZUFBUztBQUZQLEtBREg7QUFLSEYsVUFBTTtBQUNGQSxZQUFNQyxNQURKO0FBRUZDLGVBQVM7QUFGUCxLQUxIO0FBU0hrQyxXQUFPO0FBQ0hwQyxZQUFNc0UsUUFESDtBQUVIcEUsZUFBVTZCLENBQUQsSUFBTyxDQUNaO0FBQ0g7QUFKRSxLQVRKO0FBZUh5QixVQUFNO0FBQ0Z4RCxZQUFNQyxNQURKO0FBRUZDLGVBQVM7QUFGUCxLQWZIO0FBbUJIMkQsWUFBUTtBQUNKN0QsWUFBTXVFLE1BREY7QUFFSnJFLGVBQVMsQ0FBQztBQUZOO0FBbkJMO0FBcERJLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTUE7UUFFQTs7U0FDQTs7a0JBR0E7QUFGQTtBQUdBOztZQUNBO3FCQUNBO3NCQUNBOzRCQUNBOzJCQUNBO3dDQUNBO2tEQUNBOztvQkFFQTs2QkFDQTsyQkFFQTtBQUpBO2FBS0E7MEJBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7WUFHQTtlQUVBO0FBSEE7O1lBS0E7cUJBSUE7QUFMQTtBQUxBO0FBeEJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtRQUVBOzs7WUFHQTtlQUdBO0FBSkE7QUFEQTtBQUZBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7UUFFQTtBQUNBO0FBQ0E7OztZQUdBO2VBR0E7QUFKQTtBQURBOztZQU1BO1dBQ0EsRUFDQSxPQUNBLGFBR0E7QUFDQTs7QUFqQkEsRzs7Ozs7Ozs7Ozs7Ozs7QUNIQTtRQUVBOzs7WUFHQTtlQUVBO0FBSEE7O1lBS0E7cUJBRUE7QUFIQTs7WUFLQTtlQUdBO0FBSkE7QUFUQTs7U0FjQTs7WUFFQTs4QkFFQTtBQUhBO0FBSUE7O1lBQ0E7Ozs7c0JBTUE7QUFIQTtBQURBOzs7c0JBU0E7QUFIQTtBQURBO0FBTkEsV0FXQTthQUVBOztvQkFHQTs7cURBQ0E7NEJBQ0E7QUFHQTtBQU5BO0FBREEsS0FGQTtvQkFXQTtBQURBLGFBR0E7QUFDQTs7QUFqREEsRzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtRQUVBOzs7WUFHQTtlQUVBO0FBSEE7O1lBS0E7ZUFFQTtBQUhBOztZQUtBO2VBRUE7QUFIQTs7WUFLQTtxQkFHQTtBQUpBO0FBYkE7O1NBa0JBOztZQUVBO2dDQUNBOzhCQUVBO0FBSkE7QUFLQTs7WUFDQTs7OzsrQ0FJQTt1REFFQTtBQUhBOzsyQkFNQTtBQUZBOzttQ0FNQTtBQUhBO0FBUkE7Ozs0Q0FjQTtvREFFQTtBQUhBOzs0QkFNQTtBQUZBOztnREFJQTtnREFFQTtBQUhBOzt1RUFPQTtBQUhBO0FBWkE7QUFiQSxXQThCQTtzQkFDQTs7bUJBQ0E7dUJBRUE7c0JBR0E7QUFGQSxPQUZBLGVBT0E7QUFDQTs7YUFFQTtvQkFFQTs7dURBR0E7QUFGQTs7b0RBS0E7QUFGQTs7b0JBSUE7WUFDQTs0QkFDQTs0QkFDQTtBQUNBO3lCQUNBO3FDQUNBO3NCQUNBLElBQ0E7O3NCQUNBO0FBQ0E7eUJBQ0E7c0JBQ0E7QUFHQTtBQWhCQTtBQVJBLEtBRkEsRUEyQkEsZ0JBQ0E7b0JBRUE7b0JBQ0E7QUFGQSxPQUtBO0FBQ0E7O0FBekdBLEc7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7O0FBR0E7QUFDQSx5REFBMEQsc0JBQXNCLGtCQUFrQixzQkFBc0IsdUJBQXVCLHlCQUF5Qix1QkFBdUIseUJBQXlCLDBCQUEwQixtQkFBbUIsc0JBQXNCLEdBQUcsdUNBQXVDLDBCQUEwQiw0QkFBNEIsbUJBQW1CLEdBQUcseUZBQXlGLGtCQUFrQixHQUFHLHVDQUF1QyxnQ0FBZ0MsR0FBRyx5RkFBeUYscUJBQXFCLGdDQUFnQyxHQUFHLHVDQUF1QyxpQ0FBaUMsR0FBRyx5RkFBeUYsaUNBQWlDLHFCQUFxQixHQUFHLHVDQUF1QyxpQkFBaUIsR0FBRyx3RkFBd0YsbUJBQW1CLHNCQUFzQiw0QkFBNEIsR0FBRywyQ0FBMkMsc0JBQXNCLGtCQUFrQixzQkFBc0IscUJBQXFCLHVCQUF1QixHQUFHLDJDQUEyQyxzQkFBc0Isa0JBQWtCLHNCQUFzQixxQkFBcUIsdUJBQXVCLEdBQUcsMkNBQTJDLGtCQUFrQixHQUFHLFFBQVEsMEdBQTBHLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUseURBQXlELHNCQUFzQixrQkFBa0Isc0JBQXNCLHVCQUF1Qix5QkFBeUIsdUJBQXVCLHlCQUF5QiwwQkFBMEIsbUJBQW1CLHNCQUFzQixHQUFHLHNCQUFzQiwwQkFBMEIsNEJBQTRCLG1CQUFtQixHQUFHLHVEQUF1RCxrQkFBa0IsR0FBRyxzQkFBc0IsZ0NBQWdDLEdBQUcsdURBQXVELHFCQUFxQixnQ0FBZ0MsR0FBRyxzQkFBc0IsaUNBQWlDLEdBQUcsdURBQXVELGlDQUFpQyxxQkFBcUIsR0FBRyxzQkFBc0IsaUJBQWlCLEdBQUcsc0RBQXNELG1CQUFtQixzQkFBc0IsNEJBQTRCLEdBQUcsMEJBQTBCLHNCQUFzQixrQkFBa0Isc0JBQXNCLHFCQUFxQix1QkFBdUIsR0FBRywwQkFBMEIsc0JBQXNCLGtCQUFrQixzQkFBc0IscUJBQXFCLHVCQUF1QixHQUFHLDBCQUEwQixrQkFBa0IsR0FBRyxtQkFBbUI7O0FBRTk1Rzs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSxpQ0FBa0MscUZBQXFGOztBQUV2SDs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSw0R0FBNkcsNEJBQTRCLHlCQUF5QixtQkFBbUIsaUJBQWlCLG9CQUFvQix3QkFBd0IsNktBQTZLLHFCQUFxQiw4QkFBOEIsdUNBQXVDLEdBQUcsNENBQTRDLHlCQUF5QixhQUFhLGNBQWMsR0FBRyx1RUFBdUUseUJBQXlCLEdBQUcsNkVBQTZFLHFCQUFxQixtQkFBbUIsaUJBQWlCLHVCQUF1QixvQkFBb0Isc0JBQXNCLEdBQUcsMkNBQTJDLHFCQUFxQixHQUFHLDJDQUEyQyx5QkFBeUIsaUJBQWlCLG1CQUFtQixHQUFHLFFBQVEsdUdBQXVHLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxRQUFRLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLDJGQUEyRiw0QkFBNEIseUJBQXlCLG1CQUFtQixpQkFBaUIsb0JBQW9CLHdCQUF3Qix5R0FBeUcscUJBQXFCLDhCQUE4Qix1Q0FBdUMsR0FBRywyQkFBMkIseUJBQXlCLGFBQWEsY0FBYyxHQUFHLHFDQUFxQyx5QkFBeUIsR0FBRywyQ0FBMkMscUJBQXFCLG1CQUFtQixpQkFBaUIsdUJBQXVCLG9CQUFvQixzQkFBc0IsR0FBRywwQkFBMEIscUJBQXFCLEdBQUcsMEJBQTBCLHlCQUF5QixpQkFBaUIsbUJBQW1CLEdBQUcsbUJBQW1COztBQUVoM0U7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0Esd0RBQXlELG1CQUFtQixHQUFHLFFBQVEsdUdBQXVHLEtBQUssVUFBVSx3REFBd0QsbUJBQW1CLEdBQUcsbUJBQW1COztBQUU5Uzs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSwySEFBNEgscUZBQXFGOztBQUVqTjs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSx1REFBd0QsMEJBQTBCLGtCQUFrQixHQUFHLFVBQVUsMEhBQTBILEtBQUssV0FBVyxVQUFVLCtGQUErRixlQUFlLGtEQUFrRCwwQ0FBMEMsc0JBQXNCLCtFQUErRSxXQUFXLE9BQU8sNENBQTRDLDhCQUE4QixzQkFBc0IsT0FBTyw2QkFBNkI7O0FBRTFzQjs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0I7QUFDbkQsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYzs7QUFFbEU7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsTUFBTSx3QkFBd0IsRUFBRTtBQUNyRCxrQkFBa0IsOEJBQThCLG1CQUFtQixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ1IsYTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssZ0NBQWdDLGNBQWMsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUTtBQUNSLGE7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUMsbUJBQW1CLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ1E7QUFDUixhOzs7Ozs7Ozs7OztBQ1RBOztBQUVBO0FBQ0EsaWFBQWdOO0FBQ2hOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0EsWTs7Ozs7Ozs7Ozs7QUNWQTs7QUFFQTtBQUNBLCtaQUFnTjtBQUNoTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLFk7Ozs7Ozs7Ozs7O0FDVkE7O0FBRUE7QUFDQSw2WkFBZ047QUFDaE47QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQSxZOzs7Ozs7Ozs7OztBQ1ZBOztBQUVBO0FBQ0EsNlpBQWdOO0FBQ2hOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0EsWTs7Ozs7Ozs7Ozs7QUNWQTs7QUFFQTtBQUNBLGdpQkFBZ047QUFDaE47QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQSxZOzs7Ozs7Ozs7OztBQ1ZBOztBQUVBO0FBQ0EsZ2lCQUFnTjtBQUNoTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLFk7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxpQkFBaUI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQSxZQUFZLHVCQUF1QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3TkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHdCQUF3QjtBQUMzRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtZWVyLmRldmVsb3BtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWVlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtZWVyXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb21wb25lbnRzL2luZGV4LmpzXCIpO1xuIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChjb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02NjE2YTQ0OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xuaW1wb3J0IHtyZW5kZXIgYXMgX192dWVfcmVuZGVyX18sIHN0YXRpY1JlbmRlckZucyBhcyBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19ffSBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02NjE2YTQ0OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5kZXgudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTY2MTZhNDQ4XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9BZmZpeC9pbmRleC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjYxNmE0NDhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02NjE2YTQ0OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0JyZWFkY3J1bWInLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHNwbGl0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnLydcbiAgICAgICAgfSxcbiAgICAgICAgdGFnOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnZGl2J1xuICAgICAgICB9LFxuICAgICAgICBwYXRoQ29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdyZWQnXG4gICAgICAgIH0sXG4gICAgICAgIHNwbGl0Q29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdza3libHVlJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXIoaCkge1xuICAgICAgICAvLyBub3RpY2U6IHRoaXMuJHJvdXRlci5jdXJyZW50Um91dGUucGF0aCBpcyBub3QgdXNlZnVsLiB3aWxsbm90IGNoYW5nZSBhZnRlciBjaGFuZ2Ugcm91dGUuXG4gICAgICAgIGlmKCF0aGlzLiRyb3V0ZSkgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ+mjn+eUqEJyZWFkY3J1bWLliY3or7fphY3lkIjpo5/nlKh2dWUtcm91dGVyJylcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSB0aGlzLiRyb3V0ZS5wYXRoXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoQXJyID0gW11cbiAgICAgICAgY3VycmVudFBhdGguc3BsaXQoJy8nKS5tYXAoIHBhdGggPT4ge1xuICAgICAgICAgICAgaWYocGF0aCkgY3VycmVudFBhdGhBcnIucHVzaChwYXRoKVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCByZW5kZXJQYXRoID0gY3VycmVudFBhdGhBcnIubWFwKCBwYXRoID0+IHtcbiAgICAgICAgICAgIHJldHVybiBoKFxuICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICBbICAgXG4gICAgICAgICAgICAgICAgICAgIGgoJ3NwYW4nLHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMucGF0aENvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIFtwYXRoXSksXG4gICAgICAgICAgICAgICAgICAgIGgoJ3NwYW4nLHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuc3BsaXRDb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBbJy8nXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBoKHRoaXMudGFnLCByZW5kZXJQYXRoKVxuICAgIH1cbn0iLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTBiMmY5N2UwXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4vaW5kZXguY3NzXCIpXG59XG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuL2luZGV4LmpzXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi9pbmRleC5qc1wiLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMGIyZjk3ZTBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0wYjJmOTdlMFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvQnV0dG9uL2luZGV4LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wYjJmOTdlMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTBiMmY5N2UwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQ29sJyxcbiAgICBwcm9wczoge1xuICAgICAgICB0YWc6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdkaXYnXG4gICAgICAgIH0sXG4gICAgICAgIHNwYW46IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcwJ1xuICAgICAgICB9LFxuICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcwJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBzdHlsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnLXdlYmtpdC1pbmxpbmUtZmxleCcsXG4gICAgICAgICAgICAgICAgJ2ZsZXgtZmxvdyc6ICdyb3cgd3JhcCcsXG4gICAgICAgICAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdmbGV4LXN0YXJ0JyxcbiAgICAgICAgICAgICAgICB3aWR0aDogYCR7KDEwMC8yNCkqdGhpcy5zcGFufSVgLFxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IGBjYWxjKDEwMCUvMjQqJHt0aGlzLm9mZnNldH0pYFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXIoaCkge1xuICAgICAgICByZXR1cm4gaChcbiAgICAgICAgICAgIHRoaXMudGFnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0eWxlOiB0aGlzLnN0eWxlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy4kc2xvdHMuZGVmYXVsdFxuICAgICAgICApXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnRHJvcGRvd24nLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHRhZzoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2RpdidcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnY2xpY2snXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnRHJvcGRvd24gdGl0bGUnXG4gICAgICAgIH0sXG4gICAgICAgIGluaXRTdGF0dXM6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gYXZvaWQgdXNlIHRoaXMuaW5pdFN0YXR1cyBkaXJlY3QsIHVzZSBkYXRhIG9yIGNvbXB1dGVkIGluc3RlYWQgb2ZcbiAgICAgICAgICAgIHNlc3Npb25TdGF0dXM6IHRoaXMuaW5pdFN0YXR1c1xuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXIoaCkge1xuICAgICAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlc3Npb25TdGF0dXMgPSAhdGhpcy5zZXNzaW9uU3RhdHVzXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVuZGVyQ2hpbGRDaGlsZCA9IFt0aGlzLnRpdGxlXVxuICAgICAgICBpZih0aGlzLnNlc3Npb25TdGF0dXMpIHtcbiAgICAgICAgICAgIHJlbmRlckNoaWxkQ2hpbGQucHVzaChoKCdkaXYnLCBbdGhpcy4kc2xvdHMuZGVmYXVsdF0pKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbmRlckNoaWxkID0gW2goJ2RpdicscmVuZGVyQ2hpbGRDaGlsZCldXG4gICAgICAgIGNvbnN0IGV2ZW50ID0ge29uOiB7fX1cbiAgICAgICAgOyh0aGlzLmFjdGlvbiA9PT0gJ2NsaWNrJykgJiYgKGV2ZW50Lm9uLmNsaWNrID0gaGFuZGxlQ2xpY2spXG4gICAgICAgIDsodGhpcy5hY3Rpb24gPT09ICdob3ZlcicpICYmIChldmVudC5vbi5tb3VzZWVudGVyID0gZXZlbnQub24ubW91c2VsZWF2ZSA9IGhhbmRsZUNsaWNrKVxuICAgICAgICByZXR1cm4gaChcbiAgICAgICAgICAgIHRoaXMudGFnLFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICByZW5kZXJDaGlsZFxuICAgICAgICApXG4gICAgfVxufSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoY29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2ZkYTAwMTRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIilcbn1cbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5kZXgudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCB7cmVuZGVyIGFzIF9fdnVlX3JlbmRlcl9fLCBzdGF0aWNSZW5kZXJGbnMgYXMgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfX30gZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2ZkYTAwMTRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi03ZmRhMDAxNFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvTGluZXIvaW5kZXgudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdmZGEwMDE0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2ZkYTAwMTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChjb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yZTIzNDJiZFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuL2luZGV4LmNzc1wiKVxufVxuLyogc2NyaXB0ICovXG5leHBvcnQgKiBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pbmRleC52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3JlbmRlcl9fLCBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0yZTIzNDJiZFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvTWVudS9pbmRleC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmUyMzQyYmRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yZTIzNDJiZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG4iLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ5Mjk3NTc4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4vaXRlbS5jc3NcIilcbn1cbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaXRlbS52dWVcIlxuaW1wb3J0IF9fdnVlX3NjcmlwdF9fIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2l0ZW0udnVlXCJcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfcmVuZGVyX18sIF9fdnVlX3N0YXRpY19yZW5kZXJfZm5zX19cbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTQ5Mjk3NTc4XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG5pbXBvcnQgbm9ybWFsaXplQ29tcG9uZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50LW5vcm1hbGl6ZXJcIlxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3JlbmRlcl9fLFxuICBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9NZW51L2l0ZW0udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ5Mjk3NTc4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDkyOTc1NzhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQuZXhwb3J0c1xuIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChjb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00MjA1ZWM3OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuL21lbnUuY3NzXCIpXG59XG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL21lbnUudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9tZW51LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3JlbmRlcl9fLCBfX3Z1ZV9zdGF0aWNfcmVuZGVyX2Zuc19fXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi00MjA1ZWM3OFwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxuaW1wb3J0IG5vcm1hbGl6ZUNvbXBvbmVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudC1ub3JtYWxpemVyXCJcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV9yZW5kZXJfXyxcbiAgX192dWVfc3RhdGljX3JlbmRlcl9mbnNfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvTWVudS9tZW51LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00MjA1ZWM3OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQyMDVlYzc4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnUm93JyxcbiAgICBwcm9wczoge1xuICAgICAgICB0YWc6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdkaXYnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHN0eWxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJy13ZWJraXQtZmxleCcsXG4gICAgICAgICAgICAgICAgJ2ZsZXgtZmxvdyc6ICdyb3cgd3JhcCcsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXIoaCkge1xuICAgICAgcmV0dXJuIGgoXG4gICAgICAgIHRoaXMudGFnLCBcbiAgICAgICAge1xuICAgICAgICAgICAgc3R5bGU6IHRoaXMuc3R5bGVcbiAgICAgICAgfSwgXG4gICAgICAgIHRoaXMuJHNsb3RzLmRlZmF1bHQpO1xuICAgIH1cbiAgfTsiLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uL2luZGV4LnZ1ZSdcbmltcG9ydCBMaW5lIGZyb20gJy4vTGluZXIvaW5kZXgudnVlJ1xuaW1wb3J0IFJvdyBmcm9tICcuL1Jvdy9pbmRleC5qcydcbmltcG9ydCBDb2wgZnJvbSAnLi9Db2wvaW5kZXguanMnXG5pbXBvcnQgQWZmaXggZnJvbSAnLi9BZmZpeC9pbmRleC52dWUnXG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tICcuL0JyZWFkY3J1bWIvaW5kZXguanMnXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bi9pbmRleC5qcydcbmltcG9ydCBNZW51R3JvdXAgZnJvbSAnLi9NZW51L2luZGV4LnZ1ZSdcbmZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSkge1xuICAgIFZ1ZS5taXhpbih7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIEJ1dHRvbmVyOiBCdXR0b24sIFxuICAgICAgICAgICAgTGluZXI6IExpbmUsXG4gICAgICAgICAgICBSb3dlcjogUm93LFxuICAgICAgICAgICAgQ29sZXI6IENvbCxcbiAgICAgICAgICAgIEFmZml4ZXI6IEFmZml4LFxuICAgICAgICAgICAgQnJlYWRjcnVtYmVyOiBCcmVhZGNydW1iLFxuICAgICAgICAgICAgRHJvcGRvd25lcjogRHJvcGRvd24sXG4gICAgICAgICAgICAnTWVudWVyLWdyb3VwJzogTWVudUdyb3VwLFxuICAgICAgICAgICAgTWVudWVyOiBNZW51R3JvdXAubWVudSxcbiAgICAgICAgICAgICdNZW51ZXItaXRlbSc6IE1lbnVHcm91cC5pdGVtXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7aW5zdGFsbH0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0J1dHRvbicsXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNoaWxkVGV4dDogJydcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgYnV0dG9uQ2xhc3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICdtZWVyLWJ1dHRvbicsXG4gICAgICAgICAgICAgICAgJ21lZXItYnV0dG9uLScgKyB0aGlzLnR5cGUsXG4gICAgICAgICAgICAgICAgJ21lZXItYnV0dG9uLXNpemUtJyArIHRoaXMuc2l6ZVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmNoaWxkVGV4dCA9IHRoaXMudGV4dFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBmb3JtYXRTZWNvbmQoKSB7XG4gICAgICAgICAgICBpZigoIXRoaXMuc2Vjb25kICYmIHRoaXMuc2Vjb25kICE9PSAwKSB8fCB0aGlzLnNlY29uZCA8IDApIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlQ291bnREb3duKCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCAgPSB0cnVlICAgICBcbiAgICAgICAgICAgIHRoaXMuY2hpbGRUZXh0ID0gdGhpcy5zZWNvbmRcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQ2xhc3MucHVzaCgnbWVlci1idXR0b24tY291bnQtZG93bicpXG4gICAgICAgIH0sXG4gICAgICAgIGFmdGVyQ291bnREb3duKCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmNoaWxkVGV4dCA9IHRoaXMudGV4dFxuICAgICAgICAgICAgdGhpcy5idXR0b25DbGFzcy5wb3AoKSAgICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICBvdXRlckNsaWNrKCkge1xuICAgICAgICAgICAgaWYoIXRoaXMuZm9ybWF0U2Vjb25kKCkgfHwgdGhpcy5kaXNhYmxlZCkgcmV0dXJuXG4gICAgICAgICAgICB0aGlzLmJlZm9yZUNvdW50RG93bigpXG4gICAgICAgICAgICB0aGlzLmNvdW50RG93blRpbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZFRleHQgLT0gMVxuICAgICAgICAgICAgICAgIGlmKHRoaXMuY2hpbGRUZXh0ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuY291bnREb3duVGltZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZnRlckNvdW50RG93bigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICAgICAgaWYodGhpcy5jb3VudERvd25UaW1lKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuY291bnREb3duVGltZSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ25vcm1hbCdcbiAgICAgICAgfSxcbiAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgZGVmYXVsdDogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnZGVmYXVsdCdcbiAgICAgICAgfSxcbiAgICAgICAgc2Vjb25kOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAtMVxuICAgICAgICB9XG4gICAgfVxufSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGlkPVwiQWZmaXhcIiA6c3R5bGU9XCJhZmZpeFN0eWxlXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ0FmZml4JyxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWZmaXhTdHlsZToge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpbiA9IHRoaXMud2luKClcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLiRlbFxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0TGVmdCA9IHNlbGYub2Zmc2V0TGVmdFxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gc2VsZi5vZmZzZXRUb3BcbiAgICAgICAgICAgIHdpbi5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYod2luLnNjcm9sbFkgPiBwYXJzZUludCh0aGlzLm9mZnNldFRvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZmZpeFN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBvZmZzZXRMZWZ0ICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogb2Zmc2V0VG9wICsgJ3B4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZmZpeFN0eWxlID0ge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgb2Zmc2V0VG9wOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcwJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHdpbmRvd1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcbiAgICB9XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtZWVyLWxpbmVcIiA6c3R5bGU9XCJ7J3dpZHRoJzogd2lkdGh9XCIgLz5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ0xpbmVyJyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcxMDAlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuICAgIC5tZWVyLWxpbmV7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgIH1cbjwvc3R5bGU+IiwiPHN0eWxlIHNyYz1cIi4vaW5kZXguY3NzXCIgc2NvcGVkPjwvc3R5bGU+XG48c2NyaXB0PlxuaW1wb3J0IGl0ZW0gZnJvbSAnLi9pdGVtLnZ1ZSdcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudS52dWUnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ01lbnUtZ3JvdXAnLFxuICAgIGl0ZW0sXG4gICAgbWVudSxcbiAgICBwcm9wczoge1xuICAgICAgICBkaXJlY3Rpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdob3Jpem9uJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXIoaCkge1xuICAgICAgICByZXR1cm4gaChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHRoaXMuJHNsb3RzLmRlZmF1bHRcbiAgICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuIiwiPHN0eWxlIHNyYz1cIi4vaXRlbS5jc3NcIiBzY29wZWQ+PC9zdHlsZT5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ01lbnUtaXRlbScsXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdtZW51LWl0ZW0nXG4gICAgICAgIH0sXG4gICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IChlKSA9PiB7fVxuICAgICAgICB9LFxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogdGhpcy4kcGFyZW50LmRpcmVjdGlvblxuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXIoaCkge1xuICAgICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgICAgICAnaG9yaXpvbic6IHtcbiAgICAgICAgICAgICAgICBub3JtYWxJdGVtOiB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbEl0ZW06IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3ZlcnRpY2FsJzoge1xuICAgICAgICAgICAgICAgIG5vcm1hbEl0ZW06IHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsSXRlbTogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVt0aGlzLmRpcmVjdGlvbl1cbiAgICAgICAgcmV0dXJuIGgoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIDsodGhpcy5wYXRoICE9PSAnJykgJiYgKHRoaXMuJHJvdXRlci5wdXNoKHRoaXMucGF0aCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jbGljayhlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtoKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IHN0eWxlcy5ub3JtYWxJdGVtXG4gICAgICAgICAgICB9LFt0aGlzLnRpdGxlXSldXG4gICAgICAgIClcbiAgICB9XG59XG48L3NjcmlwdD5cbiIsIjxzdHlsZSBzcmM9XCIuL21lbnUuY3NzXCIgc2NvcGVkPjwvc3R5bGU+XG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdNZW51JyxcbiAgICBwcm9wczoge1xuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ21lbnUtdGl0bGUnXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdjbGljaydcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdmYWxzZSdcbiAgICAgICAgfSxcbiAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgZGVmYXVsdDogKGUpID0+IHt9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIGZpeFZlcnRpY2FrSXRlbXNIb3ZlclRvcDogJy0yMHB4JyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogdGhpcy4kcGFyZW50LmRpcmVjdGlvblxuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXIoaCkge1xuICAgICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgICAgICAnaG9yaXpvbic6IHtcbiAgICAgICAgICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgICAgICAgICAgbWVudUJ1dHRvbkhvcml6b246IHRoaXMuZGlzYWJsZWQgIT09ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRNZW51QnV0dG9uSG9yaXpvbjogdGhpcy5kaXNhYmxlZCA9PT0gJ3RydWUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtZW51TGluZToge1xuICAgICAgICAgICAgICAgICAgICBtZW51TGluZUhvcml6b246IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1lbnVJdGVtczoge1xuICAgICAgICAgICAgICAgICAgICBtZW51SXRlbXNDb250YWluSG9yaXpvbjogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndmVydGljYWwnOiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQnV0dG9uOiB0aGlzLmRpc2FibGVkICE9PSAndHJ1ZScsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkVmVydGljYWxCdXR0b246IHRoaXMuZGlzYWJsZWQgPT09ICd0cnVlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWVudUxpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxNZW51TGluZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWVudUl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsTWVudUl0ZW1zQ2xpY2s6IHRoaXMudHlwZSA9PT0gJ2NsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxNZW51SXRlbXNIb3ZlcjogdGhpcy50eXBlID09PSAnaG92ZXInXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmaXhWZXJ0aWNha0l0ZW1zSG92ZXJUb3A6IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0aGlzLnR5cGUgPT09ICdob3ZlcicgPyB0aGlzLmZpeFZlcnRpY2FrSXRlbXNIb3ZlclRvcCA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1bdGhpcy5kaXJlY3Rpb25dXG5cbiAgICAgICAgY29uc3QgbWVudUl0ZW1zID0gW10gICAgICAgIFxuICAgICAgICBpZih0aGlzLnNob3cpIHtcbiAgICAgICAgICAgIG1lbnVJdGVtcy5wdXNoKGgoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogc3R5bGVzLm1lbnVJdGVtc1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbdGhpcy4kc2xvdHMuZGVmYXVsdF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGgoXG4gICAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzczogc3R5bGVzLmJ1dHRvbixcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHRoaXMuZGlzYWJsZWQgIT09ICd0cnVlJyA/ICdwb2ludGVyJzogJ25vdC1hbGxvd2VkJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvd1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xpY2soZSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW91c2VlbnRlcjogKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMudHlwZSAhPT0gJ2hvdmVyJykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5maXhWZXJ0aWNha0l0ZW1zSG92ZXJUb3AgPSAtZS50YXJnZXQub2Zmc2V0SGVpZ2h0ICsgJ3B4J1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb3VzZWxlYXZlOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgaCgnZGl2JywgW3RoaXMudGl0bGVdKSxcbiAgICAgICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBzdHlsZXMubWVudUxpbmUsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZml4VmVydGljYWtJdGVtc0hvdmVyVG9wXG4gICAgICAgICAgICAgICAgfSwgbWVudUl0ZW1zKVxuICAgICAgICAgICAgXVxuICAgICAgICApXG4gICAgfVxufVxuXG48L3NjcmlwdD5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubWVlci1idXR0b25bZGF0YS12LTBiMmY5N2UwXXtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcXG4gICAgb3V0bGluZTpub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tZWVyLWJ1dHRvbi1ub3JtYWxbZGF0YS12LTBiMmY5N2UwXXtcXG4gICAgYmFja2dyb3VuZDogIzE4OTBmZjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMTg5MGZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5tZWVyLWJ1dHRvbi1ub3JtYWxbZGF0YS12LTBiMmY5N2UwXTpob3ZlciwgLm1lZXItYnV0dG9uLW5vcm1hbFtkYXRhLXYtMGIyZjk3ZTBdOmZvY3Vze1xcbiAgICBvcGFjaXR5OiAuODtcXG59XFxuLm1lZXItYnV0dG9uLXNpbXBsZVtkYXRhLXYtMGIyZjk3ZTBde1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xcbn1cXG4ubWVlci1idXR0b24tc2ltcGxlW2RhdGEtdi0wYjJmOTdlMF06aG92ZXIsIC5tZWVyLWJ1dHRvbi1zaW1wbGVbZGF0YS12LTBiMmY5N2UwXTpmb2N1c3tcXG4gICAgY29sb3I6ICMxODkwZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxODkwZmY7XFxufVxcbi5tZWVyLWJ1dHRvbi1kb3R0ZWRbZGF0YS12LTBiMmY5N2UwXXtcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkICNkOWQ5ZDk7XFxufVxcbi5tZWVyLWJ1dHRvbi1kb3R0ZWRbZGF0YS12LTBiMmY5N2UwXTpob3ZlciwgLm1lZXItYnV0dG9uLWRvdHRlZFtkYXRhLXYtMGIyZjk3ZTBdOmZvY3Vze1xcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgIzE4OTBmZjtcXG4gICAgY29sb3I6ICMxODkwZmY7XFxufVxcbi5tZWVyLWJ1dHRvbi1kYW5nZXJbZGF0YS12LTBiMmY5N2UwXXtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuLm1lZXItYnV0dG9uLWRhbmdlcltkYXRhLXYtMGIyZjk3ZTBdOmhvdmVyLC5tZWVyLWJ1dHRvbi1kYW5nZXJbZGF0YS12LTBiMmY5N2UwXTpmb2N1c3tcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuLm1lZXItYnV0dG9uLXNpemUtbGFyZ2VbZGF0YS12LTBiMmY5N2UwXXtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuLm1lZXItYnV0dG9uLXNpemUtc21hbGxbZGF0YS12LTBiMmY5N2UwXXtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuLm1lZXItYnV0dG9uLWNvdW50LWRvd25bZGF0YS12LTBiMmY5N2UwXXtcXG4gICAgb3BhY2l0eTogLjU7XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvbWFsbG93L0NvZGUvbnBtL21lZXIvY29tcG9uZW50cy9CdXR0b24vaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksMkJBQTJCO0NBQzlCO0FBQ0Q7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksV0FBVztDQUNkO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksWUFBWTtDQUNmXCIsXCJmaWxlXCI6XCJpbmRleC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1lZXItYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xcbiAgICBvdXRsaW5lOm5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1lZXItYnV0dG9uLW5vcm1hbHtcXG4gICAgYmFja2dyb3VuZDogIzE4OTBmZjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMTg5MGZmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5tZWVyLWJ1dHRvbi1ub3JtYWw6aG92ZXIsIC5tZWVyLWJ1dHRvbi1ub3JtYWw6Zm9jdXN7XFxuICAgIG9wYWNpdHk6IC44O1xcbn1cXG4ubWVlci1idXR0b24tc2ltcGxle1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xcbn1cXG4ubWVlci1idXR0b24tc2ltcGxlOmhvdmVyLCAubWVlci1idXR0b24tc2ltcGxlOmZvY3Vze1xcbiAgICBjb2xvcjogIzE4OTBmZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE4OTBmZjtcXG59XFxuLm1lZXItYnV0dG9uLWRvdHRlZHtcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkICNkOWQ5ZDk7XFxufVxcbi5tZWVyLWJ1dHRvbi1kb3R0ZWQ6aG92ZXIsIC5tZWVyLWJ1dHRvbi1kb3R0ZWQ6Zm9jdXN7XFxuICAgIGJvcmRlcjogMXB4IGRvdHRlZCAjMTg5MGZmO1xcbiAgICBjb2xvcjogIzE4OTBmZjtcXG59XFxuLm1lZXItYnV0dG9uLWRhbmdlcntcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuLm1lZXItYnV0dG9uLWRhbmdlcjpob3ZlciwubWVlci1idXR0b24tZGFuZ2VyOmZvY3Vze1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG4ubWVlci1idXR0b24tc2l6ZS1sYXJnZXtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuLm1lZXItYnV0dG9uLXNpemUtc21hbGx7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcbi5tZWVyLWJ1dHRvbi1jb3VudC1kb3due1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiaW5kZXguY3NzXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5tZW51QnV0dG9uSG9yaXpvbltkYXRhLXYtNDIwNWVjNzhdLCAuZGlzYWJsZWRNZW51QnV0dG9uSG9yaXpvbltkYXRhLXYtNDIwNWVjNzhde1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDIwcHhcXG59XFxuLm1lbnVCdXR0b25Ib3Jpem9uW2RhdGEtdi00MjA1ZWM3OF06Zm9jdXMsXFxuIC5tZW51QnV0dG9uSG9yaXpvbltkYXRhLXYtNDIwNWVjNzhdOmhvdmVyLFxcbiAudmVydGljYWxCdXR0b25bZGF0YS12LTQyMDVlYzc4XTpmb2N1cyxcXG4gLnZlcnRpY2FsQnV0dG9uW2RhdGEtdi00MjA1ZWM3OF06aG92ZXJ7XFxuICAgIGNvbG9yOiBza3libHVlO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHNreWJsdWU7XFxufVxcbi5tZW51SXRlbXNDb250YWluSG9yaXpvbltkYXRhLXYtNDIwNWVjNzhde1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuLm1lbnVMaW5lSG9yaXpvbltkYXRhLXYtNDIwNWVjNzhdLC52ZXJ0aWNhbE1lbnVMaW5lW2RhdGEtdi00MjA1ZWM3OF17XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnZlcnRpY2FsQnV0dG9uW2RhdGEtdi00MjA1ZWM3OF0sIC5kaXNhYmxlZFZlcnRpY2FsQnV0dG9uW2RhdGEtdi00MjA1ZWM3OF17XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLnZlcnRpY2FsTWVudUl0ZW1zQ2xpY2tbZGF0YS12LTQyMDVlYzc4XXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbi52ZXJ0aWNhbE1lbnVJdGVtc0hvdmVyW2RhdGEtdi00MjA1ZWM3OF17XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMTAwJTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL21hbGxvdy9Db2RlL25wbS9tZWVyL2NvbXBvbmVudHMvTWVudS9tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7Q0FDbEI7QUFDRDs7OztJQUlJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsaUNBQWlDO0NBQ3BDO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFFBQVE7Q0FDWDtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0NBQ2hCXCIsXCJmaWxlXCI6XCJtZW51LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWVudUJ1dHRvbkhvcml6b24sIC5kaXNhYmxlZE1lbnVCdXR0b25Ib3Jpem9ue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDIwcHhcXG59XFxuLm1lbnVCdXR0b25Ib3Jpem9uOmZvY3VzLFxcbiAubWVudUJ1dHRvbkhvcml6b246aG92ZXIsXFxuIC52ZXJ0aWNhbEJ1dHRvbjpmb2N1cyxcXG4gLnZlcnRpY2FsQnV0dG9uOmhvdmVye1xcbiAgICBjb2xvcjogc2t5Ymx1ZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBza3libHVlO1xcbn1cXG4ubWVudUl0ZW1zQ29udGFpbkhvcml6b257XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG4ubWVudUxpbmVIb3Jpem9uLC52ZXJ0aWNhbE1lbnVMaW5le1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi52ZXJ0aWNhbEJ1dHRvbiwgLmRpc2FibGVkVmVydGljYWxCdXR0b257XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLnZlcnRpY2FsTWVudUl0ZW1zQ2xpY2t7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udmVydGljYWxNZW51SXRlbXNIb3ZlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxMDAlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm5vcm1hbEl0ZW1bZGF0YS12LTQ5Mjk3NTc4XXtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL21hbGxvdy9Db2RlL25wbS9tZWVyL2NvbXBvbmVudHMvTWVudS9pdGVtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7SUFDSSxhQUFhO0NBQ2hCXCIsXCJmaWxlXCI6XCJpdGVtLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubm9ybWFsSXRlbXtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJpbmRleC52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1lZXItbGluZVtkYXRhLXYtN2ZkYTAwMTRde1xcbiAgICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xcbiAgICBoZWlnaHQ6IDJweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9tYWxsb3cvQ29kZS9ucG0vbWVlci9jb21wb25lbnRzL0xpbmVyL2NvbXBvbmVudHMvTGluZXIvaW5kZXgudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFlQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJpbmRleC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtZWVyLWxpbmVcXFwiIDpzdHlsZT1cXFwieyd3aWR0aCc6IHdpZHRofVxcXCIgLz5cXG48L3RlbXBsYXRlPlxcbjxzY3JpcHQ+XFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcXG4gICAgICAgIG5hbWU6ICdMaW5lcicsXFxuICAgICAgICBwcm9wczoge1xcbiAgICAgICAgICAgIHdpZHRoOiB7XFxuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJzEwMCUnXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XFxuPHN0eWxlIHNjb3BlZD5cXG4gICAgLm1lZXItbGluZXtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XFxuICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgfVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIHNjcmlwdEV4cG9ydHMgPSBzY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzY3JpcHRFeHBvcnRzID0gc2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNwYW5cIiwgeyBvbjogeyBjbGljazogX3ZtLm91dGVyQ2xpY2sgfSB9LCBbXG4gICAgX2MoXCJidXR0b25cIiwgeyBjbGFzczogX3ZtLmJ1dHRvbkNsYXNzLCBvbjogeyBjbGljazogX3ZtLmNsaWNrIH0gfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5jaGlsZFRleHQpKV0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTBiMmY5N2UwXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdHlsZTogX3ZtLmFmZml4U3R5bGUsIGF0dHJzOiB7IGlkOiBcIkFmZml4XCIgfSB9LFxuICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTY2MTZhNDQ4XCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWVlci1saW5lXCIsIHN0eWxlOiB7IHdpZHRoOiBfdm0ud2lkdGggfSB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtN2ZkYTAwMTRcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0wYjJmOTdlMFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuL2luZGV4LmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxYWY0ZDgxNFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMGIyZjk3ZTBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMGIyZjk3ZTBcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi9pbmRleC5jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yZTIzNDJiZFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuL2luZGV4LmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzYzliYWRhOFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmUyMzQyYmRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmUyMzQyYmRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi9pbmRleC5jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00MjA1ZWM3OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuL21lbnUuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImJmOGZlNzBjXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00MjA1ZWM3OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuL21lbnUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQyMDVlYzc4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4vbWVudS5jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00OTI5NzU3OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuL2l0ZW0uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImEwNGQ5NzdhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00OTI5NzU3OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuL2l0ZW0uY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ5Mjk3NTc4XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJzb3VyY2VNYXBcXFwiOnRydWV9IS4vaXRlbS5jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi02NjE2YTQ0OFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI1YTNiMTVhNlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjYxNmE0NDhcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjYxNmE0NDhcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZmRhMDAxNFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwic291cmNlTWFwXFxcIjp0cnVlfSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzMDg4ZTRlOFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2ZkYTAwMTRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2ZkYTAwMTRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcInNvdXJjZU1hcFxcXCI6dHJ1ZX0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9pbmRleC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxuaW1wb3J0IGxpc3RUb1N0eWxlcyBmcm9tICcuL2xpc3RUb1N0eWxlcydcblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFN0eWxlc0NsaWVudCAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cbiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iXSwic291cmNlUm9vdCI6IiJ9