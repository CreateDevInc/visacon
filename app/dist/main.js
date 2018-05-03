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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/src/js/index.js":
/*!*****************************!*\
  !*** ./app/src/js/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./watch.js */ \"./app/src/js/watch.js\");\n\n__webpack_require__(/*! ../sass/styles.scss */ \"./app/src/sass/styles.scss\");\n\n//# sourceURL=webpack:///./app/src/js/index.js?");

/***/ }),

/***/ "./app/src/js/watch.js":
/*!*****************************!*\
  !*** ./app/src/js/watch.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../pug/product-t90.pug */ \"./app/src/pug/product-t90.pug\");\n\n__webpack_require__(/*! ../pug/templates/product.pug */ \"./app/src/pug/templates/product.pug\");\n\n__webpack_require__(/*! ../pug/components/footer.pug */ \"./app/src/pug/components/footer.pug\");\n\n__webpack_require__(/*! ../pug/components/header.pug */ \"./app/src/pug/components/header.pug\");\n\n//# sourceURL=webpack:///./app/src/js/watch.js?");

/***/ }),

/***/ "./app/src/pug/components/footer.pug":
/*!*******************************************!*\
  !*** ./app/src/pug/components/footer.pug ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"footer\\r\\n  h2 Pug is da best\\r\\nscript(src=\\\"main.js\\\")\"\n\n//# sourceURL=webpack:///./app/src/pug/components/footer.pug?");

/***/ }),

/***/ "./app/src/pug/components/header.pug":
/*!*******************************************!*\
  !*** ./app/src/pug/components/header.pug ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"nav\\r\\n  ul\\r\\n    li\\r\\n      a(href=\\\"#\\\") This is a nav item\"\n\n//# sourceURL=webpack:///./app/src/pug/components/header.pug?");

/***/ }),

/***/ "./app/src/pug/product-t90.pug":
/*!*************************************!*\
  !*** ./app/src/pug/product-t90.pug ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"extends templates/product\\r\\n\\r\\nblock image-slider\\r\\n  img(src=\\\"image1\\\")\\r\\n  img(src=\\\"image1\\\")\\r\\n  img(src=\\\"image1\\\")\\r\\n\\r\\nblock description\\r\\n  p Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, autem mollitia explicabo, omnis modi dicta magnam corporis perspiciatis earum quidem excepturi tempore rem distinctio reiciendis quibusdam ullam sint laborum sit!\\r\\n  p Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, autem mollitia explicabo, omnis modi dicta magnam corporis perspiciatis earum quidem excepturi tempore rem distinctio reiciendis quibusdam ullam sint laborum sit!\\r\\n\\r\\nblock table\\r\\n  tr\\r\\n    td Dimensions\\r\\n    td Inches\\r\\n    td 42\\\" D x 48\\\" W x 84\\\" H\\r\\n\\r\\nblock features-benefits\\r\\n\"\n\n//# sourceURL=webpack:///./app/src/pug/product-t90.pug?");

/***/ }),

/***/ "./app/src/pug/templates/product.pug":
/*!*******************************************!*\
  !*** ./app/src/pug/templates/product.pug ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"html\\r\\n  head\\r\\n    title Cool Product\\r\\n    link(rel=\\\"stylesheet\\\", href=\\\"styles.css\\\")\\r\\n  body\\r\\n    include ../components/header\\r\\n\\r\\n    .image-slider\\r\\n      i\\r\\n      i\\r\\n      div\\r\\n        block image-slider\\r\\n\\r\\n    .description\\r\\n      block description\\r\\n\\r\\n    .information\\r\\n      table\\r\\n        tr\\r\\n          th Physical Property\\r\\n          th Units\\r\\n          th Values\\r\\n        block table\\r\\n\\r\\n    .features-benefits\\r\\n      block features-benefits\\r\\n\\r\\n    include ../components/footer\"\n\n//# sourceURL=webpack:///./app/src/pug/templates/product.pug?");

/***/ }),

/***/ "./app/src/sass/styles.scss":
/*!**********************************!*\
  !*** ./app/src/sass/styles.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./app/src/sass/styles.scss?");

/***/ })

/******/ });