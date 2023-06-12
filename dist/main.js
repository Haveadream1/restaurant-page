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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\nconst home = () => {\n    let div = document.querySelector('#content');\n\n    let sectionGridHome = document.createElement('section');\n    sectionGridHome.classList.add('grid-home');\n    div.appendChild(sectionGridHome);\n\n    let backHome = document.createElement('section');\n    backHome.classList.add('back-home');\n    sectionGridHome.appendChild(backHome);\n\n    let sectionTitle = document.createElement('section');\n    sectionTitle.classList.add('title');\n    sectionGridHome.appendChild(sectionTitle);\n    \n    let h1 = document.createElement('h1');\n    h1.textContent = 'Reserve your table for tonight';\n    sectionTitle.appendChild(h1);\n\n    let seeMore = document.createElement('p');\n    seeMore.classList.add('see-more');\n    seeMore.textContent = 'See more';\n    sectionTitle.appendChild(seeMore);\n\n\n    let sectionTab = document.createElement('section');\n    sectionTab.classList.add('tab');\n    sectionGridHome.appendChild(sectionTab);\n\n    // button or link a\n    let contact = document.createElement('button')\n    contact.classList.add('contact');\n    contact.textContent = 'Contact';\n    sectionTab.appendChild(contact);\n\n    let times = document.createElement('p');\n    times.classList.add('times');\n    times.textContent = 'Opening Times';\n    sectionTab.appendChild(times);\n\n\n    let sectionImage = document.createElement('section');\n    sectionImage.classList.add('image');\n    sectionGridHome.appendChild(sectionImage);\n\n    // change with image\n    let image1 = document.createElement('section');\n    image1.classList.add('image-1');\n    sectionImage.appendChild(image1);\n\n    let image2 = document.createElement('section');\n    image2.classList.add('image-2');\n    sectionImage.appendChild(image2);\n\n    let image3 = document.createElement('section');\n    image3.classList.add('image-3');\n    sectionImage.appendChild(image3);\n\n\n    let sectionArrow = document.createElement('footer');\n    sectionArrow.classList.add('arrow');\n    sectionGridHome.appendChild(sectionArrow);\n\n    let discover = document.createElement('p');\n    discover.classList.add('discover');\n    discover.textContent = 'Discover the menu';\n    sectionArrow.appendChild(discover);\n    \n    let discoverButton = document.createElement('button');\n    discoverButton.classList.add('discover-button');\n    discoverButton.textContent = 'Need image';\n    sectionArrow.appendChild(discoverButton);\n\n    // create each times not what we want\n    discoverButton.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    if(discoverButton === active) {\n        sectionGridHome.remove.classList('grid-home');\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) ()\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    let div = document.querySelector('#content');\n\n    let sectionMenu = document.createElement('section');\n    sectionMenu.classList.add('menu');\n    div.appendChild(sectionMenu);\n\n    let h3 = document.createElement('h3');\n    h3.textContent = 'Weekly menu';\n    sectionMenu.appendChild(h3);\n\n    let footer = document.createElement('footer');\n    div.appendChild(footer);\n\n    let h2 = document.createElement('h2');\n    h2.textContent = 'Contact info';\n    footer.appendChild(h2);\n\n    let gmail  = document.createElement('p');\n    gmail.textContent = '1234@gmail.com';\n    footer.appendChild(gmail);\n\n    let phoneNum  = document.createElement('p');\n    phoneNum.textContent = '+050 250 8541';\n    footer.appendChild(phoneNum);\n\n    let address  = document.createElement('p');\n    address.textContent = '36 Road, 152 ExCity, JPN';\n    footer.appendChild(address);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;