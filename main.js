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

    /* Header */
    let homeHeader = document.createElement('header');
    homeHeader.classList.add('home-header');
    div.appendChild(homeHeader);
    
    let homeHeaderTitle = document.createElement('h1');
    homeHeaderTitle.textContent = 'Discover the different taste of Asian cuisine';
    homeHeader.appendChild(homeHeaderTitle);

    let homeHeaderText = document.createElement('p');
    homeHeaderText.classList.add('home-header-text');
    homeHeaderText.textContent = 'at Yul restaurant';
    homeHeaderTitle.appendChild(homeHeaderText);

    /* Main */
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

    /* Footer */
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

    let homeHeader = document.querySelector('.home-header');
    div.removeChild(homeHeader);
    let homeMain = document.querySelector('.home-main');
    div.removeChild(homeMain);
    let homeFooter = document.querySelector('.home-footer');
    div.removeChild(homeFooter);

    /* Header */
    let menuHeader = document.createElement('header');
    menuHeader.classList.add('menu-header');
    div.appendChild(menuHeader);

    let menuHeaderTitle = document.createElement('h1');
    menuHeaderTitle.textContent = 'Weekly menu';
    menuHeaderTitle.classList.add('menu-title');
    menuHeader.appendChild(menuHeaderTitle);

    let homeButton = document.createElement('img');
    homeButton.src = _dist_images_Vector_1_svg__WEBPACK_IMPORTED_MODULE_1__;
    homeButton.classList.add('home-button');
    menuHeader.appendChild(homeButton);

    homeButton.addEventListener('click', () => {
        let menuHeader = document.querySelector('.menu-header');
        div.removeChild(menuHeader);
        let menuMain = document.querySelector('.menu-main');
        div.removeChild(menuMain);
        let menuFooter = document.querySelector('.menu-footer');
        div.removeChild(menuFooter);

        (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    /* Main */
    let menuMain = document.createElement('main');
    menuMain.classList.add('menu-main');
    div.appendChild(menuMain);

    let plate1 = document.createElement('p');
    plate1.textContent = 'Pad Thai - 11$';
    plate1.classList.add('plate-1');
    menuMain.appendChild(plate1);

    /* ready if i want to add img
    let img1 = document.createElement('img');
    img1.classList.add('img1');
    menuMain.appendChild(img1);*/

    let plate2 = document.createElement('p');
    plate2.textContent = 'Korean BBQ - 15$';
    plate2.classList.add('plate-2');
    menuMain.appendChild(plate2);

    let plate3 = document.createElement('p');
    plate3.textContent = 'Udon - 14$';
    plate3.classList.add('plate-3');
    menuMain.appendChild(plate3);

    let plate4 = document.createElement('p');
    plate4.textContent = 'Pekin Duck - 18$';
    plate4.classList.add('plate-4');
    menuMain.appendChild(plate4);

    /* Footer */
    let menuFooter = document.createElement('footer');
    menuFooter.classList.add('menu-footer');
    div.appendChild(menuFooter);

    let titleFooter = document.createElement('p');
    titleFooter.textContent = 'Contact info';
    titleFooter.classList.add('title-footer');
    menuFooter.appendChild(titleFooter);
    
    let infoSection = document.createElement('section');
    infoSection.classList.add('info-section');
    menuFooter.appendChild(infoSection);

    let gmailText = document.createElement('p');
    gmailText.textContent = '1234@gmail.com';
    infoSection.appendChild(gmailText);

    let phoneNum = document.createElement('p');
    phoneNum.textContent = '+050 250 8541';
    infoSection.appendChild(phoneNum);

    let addressText = document.createElement('p');
    addressText.textContent = '36 Road, 152 ExCity, JPN';
    infoSection.appendChild(addressText);


    /*
    let menuPage = document.createElement('section');
    menuPage.classList.add('menu-page');
    div.appendChild(menuPage);

    let titleMenu = document.createElement('h1');
    titleMenu.textContent = 'Weekly menu';
    titleMenu.classList.add('title-menu');
    menuPage.appendChild(titleMenu);

    let homeButton = document.createElement('img');
    homeButton.src = homeImage;
    homeButton.classList.add('home-button');
    menuPage.appendChild(homeButton);

    homeButton.addEventListener('click', () => {
        let menuPage = document.querySelector('.menu-page');
        div.removeChild(menuPage);

        loadHome();
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

    /*
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
    */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ29COztBQUVsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFVO0FBQy9CO0FBQ0E7O0FBRUEseUNBQXlDLDZDQUFRO0FBQ2pEOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRVO0FBQzJCOztBQUV6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixzREFBUztBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsaURBQVE7QUFDaEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkxwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDbEJ1Qzs7QUFFdkMsaURBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGFycm93SW1hZ2UgZnJvbSBcIi4uL2Rpc3QvaW1hZ2VzL1ZlY3Rvci5zdmdcIlxuXG5jb25zdCBob21lID0gKCkgPT4ge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgLyogSGVhZGVyICovXG4gICAgbGV0IGhvbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBob21lSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUtaGVhZGVyJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGhvbWVIZWFkZXIpO1xuICAgIFxuICAgIGxldCBob21lSGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhvbWVIZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdEaXNjb3ZlciB0aGUgZGlmZmVyZW50IHRhc3RlIG9mIEFzaWFuIGN1aXNpbmUnO1xuICAgIGhvbWVIZWFkZXIuYXBwZW5kQ2hpbGQoaG9tZUhlYWRlclRpdGxlKTtcblxuICAgIGxldCBob21lSGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob21lSGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKCdob21lLWhlYWRlci10ZXh0Jyk7XG4gICAgaG9tZUhlYWRlclRleHQudGV4dENvbnRlbnQgPSAnYXQgWXVsIHJlc3RhdXJhbnQnO1xuICAgIGhvbWVIZWFkZXJUaXRsZS5hcHBlbmRDaGlsZChob21lSGVhZGVyVGV4dCk7XG5cbiAgICAvKiBNYWluICovXG4gICAgbGV0IGhvbWVNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGhvbWVNYWluLmNsYXNzTGlzdC5hZGQoJ2hvbWUtbWFpbicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChob21lTWFpbik7XG5cbiAgICBsZXQgaW1hZ2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UxLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLTEnKTtcbiAgICBob21lTWFpbi5hcHBlbmRDaGlsZChpbWFnZTEpO1xuXG4gICAgbGV0IGltYWdlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMi5jbGFzc0xpc3QuYWRkKCdpbWFnZS0yJyk7XG4gICAgaG9tZU1haW4uYXBwZW5kQ2hpbGQoaW1hZ2UyKTtcblxuICAgIGxldCBpbWFnZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTMuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtMycpO1xuICAgIGhvbWVNYWluLmFwcGVuZENoaWxkKGltYWdlMyk7XG5cbiAgICAvKiBGb290ZXIgKi9cbiAgICBsZXQgaG9tZUZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGhvbWVGb290ZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS1mb290ZXInKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaG9tZUZvb3Rlcik7XG5cbiAgICBsZXQgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb290ZXJUZXh0LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci10ZXh0Jyk7XG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9ICdEaXNjb3ZlciB0aGUgbWVudSc7XG4gICAgaG9tZUZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbiAgICBcbiAgICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1lbnVCdXR0b24uc3JjID0gYXJyb3dJbWFnZTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnV0dG9uJyk7XG4gICAgaG9tZUZvb3Rlci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcblxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWVudSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWU7XG5cbiIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgaG9tZUltYWdlIGZyb20gXCIuLi9kaXN0L2ltYWdlcy9WZWN0b3JcXCBcXCgxXFwpLnN2Z1wiO1xuXG5jb25zdCBtZW51ID0gKCkgPT4ge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgbGV0IGhvbWVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1oZWFkZXInKTtcbiAgICBkaXYucmVtb3ZlQ2hpbGQoaG9tZUhlYWRlcik7XG4gICAgbGV0IGhvbWVNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtbWFpbicpO1xuICAgIGRpdi5yZW1vdmVDaGlsZChob21lTWFpbik7XG4gICAgbGV0IGhvbWVGb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1mb290ZXInKTtcbiAgICBkaXYucmVtb3ZlQ2hpbGQoaG9tZUZvb3Rlcik7XG5cbiAgICAvKiBIZWFkZXIgKi9cbiAgICBsZXQgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIG1lbnVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXInKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XG5cbiAgICBsZXQgbWVudUhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtZW51SGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAnV2Vla2x5IG1lbnUnO1xuICAgIG1lbnVIZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LXRpdGxlJyk7XG4gICAgbWVudUhlYWRlci5hcHBlbmRDaGlsZChtZW51SGVhZGVyVGl0bGUpO1xuXG4gICAgbGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBob21lQnV0dG9uLnNyYyA9IGhvbWVJbWFnZTtcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hvbWUtYnV0dG9uJyk7XG4gICAgbWVudUhlYWRlci5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcblxuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBtZW51SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaGVhZGVyJyk7XG4gICAgICAgIGRpdi5yZW1vdmVDaGlsZChtZW51SGVhZGVyKTtcbiAgICAgICAgbGV0IG1lbnVNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtbWFpbicpO1xuICAgICAgICBkaXYucmVtb3ZlQ2hpbGQobWVudU1haW4pO1xuICAgICAgICBsZXQgbWVudUZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWZvb3RlcicpO1xuICAgICAgICBkaXYucmVtb3ZlQ2hpbGQobWVudUZvb3Rlcik7XG5cbiAgICAgICAgbG9hZEhvbWUoKTtcbiAgICB9KTtcblxuICAgIC8qIE1haW4gKi9cbiAgICBsZXQgbWVudU1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWVudU1haW4uY2xhc3NMaXN0LmFkZCgnbWVudS1tYWluJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKG1lbnVNYWluKTtcblxuICAgIGxldCBwbGF0ZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGxhdGUxLnRleHRDb250ZW50ID0gJ1BhZCBUaGFpIC0gMTEkJztcbiAgICBwbGF0ZTEuY2xhc3NMaXN0LmFkZCgncGxhdGUtMScpO1xuICAgIG1lbnVNYWluLmFwcGVuZENoaWxkKHBsYXRlMSk7XG5cbiAgICAvKiByZWFkeSBpZiBpIHdhbnQgdG8gYWRkIGltZ1xuICAgIGxldCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nMS5jbGFzc0xpc3QuYWRkKCdpbWcxJyk7XG4gICAgbWVudU1haW4uYXBwZW5kQ2hpbGQoaW1nMSk7Ki9cblxuICAgIGxldCBwbGF0ZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGxhdGUyLnRleHRDb250ZW50ID0gJ0tvcmVhbiBCQlEgLSAxNSQnO1xuICAgIHBsYXRlMi5jbGFzc0xpc3QuYWRkKCdwbGF0ZS0yJyk7XG4gICAgbWVudU1haW4uYXBwZW5kQ2hpbGQocGxhdGUyKTtcblxuICAgIGxldCBwbGF0ZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGxhdGUzLnRleHRDb250ZW50ID0gJ1Vkb24gLSAxNCQnO1xuICAgIHBsYXRlMy5jbGFzc0xpc3QuYWRkKCdwbGF0ZS0zJyk7XG4gICAgbWVudU1haW4uYXBwZW5kQ2hpbGQocGxhdGUzKTtcblxuICAgIGxldCBwbGF0ZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGxhdGU0LnRleHRDb250ZW50ID0gJ1Bla2luIER1Y2sgLSAxOCQnO1xuICAgIHBsYXRlNC5jbGFzc0xpc3QuYWRkKCdwbGF0ZS00Jyk7XG4gICAgbWVudU1haW4uYXBwZW5kQ2hpbGQocGxhdGU0KTtcblxuICAgIC8qIEZvb3RlciAqL1xuICAgIGxldCBtZW51Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgbWVudUZvb3Rlci5jbGFzc0xpc3QuYWRkKCdtZW51LWZvb3RlcicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChtZW51Rm9vdGVyKTtcblxuICAgIGxldCB0aXRsZUZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZUZvb3Rlci50ZXh0Q29udGVudCA9ICdDb250YWN0IGluZm8nO1xuICAgIHRpdGxlRm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWZvb3RlcicpO1xuICAgIG1lbnVGb290ZXIuYXBwZW5kQ2hpbGQodGl0bGVGb290ZXIpO1xuICAgIFxuICAgIGxldCBpbmZvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBpbmZvU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdpbmZvLXNlY3Rpb24nKTtcbiAgICBtZW51Rm9vdGVyLmFwcGVuZENoaWxkKGluZm9TZWN0aW9uKTtcblxuICAgIGxldCBnbWFpbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZ21haWxUZXh0LnRleHRDb250ZW50ID0gJzEyMzRAZ21haWwuY29tJztcbiAgICBpbmZvU2VjdGlvbi5hcHBlbmRDaGlsZChnbWFpbFRleHQpO1xuXG4gICAgbGV0IHBob25lTnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lTnVtLnRleHRDb250ZW50ID0gJyswNTAgMjUwIDg1NDEnO1xuICAgIGluZm9TZWN0aW9uLmFwcGVuZENoaWxkKHBob25lTnVtKTtcblxuICAgIGxldCBhZGRyZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRyZXNzVGV4dC50ZXh0Q29udGVudCA9ICczNiBSb2FkLCAxNTIgRXhDaXR5LCBKUE4nO1xuICAgIGluZm9TZWN0aW9uLmFwcGVuZENoaWxkKGFkZHJlc3NUZXh0KTtcblxuXG4gICAgLypcbiAgICBsZXQgbWVudVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgbWVudVBhZ2UuY2xhc3NMaXN0LmFkZCgnbWVudS1wYWdlJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKG1lbnVQYWdlKTtcblxuICAgIGxldCB0aXRsZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlTWVudS50ZXh0Q29udGVudCA9ICdXZWVrbHkgbWVudSc7XG4gICAgdGl0bGVNZW51LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLW1lbnUnKTtcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZCh0aXRsZU1lbnUpO1xuXG4gICAgbGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBob21lQnV0dG9uLnNyYyA9IGhvbWVJbWFnZTtcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hvbWUtYnV0dG9uJyk7XG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG5cbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgbWVudVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1wYWdlJyk7XG4gICAgICAgIGRpdi5yZW1vdmVDaGlsZChtZW51UGFnZSk7XG5cbiAgICAgICAgbG9hZEhvbWUoKTtcbiAgICB9KTtcblxuXG4gICAgbGV0IGltYWdlU2VjdGlvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaW1hZ2VTZWN0aW9uTWVudS5jbGFzc0xpc3QuYWRkKCdpbWFnZS1zZWN0aW9uLW1lbnUnKTtcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChpbWFnZVNlY3Rpb25NZW51KTtcblxuICAgIGxldCBwbGF0ZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGxhdGUxLnRleHRDb250ZW50ID0gJ1BhZCBUaGFpIC0gMTEkJztcbiAgICBwbGF0ZTEuY2xhc3NMaXN0LmFkZCgncGxhdGUtMScpO1xuICAgIGltYWdlU2VjdGlvbk1lbnUuYXBwZW5kQ2hpbGQocGxhdGUxKTtcblxuICAgIC8qIHJlYWR5IGlmIGkgd2FudCB0byBhZGQgaW1nXG4gICAgbGV0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcxLmNsYXNzTGlzdC5hZGQoJ2ltZzEnKTtcbiAgICBpbWFnZVNlY3Rpb25NZW51LmFwcGVuZENoaWxkKGltZzEpOyovXG5cbiAgICAvKlxuICAgIGxldCBwbGF0ZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGxhdGUyLnRleHRDb250ZW50ID0gJ0tvcmVhbiBCQlEgLSAxNSQnO1xuICAgIHBsYXRlMi5jbGFzc0xpc3QuYWRkKCdwbGF0ZS0yJyk7XG4gICAgaW1hZ2VTZWN0aW9uTWVudS5hcHBlbmRDaGlsZChwbGF0ZTIpO1xuXG4gICAgbGV0IHBsYXRlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbGF0ZTMudGV4dENvbnRlbnQgPSAnVWRvbiAtIDE0JCc7XG4gICAgcGxhdGUzLmNsYXNzTGlzdC5hZGQoJ3BsYXRlLTMnKTtcbiAgICBpbWFnZVNlY3Rpb25NZW51LmFwcGVuZENoaWxkKHBsYXRlMyk7XG5cbiAgICBsZXQgcGxhdGU0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBsYXRlNC50ZXh0Q29udGVudCA9ICdQZWtpbiBEdWNrIC0gMTgkJztcbiAgICBwbGF0ZTQuY2xhc3NMaXN0LmFkZCgncGxhdGUtNCcpO1xuICAgIGltYWdlU2VjdGlvbk1lbnUuYXBwZW5kQ2hpbGQocGxhdGU0KTtcblxuICAgIGxldCBtZW51Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgbWVudUZvb3Rlci5jbGFzc0xpc3QuYWRkKCdtZW51LWZvb3RlcicpXG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobWVudUZvb3Rlcik7XG5cbiAgICBsZXQgdGl0bGVGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGl0bGVGb290ZXIudGV4dENvbnRlbnQgPSAnQ29udGFjdCBpbmZvJztcbiAgICB0aXRsZUZvb3Rlci5jbGFzc0xpc3QuYWRkKCd0aXRsZS1mb290ZXInKTtcbiAgICBtZW51Rm9vdGVyLmFwcGVuZENoaWxkKHRpdGxlRm9vdGVyKTtcbiAgICBcbiAgICBsZXQgaW5mb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgaW5mb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaW5mby1zZWN0aW9uJyk7XG4gICAgbWVudUZvb3Rlci5hcHBlbmRDaGlsZChpbmZvU2VjdGlvbik7XG5cbiAgICBsZXQgZ21haWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGdtYWlsVGV4dC50ZXh0Q29udGVudCA9ICcxMjM0QGdtYWlsLmNvbSc7XG4gICAgZ21haWxUZXh0LmNsYXNzTGlzdC5hZGQoJ2dtYWlsLXRleHQnKTtcbiAgICBpbmZvU2VjdGlvbi5hcHBlbmRDaGlsZChnbWFpbFRleHQpO1xuXG4gICAgbGV0IHBob25lTnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lTnVtLnRleHRDb250ZW50ID0gJyswNTAgMjUwIDg1NDEnO1xuICAgIHBob25lTnVtLmNsYXNzTGlzdC5hZGQoJ3Bob25lLW51bScpO1xuICAgIGluZm9TZWN0aW9uLmFwcGVuZENoaWxkKHBob25lTnVtKTtcblxuICAgIGxldCBhZGRyZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRyZXNzVGV4dC50ZXh0Q29udGVudCA9ICczNiBSb2FkLCAxNTIgRXhDaXR5LCBKUE4nO1xuICAgIGFkZHJlc3NUZXh0LmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3MtdGV4dCcpO1xuICAgIGluZm9TZWN0aW9uLmFwcGVuZENoaWxkKGFkZHJlc3NUZXh0KTtcbiAgICAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBpbml0aWFsaXplV2Vic2l0ZSBmcm9tIFwiLi9ob21lXCI7XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=