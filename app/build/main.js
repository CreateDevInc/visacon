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

/***/ "./app/src/js/header.js":
/*!******************************!*\
  !*** ./app/src/js/header.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar mobileDropdowns = document.querySelectorAll(\".mobile-container .dropdown > a\");\n\nfor (var i = 0; i < mobileDropdowns.length; i++) {\n  mobileDropdowns[i].addEventListener(\"click\", toggleMobileDropdown);\n}\n\nfunction toggleMobileDropdown(e) {\n  e.preventDefault();\n\n  var dropdownContainer = e.target.parentNode;\n\n  if (dropdownContainer.className.includes(\"expanded\")) {\n    dropdownContainer.classList.remove(\"expanded\");\n  } else {\n    dropdownContainer.classList.add(\"expanded\");\n  }\n}\n\n//# sourceURL=webpack:///./app/src/js/header.js?");

/***/ }),

/***/ "./app/src/js/index.js":
/*!*****************************!*\
  !*** ./app/src/js/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\n__webpack_require__(/*! ./product-slider */ \"./app/src/js/product-slider.js\");\n\n__webpack_require__(/*! ../sass/styles.scss */ \"./app/src/sass/styles.scss\");\n\n__webpack_require__(/*! ./switch */ \"./app/src/js/switch.js\");\n\n__webpack_require__(/*! ./header */ \"./app/src/js/header.js\");\n\n// No actual JavaScript should be written in this file,\n// this should only be used to import the other JavaScript\n// files and import the main SCSS file for webpack to bundle it\n\nif (process.env[\"VISACON_BUILD\"] !== \"prod\") {\n  // console.log('-----------------');\n  // console.log('-----------------');\n  // console.log('-----------------');\n  // console.log('ITS NOT PROD, SO IM IMPORTIGN');\n  // console.log('-----------------');\n  // console.log('-----------------');\n  // console.log('-----------------');\n  __webpack_require__(/*! ./watch */ \"./app/src/js/watch.js\");\n}\n\nconsole.log('Welcome to Visacon.');\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./app/src/js/index.js?");

/***/ }),

/***/ "./app/src/js/product-slider.js":
/*!**************************************!*\
  !*** ./app/src/js/product-slider.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n  var imageSliders = document.querySelectorAll('.image-slider');\n\n  var _loop = function _loop(x) {\n    var imageSlider = imageSliders[x];\n    var dotsContainer = imageSlider.querySelector('.dots');\n    var controlsContainer = imageSlider.querySelector('.control-container');\n\n    var arrows = imageSlider.getElementsByTagName('i');\n    var images = imageSlider.getElementsByTagName('img');\n\n    var slides = [];\n    var numOfSlides = images.length;\n    var currentSlide = 0;\n\n    var minimumHeight = 0;\n\n    // hide the slider controls if there's only a single image to display\n    if (numOfSlides <= 1) {\n      dotsContainer.style.display = 'none';\n      controlsContainer.style.display = 'none';\n    }\n\n    for (var i = 0; i < images.length; i++) {\n      slides.push(images[i].src);\n\n      if (minimumHeight < images[i].naturalHeight) {\n        minimumHeight = images[i].naturalHeight;\n      }\n\n      var dot = document.createElement('i');\n      dot.className = 'fas fa-circle' + (i === 0 ? ' active' : '');\n      dotsContainer.appendChild(dot);\n    }\n\n    // imageSlider.style.minHeight = minimumHeight + 'px';\n\n    var dots = dotsContainer.childNodes;\n\n    arrows[0].addEventListener('click', changeSlide);\n    arrows[1].addEventListener('click', changeSlide);\n\n    function changeSlide(e) {\n      var arrowClass = e.target.className;\n\n      dots[currentSlide].classList.remove('active');\n\n      if (arrowClass.includes('left') && currentSlide > 0) {\n        currentSlide--;\n      } else if (arrowClass.includes('left') && currentSlide === 0) {\n        currentSlide = numOfSlides - 1;\n      } else if (arrowClass.includes('right') && currentSlide < numOfSlides - 1) {\n        currentSlide++;\n      } else {\n        currentSlide = 0;\n      }\n\n      images[0].src = slides[currentSlide];\n\n      dots[currentSlide].classList.add('active');\n    }\n  };\n\n  for (var x = 0; x < imageSliders.length; x++) {\n    _loop(x);\n  }\n})();\n\n//# sourceURL=webpack:///./app/src/js/product-slider.js?");

/***/ }),

/***/ "./app/src/js/switch.js":
/*!******************************!*\
  !*** ./app/src/js/switch.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// By taking the code that we write and chunking it into\n// functions, we can avoid having to re-write the same thing\n// over and over. We end up with slightly less code, but more importantly, logic\n// looks cleaner, reads much easier, and becomes easier to maintain as a result.\n\n// This was just a quick refactoring (which I do to my own\n// code as well), but if you're interested in how we could\n// improve this method even further, let me know and I'd\n// love to talk about it!\n\n(function () {\n    // Only run on product pages; otherwise, we'll get a console\n    // error when we try to add event listeners to elements that don't\n    // exist on the home/contact pages.\n    if (window.location.href.includes('product')) {\n        var toggleTable = function toggleTable(e) {\n            if (e.target.id === 'metric') {\n                deactivate(englishTable, englishButton);\n                activate(metricTable, metricButton);\n            } else {\n                deactivate(metricTable, metricButton);\n                activate(englishTable, englishButton);\n            }\n        };\n\n        var deactivate = function deactivate(table, button) {\n            table.classList.add(\"hidden\");\n            button.classList.remove(\"active-table\");\n            button.classList.add(\"switchable\");\n        };\n\n        var activate = function activate(table, button) {\n            table.classList.remove(\"hidden\");\n            button.classList.remove(\"switchable\");\n            button.classList.add(\"active-table\");\n        };\n\n        var metricTable = document.querySelector(\".metric\");\n        var englishTable = document.querySelector(\".english\");\n        var metricButton = document.querySelector(\"#metric\");\n        var englishButton = document.querySelector(\"#english\");\n\n        metricButton.addEventListener(\"click\", toggleTable);\n        englishButton.addEventListener(\"click\", toggleTable);\n    }\n})();\n\n//# sourceURL=webpack:///./app/src/js/switch.js?");

/***/ }),

/***/ "./app/src/js/watch.js":
/*!*****************************!*\
  !*** ./app/src/js/watch.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../pug/p-vuv-40f.pug */ \"./app/src/pug/p-vuv-40f.pug\");\n\n__webpack_require__(/*! ../pug/p-euv.pug */ \"./app/src/pug/p-euv.pug\");\n\n__webpack_require__(/*! ../pug/p-vuv24.pug */ \"./app/src/pug/p-vuv24.pug\");\n\n__webpack_require__(/*! ../pug/p-vuv14.pug */ \"./app/src/pug/p-vuv14.pug\");\n\n__webpack_require__(/*! ../pug/p-vuv14d.pug */ \"./app/src/pug/p-vuv14d.pug\");\n\n__webpack_require__(/*! ../pug/p-gc-ferrules.pug */ \"./app/src/pug/p-gc-ferrules.pug\");\n\n__webpack_require__(/*! ../pug/p-gc-liners.pug */ \"./app/src/pug/p-gc-liners.pug\");\n\n__webpack_require__(/*! ../pug/p-vials.pug */ \"./app/src/pug/p-vials.pug\");\n\n__webpack_require__(/*! ../pug/p-gas.pug */ \"./app/src/pug/p-gas.pug\");\n\n__webpack_require__(/*! ../pug/p-silicone.pug */ \"./app/src/pug/p-silicone.pug\");\n\n__webpack_require__(/*! ../pug/p-glass.pug */ \"./app/src/pug/p-glass.pug\");\n\n__webpack_require__(/*! ../pug/distributor.pug */ \"./app/src/pug/distributor.pug\");\n\n__webpack_require__(/*! ../pug/components/header.pug */ \"./app/src/pug/components/header.pug\");\n\n__webpack_require__(/*! ../pug/templates/product.pug */ \"./app/src/pug/templates/product.pug\");\n\n__webpack_require__(/*! ../pug/templates/product-vuv.pug */ \"./app/src/pug/templates/product-vuv.pug\");\n\n__webpack_require__(/*! ../pug/components/footer.pug */ \"./app/src/pug/components/footer.pug\");\n\n__webpack_require__(/*! ../pug/index.pug */ \"./app/src/pug/index.pug\");\n\n__webpack_require__(/*! ../pug/contact.pug */ \"./app/src/pug/contact.pug\");\n\n__webpack_require__(/*! ../pug/components/contact-component.pug */ \"./app/src/pug/components/contact-component.pug\");\n\n__webpack_require__(/*! ../pug/components/distributor-signup.pug */ \"./app/src/pug/components/distributor-signup.pug\");\n\n__webpack_require__(/*! ../pug/thanks.pug */ \"./app/src/pug/thanks.pug\");\n\n//# sourceURL=webpack:///./app/src/js/watch.js?");

/***/ }),

/***/ "./app/src/pug/components/contact-component.pug":
/*!******************************************************!*\
  !*** ./app/src/pug/components/contact-component.pug ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".contact-form\\n    a(href=\\\"index.html\\\" id=\\\"cancel-btn\\\")\\n        i.fas.fa-times\\n    h1 CONTACT US\\n    p We'd love to answer your questions about our stuff!\\n    form(action=\\\"https://z28up1rg8h.execute-api.us-east-1.amazonaws.com/prod/CryometrixContactHandler\\\", method=\\\"POST\\\")\\n        label.required #[span Name]\\n            input(name=\\\"name\\\" type=\\\"text\\\", required)\\n        label.required #[span Email Address]\\n            input(name=\\\"email\\\" type=\\\"email\\\", required)\\n        label.required #[span Phone Number]\\n            input(name=\\\"phone\\\" type=\\\"text\\\", required)\\n        label Company\\n            input(name=\\\"company\\\" type=\\\"text\\\")\\n        label Product of Interest\\n            select(name=\\\"product\\\")\\n                option(value=\\\"select\\\") Select a product.. \\n                option(value=\\\"ferrules\\\") GC Ferrules\\n                option(value=\\\"liners\\\") GC Liners\\n                option(value=\\\"vials\\\") Vials, Caps, & Inserts\\n                option(value=\\\"gas\\\") Gas Purification\\n                option(value=\\\"silicone\\\") Silicone Products\\n                option(value=\\\"glass\\\") Glass Fabrication\\n                option(value=\\\"euv\\\") EUV Detector\\n                option(value=\\\"vuv24\\\") VUV-24 Detector\\n                option(value=\\\"vuv14\\\") VUV-14 Detector\\n                option(value=\\\"vuv14d\\\") VUV-14D Detector\\n                option(value=\\\"vuv-40f\\\") VUV-40F Detector\\n                option(value=\\\"other\\\") Other\\n        label Message / Question\\n            textarea(name=\\\"message\\\", cols=\\\"30\\\", rows=\\\"5\\\")\\n        div.g-recaptcha(data-sitekey=\\\"6LdZ8VkUAAAAAAOu3yTln3VRZwMeLVf4Vcbpq9UZ\\\")\\n\\n        button(type=\\\"submit\\\") Submit\"\n\n//# sourceURL=webpack:///./app/src/pug/components/contact-component.pug?");

/***/ }),

/***/ "./app/src/pug/components/distributor-signup.pug":
/*!*******************************************************!*\
  !*** ./app/src/pug/components/distributor-signup.pug ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".contact-form\\n   \\n    form(action=\\\"https://z28up1rg8h.execute-api.us-east-1.amazonaws.com/prod/CryometrixContactHandler\\\", method=\\\"POST\\\")\\n        label.required #[span Name]\\n            input(name=\\\"name\\\" type=\\\"text\\\", required)\\n        label.required #[span Email Address]\\n            input(name=\\\"email\\\" type=\\\"email\\\", required)\\n        label.required #[span Phone Number]\\n            input(name=\\\"phone\\\" type=\\\"text\\\", required)\\n        label Company\\n            input(name=\\\"company\\\" type=\\\"text\\\")\\n        label Product to Distribute\\n            select(name=\\\"product\\\")\\n                option(value=\\\"select\\\") Select a product.. \\n                option(value=\\\"ferrules\\\") GC Ferrules\\n                option(value=\\\"liners\\\") GC Liners\\n                option(value=\\\"vials\\\") Vials, Caps, &amp; Inserts\\n                option(value=\\\"gas\\\") Gas Purification\\n                option(value=\\\"silicone\\\") Silicone Products\\n                option(value=\\\"glass\\\") Glass Fabrication\\n                option(value=\\\"euv\\\") EUV Detector\\n                option(value=\\\"vuv24\\\") VUV-24 Detector\\n                option(value=\\\"vuv14\\\") VUV-14 Detector\\n                option(value=\\\"vuv14d\\\") VUV-14D Detector\\n                option(value=\\\"vuv-40f\\\") VUV-40F Detector\\n                option(value=\\\"other\\\") Other\\n        label Question / Comment\\n            textarea(name=\\\"message\\\", cols=\\\"30\\\", rows=\\\"5\\\")\\n        div.g-recaptcha(data-sitekey=\\\"6LdZ8VkUAAAAAAOu3yTln3VRZwMeLVf4Vcbpq9UZ\\\")\\n\\n        button(type=\\\"submit\\\") Submit\\n\"\n\n//# sourceURL=webpack:///./app/src/pug/components/distributor-signup.pug?");

/***/ }),

/***/ "./app/src/pug/components/footer.pug":
/*!*******************************************!*\
  !*** ./app/src/pug/components/footer.pug ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"footer\\r\\n  \\r\\n  .foot-info\\r\\n    //- .container-1\\r\\n    .foot-products\\r\\n      div\\r\\n        h5 GC Consumables\\r\\n        ul           \\r\\n          li\\r\\n            a(href=\\\"p-gc-ferrules.html\\\") GC Ferrules\\r\\n          li \\r\\n            a(href=\\\"p-gc-liners.html\\\") GC Inlet Liners\\r\\n          li\\r\\n            a(href=\\\"p-vials.html\\\") Vials, Caps, &amp; Liners\\r\\n          li \\r\\n            a(href=\\\"p-gas.html\\\") Gas Purification\\r\\n          li \\r\\n            a(href=\\\"p-silicone.html\\\") GC Septa\\r\\n          li\\r\\n            a(href=\\\"p-glass.html\\\") Glass Fabrication      \\r\\n    .foot-products\\r\\n      div\\r\\n        h5 UV Detectors\\r\\n        ul \\r\\n          li \\r\\n            a(href=\\\"p-euv.html\\\") EUV Detector\\r\\n          li \\r\\n            a(href=\\\"p-vuv24.html\\\") VUV-24 Detector\\r\\n          li \\r\\n            a(href=\\\"p-vuv14.html\\\") VUV-14 Detector\\r\\n          li\\r\\n            a(href=\\\"p-vuv14d.html\\\") VUV-14D Detector  \\r\\n          li \\r\\n            a(href=\\\"p-vuv-40f.html\\\") VUV-40F Detector \\r\\n    .foot-contact\\r\\n      div\\r\\n        p Not seeing what you're looking for? Need something custom? Please reach out, we'd love to work with you!\\r\\n        a(href=\\\"contact.html\\\" id=\\\"send-btn\\\") Contact Us\\r\\n    //- .container-2\\r\\n      a(href=\\\"http://www.reflectscientific.com/\\\" target=\\\"_blank\\\") Reflect Scientific Inc.\\r\\n      p Phone | 801-226-4100 \\r\\n      p Fax &nbsp&nbsp&nbsp&nbsp&nbsp   | 801-226-2885\\r\\n      a(href=\\\"contact.html\\\" id=\\\"email-btn\\\") info@reflectscientific.com\\r\\n  .copyright\\r\\n    h5 &copy 2018 Reflect Scientific, Inc. All Rights Reserved\\r\\nscript(src=\\\"main.js\\\")\"\n\n//# sourceURL=webpack:///./app/src/pug/components/footer.pug?");

/***/ }),

/***/ "./app/src/pug/components/header.pug":
/*!*******************************************!*\
  !*** ./app/src/pug/components/header.pug ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"header  \\r\\n  nav\\r\\n    div\\r\\n      a(href=\\\"index.html\\\")\\r\\n        img(src=\\\"images/visaconlogo_white.png\\\")\\r\\n    div.links\\r\\n      ul\\r\\n        li\\r\\n          a(href=\\\"index.html\\\") Home\\r\\n        li\\r\\n          .dropdown\\r\\n            span GC Consumables #[i.fas.fa-angle-down]\\r\\n            div\\r\\n              a(href=\\\"p-gc-ferrules.html\\\") GC Ferrules\\r\\n              a(href=\\\"p-gc-liners.html\\\") GC Inlet Liners\\r\\n              a(href=\\\"p-vials.html\\\") Vials, Caps, &amp; Liners\\r\\n              a(href=\\\"p-gas.html\\\") Gas Purification\\r\\n              a(href=\\\"p-silicone.html\\\") GC Septa\\r\\n              a(href=\\\"p-glass.html\\\") Glass Fabrication\\r\\n              \\r\\n        li\\r\\n          .dropdown\\r\\n            span UV Detectors #[i.fas.fa-angle-down]\\r\\n            div\\r\\n              a(href=\\\"p-euv.html\\\") EUV Detector              \\r\\n              a(href=\\\"p-vuv24.html\\\") VUV-24 Detector\\r\\n              a(href=\\\"p-vuv14.html\\\") VUV-14 Detector\\r\\n              a(href=\\\"p-vuv14d.html\\\") VUV-14D Detector\\r\\n              a(href=\\\"p-vuv-40f.html\\\") VUV-40F Detector\\r\\n        li\\r\\n          a(href=\\\"distributor.html\\\") Become a Distributor\\r\\n        li\\r\\n          a(href=\\\"contact.html\\\" id=\\\"contact-btn\\\") Contact Us\\r\\n        \\r\\n    .mobile-nav#mobile-nav\\r\\n      a(href=\\\"#mobile-nav\\\") #[i.fas.fa-bars]\\r\\n      .mobile-container\\r\\n        i.fas.fa-times\\r\\n        ul\\r\\n          li.logo #[img(src=\\\"images/visaconlogocolor.png\\\")]\\r\\n          li #[a(href=\\\"index.html\\\").nav-item Home]\\r\\n          li.dropdown #[a(href=\\\"#\\\").nav-item GC Consumables #[i.fas.fa-angle-down]]\\r\\n            ul              \\r\\n              li #[a(href=\\\"p-gc-ferrules.html\\\").nav-item GC Ferrules]\\r\\n              li #[a(href=\\\"p-gc-liners.html\\\").nav-item GC Inlet Liners]\\r\\n              li #[a(href=\\\"p-vials.html\\\").nav-item Vials, Caps, & Liners]\\r\\n              li #[a(href=\\\"p-gas.html\\\").nav-item Gas Purification]\\r\\n              li #[a(href=\\\"p-silicone.html\\\").nav-item GC Septa]\\r\\n              li #[a(href=\\\"p-glass.html\\\").nav-item Glass Fabrication]\\r\\n          li.dropdown #[a(href=\\\"#\\\").nav-item UV Detectors #[i.fas.fa-angle-down]]\\r\\n            ul\\r\\n              li #[a(href=\\\"p-euv.html\\\").nav-item EUV Detector]\\r\\n              li #[a(href=\\\"p-vuv24.html\\\").nav-item VUV-24 Detector]\\r\\n              li #[a(href=\\\"p-vuv14.html\\\").nav-item VUV-14 Detector]\\r\\n              li #[a(href=\\\"p-vuv14d.html\\\").nav-item VUV-14D Detector]  \\r\\n              li #[a(href=\\\"p-vuv-40f.html\\\").nav-item VUV-40F Detector]   \\r\\n                   \\r\\n              \\r\\n          \\r\\n          li #[a(href=\\\"distributor.html\\\").nav-item Become a Distributor]  \\r\\n          li.contact #[a(href=\\\"contact.html\\\" id= \\\"mobile-contact-btn\\\").nav-item Contact Us]\\r\\n          \\r\\n        a(href=\\\"#\\\").overlay\\r\\n      \\r\\n      \\r\\n      \"\n\n//# sourceURL=webpack:///./app/src/pug/components/header.pug?");

/***/ }),

/***/ "./app/src/pug/contact.pug":
/*!*********************************!*\
  !*** ./app/src/pug/contact.pug ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"html\\r\\n  head\\r\\n    title Contact Us\\r\\n    include components/head\\r\\n    script(src=\\\"https://www.google.com/recaptcha/api.js\\\")\\r\\n  body\\r\\n    include components/header\\r\\n\\r\\n    #wrapper.contact\\r\\n      div\\r\\n        h1 Contact Us\\r\\n        br\\r\\n        p We're always looking to get feedback from our clients, whether they've purchased from us in the past, or are thinking about doing business with us in the future. Please feel free to reach out to us with any questions about our products.\\r\\n        br\\r\\n        br\\r\\n        p You can contact us directly via one of the methods listed below, or you can send us an email by using the form conveniently located on this page. We'll get back to you as soon as possible.\\r\\n        br\\r\\n        br\\r\\n        h3 Address\\r\\n        .info\\r\\n          p Reflect Scientific Inc.\\r\\n          p 1266 South 1380 West   \\r\\n          p Orem, Utah   84058     \\r\\n        br\\r\\n        h3 Email\\r\\n        .info\\r\\n          p #[a(href=\\\"mailto:info@visacon.com\\\") info@visacon.com]\\r\\n        br\\r\\n        h3 Telephone\\r\\n        .info\\r\\n          p (801) 226-4100\\r\\n      include components/contact-component\\r\\n\\r\\n    include components/footer\"\n\n//# sourceURL=webpack:///./app/src/pug/contact.pug?");

/***/ }),

/***/ "./app/src/pug/distributor.pug":
/*!*************************************!*\
  !*** ./app/src/pug/distributor.pug ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"html\\n  head\\n    title Become a Distributor\\n    include components/head\\n    script(src=\\\"https://www.google.com/recaptcha/api.js\\\")\\n  body\\n    include components/header\\n\\n    #wrapper.contact\\n      div\\n        h1 Become a Distributor\\n        br\\n        p Interested in becoming a distributor?  \\n        br\\n        p Please fill out the form to start the process and receive our distributor price list. \\n        br \\n        p Join our team of distributors who have seen the advantage of private labeling their products to build up their brand.\\n        br\\n        br\\n        img(src=\\\"images/private-labeling-part-2.jpg\\\", style=\\\"max-width: 100%;\\\")\\n      include components/distributor-signup\\n\\n    include components/footer\\n\"\n\n//# sourceURL=webpack:///./app/src/pug/distributor.pug?");

/***/ }),

/***/ "./app/src/pug/index.pug":
/*!*******************************!*\
  !*** ./app/src/pug/index.pug ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"html\\n  head\\n    title Visacon\\n    include components/head\\n  body\\n    include components/header\\n\\n    #wrapper\\n      .hero-image\\n        .overlay\\n        img(src=\\\"images/PrivateLabeling1.jpg\\\")\\n        .info\\n          h1 FREE PRIVATE LABELING\\n          p Build up your own brand, not someone else&apos;s.  Visacon will private label all products with your logo, company name and contact information.\\n          a(href=\\\"distributor.html\\\") BECOME A DISTRIBUTOR\\n      main\\n        .row\\n          a(href=\\\"p-gc-ferrules.html\\\")\\n            .content-container\\n              img(src=\\\"images/home/GC_Ferrules.jpg\\\", alt=\\\"GC Ferrules\\\")\\n              p Ferrules for Chromatography.\\n            h2 GC FERRULES\\n          a(href=\\\"p-gc-liners.html\\\")\\n            .content-container\\n              img(src=\\\"images/home/GC_Inlet_Liners.jpg\\\", alt=\\\"GC Liners\\\")\\n              p A large variety of standard and custom liners for chromatography. \\n            h2 GC INLET LINERS\\n          a(href=\\\"p-vials.html\\\")\\n            .content-container\\n              img(src=\\\"images/home/Vials_CE_Vials,Caps_Septa.jpg\\\", alt=\\\"Vials, Caps, & Inserts\\\")\\n              p Comprehensive line of vials, caps &amp; inserts used in autosampling and headspace analysis. \\n            h2 VIALS, CAPS, &amp; INSERTS\\n          a(href=\\\"p-gas.html\\\")\\n            .content-container\\n              img(src=\\\"images/home/GAS-Purification.jpg\\\", alt=\\\"Gas vials\\\")\\n              p For removal of moisture, hydrocarbon, and oxygen from carrier gases. \\n            h2 GAS PURIFICATION\\n        .row\\n          a(href=\\\"p-silicone.html\\\")\\n            .content-container\\n              img(src=\\\"images/home/GCSepta.jpg\\\", alt=\\\"Rubber products\\\")\\n              p GC Septa. \\n            h2 GC SEPTA\\n          a(href=\\\"p-glass.html\\\")\\n            .content-container\\n              img(src=\\\"images/home/Glass_Fabrication.jpg\\\", alt=\\\"Glass products\\\")\\n              p Custom glass fabrication and repair. \\n            h2 GLASS FABRICATION\\n          a(href=\\\"p-euv.html\\\")\\n            .content-container\\n              img(src=\\\"images/home/EUV.jpg\\\", alt=\\\"EUV Detector\\\")\\n              p Low Cost Fixed Wavelength Detector. \\n            h2 EUV DETECTOR       \\n          a(href=\\\"p-vuv24.html\\\")\\n            .content-container\\n              img(src=\\\"images/home/VUV-24.jpg\\\", alt=\\\"VUV-24 Detector\\\")\\n              p Variable wavelength UV/VIS detector.\\n            h2 VUV-24 DETECTOR\\n        .row\\n          a(href=\\\"p-vuv14.html\\\")\\n            .content-container\\n              img(src=\\\"images/products/Detector_VUV14_Face.jpg\\\", alt=\\\"VUV-14 Detector\\\")\\n              p Fixed 245nm wavelength UV detector. \\n            h2 VUV-14 DETECTOR\\n          a(href=\\\"p-vuv14d.html\\\")\\n            .content-container\\n              img(src=\\\"images/products/VUV-14D.jpg\\\", alt=\\\"VUV-14D Detector\\\")\\n              p Filter selectable fixed wavelength UV detector with D2 Lamp. \\n            h2 VUV-14D DETECTOR\\n          a(href=\\\"p-vuv-40f.html\\\")\\n            .content-container\\n              img(src=\\\"images/products/vuv40f.jpg\\\", alt=\\\"VUV-40F Detector\\\")\\n              p Dual Beam Fixed Wavelength Absorbance Detector. \\n            h2 VUV-40F DETECTOR\\n\\n    include components/footer\"\n\n//# sourceURL=webpack:///./app/src/pug/index.pug?");

/***/ }),

/***/ "./app/src/pug/p-euv.pug":
/*!*******************************!*\
  !*** ./app/src/pug/p-euv.pug ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\nextends templates/product\\n\\nblock product-title\\n  title EUV Detector\\n\\nblock description\\n  h1 EUV Fixed Wavelength UV Absorbance Monitor\\n  div \\n    a(href=\\\"catalogs/HPLC_Catalog.pdf\\\"  target=\\\"_blank\\\") #[i.far.fa-file-alt] View Online Catalog\\n    //-a#calculator(href=\\\"#\\\") Calculate Storage Space\\n    //- a Download Map\\n  p The EUV model is a low cost fixed wavelength light absorbance monitor designed for chromatography. Although it does not have the sensitivity of our VUV-14 analytical unit it is ideally suited for applications where there is a relatively high absorbance signal or where the amount of sample is not limited. The EUV can be used with a computer or configured as a standalone unit.\\n\\n\\nblock table \\n    table    \\n      tr\\n        td Light source\\n        td Mercury lamp 254 nm\\n      tr\\n        td Optical design\\n        td Interference filter with lamp noise correction\\n      tr\\n        td Wavelength selection\\n        td Hg lamp: 254 nm with +/- 20 nm band pass filter\\n      tr\\n        td Input/Output Connections\\n        td USB\\n      tr\\n        td Sample Cell\\n        td \\tFlow cell with 5mm path length, total dead volume 9 uL (illuminated volume)\\n\\n  \\n\\nblock image-slider\\n  img(src=\\\"images/products/EUV.jpg\\\")\\n  \\n\\nblock features-benefits\\n  div\\n    .left\\n      div\\n        h2 Fixed Wavelength\\n        p The EUV uses a replaceable low pressure Hg lamp for a wavelength emission of 254nm.\\n      div\\n        h2 Sampling\\n        p Sampling is accomplished using a gasketless flow through chemically inert cell with a path length of 5mm.\\n      div\\n        h2 Low cost, low maintenance\\n        p The EUV utilizes a unique optical design that eliminates expensive optical components but still provides a good detection sensitivity. Total part count has been reduced resulting in a very easy to service, rugged design.\\n      \\n    .right\\n      div\\n        h2 Original Equipment Manufacturer\\n        p Visacon offers complete units for private label to individual modules designed to fit your specific application. For further information please contact us. \\n      div\\n        h2 Rugged, minimal parts design\\n        p Lowers cost while maintaining acceptable sensitivity for high analyte concentration applications. More rugged than typical analytical instruments allow its use in industrial settings.\\n      div\\n        h2 No gasket sample cell\\n        p Our no gasket sample cell makes cleaning and repair simple. Unscrew the cell, clean and reassemble.\\n             \\n      \\n        \\n\\n\\n  \\n\"\n\n//# sourceURL=webpack:///./app/src/pug/p-euv.pug?");

/***/ }),

/***/ "./app/src/pug/p-gas.pug":
/*!*******************************!*\
  !*** ./app/src/pug/p-gas.pug ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\nextends templates/product\\n\\nblock product-title\\n  title Gas Purification\\n\\nblock description\\n  h1 Gas Purification\\n  div \\n    a(href=\\\"catalogs/oem.pdf\\\" target=\\\"_blank\\\") #[i.far.fa-file-alt] View Online Catalog\\n    //-a#calculator(href=\\\"#\\\") Calculate Storage Space\\n    //- a Download Map\\n  p Reflect Scientific offers three different types of purifiers for removal of moisture, hydrocarbon, and oxygen from carrier gases.\\n  br \\n  p All have been proven cost effective in preventing column degradation, eliminating baseline drift and maximizing the accuracy of analytical data.\\n  br \\n  p They have been designed for optimum rate and breakthrough capacity. For best overall results in contaminant removal they should be used in combination.\\n  br\\n  p Custom manufacturing of purification devices is also available. We can handle a diverse range of chamber designs with materials of construction such as Aluminum, Stainless Steel, Teflon and Polycarbonate.\\n  br\\n  p If you'd like to find out more about Gas Purification, and more about what the Reflect Scientific team can do for your specific project, call 801-226-4100. \\n  \\n\\n\\n\\n\\n\\nblock image-slider\\n  img(src=\\\"images/products/GAS-Purification.jpg\\\")  \\n\\nblock features-benefits\\n  div\\n    .left\\n      div\\n        h2 Type 1: High Capacity Moisture Trap\\n        ul\\n          li Treated with ultra pure Helium\\n          li Reduces H<sub>2</sub>0 to less than 15 ppb\\n      div\\n        h2 Type 2: Capillary Grade Hydrocarbon Trap\\n        ul\\n          li Purged with ultra pure helium\\n          li Activated carbon base\\n   \\n    .right\\n      div\\n        h2 Type 3: High Capacity Oxygen Trap\\n        ul\\n          li High efficiency getter\\n          li Reduces 02 to 15 ppb\\n        \\n          \\n\\n\\n  \\n\"\n\n//# sourceURL=webpack:///./app/src/pug/p-gas.pug?");

/***/ }),

/***/ "./app/src/pug/p-gc-ferrules.pug":
/*!***************************************!*\
  !*** ./app/src/pug/p-gc-ferrules.pug ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\nextends templates/product\\n\\nblock product-title\\n  title GC Ferrules\\n\\nblock description\\n  h1 GC Ferrules\\n  div \\n    a(href=\\\"catalogs/oem.pdf\\\" target=\\\"_blank\\\") #[i.far.fa-file-alt] View Online Catalog\\n    //-a#calculator(href=\\\"#\\\") Calculate Storage Space\\n    //- a Download Map\\n  p With over 20 years of experience, Visacon offers you the highest quality GC Ferrules for your various applications. We offer custom and specialty application ferrules. Our ferrules will work in the following instruments: Agilent (HP), Varian, Bruker, Perkin Elmer, Antek, Carlo Erba, Finnigan (TMQ), Gow Mac , HNU, Shimadzu, SRI, Thermo Scientific, Tracor.\\n  br\\n  p We can provide you with any size ferrule to fit all of your applications. We offer the following materials for ferrules:\\n  ul\\n    li 60% Polyimide/40% Graphite\\n    li 85% Polyimide/15% Graphite\\n    li 100% Graphite\\n    li 100% Polyimide\\n    li 100% PTFE\\n\\n\\n\\n\\nblock image-slider\\n  img(src=\\\"images/products/GC_Ferrules.jpg\\\")\\n  \\n\\nblock features-benefits\\n  div\\n    .left\\n      div\\n        h2 60% Polyimide/40% Graphite Ferrules\\n        ul\\n          li Stable to 400 &amp;degC\\n          li Minimal Torque Required to Seal\\n          li Reusable, One-piece Design, Precision Drilled\\n          li Excellent for Vacuum & High Pressure Applications\\n          li Recommended for Mass Spec Transfer Line\\n          li Offers the Best Combination of Sealing and Easy Workability\\n          li Ferrules for Capillary and Standard Columns\\n      div\\n        h2 85% Polyimide/15% Graphite Ferrules\\n        ul\\n          li Stable to 400 &degC\\n          li Minimal Torque Required to Seal\\n          li Reusable, One-piece Design, Precision Drilled\\n          li Excellent for Vacuum & High Pressure Applications\\n          li Ferrules for Capillary and Standard Columns\\n      div\\n        h2 100% Graphite Ferrules\\n        ul\\n          li Stable to 450 &degC\\n          li High Purity Graphite, Preferred for Capillary GC Use\\n          li High Density Graphite\\n          li Preconditioned to Eliminate Out-Gassing\\n          li Contains No Binders that can Out-Gas or Absorb Analytes\\n          li Smooth & Clean Edges - Better than Conventional Graphite Ferrules\\n          li Does not stick to Glass or Fused Silica\\n      \\n    .right\\n      div\\n        h2 100% Polyimide Ferrules\\n        ul\\n          li 350 &degC Upper Temperature Limit\\n          li One Piece Ferrule Design\\n          li May Bleed at Higher Temperatures\\n          li Excellent Physical Properties 100% High Temperature Polyimide\\n          li Does not Cold Flow\\n      div\\n        h2 100% PTFE Ferrules\\n        ul\\n          li 250 &degC Upper Temperature Limit\\n          li Non Stick, One Piece Ferrule Design\\n          li 100% PTFE, Chemically Inert\\n         \\n\\n\\n  \\n\"\n\n//# sourceURL=webpack:///./app/src/pug/p-gc-ferrules.pug?");

/***/ }),

/***/ "./app/src/pug/p-gc-liners.pug":
/*!*************************************!*\
  !*** ./app/src/pug/p-gc-liners.pug ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\nextends templates/product\\n\\nblock product-title\\n  title GC Inlet Liners\\n\\nblock description\\n  h1 Injection Port Liners\\n  div \\n    a(href=\\\"catalogs/oem.pdf\\\" target=\\\"_blank\\\") #[i.far.fa-file-alt] View Online Catalog\\n    //-a#calculator(href=\\\"#\\\") Calculate Storage Space\\n    //- a Download Map\\n  p Reflect Scientific offers a comprehensive line of deactivated glass inlet liners for a wide variety of gas chromatographs. We manufacture our liners from the highest quality glass available. All liners are available unpacked and packed with glass wool, quartz wool and/or customer specified packing materials.\\n  br\\n  p Several deactivation processes are available to ensure complete inertness for your most critical applications. Consistent dimensions and tolerances assure you the highest quality liners available today.\\n  br\\n  p We can prepare a custom liner designed by your in house engineering department or let Reflect Scientific design the perfect insert to meet your requirements.\\n  br\\n  p If you'd like to find out more about Injection Port Liners, and more about what the Reflect Scientific team can do for your specific project, call 801-226-4100. \\n\\n\\n\\n\\n\\nblock image-slider\\n  img(src=\\\"images/products/GC_Inlet_Liners.jpg\\\" id=\\\"liners-img\\\")\\n  //-img(src=\\\"images/products/gc-liners/liners-closeup1.jpg\\\")\\n  \\n\\nblock features-benefits\\n  div\\n    .left\\n      \\n      \\n    .right\\n      \\n         \\n\\n\\n  \\n\"\n\n//# sourceURL=webpack:///./app/src/pug/p-gc-liners.pug?");

/***/ }),

/***/ "./app/src/pug/p-glass.pug":
/*!*********************************!*\
  !*** ./app/src/pug/p-glass.pug ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\nextends templates/product\\n\\nblock product-title\\n  title Glass Fabrication\\n\\nblock description\\n  h1 Glass Fabrication\\n  div \\n    a(href=\\\"catalogs/oem.pdf\\\" target=\\\"_blank\\\") #[i.far.fa-file-alt] View Online Catalog\\n    //-a#calculator(href=\\\"#\\\") Calculate Storage Space\\n    //- a Download Map\\n  p Since 1992, Reflect Scientific has been serving the needs of scientists across a broad spectrum of industries with superior glassware.\\n  br \\n  p We offer you a complete line of custom glassware assemblies.\\n  br\\n  p No job is too small. No specification too demanding. Our goal is product excellence backed up by reliable service.\\n  br \\n  p We also handle repairs, which can offer significant savings compared to the cost of a new purchase.\\n  br\\n  p If you'd like to find out more about Glass Fabrication, and more about what the Reflect Scientific team can do for your specific project, call 801-226-4100. \\n  \\n \\n\\n\\n\\n\\nblock image-slider\\n  img(src=\\\"images/products/Glass_Fabrication.jpg\\\")  \\n\\nblock features-benefits\\n  div\\n    .left\\n      div\\n        h2 Industries Served: \\n        ul\\n          li OEM products\\n          li Electronic\\n          li Custom/Specialty\\n          li Laboratory\\n          li Experimental\\n          li Chromatography\\n      \\n      \\n      \\n    .right\\n      div\\n        h2 Glass Materials\\n        ul\\n          li Borosilicate\\n          li Quartz\\n          li Soda-lime\\n          li Vycor\\n          li Uranium\\n        \\n          \\n\\n\\n  \\n\"\n\n//# sourceURL=webpack:///./app/src/pug/p-glass.pug?");

/***/ }),

/***/ "./app/src/pug/p-silicone.pug":
/*!************************************!*\
  !*** ./app/src/pug/p-silicone.pug ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\nextends templates/product\\n\\nblock product-title\\n  title Silicone Rubber Products\\n\\nblock description\\n  h1 Silicone Rubber Products\\n  div \\n    a(href=\\\"catalogs/oem.pdf\\\" target=\\\"_blank\\\") #[i.far.fa-file-alt] View Online Catalog\\n    //-a#calculator(href=\\\"#\\\") Calculate Storage Space\\n    //- a Download Map\\n  p Reflect Scientific offers a variety of silicone based products that can be used across a very broad range of industrial applications.\\n  br \\n  p Silicone compounds are perhaps the most versatile materials on the market today. They can outperform all other elastomers in a temperature range of -65 to 500 &degF.\\n  br\\n  p No matter how diverse your needs are, we can provide an exacting product! If you'd like to find out more about Silicone Rubber Products, and more about what the Reflect Scientific team can do for your specific project, call 801-226-4100. \\n        \\n \\n\\n\\n\\n\\nblock image-slider\\n  img(src=\\\"images/products/GCSepta.jpg\\\")  \\n\\nblock features-benefits\\n  div\\n    .left\\n      div\\n        h2 Typically they find application in the following areas:\\n        ul\\n          li Sealants/Septas\\n          li Coatings\\n          li Lubricants\\n          li Adhesives\\n          li Conductivity media\\n    .right\\n      div\\n        h2 Formed sheets, membranes and thin films formed products are available in cut sizes, sheets and pads with the following options:\\n        ul\\n          li Teflon, Mylar or Aluminum lined\\n          li Cross slit\\n          li Laser drilled holes\\n          li GC injection port septa\\n          li Vial cap liners\\n        \\n          \\n\\n\\n  \\n\"\n\n//# sourceURL=webpack:///./app/src/pug/p-silicone.pug?");

/***/ }),

/***/ "./app/src/pug/p-vials.pug":
/*!*********************************!*\
  !*** ./app/src/pug/p-vials.pug ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\nextends templates/product\\n\\nblock product-title\\n  title Vials, Caps &amp; Inserts\\n\\nblock description\\n  h1 Vials, Caps &amp; Inserts\\n  div \\n    a(href=\\\"catalogs/oem.pdf\\\" target=\\\"_blank\\\") #[i.far.fa-file-alt] View Online Catalog\\n    //-a#calculator(href=\\\"#\\\") Calculate Storage Space\\n    //- a Download Map\\n  p Reflect Scientific offers a comprehensive line of vials, caps &amp; inserts for use in autosampling and headspace analysis.\\n  h2 Vials\\n  p Choose from a variety of sizes ranging from 8x40mm to 30x54mm.\\n  p Materials of construction are typically:\\n  ul\\n    li Type1, 33 Expansion Borosilicate glass(Clear)\\n    li Type1, 51 Expansion Borosilicate glass(Amber)\\n    li Polypropylene\\n    li TPX(PolyMethyl Pentene)\\n  p Range of vial sizes: \\n  ul\\n    li 8x40mm\\n    li 12x32mm\\n    li 15x45mm\\n    li 18x50mm\\n    li 20x38mm\\n    li 22x38mm\\n    li 23x46mm\\n    li 22x75mm\\n    li 23x75mm\\n    li 30x54mm\\n\\n\\n\\n\\nblock image-slider\\n  img(src=\\\"images/products/Vials_CE_Vials,Caps_Septa.jpg\\\")\\n  img(src=\\\"images/products/VialKit_ScrewTopStandard.jpg\\\")\\n  img(src=\\\"images/products/Vials_Caps_Inserts.jpg\\\")  \\n\\nblock features-benefits\\n  div\\n    .left\\n      div\\n        h2 Caps\\n        p Choose from a wide range of caps &amp; seals, including:\\n        ul\\n          li Teflon/Silicone Liners(low bleed)\\n          li Teflon/Butyl Rubber Liners\\n          li Teflon/Red Rubber Liners\\n          li 8,9,&amp; 10mm Poylpropylene Screw Caps\\n          li 11 &amp; 20mm Snap Caps Polyethylene\\n          li 8,11,&amp; 20mm Aluminum Crimp Seals\\n          li 20mm Magnetic Crimp Seals\\n        \\n      \\n      \\n    .right\\n      div\\n        h2 Inserts\\n        p Choose from inserts in sizes ranging from 4x27mm to 6x38mm, including: \\n        ul\\n          li 4x25mm w/spring\\n          li 4x27mm\\n          li 5x30mm\\n          li 5x30mm w/spring\\n          li 5x31mm\\n          li 5x36mm\\n          li 5x36mm w/spring\\n          li 6x25mm w/spring\\n          li 6x29mm\\n          \\n\\n\\n  \\n\"\n\n//# sourceURL=webpack:///./app/src/pug/p-vials.pug?");

/***/ }),

/***/ "./app/src/pug/p-vuv-40f.pug":
/*!***********************************!*\
  !*** ./app/src/pug/p-vuv-40f.pug ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\nextends templates/product-vuv\\n\\nblock product-title\\n  title VUV-40F Detector\\n\\nblock description\\n  img(src=\\\"images/products/vuv40f1.png\\\" class=\\\"vuv-desk-hide\\\")\\n  h1 VUV-40F Dual Beam Fixed Wavelength Absorbance Monitor\\n  div \\n    a(href=\\\"catalogs/HPLC_Catalog.pdf\\\"  target=\\\"_blank\\\") #[i.far.fa-file-alt] View Online Catalog\\n    //-a#calculator(href=\\\"#\\\") Calculate Storage Space\\n    //- a Download Map\\n  p The VUV-40F is a dual beam, fixed wavelength, optical absorbance detector for liquid chromatography. The OEM module can be configured in a variety of ways from standalone operation to incorporation into a dedicated analyzer. Choice of light source includes: Hg and D2 lamps for UV absorbance and high intensity LEDs for the visible range.\\n  br\\n  p A series of sample cell options are also available from preparative to micro volume. Standard data output formats available are USB, RS232 and IEE488. Typical applications are in HPLC systems, dedicated analyzers and private label instrumentation.\\n\\n\\nblock table\\n  p &nbsp&nbsp&nbsp * Constant temperature with standard 10 mm cell (air). \\n\\n  table \\n      \\n    tr\\n      td Light source\\n      td Low pressure mercury lamp 254 nm<br>Deuterium 190 nm-400 nm<br>LED (discrete wavelengths)<br>Xenon flash 200 nm-800 nm\\n    tr\\n      td Optical design\\n      td Double beam (sample/reference)\\n    tr\\n      td Wavelength selection\\n      td Customer replaceable interference filter (filter not required on LED light source however it is application dependent)\\n    tr\\n      td Wavelength accuracy\\n      td Defined by elemental line emission characteristics of the lamp\\n    tr\\n      td Wavelength precision\\n      td Better than +/- 0.2 nm\\n    tr\\n      td Band pass\\n      td Low pressure mercury lamp < 0.1 nm<br>Deuterium/Xenon lamp typically 10.0 nm at half height (dependent on interference filter)<br>LED 5 nm-40 nm dependent on wavelength\\n    tr\\n      td Noise*\\n      td <+/- 1 x 10-5 AU over 30 sec period peak to peak with 1.0 sec rise time\\n    tr\\n      td Drift*\\t\\n      td <+/- 1 x 10-4 AU over 30 min period peak to peak 1.0 sec rise time\\n    tr\\n      td Input/Output\\n      td \\tStandard configuration USB I/O<br>Optional 24 bit analog output or IEEE 488<br>Data rate can be fixed or variable from 80 samples/sec to 30,000 samples/sec.\\n    tr\\n      td Cells\\n      td 5mm, 10mm path length STD cell; 5mm, 10mm path length High flow cell; micro cell, prep cell\\n\\n  \\n\\nblock image-slider\\n  img(src=\\\"images/products/vuv40f.jpg\\\")\\n  \\n\\nblock features-benefits\\n  div.vuv-features \\n    div\\n      h2 Variety of light sources\\n      p The VUV-40F can be configured with Hg, LED, Deuterium or Xenon light sources allowing a wide selection of light throughput, wavelength selection, power and sizes to fit any application.\\n    div\\n      h2 Dual beam\\n      p Compact patented design keeps the optical unit small but with the performance of larger instruments. This allows smaller dedicated OEM designs or smaller footprint for stand-alone instruments.\\n    div\\n      h2 Advanced electronics\\n      p High-resolution output can be accessed by USB or IEE488 protocols. Fully programmable parameters using a host computer are permanently stored in non-volatile memory. Easily integrated with OEM analytical systems. Stand-alone operation configuration for private label instruments is also available.\\n        \\n      \\n        \\n\\n\\n  \\n\"\n\n//# sourceURL=webpack:///./app/src/pug/p-vuv-40f.pug?");

/***/ }),

/***/ "./app/src/pug/p-vuv14.pug":
/*!*********************************!*\
  !*** ./app/src/pug/p-vuv14.pug ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\nextends templates/product-vuv\\n\\nblock product-title\\n  title VUV-14 Detector\\n\\nblock description\\n  img(src=\\\"images/products/vuv14.png\\\" class=\\\"vuv-desk-hide\\\")\\n  h1 VUV-14 Fixed Wavelength UV-VIS Absorbance Monitor\\n  div \\n    a(href=\\\"catalogs/HPLC_Catalog.pdf\\\"  target=\\\"_blank\\\") #[i.far.fa-file-alt] View Online Catalog\\n    //-a#calculator(href=\\\"#\\\") Calculate Storage Space\\n    //- a Download Map\\n  p The VUV-14 is a fixed wavelength light absorbance monitor designed to be used with ultra low volume sampling cells under flowing solvent conditions (i.e. chromatography). The VUV-14 series of detectors has a high resolution analog output with a sensitivity range from 4.0 AU/V to 0.0005 AU/V and feature a state-of-the-art noise level of less than +/-0.00001 AU.\\n  \\n\\n\\nblock table\\n  p &nbsp&nbsp&nbsp* Constant temperature with standard 10 mm cell (air). \\n\\n  table    \\n    tr\\n      td Light source\\n      td Low pressure mercury lamp 254 nm\\n    tr\\n      td Optical design\\n      td Double beam (sample/reference)\\n    tr\\n      td Wavelength selection\\n      td Customer replaceable interference filter\\n    tr\\n      td Wavelength accuracy\\n      td Defined by elemental line emission characteristics of the lamp\\n    tr\\n      td Wavelength precision\\n      td Better than +/- 0.2 nm\\n    tr\\n      td Band pass\\n      td Low pressure mercury lamp <0.1 nm\\n    tr\\n      td Noise*\\n      td <+/- 1 x 10-5 AU over 30 sec period peak to peak with 1.0 sec rise time\\n    tr\\n      td Drift*\\t\\n      td <+/- 1 x 10-4 AU over 30 min period peak to peak 1.0 sec rise time\\n    tr\\n      td Input/Output\\n      td RS-232 computer I/O; auto-injection (event or run); auto-zero input; one analog integrator or chart recorder output, (voltage range default 1.0 V/AU); selectable analog range outputs of 4.0, 2.0, 1.0, 0.5, 0.2, 0.1, 0.05, 0.01, 0.005, 0.002, 0.001, 0.0005 AU/V with voltage range of +/- 4V at any scale\\n    tr\\n      td Display\\n      td Absorbance (5 digit LED); wavelength (3 digit LED); analog output range (momentarily from absorbance display by pressing range switch); reference and sample light levels\\n    tr\\n      td Size\\n      td 6.6\\\" x 9.4\\\" x 15\\\" (HxWxD), Approx. 12 lb (shipping weight)\\n\\n  \\n\\nblock image-slider\\n  img(src=\\\"images/products/Detector_VUV14_Face.jpg\\\")\\n  \\n\\nblock features-benefits\\n  div.vuv-features \\n    div\\n      h2 High Sensitivity\\n      p The VUV-14 series of detectors has a high-resolution analog output with sensitivity range from 4.0 AU/V to 0.0005 AU/V and feature a state-of-the-art noise level of less than +/-0.00001 AU\\n    div\\n      h2 Flexible Configurations\\n      p The VUV-14 can be configured to use one of several light sources. Choices include a deuterium lamp with a working wavelength range from 190 nm to 400 nm, low pressure mercury lamp with a single wavelength of 254 nm, and a tungsten lamp that accommodates wavelengths from 400 nm to 900 nm. Specific wavelengths are selected by using an interference filter. One filter is included with each detector. <br>The VUV-14 has a broad line of sample cells available. These include cells designed for on column capillary monitoring, standard and high flow 5 mm and 10 mm path length HPLC cells, and preparative LC. Whatever your application the VUV-14 can serve as a reliable source for obtaining the results you want.\\n    div\\n      h2 Reliable, Rugged, Low Maintenance Design\\n      p The VUV-14 is constructed with a high reliability lamp, true double beam sample/reference light paths and a robust universal power supply. A rugged tactile feedback keypad for instrument control is standard.\\n    div\\n      h2 Original Equipment Manufacturer\\n      p Reflect Scientific offers complete units for private label to individual modules designed to fit your specific application. For further information please contact Reflect Scientific.\\n    \\n      \\n        \\n\\n\\n  \\n\"\n\n//# sourceURL=webpack:///./app/src/pug/p-vuv14.pug?");

/***/ }),

/***/ "./app/src/pug/p-vuv14d.pug":
/*!**********************************!*\
  !*** ./app/src/pug/p-vuv14d.pug ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\nextends templates/product-vuv\\n\\nblock product-title\\n  title VUV-14D Detector\\n\\nblock description\\n  img(src=\\\"images/products/vuv14d.png\\\" class=\\\"vuv-desk-hide\\\")\\n  h1 VUV-14D Fixed Wavelength UV-VIS Absorbance Monitor\\n  div \\n    a(href=\\\"catalogs/HPLC_Catalog.pdf\\\"  target=\\\"_blank\\\") #[i.far.fa-file-alt] View Online Catalog\\n    //-a#calculator(href=\\\"#\\\") Calculate Storage Space\\n    //- a Download Map\\n  p The VUV-14D is a fixed wavelength light absorbance monitor designed to be used with ultra low volume sampling cells under flowing solvent conditions (i.e. chromatography). The VUV-14D series of detectors has a high resolution analog output with a sensitivity range from 4.0 AU/V to 0.0005 AU/V and feature a state-of-the-art noise level of less than +/-0.00001 AU.\\n  \\n\\n\\nblock table\\n  p &nbsp;&nbsp;&nbsp;* Constant temperature with standard 10 mm cell (air). \\n\\n  table    \\n    tr\\n      td Light source\\n      td Deuterium 190 nm - 400 nm\\n    tr\\n      td Optical design\\n      td Double beam (sample/reference)\\n    tr\\n      td Wavelength selection\\n      td Customer replaceable interference filter\\n    tr\\n      td Wavelength accuracy\\n      td Defined by interferance filter (varies by wavelength)\\n    tr\\n      td Wavelength precision\\n      td Better than +/- 0.2 nm\\n    tr\\n      td Band pass\\n      td Deuterium lamp typically 10.0 nm at half height (dependent on interference filter)\\n    tr\\n      td Noise*\\n      td <+/- 1 x 10-5 AU over 30 sec period peak to peak with 1.0 sec rise time\\n    tr\\n      td Drift*\\t\\n      td <+/- 1 x 10-4 AU over 30 min period peak to peak 1.0 sec rise time\\n    tr\\n      td Input/Output\\n      td RS-232 computer I/O; auto-injection (event or run); auto-zero input; one analog integrator or chart recorder output, (voltage range default 1.0 V/AU); selectable analog range outputs of 4.0, 2.0, 1.0, 0.5, 0.2, 0.1, 0.05, 0.01, 0.005, 0.002, 0.001, 0.0005 AU/V with voltage range of +/- 4V at any scale\\n    tr\\n      td Display\\n      td Absorbance (5 digit LED); wavelength (3 digit LED); analog output range (momentarily from absorbance display by pressing range switch); reference and sample light levels\\n    tr\\n      td Size\\n      td 6.6\\\" x 9.4\\\" x 15\\\" (HxWxD), Approx. 12 lb (shipping weight)\\n\\n  \\n\\nblock image-slider\\n  img(src=\\\"images/products/vuv14d/VUV-14D.jpg\\\")\\n  \\n\\nblock features-benefits\\n  div.vuv-features   \\n    div\\n      h2 High Sensitivity\\n      p The VUV-14D series of detectors has a high-resolution analog output with sensitivity range from 4.0 AU/V to 0.0005 AU/V and feature a state-of-the-art noise level of less than +/-0.00001 AU\\n    div\\n      h2 Flexible Configurations\\n      p The VUV-14D can be configured to use one of several light sources. Choices include a deuterium lamp with a working wavelength range from 190 nm to 400 nm, low pressure mercury lamp with a single wavelength of 254 nm, and a tungsten lamp that accommodates wavelengths from 400 nm to 900 nm. Specific wavelengths are selected by using an interference filter. One filter is included with each detector. <br>The VUV-14D has a broad line of sample cells available. These include cells designed for on column capillary monitoring, standard and high flow 5 mm and 10 mm path length HPLC cells, and preparative LC. Whatever your application the VUV-14D can serve as a reliable source for obtaining the results you want.\\n    div\\n      h2 Reliable, Rugged, Low Maintenance Design\\n      p The VUV-14D is constructed with a high reliability lamp, true double beam sample/reference light paths and a robust universal power supply. A rugged tactile feedback keypad for instrument control is standard.\\n    div\\n      h2 Wavelength Selection\\n      p The deuterium lamp has a working wavelength range from 190 nm to 400 nm. Specific wavelengths are selected by using a keypad input or RS-232 interface.\\n    div\\n      h2 Original Equipment Manufacturer\\n      p Reflect Scientific offers complete units for private label to individual modules designed to fit your specific application. For further information please contact Reflect Scientific.\\n    \\n      \\n        \\n\\n\\n  \\n\"\n\n//# sourceURL=webpack:///./app/src/pug/p-vuv14d.pug?");

/***/ }),

/***/ "./app/src/pug/p-vuv24.pug":
/*!*********************************!*\
  !*** ./app/src/pug/p-vuv24.pug ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\nextends templates/product-vuv\\n\\nblock product-title\\n  title VUV-24 Detector\\n\\nblock description\\n  img(src=\\\"images/products/vuv24.png\\\" class=\\\"vuv-desk-hide\\\")\\n  h1 VUV-24 Variable Wavelength UV-VIS Absorbance Monitor\\n  div \\n    a(href=\\\"catalogs/HPLC_Catalog.pdf\\\"  target=\\\"_blank\\\") #[i.far.fa-file-alt] View Online Catalog\\n    //-a#calculator(href=\\\"#\\\") Calculate Storage Space\\n    //- a Download Map\\n  p The VUV-24 is a variable wavelength light absorbance monitor designed to be used with ultra low volume sampling cells under flowing solvent conditions (i.e. chromatography). The VUV-24 series of detectors has a high resolution analog output with a sensitivity range from 4.0 AU/V to 0.0005 AU/V and feature a state-of-the-art noise level of less than +/-0.00001 AU.\\n  \\n\\n\\nblock table\\n  p &nbsp;&nbsp;&nbsp;* Constant temperature with standard 10 mm cell (air). \\n\\n  table    \\n    tr\\n      td Light source\\n      td Deuterium 190 nm-400 nm, >2000 hour service life\\n    tr\\n      td Optical design\\n      td Double beam (sample/reference)\\n    tr\\n      td Wavelength selection\\n      td User selectable (front panel or RS232) in 1nm increments\\n    tr\\n      td Wavelength accuracy\\n      td Better than +/- 2 nm range\\n    tr\\n      td Wavelength precision\\n      td Better than +/- 0.2 nm\\n    tr\\n      td Band pass\\n      td <8.0 nm (typical) at half-height @ 250 nm\\n    tr\\n      td Noise*\\n      td <+/- 1 x 10-5 AU over 30 sec period peak to peak with 1.0 sec rise time\\n    tr\\n      td Drift*\\t\\n      td <+/- 1 x 10-4 AU over 30 min period peak to peak 1.0 sec rise time\\n    tr\\n      td Input/Output\\n      td RS-232 computer I/O; auto-injection (event or run); auto-zero input; one analog integrator or chart recorder output, (voltage range default 1.0 V/AU); selectable analog range outputs of 4.0, 2.0, 1.0, 0.5, 0.2, 0.1, 0.05, 0.01, 0.005, 0.002, 0.001, 0.0005 AU/V with voltage range of +/- 4V at any scale\\n    tr\\n      td Display\\n      td Absorbance (5 digit LED); wavelength (3 digit LED); analog output range (momentarily from absorbance display by pressing range switch); reference and sample light levels\\n    tr\\n      td Size\\n      td 6.6\\\" x 9.4\\\" x 15\\\" (HxWxD), Approx. 12 lb (shipping weight)\\n\\n  \\n\\nblock image-slider\\n  img(src=\\\"images/products/VUV-24.jpg\\\")\\n  \\n\\nblock features-benefits\\n  div.vuv-features\\n    div\\n      h2 High Sensitivity\\n      p The VUV-24 series of detectors has a high-resolution analog output with sensitivity range from 4.0 AU/V to 0.0005 AU/V and feature a state-of-the-art noise level of less than +/-0.00001 AU\\n    div\\n      h2 Flexible Configurations\\n      p The VUV-24 can be configured to use one of several light sources. Choices include a deuterium lamp with a working wavelength range from 190 nm to 400 nm, low pressure mercury lamp with a single wavelength of 254 nm, and a tungsten lamp that accommodates wavelengths from 400 nm to 900 nm. Specific wavelengths are selected by using an interference filter. One filter is included with each detector. <br>The VUV-24 has a broad line of sample cells available. These include cells designed for on column capillary monitoring, standard and high flow 5 mm and 10 mm path length HPLC cells, and preparative LC. Whatever your application the VUV-24 can serve as a reliable source for obtaining the results you want.\\n    div\\n      h2 Reliable, Rugged, Low Maintenance Design\\n      p The VUV-24 is constructed with a high reliability lamp, true double beam sample/reference light paths and a robust universal power supply. A rugged tactile feedback keypad for instrument control is standard.\\n    div\\n      h2 Wavelength Selection\\n      p The deuterium lamp has a working wavelength range from 190 nm to 400 nm. Specific wavelengths are selected by using a keypad input or RS-232 interface.\\n    div\\n      h2 Original Equipment Manufacturer\\n      p Reflect Scientific offers complete units for private label to individual modules designed to fit your specific application. For further information please contact Reflect Scientific.\\n    \\n      \\n        \\n\\n\\n  \\n\"\n\n//# sourceURL=webpack:///./app/src/pug/p-vuv24.pug?");

/***/ }),

/***/ "./app/src/pug/templates/product-vuv.pug":
/*!***********************************************!*\
  !*** ./app/src/pug/templates/product-vuv.pug ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"html\\r\\n  head\\r\\n    block product-title\\r\\n    include ../components/head\\r\\n  body\\r\\n    include ../components/header\\r\\n\\r\\n    #wrapper\\r\\n      .content.vuv\\r\\n        .text\\r\\n          .description\\r\\n            block description\\r\\n\\r\\n          .information\\r\\n            block table\\r\\n        .image-and-features\\r\\n          .image-slider\\r\\n            .control-container\\r\\n              .controls\\r\\n                i.fas.fa-angle-left\\r\\n                i.fas.fa-angle-right\\r\\n              .dots\\r\\n            .images\\r\\n              block image-slider\\r\\n          .features-benefits\\r\\n            div\\r\\n              //- h1 Features &amp Benefits\\r\\n              block features-benefits\\r\\n\\r\\n      \\r\\n\\r\\n    \\r\\n    \\r\\n    include ../components/footer\\r\\n\\r\\n  \\r\\n\\r\\n    \"\n\n//# sourceURL=webpack:///./app/src/pug/templates/product-vuv.pug?");

/***/ }),

/***/ "./app/src/pug/templates/product.pug":
/*!*******************************************!*\
  !*** ./app/src/pug/templates/product.pug ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"html\\r\\n  head\\r\\n    block product-title\\r\\n    include ../components/head\\r\\n  body\\r\\n    include ../components/header\\r\\n\\r\\n    #wrapper\\r\\n      .content\\r\\n        .text\\r\\n          .description\\r\\n            block description\\r\\n\\r\\n          .information\\r\\n            block table\\r\\n\\r\\n        .image-slider\\r\\n          .control-container\\r\\n            .controls\\r\\n              i.fas.fa-angle-left\\r\\n              i.fas.fa-angle-right\\r\\n            .dots\\r\\n          .images\\r\\n            block image-slider\\r\\n\\r\\n      .features-benefits\\r\\n        div\\r\\n          //- h1 Features &amp Benefits\\r\\n          block features-benefits\\r\\n\\r\\n    \\r\\n\\r\\n    include ../components/footer\\r\\n\\r\\n  \\r\\n\\r\\n    \"\n\n//# sourceURL=webpack:///./app/src/pug/templates/product.pug?");

/***/ }),

/***/ "./app/src/pug/thanks.pug":
/*!********************************!*\
  !*** ./app/src/pug/thanks.pug ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"html\\r\\n  head\\r\\n    title Contact Us\\r\\n    include components/head\\r\\n  body\\r\\n    include components/header\\r\\n\\r\\n    #wrapper.thanks\\r\\n        h1 Thanks for reaching out! We'll be in touch soon!\\r\\n\\r\\n    include components/footer\"\n\n//# sourceURL=webpack:///./app/src/pug/thanks.pug?");

/***/ }),

/***/ "./app/src/sass/styles.scss":
/*!**********************************!*\
  !*** ./app/src/sass/styles.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./app/src/sass/styles.scss?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ })

/******/ });