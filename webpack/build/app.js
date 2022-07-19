/******/ (function(modules) { // webpackBootstrap
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module1 */ \"./src/js/module1.js\");\n/* harmony import */ var _module2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module2 */ \"./src/js/module2.js\");\n/* harmony import */ var _module3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module3 */ \"./src/js/module3.js\");\n/* harmony import */ var _json_test_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../json/test.json */ \"./src/json/test.json\");\nvar _json_test_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../json/test.json */ \"./src/json/test.json\", 1);\n/*\napp.js是webpack的入口，所有外部文件(js、json、css、less等等)都需要在这里引入使用\n*/\n\n\n\n\n// import '../css/demo.css'\nObject(_module1__WEBPACK_IMPORTED_MODULE_0__[\"sum\"])(1, 2);\nObject(_module1__WEBPACK_IMPORTED_MODULE_0__[\"sub\"])(3, 4);\nconsole.log(_module2__WEBPACK_IMPORTED_MODULE_1__[\"data\"]);\nconsole.log(_module2__WEBPACK_IMPORTED_MODULE_1__[\"message\"]);\nconsole.log(_module3__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nconsole.log(_json_test_json__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/module1.js":
/*!***************************!*\
  !*** ./src/js/module1.js ***!
  \***************************/
/*! exports provided: sum, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return sum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\n// module1使用分别暴露\nfunction sum(a, b) {\n  console.log(a + b);\n}\n\nfunction sub(a, b) {\n  console.log(a - b);\n}\n\n\n//# sourceURL=webpack:///./src/js/module1.js?");

/***/ }),

/***/ "./src/js/module2.js":
/*!***************************!*\
  !*** ./src/js/module2.js ***!
  \***************************/
/*! exports provided: data, message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"message\", function() { return msg; });\n// module1使用统一暴露\n\nconst data = 'atguigu';\nconst msg = 'hello,0826!!!';\n\n\n\n\n//# sourceURL=webpack:///./src/js/module2.js?");

/***/ }),

/***/ "./src/js/module3.js":
/*!***************************!*\
  !*** ./src/js/module3.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// module1使用默认暴露\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'atguigu',\n  address: '宏福科技园',\n  subjects: ['前端', '大数据', 'java'],\n});\n\n\n//# sourceURL=webpack:///./src/js/module3.js?");

/***/ }),

/***/ "./src/json/test.json":
/*!****************************!*\
  !*** ./src/json/test.json ***!
  \****************************/
/*! exports provided: name, age, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"老刘\\\",\\\"age\\\":18}\");\n\n//# sourceURL=webpack:///./src/json/test.json?");

/***/ })

/******/ });