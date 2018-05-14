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

/***/ "./app/src/js/contact-popup.js":
/*!*************************************!*\
  !*** ./app/src/js/contact-popup.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//Ok so I refactored my own code and I tried to follow the convention that\n// you did in switch.js\n//And you're totally right. This makes code WAY shorter and easier to manage....\n\n\n(function () {\n    //making the variables for the buttons that activate the popup\n    var contactBtn = document.querySelector(\"#contact-btn\");\n    var sendBtn = document.querySelector(\"#send-btn\");\n    var mobileBtn = document.querySelector(\"#mobile-contact-btn\");\n    var emailBtn = document.querySelector(\"#email-btn\");\n\n    //variable targeting the contact div\n    var contactDiv = document.querySelector(\"#contact-target\");\n\n    //var for cancel button\n    var cancelBtn = document.querySelector(\"#cancel-btn\");\n\n    //adding the event listeners\n    contactBtn.addEventListener('click', startPopup);\n    sendBtn.addEventListener('click', startPopup);\n    mobileBtn.addEventListener('click', startPopup);\n    emailBtn.addEventListener('click', startPopup);\n\n    function startPopup(e) {\n        e.preventDefault();\n        contactDiv.classList.remove(\"hide-contact-form\");\n        cancelBtn.addEventListener('click', cancelForm);\n\n        // this hides the mobile nav menu when the contact form pops up.\n        window.location.hash = '';\n    }\n\n    function cancelForm(e) {\n        e.preventDefault();\n        contactDiv.classList.add(\"hide-contact-form\");\n    }\n\n    //The \"send us a message\" button in the footer\n    /*\n    document.querySelector(\"#send-btn\").addEventListener(\"click\", function(event) {\n        event.preventDefault();\n        document.querySelector(\"#contact-target\").classList.remove(\"hide-contact-form\");\n        document.querySelector(\"#cancel-btn\").addEventListener(\"click\", function(event) {\n            event.preventDefault();\n            document.querySelector(\"#contact-target\").classList.add(\"hide-contact-form\");\n        });\n    });\n       //The \"contact us\" link in the header\n    document.querySelector(\"#contact-btn\").addEventListener(\"click\", function(event) {\n        event.preventDefault();\n        document.querySelector(\"#contact-target\").classList.remove(\"hide-contact-form\");\n        document.querySelector(\"#cancel-btn\").addEventListener(\"click\", function(event) {\n            event.preventDefault();\n            document.querySelector(\"#contact-target\").classList.add(\"hide-contact-form\");\n        });\n    });\n    \n     */\n})();\n\n//# sourceURL=webpack:///./app/src/js/contact-popup.js?");

/***/ }),

/***/ "./app/src/js/index.js":
/*!*****************************!*\
  !*** ./app/src/js/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\n__webpack_require__(/*! ./product-slider */ \"./app/src/js/product-slider.js\");\n\n__webpack_require__(/*! ../sass/styles.scss */ \"./app/src/sass/styles.scss\");\n\n__webpack_require__(/*! ./switch */ \"./app/src/js/switch.js\");\n\n__webpack_require__(/*! ./contact-popup */ \"./app/src/js/contact-popup.js\");\n\n// No actual JavaScript should be written in this file,\n// this should only be used to import the other JavaScript\n// files and import the main SCSS file for webpack to bundle it\n\nif (process.env['CRYOMETRIX_BUILD'] !== 'prod') {\n  console.log('-----------------');\n  console.log('-----------------');\n  console.log('-----------------');\n  console.log('ITS NOT PROD, SO IM IMPORTIGN');\n  console.log('-----------------');\n  console.log('-----------------');\n  console.log('-----------------');\n  __webpack_require__(/*! ./watch */ \"./app/src/js/watch.js\");\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./app/src/js/index.js?");

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
eval("\n\n__webpack_require__(/*! ../pug/product-t90.pug */ \"./app/src/pug/product-t90.pug\");\n\n__webpack_require__(/*! ../pug/product-t160.pug */ \"./app/src/pug/product-t160.pug\");\n\n__webpack_require__(/*! ../pug/product-b90.pug */ \"./app/src/pug/product-b90.pug\");\n\n__webpack_require__(/*! ../pug/product-s90.pug */ \"./app/src/pug/product-s90.pug\");\n\n__webpack_require__(/*! ../pug/templates/product.pug */ \"./app/src/pug/templates/product.pug\");\n\n__webpack_require__(/*! ../pug/components/footer.pug */ \"./app/src/pug/components/footer.pug\");\n\n__webpack_require__(/*! ../pug/components/header.pug */ \"./app/src/pug/components/header.pug\");\n\n__webpack_require__(/*! ../pug/index.pug */ \"./app/src/pug/index.pug\");\n\n__webpack_require__(/*! ../pug/contact.pug */ \"./app/src/pug/contact.pug\");\n\n__webpack_require__(/*! ../pug/components/contact-component.pug */ \"./app/src/pug/components/contact-component.pug\");\n\n__webpack_require__(/*! ../pug/thanks.pug */ \"./app/src/pug/thanks.pug\");\n\n//# sourceURL=webpack:///./app/src/js/watch.js?");

/***/ }),

/***/ "./app/src/pug/components/contact-component.pug":
/*!******************************************************!*\
  !*** ./app/src/pug/components/contact-component.pug ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".contact-form\\n    \\n    a(href=\\\"index.html\\\" id=\\\"cancel-btn\\\")\\n        i.fas.fa-times\\n    h1 CONTACT US\\n    p We'd love to answer your questions about our freezers\\n    form(action=\\\"https://z28up1rg8h.execute-api.us-east-1.amazonaws.com/prod/CryometrixContactHandler\\\", method=\\\"POST\\\")\\n        label Name\\n            input(name=\\\"name\\\" type=\\\"text\\\")\\n        label Company\\n            input(name=\\\"company\\\" type=\\\"text\\\")\\n        label Phone Number\\n            input(name=\\\"phone\\\" type=\\\"text\\\")\\n        label Message / Question\\n            textarea(name=\\\"message\\\", cols=\\\"30\\\", rows=\\\"5\\\")\\n\\n        button(type=\\\"submit\\\") Submit\"\n\n//# sourceURL=webpack:///./app/src/pug/components/contact-component.pug?");

/***/ }),

/***/ "./app/src/pug/components/footer.pug":
/*!*******************************************!*\
  !*** ./app/src/pug/components/footer.pug ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"footer\\r\\n  \\r\\n  .foot-info\\r\\n    .container-1\\r\\n      .foot-products\\r\\n        div\\r\\n          h5 Products\\r\\n          ul \\r\\n            li \\r\\n              a(href=\\\"product-t160.html\\\") T-160 Ultra Low Freezer\\r\\n            li \\r\\n              a(href=\\\"product-b90.html\\\") B-90 Blast/Thaw Freezer\\r\\n            li \\r\\n              a(href=\\\"product-t90.html\\\") T-90 Storage Freezer\\r\\n            li \\r\\n              a(href=\\\"product-s90.html\\\") S-90 Shipper Freezer\\r\\n      .foot-contact\\r\\n        div\\r\\n          p Not seeing what you're looking for? Need something custom? Please reach out, we'd love to work with you!\\r\\n          a(href=\\\"contact.html\\\" id=\\\"send-btn\\\") Contact Us\\r\\n    .container-2\\r\\n      a(href=\\\"http://www.reflectscientific.com/\\\" target=\\\"_blank\\\") Reflect Scientific Inc.\\r\\n      p Phone | 801-226-4100 \\r\\n      p Fax &nbsp&nbsp&nbsp&nbsp&nbsp   | 801-226-2885\\r\\n      a(href=\\\"contact.html\\\" id=\\\"email-btn\\\") info@reflectscientific.com\\r\\n  .copyright\\r\\n    h5 &copy 2018 REFLECT SCIENTIFIC, INC. ALL RIGHTS RESERVED\\r\\nscript(src=\\\"main.js\\\")\"\n\n//# sourceURL=webpack:///./app/src/pug/components/footer.pug?");

/***/ }),

/***/ "./app/src/pug/components/header.pug":
/*!*******************************************!*\
  !*** ./app/src/pug/components/header.pug ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"header  \\r\\n  nav\\r\\n    div\\r\\n      a(href=\\\"index.html\\\")\\r\\n        img(src=\\\"images/Cryometrix-Logo_white.png\\\")\\r\\n    div.links\\r\\n      ul\\r\\n        li\\r\\n          a(href=\\\"index.html\\\") Home\\r\\n        li\\r\\n          .dropdown\\r\\n            span Products #[i.fas.fa-angle-down]\\r\\n            div\\r\\n              a(href=\\\"product-t160.html\\\") T-160 Ultra Low Freezer\\r\\n              a(href=\\\"product-b90.html\\\") B-90 Blast/Thaw Freezer\\r\\n              a(href=\\\"product-t90.html\\\") T-90 Storage Freezer\\r\\n              a(href=\\\"product-s90.html\\\") S-90 Shipper Freezer\\r\\n        li\\r\\n          a(href=\\\"contact.html\\\" id=\\\"contact-btn\\\") Contact Us\\r\\n    .mobile-nav#mobile-nav\\r\\n      a(href=\\\"#mobile-nav\\\") #[i.fas.fa-bars]\\r\\n      .mobile-container\\r\\n        i.fas.fa-times\\r\\n        ul\\r\\n          li #[img(src=\\\"images/Cryometrix-Logo_color.png\\\")]\\r\\n          li #[a(href=\\\"index.html\\\").nav-item Home]\\r\\n          li #[a(href=\\\"product-t160.html\\\").nav-item T-160 Ultra Low Freezer]\\r\\n          li #[a(href=\\\"product-b90.html\\\").nav-item B-90 Blast/Thaw Freezer]\\r\\n          li #[a(href=\\\"product-t90.html\\\").nav-item T-90 Storage Freezer]\\r\\n          li #[a(href=\\\"product-s90.html\\\").nav-item S-90 Shipper Freezer]\\r\\n          li #[a(href=\\\"contact.html\\\" id= \\\"mobile-contact-btn\\\").nav-item Contact Us]\\r\\n        a(href=\\\"#\\\").overlay\\r\\n      \\r\\n      \\r\\n      \"\n\n//# sourceURL=webpack:///./app/src/pug/components/header.pug?");

/***/ }),

/***/ "./app/src/pug/contact.pug":
/*!*********************************!*\
  !*** ./app/src/pug/contact.pug ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"html\\r\\n  head\\r\\n    title Contact Us\\r\\n    include components/head\\r\\n  body\\r\\n    include components/header\\r\\n\\r\\n    #wrapper\\r\\n        include components/contact-component\\r\\n\\r\\n\\r\\n    include components/footer\"\n\n//# sourceURL=webpack:///./app/src/pug/contact.pug?");

/***/ }),

/***/ "./app/src/pug/index.pug":
/*!*******************************!*\
  !*** ./app/src/pug/index.pug ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"html\\n  head\\n    title Cryometrix Freezers\\n    include components/head\\n  body\\n    include components/header\\n\\n    #wrapper\\n        .hero-image\\n            .overlay\\n            img(src=\\\"images/HomepageHero.png\\\")\\n            .info\\n                h1 HEY STRANGER. LOOKING TO STORE SOME BLOOD?\\n                p Our T-160 will make your blood run cold.\\n                a T-160 ULTRA LOW FREEZER\\n        main\\n            a(href=\\\"product-t160.html\\\")\\n                div\\n                    .img-align-container\\n                        img(src=\\\"images/freezers/t-160/3_4-Right-Closed_T-160.png\\\", alt=\\\"T-160 Ultra Low Freezer\\\")\\n                    h2 T-160 ULTRA LOW FREEZER\\n                    .hover-cover\\n                        p High capacity upright storage freezer that cools up to -160&degC.\\n            a(href=\\\"product-b90.html\\\")\\n                div\\n                    .img-align-container\\n                        img(src=\\\"images/freezers/b-90/3_4-Left-Closed-Tech-B90.png\\\", alt=\\\"B-90 Blast/Thaw Freezer\\\")\\n                    h2 B-90 BLAST/THAW FREEZER\\n                    .hover-cover\\n                        p High capacity upright blast/thaw freezer that cools 8X faster than other freezers.\\n            a(href=\\\"product-t90.html\\\")\\n                div\\n                    .img-align-container\\n                        img(src=\\\"images/freezers/t-90/3_4-Left-Open-product_T90.png\\\", alt=\\\"T-90 Storage Freezer\\\")\\n                    h2 T-90 STORAGE FREEZER\\n                    .hover-cover\\n                        p Worry-free storage, 20 year warranty, built-in security, huge savings.\\n            a(href=\\\"product-s90.html\\\")\\n                div\\n                    .img-align-container\\n                        img(src=\\\"images/freezers/s-90/S-90_drawing.png\\\", alt=\\\"S-90 Shipper Freezer\\\")\\n                    h2 S-90 SHIPPER FREEZER\\n                    .hover-cover\\n                        p Ship products at temperatures down to -90&degC for 15 days. 100% self-contained.\\n\\n    #contact-target.contact-popup.hide-contact-form\\n      include components/contact-component\\n    \\n\\n    include components/footer\"\n\n//# sourceURL=webpack:///./app/src/pug/index.pug?");

/***/ }),

/***/ "./app/src/pug/product-b90.pug":
/*!*************************************!*\
  !*** ./app/src/pug/product-b90.pug ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\nextends templates/product\\n\\nblock product-title\\n  title B-90 Freezer\\n\\nblock description\\n  h1 Cryometrix B-90 Blast/Thaw Freezer\\n  div \\n    a(href=\\\"brochures/Cryometrix_B-90.pdf\\\" download=\\\"Cryometrix_B-90\\\") Download Brochure\\n    a Calculate Storage Capacity\\n    //- a Download Map\\n  p The Cryometrix B-90 freezer offers valuable benefits for everyone involved in your freezing processes. Lab personnel get the time-saving convenience of upright storage and easy access, while your overall freezing process gains efficiencies which will greatly increase your throughput and lower your production time. Contact us to receive data for blast freezing times for your specific application. We can help you configure the best setup in order to get you the most throughput. \\n\\nblock table\\n  .english\\n    table\\n      tr\\n        th Physical Property\\n        th Units\\n        th Values\\n      tr\\n        td Dimensions\\n        td Inches\\n        td 42\\\" D x 48\\\" W x 84\\\" H\\n      tr\\n        td Weight (Empty)\\n        td Pounds\\n        td 1672\\n      tr\\n        td Payload Capacity\\n        td Cubic Feet\\n        td 31.7\\n      t\\n        td Payload Dimensions\\n        td Inches\\n        td 22.75\\\" D x 31.5\\\" W x 60\\\" H\\n      tr\\n        td Electrical\\n        td 120 VAC 60 Hz\\n        td \\n      tr\\n        td Cooling Media\\n        td LN2\\n        td \\n      tr\\n        td Inlet Pressure\\n        td PSI\\n        td 90-110\\n      tr\\n        td Adjustable Set Point\\n        td &degF\\n        td +104 to -130\\n      tr\\n        td Temperature Uniformity\\n        td &degF\\n        td &plusmn 5 &degF at 130 &degF\\n      tr\\n        td Ramp Rate\\n        td &degF/min\\n        td -13\\n  //metric table\\n  .metric.hidden\\n    table\\n      tr\\n        th Physical Property\\n        th Units\\n        th Values\\n      tr\\n        td Dimensions\\n        td mm\\n        td 1062 D x 1224 W x 2126 H\\n      tr\\n        td Weight (Empty)\\n        td Kilograms\\n        td 760\\n      tr\\n        td Payload Capacity\\n        td Liters\\n        td 700\\n      tr\\n        td Payload Dimensions\\n        td mm\\n        td 578 D x 800 W x 1524 H\\n      tr\\n        td Electrical\\n        td 208-240 VAC\\n        td \\n      tr\\n        td Cooling Media\\n        td LN2\\n        td \\n      tr\\n        td Inlet Pressure\\n        td Bar\\n        td 6.2 - 7.6\\n      tr\\n        td Adjustable Set Point\\n        td &degC\\n        td +40 to -90\\n      tr\\n        td Temperature Uniformity\\n        td &degC\\n        td &plusmn 3 at -90 &degC\\n      tr\\n        td Ramp Rate\\n        td &degC/min\\n        td -7\\n\\nblock image-slider\\n  img(src=\\\"images/freezers/b-90/3_4-Left-Closed-Tech-B90.png\\\")\\n  img(src=\\\"images/freezers/b-90/3_4--Left-Open_B-90.png\\\")\\n  img(src=\\\"images/freezers/b-90/3_4-Left-Open-empty_B90.png\\\")\\n  img(src=\\\"images/freezers/b-90/3_4-Left-Open-product_B90.png\\\")\\n  img(src=\\\"images/freezers/b-90/3_4-Left-Closed_B90.png\\\")\\n  img(src=\\\"images/freezers/b-90/3_4-Right-Closed_B-90.png\\\")\\n\\nblock features-benefits\\n  div\\n    .left\\n      div\\n        h2 Freeze/Thaw Capabilities\\n        ul\\n          li Temperature adjustable from +40 &degC to -90 &degC\\n          li Temperature uniformity &plusmn 3 &degC throughout\\n      div\\n        h2 Compressor-free, liquid nitrogen freezing\\n        ul\\n          li Minimizes service interruptions/downtime\\n          li Uses up to 90% less energy than mechanical units\\n          li Fastest freeze times in the industry\\n          li Reduces the need for maintenance or repairs when compared to mechanical freezers\\n          li No HVAC required\\n          li No refrigerant chemicals, oils, or CFCs\\n          li Completely silent operation\\n\\n\\n      div\\n        h2 Upright 100% stainless steel interior &amp exterior\\n        ul\\n          li Fast, convenient access to stored materials\\n          li Easy cleaning and sterilization\\n          \\n      div\\n        h2 Secure, programmable controls with touchscreen interface\\n        ul\\n          li Simplifies management, monitors freezing processes and logs user operations\\n          li Built-in data logging with up to 30 users\\n          \\n    .right\\n      div\\n        h2 Reliable Backups\\n        ul\\n          li ARedundant LN2 valves ensure further reliability\\n          li Downloadable Temperature, Alarm, &amp User Log\\n          \\n      div\\n        h2 Designed for cGMP applications\\n        ul\\n          li DQ/IQ completed\\n          li OQ/PQ ready\\n          li GMP qualified units currently in PharmBio use\\n      div\\n        h2 Compared to compressor based technologies - The B-90 offers:\\n        ul\\n          li More than 8X faster freezing than other freezers\\n          li A significant reduction in electrical power consumption\\n          li Up to 5 times greater payload capacity per unit area of floor space\\n          li Significant overall reduction in net operating expenses\\n      div\\n\\n        h2 No liquid nitrogen exposure to users or product\\n\"\n\n//# sourceURL=webpack:///./app/src/pug/product-b90.pug?");

/***/ }),

/***/ "./app/src/pug/product-s90.pug":
/*!*************************************!*\
  !*** ./app/src/pug/product-s90.pug ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\nextends templates/product\\n\\nblock product-title\\n  title S-90 Freezer\\n\\nblock description\\n  h1 Cryometrix S-90 Low Temperature Shipper\\n  div \\n    a(href=\\\"brochures/Cryometrix_S-90.pdf\\\" download=\\\"Cryometrix_S-90\\\") Download Brochure\\n    a Calculate Storage Capacity\\n    //- a Download Map\\n  p Cryometrix is proud to announce the newest freezer to their lineup, the S-90 Shipper. We have taken everything that you love about the T-90 storage freezer and incorporated an onboard LN2 supply and power supply so that the freezer can be shipped across the world or accross your campus. The onboard LN2 supply and batteries will allow the freezer to run on its own for 15 days at -80°C. \\n\\nblock table\\n  .english\\n    table\\n      tr\\n        th Physical Property\\n        th Units\\n        th Values\\n      tr\\n        td Dimensions\\n        td Inches\\n        td 96\\\" D x 48\\\" W x 94\\\" H\\n      tr\\n        td Weight (Empty)\\n        td Pounds\\n        td 2500\\n      tr\\n        td Payload Capacity\\n        td Cubic Feet\\n        td 33.5\\n      tr\\n        td Payload Dimensions\\n        td Inches\\n        td 28\\\" D x 34.5\\\" W x 60\\\" H\\n      tr\\n        td Electrical\\n        td 120 VAC 60 Hz\\n        td \\n      tr\\n        td Cooling Media\\n        td LN2\\n        td \\n      tr\\n        td Inlet Pressure\\n        td PSI\\n        td 22\\n      tr\\n        td Adjustable Set Point\\n        td &degF\\n        td +68 to -130\\n      tr\\n        td Temperature Uniformity\\n        td &degF\\n        td &plusmn 5 &deg F at -130 &degC\\n      tr\\n        td Ramp Rate\\n        td &degF/min\\n        td -2 to -5\\n\\n  //metric table\\n  .metric.hidden\\n    table\\n      tr\\n        th Physical Property\\n        th Units\\n        th Values\\n      tr\\n        td Dimensions\\n        td mm\\n        td 2438 D x 1224 W x 2387 H\\n      tr\\n        td Weight (Empty)\\n        td Kilograms\\n        td 1130\\n      tr\\n        td Payload Capacity\\n        td Liters\\n        td 950\\n      tr\\n        td Payload Dimensions\\n        td mm\\n        td 711 D x 876 W x 1524 H\\n      tr\\n        td Electrical\\n        td 208-240 VAC\\n        td \\n      tr\\n        td Cooling Media\\n        td LN2\\n        td \\n      tr\\n        td Inlet Pressure\\n        td Bar\\n        td 1.5\\n      tr\\n        td Adjustable Set Point\\n        td &degC\\n        td +20 to -90\\n      tr\\n        td Temperature Uniformity\\n        td &degC\\n        td &plusmn 3 at -80 &degC\\n      tr\\n        td Ramp Rate\\n        td &degC/min\\n        td -1 to -3\\n\\nblock image-slider\\n  img(src=\\\"images/freezers/s-90/S-90_drawing.png\\\")\\n\\nblock features-benefits\\n  div\\n    .left\\n      div\\n        h2 Unique sealed Liquid Nitrogen based technology\\n        ul\\n          li Temperature adjustable from +20 &degC to -90 &degC\\n          li Ambient to -80 &degC in less than 1 hour\\n          li Uniform temperatures throughout payload bay (&plusmn 3 &degC)\\n          li Fast recovery from open/close event (10 mins)\\n      div\\n        h2 Large 33.5 cubic ft. / 950 liters storage volume\\n        ul\\n          li 72,000 x 2mL vial storage capacity controlled at &plusmn 3 &degC\\n          li Customized racking available\\n      div\\n        h2 Compressor free operation\\n        ul\\n          li Minimal power consumption\\n          li No rejected heat into workspace\\n          li Noiseless operation, vibration and dust free\\n      div\\n        h2 Low LN2 consumption Mission critical design\\n        ul\\n          li User security features\\n          li Low maintenance design\\n    .right\\n      div\\n        h2 Ergonomically simplified design\\n        ul\\n          li As easy to use as a common household refrigerator\\n          li Left or right hand door swing\\n          \\n      div\\n        h2 Designed for shipping applications\\n        ul\\n          li Up to 15 days of storage at -80 &degC\\n          li Self-contained LN2 and electrical source\\n          li Pallet-mounted for easy transportation\\n      div\\n        h2 No liquid nitrogen exposure to users or product\\n        \\n\\n\\n  \\n\"\n\n//# sourceURL=webpack:///./app/src/pug/product-s90.pug?");

/***/ }),

/***/ "./app/src/pug/product-t160.pug":
/*!**************************************!*\
  !*** ./app/src/pug/product-t160.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\nextends templates/product\\n\\nblock product-title\\n  title T-160 Freezer\\n\\nblock description\\n  h1 Cryometrix T-160 Ultra Low Temp Freezer\\n  div \\n    a(href=\\\"brochures/Cryometrix_T-160.pdf\\\" download=\\\"Cryometrix_T-160\\\") Download Brochure\\n    a Calculate Storage Capacity\\n    //- a Download Map\\n  p The new 2017 redesigned Cryometrix T-160 programmable ULT freezer delivers on all points. The T-160 freezer is a technological breakthrough that incorporates a compressor-free, redundant, liquid nitrogen-based technology. The T-160 is a stable, scalable, adaptable, and validatable platform. The payload capacity is 33.5 ft<sup>3</sup> (950 L = 72,000 2-mL vials), and with its all stainless steel upright design, the T-160 addresses several user issues such as security, ease of operation, cleaning, and the system is designed to eliminate icing.\\n\\nblock table\\n  .english\\n    table\\n      tr\\n        th Physical Property\\n        th Units\\n        th Values\\n      tr\\n        td Dimensions\\n        td Inches\\n        td 42\\\" D x 48\\\" W x 84\\\" H\\n      tr\\n        td Weight (Empty)\\n        td Pounds\\n        td 1672\\n      tr\\n        td Payload Capacity\\n        td Cubic Feet\\n        td 31.7\\n      tr\\n        td Payload Dimensions\\n        td Inches\\n        td 26.5\\\" D x 34.5\\\" W x 60\\\" H\\n      tr\\n        td Electrical\\n        td 120 VAC 60 Hz\\n        td \\n      tr\\n        td Cooling Media\\n        td LN2\\n        td \\n      tr\\n        td Inlet Pressure\\n        td PSI\\n        td 18-90\\n      tr\\n        td Adjustable Set Point\\n        td &degF\\n        td +68 to -256\\n      tr\\n        td Temperature Uniformity\\n        td &degF\\n        td &plusmn 7 &degF at -160 &degC<br>&plusmn 5 &degF at -80 &degC\\n      tr\\n        td Ramp Rate\\n        td &degF/min\\n        td -2 to -5\\n\\n  //metric table\\n  .metric.hidden\\n    table\\n      tr\\n        th Physical Property\\n        th Units\\n        th Values\\n      tr\\n        td Dimensions\\n        td mm\\n        td 1062 D x 1224 W x 2126 H\\n      tr\\n        td Weight (Empty)\\n        td Kilograms\\n        td 760\\n      tr\\n        td Payload Capacity\\n        td Liters\\n        td 900\\n      tr\\n        td Payload Dimensions\\n        td mm\\n        td 673 D x 876 W x 1524 H\\n      tr\\n        td Electrical\\n        td 208-240 VAC\\n        td \\n      tr\\n        td Cooling Media\\n        td LN2\\n        td \\n      tr\\n        td Inlet Pressure\\n        td Bar\\n        td 1.2 - 6.2\\n      tr\\n        td Adjustable Set Point\\n        td &degC\\n        td +20 to -160\\n      tr\\n        td Temperature Uniformity\\n        td &degC\\n        td &plusmn 7 at -160 &degC<br>&plusmn 3 at -80 &degC\\n      tr\\n        td Ramp Rate\\n        td &degC/min\\n        td -1 to -3\\n\\nblock image-slider\\n  img(src=\\\"images/freezers/t-160/3_4-Right-Closed_T-160.png\\\")\\n  img(src=\\\"images/freezers/t-160/3_4-Left-Closed_T160.png\\\")\\n  img(src=\\\"images/freezers/t-160/3_4-Left-Open-empty_T160.png\\\")\\n  img(src=\\\"images/freezers/t-160/3_4-Left-Open-product_T160.png\\\")\\n  img(src=\\\"images/freezers/t-160/3_4--Left-Open_T-160.png\\\")\\n  img(src=\\\"images/freezers/t-160/3_4-Left-Closed-Tech-T160.png\\\")\\n\\nblock features-benefits\\n  div\\n    .left\\n      div\\n        h2 Unique sealed Liquid Nitrogen based technology\\n        ul\\n          li Fast controllable temperature ramp\\n          li Uniform temperatures throughout payload bay (&plusmn 5 &degC)\\n          li Fast recovery from open/close event (10 mins)\\n      div\\n        h2 Large 31.7 cubic ft./900 liters storage volume\\n        ul\\n          li 57,600 x 2mL vial storage capacity controlled at &plusmn 3 &degC\\n          li Customized racking available\\n      div\\n        h2 Compressor free operation\\n        ul\\n          li Minimal power consumption\\n          li No rejected heat into workspace\\n          li Noiseless operation, vibration and dust free\\n      div\\n        h2 Low LN2 consumption Mission critical design\\n        ul\\n          li Redundant circuits assure reliability\\n          li User security features\\n          li Low maintenance design\\n    .right\\n      div\\n        h2 Ergonomically simplified design\\n        ul\\n          li As easy to use as a common household refrigerator\\n          li Left or right hand door swing\\n          \\n      div\\n        h2 Designed for cGMP applications\\n        ul\\n          li DQ/IQ completed\\n          li OQ/PQ ready\\n          li GMP qualified units currently in PharmBio use\\n      div\\n        h2 Compared to compressor based technologies - The T-160 offers:\\n        ul\\n          li A significant reduction in electrical power consumption\\n          li Up to 5 times greater payload capacity per unit area of floor space\\n          li Significant overall reduction in net operating expenses\\n      div\\n        h2 No liquid nitrogen exposure to users or product\\n        \\n\\n\\n  \\n\"\n\n//# sourceURL=webpack:///./app/src/pug/product-t160.pug?");

/***/ }),

/***/ "./app/src/pug/product-t90.pug":
/*!*************************************!*\
  !*** ./app/src/pug/product-t90.pug ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"extends templates/product\\r\\n\\r\\nblock product-title\\r\\n  title T-90 Freezer\\r\\n\\r\\nblock description\\r\\n  h1 Cryometrix T-90 Storage Freezer\\r\\n  div \\r\\n    a(href=\\\"brochures/Cryometrix_T-90.pdf\\\" download=\\\"Cryometrix_T-90\\\") Download Brochure\\r\\n    a Calculate Storage Capacity\\r\\n    //- a Download Map\\r\\n  p The new completely redesigned Cryometrix T-90 programmable storage freezer delivers on all points. The T-90 freezer is a technological breakthrough that incorporates a compressor-free, redundant, liquid nitrogen-based technology with an upright design. You can now reach temperatures down to -90°C in a fraction of the time that traditional mechanical freezer would take. And dont worry about the door open recovery, the T-90 can recover temperature from a typical door open in less than 15 minutes. The T-90 is a stable, scalable, adaptable, and validatable platform. The payload capacity is 33.5 ft3 (950 L = 72,000 2-mL vials), and with its all stainless steel upright design, the T-90 addresses several user issues such as security, ease of operation, cleaning, and the system is designed to eliminate icing. \\r\\n\\r\\nblock table\\r\\n  .english\\r\\n    table\\r\\n      tr\\r\\n        th Physical Property\\r\\n        th Units\\r\\n        th Values\\r\\n      tr\\r\\n        td Dimensions\\r\\n        td Inches\\r\\n        td 42\\\" D x 48\\\" W x 84\\\" H\\r\\n      tr\\r\\n        td Weight (Empty)\\r\\n        td Pounds\\r\\n        td 1672\\r\\n      tr\\r\\n        td Payload Capacity\\r\\n        td Cubic Feet\\r\\n        td 33.5\\r\\n      tr\\r\\n        td Payload Dimensions\\r\\n        td Inches\\r\\n        td 28\\\" D x 34.5\\\" W x 60\\\" H\\r\\n      tr\\r\\n        td Electrical\\r\\n        td 120 VAC 60 Hz\\r\\n        td \\r\\n      tr\\r\\n        td Cooling Media\\r\\n        td LN2\\r\\n        td \\r\\n      tr\\r\\n        td Inlet Pressure\\r\\n        td PSI\\r\\n        td 18-90\\r\\n      tr\\r\\n        td Adjustable Set Point\\r\\n        td &degF\\r\\n        td +68 to -130\\r\\n      tr\\r\\n        td Temperature Uniformity\\r\\n        td &degF\\r\\n        td &plusmn 5 &deg F at -80 &degC\\r\\n      tr\\r\\n        td Ramp Rate\\r\\n        td &degF/min\\r\\n        td -2 to -5\\r\\n  //metric table\\r\\n  .metric.hidden\\r\\n    table\\r\\n      tr\\r\\n        th Physical Property\\r\\n        th Units\\r\\n        th Values\\r\\n      tr\\r\\n        td Dimensions\\r\\n        td mm\\r\\n        td 1062 D x 1224 W x 2126 H\\r\\n      tr\\r\\n        td Weight (Empty)\\r\\n        td Kilograms\\r\\n        td 760\\r\\n      tr\\r\\n        td Payload Capacity\\r\\n        td Liters\\r\\n        td 950\\r\\n      tr\\r\\n        td Payload Dimensions\\r\\n        td mm\\r\\n        td 711 D x 876 W x 1524 H\\r\\n      tr\\r\\n        td Electrical\\r\\n        td 208-240 VAC\\r\\n        td \\r\\n      tr\\r\\n        td Cooling Media\\r\\n        td LN2\\r\\n        td \\r\\n      tr\\r\\n        td Inlet Pressure\\r\\n        td Bar\\r\\n        td 1.2 - 6.2\\r\\n      tr\\r\\n        td Adjustable Set Point\\r\\n        td &degC\\r\\n        td +20 to -90\\r\\n      tr\\r\\n        td Temperature Uniformity\\r\\n        td &degC\\r\\n        td &plusmn 3 at -80 &degC\\r\\n      tr\\r\\n        td Ramp Rate\\r\\n        td &degC/min\\r\\n        td -1 to -3\\r\\n\\r\\nblock image-slider\\r\\n  img(src=\\\"images/freezers/t-90/3_4-Left-Open-product_T90.png\\\")\\r\\n  img(src=\\\"images/freezers/t-90/3_4-Left-Closed_T90.png\\\")\\r\\n  img(src=\\\"images/freezers/t-90/3_4-Left-Open-empty_T90.png\\\")\\r\\n  img(src=\\\"images/freezers/t-90/3_4--Left-Open_t-90.png\\\")\\r\\n  img(src=\\\"images/freezers/t-90/3_4-Right-Closed_T-90.png\\\")\\r\\n  img(src=\\\"images/freezers/t-90/3_4-Left-Closed-Tech-T90.png\\\")\\r\\n\\r\\nblock features-benefits\\r\\n  div\\r\\n    .left\\r\\n      div\\r\\n        h2 Unique sealed Liquid Nitrogen based technology | Excellent thermal performance\\r\\n        ul\\r\\n          li Temperature adjustable from +20 &degC to -90 &degC  \\r\\n          li Ambient to -80 &degC in less than 1 hour\\r\\n          li Uniform temperatures throughout payload bay (&plusmn 3 &degC)\\r\\n          li Fast recovery from open/close event (10 mins)\\r\\n      div\\r\\n        h2 Large 33.5 cubic ft. / 950 liters storage volume\\r\\n        ul\\r\\n          li 72,000 x 2mL vial storage capacity controlled at &plusmn 3 &degC\\r\\n          li Customized racking available\\r\\n      div\\r\\n        h2 Compressor free operation\\r\\n        ul\\r\\n          li Minimal power consumption\\r\\n          li No rejected heat into workspace\\r\\n          li Noiseless operation, vibration and dust free\\r\\n      div\\r\\n        h2 Low LN2 consumption Mission critical design\\r\\n        ul\\r\\n          li User security features\\r\\n          li Low maintenance design\\r\\n    .right\\r\\n      div\\r\\n        h2 Ergonomically simplified design\\r\\n        ul\\r\\n          li As easy to use as a common household refrigerator\\r\\n          li Left or right hand door swing\\r\\n          \\r\\n      div\\r\\n        h2 Designed for cGMP applications\\r\\n        ul\\r\\n          li DQ/IQ completed\\r\\n          li OQ/PQ ready\\r\\n          li GMP qualified units currently in PharmBio use\\r\\n      div\\r\\n        h2 Compared to compressor based technologies - The T-90 offers:\\r\\n        ul\\r\\n          li A significant reduction in electrical power consumption\\r\\n          li Up to 5 times greater payload capacity per unit area of floor space\\r\\n          li Significant overall reduction in net operating expenses\\r\\n      div\\r\\n        h2 No liquid nitrogen exposure to users or product\\r\\n\"\n\n//# sourceURL=webpack:///./app/src/pug/product-t90.pug?");

/***/ }),

/***/ "./app/src/pug/templates/product.pug":
/*!*******************************************!*\
  !*** ./app/src/pug/templates/product.pug ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"html\\r\\n  head\\r\\n    block product-title\\r\\n    include ../components/head\\r\\n  body\\r\\n    include ../components/header\\r\\n\\r\\n    #wrapper\\r\\n      .content\\r\\n        .text\\r\\n          .description\\r\\n            block description\\r\\n\\r\\n          .information\\r\\n            .switch\\r\\n              p#english.active-table English\\r\\n              p  | \\r\\n              p#metric.switchable Metric\\r\\n            block table\\r\\n\\r\\n        .image-slider\\r\\n          .control-container\\r\\n            .controls\\r\\n              i.fas.fa-angle-left\\r\\n              i.fas.fa-angle-right\\r\\n            .dots\\r\\n          .images\\r\\n            block image-slider\\r\\n\\r\\n      .features-benefits\\r\\n        div\\r\\n          //- h1 Features &amp Benefits\\r\\n          block features-benefits\\r\\n\\r\\n    #contact-target.contact-popup.hide-contact-form\\r\\n      include ../components/contact-component\\r\\n\\r\\n    include ../components/footer\\r\\n\\r\\n  \\r\\n\\r\\n    \"\n\n//# sourceURL=webpack:///./app/src/pug/templates/product.pug?");

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