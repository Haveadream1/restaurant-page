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

    let homePage = document.createElement('section');
    homePage.classList.add('home-page');
    div.appendChild(homePage);

    let titleSection = document.createElement('section');
    titleSection.classList.add('title-section');
    homePage.appendChild(titleSection);
    
    let titleH1 = document.createElement('h1');
    titleH1.textContent = 'Reserve your table for tonight';
    titleH1.classList.add('title-h1');
    titleSection.appendChild(titleH1);

    let titleText = document.createElement('p');
    titleText.classList.add('title-text');
    titleText.textContent = 'See more';
    titleSection.appendChild(titleText);

    let imageSection = document.createElement('section');
    imageSection.classList.add('image-section');
    homePage.appendChild(imageSection);

    let image1 = document.createElement('img');
    image1.classList.add('image-1');
    imageSection.appendChild(image1);

    let image2 = document.createElement('img');
    image2.classList.add('image-2');
    imageSection.appendChild(image2);

    let image3 = document.createElement('img');
    image3.classList.add('image-3');
    imageSection.appendChild(image3);

    let homeFooter = document.createElement('footer');
    homeFooter.classList.add('home-footer');
    homePage.appendChild(homeFooter);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ29COztBQUVsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFVO0FBQy9CO0FBQ0E7O0FBRUEseUNBQXlDLDZDQUFRO0FBQ2pEOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RFU7QUFDMkI7O0FBRXpEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsc0RBQVM7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxpREFBUTtBQUNoQixLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekZwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDbEJ1Qzs7QUFFdkMsaURBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGFycm93SW1hZ2UgZnJvbSBcIi4uL2Rpc3QvaW1hZ2VzL1ZlY3Rvci5zdmdcIlxuXG5jb25zdCBob21lID0gKCkgPT4ge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgbGV0IGhvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGhvbWVQYWdlLmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZScpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChob21lUGFnZSk7XG5cbiAgICBsZXQgdGl0bGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHRpdGxlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0aXRsZS1zZWN0aW9uJyk7XG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQodGl0bGVTZWN0aW9uKTtcbiAgICBcbiAgICBsZXQgdGl0bGVIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGVIMS50ZXh0Q29udGVudCA9ICdSZXNlcnZlIHlvdXIgdGFibGUgZm9yIHRvbmlnaHQnO1xuICAgIHRpdGxlSDEuY2xhc3NMaXN0LmFkZCgndGl0bGUtaDEnKTtcbiAgICB0aXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGVIMSk7XG5cbiAgICBsZXQgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKCd0aXRsZS10ZXh0Jyk7XG4gICAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ1NlZSBtb3JlJztcbiAgICB0aXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcblxuICAgIGxldCBpbWFnZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaW1hZ2VTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLXNlY3Rpb24nKTtcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChpbWFnZVNlY3Rpb24pO1xuXG4gICAgbGV0IGltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMS5jbGFzc0xpc3QuYWRkKCdpbWFnZS0xJyk7XG4gICAgaW1hZ2VTZWN0aW9uLmFwcGVuZENoaWxkKGltYWdlMSk7XG5cbiAgICBsZXQgaW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLTInKTtcbiAgICBpbWFnZVNlY3Rpb24uYXBwZW5kQ2hpbGQoaW1hZ2UyKTtcblxuICAgIGxldCBpbWFnZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTMuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtMycpO1xuICAgIGltYWdlU2VjdGlvbi5hcHBlbmRDaGlsZChpbWFnZTMpO1xuXG4gICAgbGV0IGhvbWVGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBob21lRm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtZm9vdGVyJyk7XG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoaG9tZUZvb3Rlcik7XG5cbiAgICBsZXQgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb290ZXJUZXh0LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci10ZXh0Jyk7XG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9ICdEaXNjb3ZlciB0aGUgbWVudSc7XG4gICAgaG9tZUZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbiAgICBcbiAgICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1lbnVCdXR0b24uc3JjID0gYXJyb3dJbWFnZTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uJyk7XG4gICAgaG9tZUZvb3Rlci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcblxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWVudSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWU7XG4iLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGhvbWVJbWFnZSBmcm9tIFwiLi4vZGlzdC9pbWFnZXMvVmVjdG9yXFwgXFwoMVxcKS5zdmdcIjtcblxuY29uc3QgbWVudSA9ICgpID0+IHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGxldCBob21lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLXBhZ2UnKTtcbiAgICBkaXYucmVtb3ZlQ2hpbGQoaG9tZVBhZ2UpO1xuXG4gICAgbGV0IG1lbnVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIG1lbnVQYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtcGFnZScpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChtZW51UGFnZSk7XG5cbiAgICBsZXQgdGl0bGVNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZU1lbnUudGV4dENvbnRlbnQgPSAnV2Vla2x5IG1lbnUnO1xuICAgIHRpdGxlTWVudS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1tZW51Jyk7XG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQodGl0bGVNZW51KTtcblxuICAgIGxldCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaG9tZUJ1dHRvbi5zcmMgPSBob21lSW1hZ2U7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdob21lLWJ1dHRvbicpO1xuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuXG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IG1lbnVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcGFnZScpO1xuICAgICAgICBkaXYucmVtb3ZlQ2hpbGQobWVudVBhZ2UpO1xuXG4gICAgICAgIGxvYWRIb21lKCk7XG4gICAgfSk7XG5cblxuICAgIGxldCBpbWFnZVNlY3Rpb25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGltYWdlU2VjdGlvbk1lbnUuY2xhc3NMaXN0LmFkZCgnaW1hZ2Utc2VjdGlvbi1tZW51Jyk7XG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoaW1hZ2VTZWN0aW9uTWVudSk7XG5cbiAgICBsZXQgcGxhdGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBsYXRlMS50ZXh0Q29udGVudCA9ICdQYWQgVGhhaSAtIDExJCc7XG4gICAgcGxhdGUxLmNsYXNzTGlzdC5hZGQoJ3BsYXRlLTEnKTtcbiAgICBpbWFnZVNlY3Rpb25NZW51LmFwcGVuZENoaWxkKHBsYXRlMSk7XG5cbiAgICAvKiByZWFkeSBpZiBpIHdhbnQgdG8gYWRkIGltZ1xuICAgIGxldCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nMS5jbGFzc0xpc3QuYWRkKCdpbWcxJyk7XG4gICAgaW1hZ2VTZWN0aW9uTWVudS5hcHBlbmRDaGlsZChpbWcxKTsqL1xuXG4gICAgbGV0IHBsYXRlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbGF0ZTIudGV4dENvbnRlbnQgPSAnS29yZWFuIEJCUSAtIDE1JCc7XG4gICAgcGxhdGUyLmNsYXNzTGlzdC5hZGQoJ3BsYXRlLTInKTtcbiAgICBpbWFnZVNlY3Rpb25NZW51LmFwcGVuZENoaWxkKHBsYXRlMik7XG5cbiAgICBsZXQgcGxhdGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBsYXRlMy50ZXh0Q29udGVudCA9ICdVZG9uIC0gMTQkJztcbiAgICBwbGF0ZTMuY2xhc3NMaXN0LmFkZCgncGxhdGUtMycpO1xuICAgIGltYWdlU2VjdGlvbk1lbnUuYXBwZW5kQ2hpbGQocGxhdGUzKTtcblxuICAgIGxldCBwbGF0ZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGxhdGU0LnRleHRDb250ZW50ID0gJ1Bla2luIER1Y2sgLSAxOCQnO1xuICAgIHBsYXRlNC5jbGFzc0xpc3QuYWRkKCdwbGF0ZS00Jyk7XG4gICAgaW1hZ2VTZWN0aW9uTWVudS5hcHBlbmRDaGlsZChwbGF0ZTQpO1xuXG4gICAgbGV0IG1lbnVGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBtZW51Rm9vdGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtZm9vdGVyJylcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChtZW51Rm9vdGVyKTtcblxuICAgIGxldCB0aXRsZUZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZUZvb3Rlci50ZXh0Q29udGVudCA9ICdDb250YWN0IGluZm8nO1xuICAgIHRpdGxlRm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWZvb3RlcicpO1xuICAgIG1lbnVGb290ZXIuYXBwZW5kQ2hpbGQodGl0bGVGb290ZXIpO1xuICAgIFxuICAgIGxldCBpbmZvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBpbmZvU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdpbmZvLXNlY3Rpb24nKTtcbiAgICBtZW51Rm9vdGVyLmFwcGVuZENoaWxkKGluZm9TZWN0aW9uKTtcblxuICAgIGxldCBnbWFpbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZ21haWxUZXh0LnRleHRDb250ZW50ID0gJzEyMzRAZ21haWwuY29tJztcbiAgICBnbWFpbFRleHQuY2xhc3NMaXN0LmFkZCgnZ21haWwtdGV4dCcpO1xuICAgIGluZm9TZWN0aW9uLmFwcGVuZENoaWxkKGdtYWlsVGV4dCk7XG5cbiAgICBsZXQgcGhvbmVOdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSAnKzA1MCAyNTAgODU0MSc7XG4gICAgcGhvbmVOdW0uY2xhc3NMaXN0LmFkZCgncGhvbmUtbnVtJyk7XG4gICAgaW5mb1NlY3Rpb24uYXBwZW5kQ2hpbGQocGhvbmVOdW0pO1xuXG4gICAgbGV0IGFkZHJlc3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFkZHJlc3NUZXh0LnRleHRDb250ZW50ID0gJzM2IFJvYWQsIDE1MiBFeENpdHksIEpQTic7XG4gICAgYWRkcmVzc1RleHQuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcy10ZXh0Jyk7XG4gICAgaW5mb1NlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkcmVzc1RleHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBpbml0aWFsaXplV2Vic2l0ZSBmcm9tIFwiLi9ob21lXCI7XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=