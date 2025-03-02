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
    homeHeaderText.textContent = 'at Yul restaurant';
    homeHeader.appendChild(homeHeaderText);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ29COztBQUVsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQVU7QUFDL0I7QUFDQTs7QUFFQSx5Q0FBeUMsNkNBQVE7QUFDakQ7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEVTtBQUMyQjs7QUFFekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsc0RBQVM7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLGlEQUFRO0FBQ2hCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoR3BCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7QUNsQnVDOztBQUV2QyxpREFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgYXJyb3dJbWFnZSBmcm9tIFwiLi4vZGlzdC9pbWFnZXMvVmVjdG9yLnN2Z1wiXG5cbmNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICAvKiBIZWFkZXIgKi9cbiAgICBsZXQgaG9tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhvbWVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS1oZWFkZXInKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaG9tZUhlYWRlcik7XG4gICAgXG4gICAgbGV0IGhvbWVIZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaG9tZUhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJ0Rpc2NvdmVyIHRoZSBkaWZmZXJlbnQgdGFzdGUgb2YgQXNpYW4gY3Vpc2luZSc7XG4gICAgaG9tZUhlYWRlci5hcHBlbmRDaGlsZChob21lSGVhZGVyVGl0bGUpO1xuXG4gICAgbGV0IGhvbWVIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhvbWVIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gJ2F0IFl1bCByZXN0YXVyYW50JztcbiAgICBob21lSGVhZGVyLmFwcGVuZENoaWxkKGhvbWVIZWFkZXJUZXh0KTtcblxuICAgIC8qIE1haW4gKi9cbiAgICBsZXQgaG9tZU1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgaG9tZU1haW4uY2xhc3NMaXN0LmFkZCgnaG9tZS1tYWluJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGhvbWVNYWluKTtcblxuICAgIGxldCBpbWFnZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTEuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtMScpO1xuICAgIGhvbWVNYWluLmFwcGVuZENoaWxkKGltYWdlMSk7XG5cbiAgICBsZXQgaW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLTInKTtcbiAgICBob21lTWFpbi5hcHBlbmRDaGlsZChpbWFnZTIpO1xuXG4gICAgbGV0IGltYWdlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMy5jbGFzc0xpc3QuYWRkKCdpbWFnZS0zJyk7XG4gICAgaG9tZU1haW4uYXBwZW5kQ2hpbGQoaW1hZ2UzKTtcblxuICAgIC8qIEZvb3RlciAqL1xuICAgIGxldCBob21lRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgaG9tZUZvb3Rlci5jbGFzc0xpc3QuYWRkKCdob21lLWZvb3RlcicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChob21lRm9vdGVyKTtcblxuICAgIGxldCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb3RlclRleHQudGV4dENvbnRlbnQgPSAnRGlzY292ZXIgdGhlIG1lbnUnO1xuICAgIGhvbWVGb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG4gICAgXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtZW51QnV0dG9uLnNyYyA9IGFycm93SW1hZ2U7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ1dHRvbicpO1xuICAgIGhvbWVGb290ZXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG5cbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZE1lbnUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBob21lO1xuIiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBob21lSW1hZ2UgZnJvbSBcIi4uL2Rpc3QvaW1hZ2VzL1ZlY3RvclxcIFxcKDFcXCkuc3ZnXCI7XG5cbmNvbnN0IG1lbnUgPSAoKSA9PiB7XG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBsZXQgaG9tZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWhlYWRlcicpO1xuICAgIGRpdi5yZW1vdmVDaGlsZChob21lSGVhZGVyKTtcbiAgICBsZXQgaG9tZU1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1tYWluJyk7XG4gICAgZGl2LnJlbW92ZUNoaWxkKGhvbWVNYWluKTtcbiAgICBsZXQgaG9tZUZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWZvb3RlcicpO1xuICAgIGRpdi5yZW1vdmVDaGlsZChob21lRm9vdGVyKTtcblxuICAgIC8qIEhlYWRlciAqL1xuICAgIGxldCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgbWVudUhlYWRlci5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRlcicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChtZW51SGVhZGVyKTtcblxuICAgIGxldCBtZW51SGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1lbnVIZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICdXZWVrbHkgbWVudSc7XG4gICAgbWVudUhlYWRlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGl0bGUnKTtcbiAgICBtZW51SGVhZGVyLmFwcGVuZENoaWxkKG1lbnVIZWFkZXJUaXRsZSk7XG5cbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhvbWVCdXR0b24uc3JjID0gaG9tZUltYWdlO1xuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaG9tZS1idXR0b24nKTtcbiAgICBtZW51SGVhZGVyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuXG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1oZWFkZXInKTtcbiAgICAgICAgZGl2LnJlbW92ZUNoaWxkKG1lbnVIZWFkZXIpO1xuICAgICAgICBsZXQgbWVudU1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1tYWluJyk7XG4gICAgICAgIGRpdi5yZW1vdmVDaGlsZChtZW51TWFpbik7XG4gICAgICAgIGxldCBtZW51Rm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtZm9vdGVyJyk7XG4gICAgICAgIGRpdi5yZW1vdmVDaGlsZChtZW51Rm9vdGVyKTtcblxuICAgICAgICBsb2FkSG9tZSgpO1xuICAgIH0pO1xuXG4gICAgLyogTWFpbiAqL1xuICAgIGxldCBtZW51TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtZW51TWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51LW1haW4nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobWVudU1haW4pO1xuXG4gICAgbGV0IHBsYXRlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbGF0ZTEudGV4dENvbnRlbnQgPSAnUGFkIFRoYWkgLSAxMSQnO1xuICAgIHBsYXRlMS5jbGFzc0xpc3QuYWRkKCdwbGF0ZS0xJyk7XG4gICAgbWVudU1haW4uYXBwZW5kQ2hpbGQocGxhdGUxKTtcblxuICAgIC8qIHJlYWR5IGlmIGkgd2FudCB0byBhZGQgaW1nXG4gICAgbGV0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcxLmNsYXNzTGlzdC5hZGQoJ2ltZzEnKTtcbiAgICBtZW51TWFpbi5hcHBlbmRDaGlsZChpbWcxKTsqL1xuXG4gICAgbGV0IHBsYXRlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbGF0ZTIudGV4dENvbnRlbnQgPSAnS29yZWFuIEJCUSAtIDE1JCc7XG4gICAgcGxhdGUyLmNsYXNzTGlzdC5hZGQoJ3BsYXRlLTInKTtcbiAgICBtZW51TWFpbi5hcHBlbmRDaGlsZChwbGF0ZTIpO1xuXG4gICAgbGV0IHBsYXRlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbGF0ZTMudGV4dENvbnRlbnQgPSAnVWRvbiAtIDE0JCc7XG4gICAgcGxhdGUzLmNsYXNzTGlzdC5hZGQoJ3BsYXRlLTMnKTtcbiAgICBtZW51TWFpbi5hcHBlbmRDaGlsZChwbGF0ZTMpO1xuXG4gICAgbGV0IHBsYXRlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbGF0ZTQudGV4dENvbnRlbnQgPSAnUGVraW4gRHVjayAtIDE4JCc7XG4gICAgcGxhdGU0LmNsYXNzTGlzdC5hZGQoJ3BsYXRlLTQnKTtcbiAgICBtZW51TWFpbi5hcHBlbmRDaGlsZChwbGF0ZTQpO1xuXG4gICAgLyogRm9vdGVyICovXG4gICAgbGV0IG1lbnVGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBtZW51Rm9vdGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtZm9vdGVyJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKG1lbnVGb290ZXIpO1xuXG4gICAgbGV0IHRpdGxlRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpdGxlRm9vdGVyLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgaW5mbyc7XG4gICAgdGl0bGVGb290ZXIuY2xhc3NMaXN0LmFkZCgndGl0bGUtZm9vdGVyJyk7XG4gICAgbWVudUZvb3Rlci5hcHBlbmRDaGlsZCh0aXRsZUZvb3Rlcik7XG4gICAgXG4gICAgbGV0IGluZm9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGluZm9TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2luZm8tc2VjdGlvbicpO1xuICAgIG1lbnVGb290ZXIuYXBwZW5kQ2hpbGQoaW5mb1NlY3Rpb24pO1xuXG4gICAgbGV0IGdtYWlsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBnbWFpbFRleHQudGV4dENvbnRlbnQgPSAnMTIzNEBnbWFpbC5jb20nO1xuICAgIGluZm9TZWN0aW9uLmFwcGVuZENoaWxkKGdtYWlsVGV4dCk7XG5cbiAgICBsZXQgcGhvbmVOdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSAnKzA1MCAyNTAgODU0MSc7XG4gICAgaW5mb1NlY3Rpb24uYXBwZW5kQ2hpbGQocGhvbmVOdW0pO1xuXG4gICAgbGV0IGFkZHJlc3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFkZHJlc3NUZXh0LnRleHRDb250ZW50ID0gJzM2IFJvYWQsIDE1MiBFeENpdHksIEpQTic7XG4gICAgaW5mb1NlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkcmVzc1RleHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBpbml0aWFsaXplV2Vic2l0ZSBmcm9tIFwiLi9ob21lXCI7XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=