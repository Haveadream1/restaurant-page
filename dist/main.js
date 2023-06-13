/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _dist_images_Vector_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/images/Vector.svg */ \"./dist/images/Vector.svg\");\n\n\n\nconst home = () => {\n    let div = document.querySelector('#content');\n\n    let sectionHome = document.createElement('section');\n    sectionHome.classList.add('grid-home');\n    div.appendChild(sectionHome);\n\n    let sectionTitle = document.createElement('section');\n    sectionTitle.classList.add('title');\n    sectionHome.appendChild(sectionTitle);\n    \n    let titleHome = document.createElement('h1');\n    titleHome.textContent = 'Reserve your table for tonight';\n    titleHome.classList.add('title-home');\n    sectionTitle.appendChild(titleHome);\n\n    let seeMore = document.createElement('p');\n    seeMore.classList.add('see-more');\n    seeMore.textContent = 'See more';\n    sectionTitle.appendChild(seeMore);\n\n    let sectionImage = document.createElement('section');\n    sectionImage.classList.add('image');\n    sectionHome.appendChild(sectionImage);\n\n    let image1 = document.createElement('img');\n    image1.classList.add('image-1');\n    sectionImage.appendChild(image1);\n\n    let image2 = document.createElement('img');\n    image2.classList.add('image-2');\n    sectionImage.appendChild(image2);\n\n    let image3 = document.createElement('img');\n    image3.classList.add('image-3');\n    sectionImage.appendChild(image3);\n\n    let sectionArrow = document.createElement('footer');\n    sectionArrow.classList.add('arrow');\n    sectionHome.appendChild(sectionArrow);\n\n    let discover = document.createElement('p');\n    discover.classList.add('discover');\n    discover.textContent = 'Discover the menu';\n    sectionArrow.appendChild(discover);\n    \n    let discoverButton = document.createElement('img');\n    discoverButton.src = _dist_images_Vector_svg__WEBPACK_IMPORTED_MODULE_1__;\n    discoverButton.classList.add('discover-button');\n\n    sectionArrow.appendChild(discoverButton);\n\n    discoverButton.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) ()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _dist_images_Vector_1_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/images/Vector (1).svg */ \"./dist/images/Vector (1).svg\");\n\n\n\nconst menu = () => {\n    let div = document.querySelector('#content');\n\n    let sectionMenu = document.createElement('section');\n    sectionMenu.classList.add('menu');\n    div.appendChild(sectionMenu);\n\n    let titleMenu = document.createElement('h1');\n    titleMenu.textContent = 'Weekly menu';\n    titleMenu.classList.add('title-menu');\n    sectionMenu.appendChild(titleMenu);\n\n    let returnHome = document.createElement('img');\n    removeHome.src = _dist_images_Vector_1_svg__WEBPACK_IMPORTED_MODULE_1__;\n    returnHome.classList.add('return-home');\n    sectionMenu.appendChild(returnHome);\n\n    returnHome.addEventListener('click', function() {\n        div.removeChild(sectionMenu);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    })\n\n    let sectionImageMenu = document.createElement('section');\n    sectionImageMenu.classList.add('image-menu');\n    sectionMenu.appendChild(sectionImageMenu);\n\n    let plate1 = document.createElement('p');\n    plate1.textContent = 'Pad Thai - 11$'\n    plate1.classList.add('plate1');\n    sectionImageMenu.appendChild(plate1);\n\n    /* ready if i want to add img\n    let img1 = document.createElement('img');\n    img1.classList.add('img1');\n    sectionImageMenu.appendChild(img1);*/\n\n    let plate2 = document.createElement('p');\n    plate2.textContent = 'Korean BBQ - 15$'\n    plate2.classList.add('plate2');\n    sectionImageMenu.appendChild(plate2);\n\n    let plate3 = document.createElement('p');\n    plate3.textContent = 'Udon - 14$'\n    plate3.classList.add('plate3');\n    sectionImageMenu.appendChild(plate3);\n\n    let plate4 = document.createElement('p');\n    plate4.textContent = 'Pekin Duck - 18$'\n    plate4.classList.add('plate4');\n    sectionImageMenu.appendChild(plate4);\n\n    let sectionBottom = document.createElement('footer');\n    sectionBottom.classList.add('bottom')\n    sectionMenu.appendChild(sectionBottom);\n\n    let titleFooter = document.createElement('p');\n    titleFooter.textContent = 'Contact info';\n    titleFooter.classList.add('title-footer');\n    sectionBottom.appendChild(titleFooter);\n    \n    let alignFooter = document.createElement('section');\n    alignFooter.classList.add('align-footer');\n    sectionBottom.appendChild(alignFooter);\n\n    let gmail  = document.createElement('p');\n    gmail.textContent = '1234@gmail.com';\n    gmail.classList.add('gmail');\n    alignFooter.appendChild(gmail);\n\n    let phoneNum  = document.createElement('p');\n    phoneNum.textContent = '+050 250 8541';\n    phoneNum.classList.add('phone-num');\n    alignFooter.appendChild(phoneNum);\n\n    let address  = document.createElement('p');\n    address.textContent = '36 Road, 152 ExCity, JPN';\n    address.classList.add('address');\n    alignFooter.appendChild(address);\n\n    let removeHome = document.querySelector('.grid-home');\n    div.removeChild(removeHome);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./dist/images/Vector (1).svg":
/*!************************************!*\
  !*** ./dist/images/Vector (1).svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ddc4542f318995d093e7.svg\";\n\n//# sourceURL=webpack://restaurant-page/./dist/images/Vector_(1).svg?");

/***/ }),

/***/ "./dist/images/Vector.svg":
/*!********************************!*\
  !*** ./dist/images/Vector.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bd54b8e1348291f4d71c.svg\";\n\n//# sourceURL=webpack://restaurant-page/./dist/images/Vector.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;