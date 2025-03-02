/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _dist_images_Vector_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/images/Vector.svg */ "./dist/images/Vector.svg");



const home = () => {
    let div = document.querySelector('#content');

    let homeHeader = document.createElement('header');
    homeHeader.classList.add('home-header');
    div.appendChild(homeHeader);
    
    let headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Discover the different taste of Asian cuisine';
    homeHeader.appendChild(headerTitle);

    let headerText = document.createElement('p');
    headerText.textContent = 'at Yul restaurant';
    homeHeader.appendChild(headerText);

    let homeMain = document.createElement('main');
    homeMain.classList.add('home-main');
    div.appendChild(homeMain);

    let image1 = document.createElement('img');
    image1.classList.add('image-1');
    homeMain.appendChild(image1);

    let image2 = document.createElement('img');
    image2.classList.add('image-2');
    homeMain.appendChild(image2);

    let image3 = document.createElement('img');
    image3.classList.add('image-3');
    homeMain.appendChild(image3);

    let homeFooter = document.createElement('footer');
    homeFooter.classList.add('home-footer');
    div.appendChild(homeFooter);

    let footerText = document.createElement('p');
    footerText.classList.add('footer-text');
    footerText.textContent = 'Discover the menu';
    homeFooter.appendChild(footerText);
    
    let menuButton = document.createElement('img');
    menuButton.src = _dist_images_Vector_svg__WEBPACK_IMPORTED_MODULE_1__;
    menuButton.classList.add('menu-button');
    homeFooter.appendChild(menuButton);

    menuButton.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


// Structure
    // Header
    // Main
    // Footer

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _dist_images_Vector_1_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/images/Vector (1).svg */ "./dist/images/Vector (1).svg");



const menu = () => {
    let div = document.querySelector('#content');

    let homePage = document.querySelector('.home-page');
    div.removeChild(homePage);

    let menuPage = document.createElement('section');
    menuPage.classList.add('menu-page');
    div.appendChild(menuPage);

    let titleMenu = document.createElement('h1');
    titleMenu.textContent = 'Weekly menu';
    titleMenu.classList.add('title-menu');
    menuPage.appendChild(titleMenu);

    let homeButton = document.createElement('img');
    homeButton.src = _dist_images_Vector_1_svg__WEBPACK_IMPORTED_MODULE_1__;
    homeButton.classList.add('home-button');
    menuPage.appendChild(homeButton);

    homeButton.addEventListener('click', () => {
        let menuPage = document.querySelector('.menu-page');
        div.removeChild(menuPage);

        (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });


    let imageSectionMenu = document.createElement('section');
    imageSectionMenu.classList.add('image-section-menu');
    menuPage.appendChild(imageSectionMenu);

    let plate1 = document.createElement('p');
    plate1.textContent = 'Pad Thai - 11$';
    plate1.classList.add('plate-1');
    imageSectionMenu.appendChild(plate1);

    /* ready if i want to add img
    let img1 = document.createElement('img');
    img1.classList.add('img1');
    imageSectionMenu.appendChild(img1);*/

    let plate2 = document.createElement('p');
    plate2.textContent = 'Korean BBQ - 15$';
    plate2.classList.add('plate-2');
    imageSectionMenu.appendChild(plate2);

    let plate3 = document.createElement('p');
    plate3.textContent = 'Udon - 14$';
    plate3.classList.add('plate-3');
    imageSectionMenu.appendChild(plate3);

    let plate4 = document.createElement('p');
    plate4.textContent = 'Pekin Duck - 18$';
    plate4.classList.add('plate-4');
    imageSectionMenu.appendChild(plate4);

    let menuFooter = document.createElement('footer');
    menuFooter.classList.add('menu-footer')
    menuPage.appendChild(menuFooter);

    let titleFooter = document.createElement('p');
    titleFooter.textContent = 'Contact info';
    titleFooter.classList.add('title-footer');
    menuFooter.appendChild(titleFooter);
    
    let infoSection = document.createElement('section');
    infoSection.classList.add('info-section');
    menuFooter.appendChild(infoSection);

    let gmailText = document.createElement('p');
    gmailText.textContent = '1234@gmail.com';
    gmailText.classList.add('gmail-text');
    infoSection.appendChild(gmailText);

    let phoneNum = document.createElement('p');
    phoneNum.textContent = '+050 250 8541';
    phoneNum.classList.add('phone-num');
    infoSection.appendChild(phoneNum);

    let addressText = document.createElement('p');
    addressText.textContent = '36 Road, 152 ExCity, JPN';
    addressText.classList.add('address-text');
    infoSection.appendChild(addressText);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./dist/images/Vector (1).svg":
/*!************************************!*\
  !*** ./dist/images/Vector (1).svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ddc4542f318995d093e7.svg";

/***/ }),

/***/ "./dist/images/Vector.svg":
/*!********************************!*\
  !*** ./dist/images/Vector.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd54b8e1348291f4d71c.svg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ29COztBQUVsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvREFBVTtBQUMvQjtBQUNBOztBQUVBLHlDQUF5Qyw2Q0FBUTtBQUNqRDs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7OztBQUdwQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEOEI7QUFDMkI7O0FBRXpEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsc0RBQVM7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxpREFBUTtBQUNoQixLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekZwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDbEJ1Qzs7QUFFdkMsaURBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGFycm93SW1hZ2UgZnJvbSBcIi4uL2Rpc3QvaW1hZ2VzL1ZlY3Rvci5zdmdcIlxuXG5jb25zdCBob21lID0gKCkgPT4ge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgbGV0IGhvbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBob21lSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtaGVhZGVyJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGhvbWVIZWFkZXIpO1xuICAgIFxuICAgIGxldCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAnRGlzY292ZXIgdGhlIGRpZmZlcmVudCB0YXN0ZSBvZiBBc2lhbiBjdWlzaW5lJztcbiAgICBob21lSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcblxuICAgIGxldCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSAnYXQgWXVsIHJlc3RhdXJhbnQnO1xuICAgIGhvbWVIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG5cbiAgICBsZXQgaG9tZU1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgaG9tZU1haW4uY2xhc3NMaXN0LmFkZCgnaG9tZS1tYWluJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGhvbWVNYWluKTtcblxuICAgIGxldCBpbWFnZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTEuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtMScpO1xuICAgIGhvbWVNYWluLmFwcGVuZENoaWxkKGltYWdlMSk7XG5cbiAgICBsZXQgaW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLTInKTtcbiAgICBob21lTWFpbi5hcHBlbmRDaGlsZChpbWFnZTIpO1xuXG4gICAgbGV0IGltYWdlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMy5jbGFzc0xpc3QuYWRkKCdpbWFnZS0zJyk7XG4gICAgaG9tZU1haW4uYXBwZW5kQ2hpbGQoaW1hZ2UzKTtcblxuICAgIGxldCBob21lRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgaG9tZUZvb3Rlci5jbGFzc0xpc3QuYWRkKCdob21lLWZvb3RlcicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChob21lRm9vdGVyKTtcblxuICAgIGxldCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb3RlclRleHQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXRleHQnKTtcbiAgICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gJ0Rpc2NvdmVyIHRoZSBtZW51JztcbiAgICBob21lRm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuICAgIFxuICAgIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWVudUJ1dHRvbi5zcmMgPSBhcnJvd0ltYWdlO1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWVudS1idXR0b24nKTtcbiAgICBob21lRm9vdGVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRNZW51KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZTtcblxuXG4vLyBTdHJ1Y3R1cmVcbiAgICAvLyBIZWFkZXJcbiAgICAvLyBNYWluXG4gICAgLy8gRm9vdGVyIiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBob21lSW1hZ2UgZnJvbSBcIi4uL2Rpc3QvaW1hZ2VzL1ZlY3RvclxcIFxcKDFcXCkuc3ZnXCI7XG5cbmNvbnN0IG1lbnUgPSAoKSA9PiB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBsZXQgaG9tZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1wYWdlJyk7XG4gICAgZGl2LnJlbW92ZUNoaWxkKGhvbWVQYWdlKTtcblxuICAgIGxldCBtZW51UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBtZW51UGFnZS5jbGFzc0xpc3QuYWRkKCdtZW51LXBhZ2UnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobWVudVBhZ2UpO1xuXG4gICAgbGV0IHRpdGxlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGVNZW51LnRleHRDb250ZW50ID0gJ1dlZWtseSBtZW51JztcbiAgICB0aXRsZU1lbnUuY2xhc3NMaXN0LmFkZCgndGl0bGUtbWVudScpO1xuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKHRpdGxlTWVudSk7XG5cbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhvbWVCdXR0b24uc3JjID0gaG9tZUltYWdlO1xuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaG9tZS1idXR0b24nKTtcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcblxuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBtZW51UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXBhZ2UnKTtcbiAgICAgICAgZGl2LnJlbW92ZUNoaWxkKG1lbnVQYWdlKTtcblxuICAgICAgICBsb2FkSG9tZSgpO1xuICAgIH0pO1xuXG5cbiAgICBsZXQgaW1hZ2VTZWN0aW9uTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBpbWFnZVNlY3Rpb25NZW51LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLXNlY3Rpb24tbWVudScpO1xuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKGltYWdlU2VjdGlvbk1lbnUpO1xuXG4gICAgbGV0IHBsYXRlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbGF0ZTEudGV4dENvbnRlbnQgPSAnUGFkIFRoYWkgLSAxMSQnO1xuICAgIHBsYXRlMS5jbGFzc0xpc3QuYWRkKCdwbGF0ZS0xJyk7XG4gICAgaW1hZ2VTZWN0aW9uTWVudS5hcHBlbmRDaGlsZChwbGF0ZTEpO1xuXG4gICAgLyogcmVhZHkgaWYgaSB3YW50IHRvIGFkZCBpbWdcbiAgICBsZXQgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZzEuY2xhc3NMaXN0LmFkZCgnaW1nMScpO1xuICAgIGltYWdlU2VjdGlvbk1lbnUuYXBwZW5kQ2hpbGQoaW1nMSk7Ki9cblxuICAgIGxldCBwbGF0ZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGxhdGUyLnRleHRDb250ZW50ID0gJ0tvcmVhbiBCQlEgLSAxNSQnO1xuICAgIHBsYXRlMi5jbGFzc0xpc3QuYWRkKCdwbGF0ZS0yJyk7XG4gICAgaW1hZ2VTZWN0aW9uTWVudS5hcHBlbmRDaGlsZChwbGF0ZTIpO1xuXG4gICAgbGV0IHBsYXRlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbGF0ZTMudGV4dENvbnRlbnQgPSAnVWRvbiAtIDE0JCc7XG4gICAgcGxhdGUzLmNsYXNzTGlzdC5hZGQoJ3BsYXRlLTMnKTtcbiAgICBpbWFnZVNlY3Rpb25NZW51LmFwcGVuZENoaWxkKHBsYXRlMyk7XG5cbiAgICBsZXQgcGxhdGU0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBsYXRlNC50ZXh0Q29udGVudCA9ICdQZWtpbiBEdWNrIC0gMTgkJztcbiAgICBwbGF0ZTQuY2xhc3NMaXN0LmFkZCgncGxhdGUtNCcpO1xuICAgIGltYWdlU2VjdGlvbk1lbnUuYXBwZW5kQ2hpbGQocGxhdGU0KTtcblxuICAgIGxldCBtZW51Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgbWVudUZvb3Rlci5jbGFzc0xpc3QuYWRkKCdtZW51LWZvb3RlcicpXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobWVudUZvb3Rlcik7XG5cbiAgICBsZXQgdGl0bGVGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGVGb290ZXIudGV4dENvbnRlbnQgPSAnQ29udGFjdCBpbmZvJztcbiAgICB0aXRsZUZvb3Rlci5jbGFzc0xpc3QuYWRkKCd0aXRsZS1mb290ZXInKTtcbiAgICBtZW51Rm9vdGVyLmFwcGVuZENoaWxkKHRpdGxlRm9vdGVyKTtcbiAgICBcbiAgICBsZXQgaW5mb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaW5mb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaW5mby1zZWN0aW9uJyk7XG4gICAgbWVudUZvb3Rlci5hcHBlbmRDaGlsZChpbmZvU2VjdGlvbik7XG5cbiAgICBsZXQgZ21haWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGdtYWlsVGV4dC50ZXh0Q29udGVudCA9ICcxMjM0QGdtYWlsLmNvbSc7XG4gICAgZ21haWxUZXh0LmNsYXNzTGlzdC5hZGQoJ2dtYWlsLXRleHQnKTtcbiAgICBpbmZvU2VjdGlvbi5hcHBlbmRDaGlsZChnbWFpbFRleHQpO1xuXG4gICAgbGV0IHBob25lTnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lTnVtLnRleHRDb250ZW50ID0gJyswNTAgMjUwIDg1NDEnO1xuICAgIHBob25lTnVtLmNsYXNzTGlzdC5hZGQoJ3Bob25lLW51bScpO1xuICAgIGluZm9TZWN0aW9uLmFwcGVuZENoaWxkKHBob25lTnVtKTtcblxuICAgIGxldCBhZGRyZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRyZXNzVGV4dC50ZXh0Q29udGVudCA9ICczNiBSb2FkLCAxNTIgRXhDaXR5LCBKUE4nO1xuICAgIGFkZHJlc3NUZXh0LmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3MtdGV4dCcpO1xuICAgIGluZm9TZWN0aW9uLmFwcGVuZENoaWxkKGFkZHJlc3NUZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSBcIi4vaG9tZVwiO1xuXG5pbml0aWFsaXplV2Vic2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9