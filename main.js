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

    let sectionHome = document.createElement('section');
    sectionHome.classList.add('grid-home');
    div.appendChild(sectionHome);

    let sectionTitle = document.createElement('section');
    sectionTitle.classList.add('title');
    sectionHome.appendChild(sectionTitle);
    
    let titleHome = document.createElement('h1');
    titleHome.textContent = 'Reserve your table for tonight';
    titleHome.classList.add('title-home');
    sectionTitle.appendChild(titleHome);

    let seeMore = document.createElement('p');
    seeMore.classList.add('see-more');
    seeMore.textContent = 'See more';
    sectionTitle.appendChild(seeMore);

    let sectionImage = document.createElement('section');
    sectionImage.classList.add('image');
    sectionHome.appendChild(sectionImage);

    let image1 = document.createElement('img');
    image1.classList.add('image-1');
    sectionImage.appendChild(image1);

    let image2 = document.createElement('img');
    image2.classList.add('image-2');
    sectionImage.appendChild(image2);

    let image3 = document.createElement('img');
    image3.classList.add('image-3');
    sectionImage.appendChild(image3);

    let sectionArrow = document.createElement('footer');
    sectionArrow.classList.add('arrow');
    sectionHome.appendChild(sectionArrow);

    let discover = document.createElement('p');
    discover.classList.add('discover');
    discover.textContent = 'Discover the menu';
    sectionArrow.appendChild(discover);
    
    let discoverButton = document.createElement('img');
    discoverButton.src = _dist_images_Vector_svg__WEBPACK_IMPORTED_MODULE_1__;
    discoverButton.classList.add('discover-button');
    sectionArrow.appendChild(discoverButton);

    discoverButton.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_0__["default"]);
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

    let sectionMenu = document.createElement('section');
    sectionMenu.classList.add('menu');
    div.appendChild(sectionMenu);

    let titleMenu = document.createElement('h1');
    titleMenu.textContent = 'Weekly menu';
    titleMenu.classList.add('title-menu');
    sectionMenu.appendChild(titleMenu);

    let returnHome = document.createElement('img');
    returnHome.src = _dist_images_Vector_1_svg__WEBPACK_IMPORTED_MODULE_1__;
    returnHome.classList.add('return-home');
    sectionMenu.appendChild(returnHome);

    returnHome.addEventListener('click', function() {
        div.removeChild(sectionMenu);
        (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    })

    let sectionImageMenu = document.createElement('section');
    sectionImageMenu.classList.add('image-menu');
    sectionMenu.appendChild(sectionImageMenu);

    let plate1 = document.createElement('p');
    plate1.textContent = 'Pad Thai - 11$';
    plate1.classList.add('plate1');
    sectionImageMenu.appendChild(plate1);

    /* ready if i want to add img
    let img1 = document.createElement('img');
    img1.classList.add('img1');
    sectionImageMenu.appendChild(img1);*/

    let plate2 = document.createElement('p');
    plate2.textContent = 'Korean BBQ - 15$';
    plate2.classList.add('plate2');
    sectionImageMenu.appendChild(plate2);

    let plate3 = document.createElement('p');
    plate3.textContent = 'Udon - 14$';
    plate3.classList.add('plate3');
    sectionImageMenu.appendChild(plate3);

    let plate4 = document.createElement('p');
    plate4.textContent = 'Pekin Duck - 18$';
    plate4.classList.add('plate4');
    sectionImageMenu.appendChild(plate4);

    let sectionBottom = document.createElement('footer');
    sectionBottom.classList.add('bottom')
    sectionMenu.appendChild(sectionBottom);

    let titleFooter = document.createElement('p');
    titleFooter.textContent = 'Contact info';
    titleFooter.classList.add('title-footer');
    sectionBottom.appendChild(titleFooter);
    
    let alignFooter = document.createElement('section');
    alignFooter.classList.add('align-footer');
    sectionBottom.appendChild(alignFooter);

    let gmail  = document.createElement('p');
    gmail.textContent = '1234@gmail.com';
    gmail.classList.add('gmail');
    alignFooter.appendChild(gmail);

    let phoneNum  = document.createElement('p');
    phoneNum.textContent = '+050 250 8541';
    phoneNum.classList.add('phone-num');
    alignFooter.appendChild(phoneNum);

    let address  = document.createElement('p');
    address.textContent = '36 Road, 152 ExCity, JPN';
    address.classList.add('address');
    alignFooter.appendChild(address);

    let removeHome = document.querySelector('.grid-home');
    div.removeChild(removeHome);
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


(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"]) ()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ21COztBQUVoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFRO0FBQ2pDO0FBQ0E7O0FBRUEsNkNBQTZDLDZDQUFPO0FBQ3BEOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RFM7QUFDMEI7O0FBRXZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLHNEQUFPO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsaURBQU87QUFDZixLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RGbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7OztBQ2xCdUM7O0FBRXZDLGlEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJ1bk1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGltZ0Fycm93IGZyb20gXCIuLi9kaXN0L2ltYWdlcy9WZWN0b3Iuc3ZnXCJcblxuY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGxldCBzZWN0aW9uSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uSG9tZS5jbGFzc0xpc3QuYWRkKCdncmlkLWhvbWUnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VjdGlvbkhvbWUpO1xuXG4gICAgbGV0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBzZWN0aW9uSG9tZS5hcHBlbmRDaGlsZChzZWN0aW9uVGl0bGUpO1xuICAgIFxuICAgIGxldCB0aXRsZUhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlSG9tZS50ZXh0Q29udGVudCA9ICdSZXNlcnZlIHlvdXIgdGFibGUgZm9yIHRvbmlnaHQnO1xuICAgIHRpdGxlSG9tZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1ob21lJyk7XG4gICAgc2VjdGlvblRpdGxlLmFwcGVuZENoaWxkKHRpdGxlSG9tZSk7XG5cbiAgICBsZXQgc2VlTW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzZWVNb3JlLmNsYXNzTGlzdC5hZGQoJ3NlZS1tb3JlJyk7XG4gICAgc2VlTW9yZS50ZXh0Q29udGVudCA9ICdTZWUgbW9yZSc7XG4gICAgc2VjdGlvblRpdGxlLmFwcGVuZENoaWxkKHNlZU1vcmUpO1xuXG4gICAgbGV0IHNlY3Rpb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uSW1hZ2UuY2xhc3NMaXN0LmFkZCgnaW1hZ2UnKTtcbiAgICBzZWN0aW9uSG9tZS5hcHBlbmRDaGlsZChzZWN0aW9uSW1hZ2UpO1xuXG4gICAgbGV0IGltYWdlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlMS5jbGFzc0xpc3QuYWRkKCdpbWFnZS0xJyk7XG4gICAgc2VjdGlvbkltYWdlLmFwcGVuZENoaWxkKGltYWdlMSk7XG5cbiAgICBsZXQgaW1hZ2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLTInKTtcbiAgICBzZWN0aW9uSW1hZ2UuYXBwZW5kQ2hpbGQoaW1hZ2UyKTtcblxuICAgIGxldCBpbWFnZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZTMuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtMycpO1xuICAgIHNlY3Rpb25JbWFnZS5hcHBlbmRDaGlsZChpbWFnZTMpO1xuXG4gICAgbGV0IHNlY3Rpb25BcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIHNlY3Rpb25BcnJvdy5jbGFzc0xpc3QuYWRkKCdhcnJvdycpO1xuICAgIHNlY3Rpb25Ib21lLmFwcGVuZENoaWxkKHNlY3Rpb25BcnJvdyk7XG5cbiAgICBsZXQgZGlzY292ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGlzY292ZXIuY2xhc3NMaXN0LmFkZCgnZGlzY292ZXInKTtcbiAgICBkaXNjb3Zlci50ZXh0Q29udGVudCA9ICdEaXNjb3ZlciB0aGUgbWVudSc7XG4gICAgc2VjdGlvbkFycm93LmFwcGVuZENoaWxkKGRpc2NvdmVyKTtcbiAgICBcbiAgICBsZXQgZGlzY292ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkaXNjb3ZlckJ1dHRvbi5zcmMgPSBpbWdBcnJvdztcbiAgICBkaXNjb3ZlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNjb3Zlci1idXR0b24nKTtcbiAgICBzZWN0aW9uQXJyb3cuYXBwZW5kQ2hpbGQoZGlzY292ZXJCdXR0b24pO1xuXG4gICAgZGlzY292ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBydW5NZW51KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG9tZTtcbiIsImltcG9ydCBydW5Ib21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBpbWdIb21lIGZyb20gXCIuLi9kaXN0L2ltYWdlcy9WZWN0b3JcXCBcXCgxXFwpLnN2Z1wiO1xuXG5jb25zdCBtZW51ID0gKCkgPT4ge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgbGV0IHNlY3Rpb25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNlY3Rpb25NZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VjdGlvbk1lbnUpO1xuXG4gICAgbGV0IHRpdGxlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGVNZW51LnRleHRDb250ZW50ID0gJ1dlZWtseSBtZW51JztcbiAgICB0aXRsZU1lbnUuY2xhc3NMaXN0LmFkZCgndGl0bGUtbWVudScpO1xuICAgIHNlY3Rpb25NZW51LmFwcGVuZENoaWxkKHRpdGxlTWVudSk7XG5cbiAgICBsZXQgcmV0dXJuSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHJldHVybkhvbWUuc3JjID0gaW1nSG9tZTtcbiAgICByZXR1cm5Ib21lLmNsYXNzTGlzdC5hZGQoJ3JldHVybi1ob21lJyk7XG4gICAgc2VjdGlvbk1lbnUuYXBwZW5kQ2hpbGQocmV0dXJuSG9tZSk7XG5cbiAgICByZXR1cm5Ib21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRpdi5yZW1vdmVDaGlsZChzZWN0aW9uTWVudSk7XG4gICAgICAgIHJ1bkhvbWUoKTtcbiAgICB9KVxuXG4gICAgbGV0IHNlY3Rpb25JbWFnZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgc2VjdGlvbkltYWdlTWVudS5jbGFzc0xpc3QuYWRkKCdpbWFnZS1tZW51Jyk7XG4gICAgc2VjdGlvbk1lbnUuYXBwZW5kQ2hpbGQoc2VjdGlvbkltYWdlTWVudSk7XG5cbiAgICBsZXQgcGxhdGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBsYXRlMS50ZXh0Q29udGVudCA9ICdQYWQgVGhhaSAtIDExJCc7XG4gICAgcGxhdGUxLmNsYXNzTGlzdC5hZGQoJ3BsYXRlMScpO1xuICAgIHNlY3Rpb25JbWFnZU1lbnUuYXBwZW5kQ2hpbGQocGxhdGUxKTtcblxuICAgIC8qIHJlYWR5IGlmIGkgd2FudCB0byBhZGQgaW1nXG4gICAgbGV0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcxLmNsYXNzTGlzdC5hZGQoJ2ltZzEnKTtcbiAgICBzZWN0aW9uSW1hZ2VNZW51LmFwcGVuZENoaWxkKGltZzEpOyovXG5cbiAgICBsZXQgcGxhdGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBsYXRlMi50ZXh0Q29udGVudCA9ICdLb3JlYW4gQkJRIC0gMTUkJztcbiAgICBwbGF0ZTIuY2xhc3NMaXN0LmFkZCgncGxhdGUyJyk7XG4gICAgc2VjdGlvbkltYWdlTWVudS5hcHBlbmRDaGlsZChwbGF0ZTIpO1xuXG4gICAgbGV0IHBsYXRlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwbGF0ZTMudGV4dENvbnRlbnQgPSAnVWRvbiAtIDE0JCc7XG4gICAgcGxhdGUzLmNsYXNzTGlzdC5hZGQoJ3BsYXRlMycpO1xuICAgIHNlY3Rpb25JbWFnZU1lbnUuYXBwZW5kQ2hpbGQocGxhdGUzKTtcblxuICAgIGxldCBwbGF0ZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGxhdGU0LnRleHRDb250ZW50ID0gJ1Bla2luIER1Y2sgLSAxOCQnO1xuICAgIHBsYXRlNC5jbGFzc0xpc3QuYWRkKCdwbGF0ZTQnKTtcbiAgICBzZWN0aW9uSW1hZ2VNZW51LmFwcGVuZENoaWxkKHBsYXRlNCk7XG5cbiAgICBsZXQgc2VjdGlvbkJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIHNlY3Rpb25Cb3R0b20uY2xhc3NMaXN0LmFkZCgnYm90dG9tJylcbiAgICBzZWN0aW9uTWVudS5hcHBlbmRDaGlsZChzZWN0aW9uQm90dG9tKTtcblxuICAgIGxldCB0aXRsZUZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZUZvb3Rlci50ZXh0Q29udGVudCA9ICdDb250YWN0IGluZm8nO1xuICAgIHRpdGxlRm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWZvb3RlcicpO1xuICAgIHNlY3Rpb25Cb3R0b20uYXBwZW5kQ2hpbGQodGl0bGVGb290ZXIpO1xuICAgIFxuICAgIGxldCBhbGlnbkZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBhbGlnbkZvb3Rlci5jbGFzc0xpc3QuYWRkKCdhbGlnbi1mb290ZXInKTtcbiAgICBzZWN0aW9uQm90dG9tLmFwcGVuZENoaWxkKGFsaWduRm9vdGVyKTtcblxuICAgIGxldCBnbWFpbCAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZ21haWwudGV4dENvbnRlbnQgPSAnMTIzNEBnbWFpbC5jb20nO1xuICAgIGdtYWlsLmNsYXNzTGlzdC5hZGQoJ2dtYWlsJyk7XG4gICAgYWxpZ25Gb290ZXIuYXBwZW5kQ2hpbGQoZ21haWwpO1xuXG4gICAgbGV0IHBob25lTnVtICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwaG9uZU51bS50ZXh0Q29udGVudCA9ICcrMDUwIDI1MCA4NTQxJztcbiAgICBwaG9uZU51bS5jbGFzc0xpc3QuYWRkKCdwaG9uZS1udW0nKTtcbiAgICBhbGlnbkZvb3Rlci5hcHBlbmRDaGlsZChwaG9uZU51bSk7XG5cbiAgICBsZXQgYWRkcmVzcyAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICczNiBSb2FkLCAxNTIgRXhDaXR5LCBKUE4nO1xuICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcycpO1xuICAgIGFsaWduRm9vdGVyLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gICAgbGV0IHJlbW92ZUhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1ob21lJyk7XG4gICAgZGl2LnJlbW92ZUNoaWxkKHJlbW92ZUhvbWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSBcIi4vaG9tZVwiO1xuXG5pbml0aWFsaXplV2Vic2l0ZSAoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9