/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/menu.ts":
/*!********************************!*\
  !*** ./src/js/modules/menu.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Menu {
    constructor(menuClassName, menuButtonId) {
        // open submenu on focus
        const menuLinks = document.querySelectorAll(`${menuClassName} .menu-item-has-children a`);
        this.addFocusClass(menuLinks, 'expanded');
        // open menu on button press (mobile)
        const menuButton = document.querySelector(menuButtonId);
        const menu = document.querySelector(menuClassName);
        console.log('menuButton', menuButton);
        console.log('menu', menu);
        menuButton.addEventListener('click', () => {
            menu.classList.toggle('visible');
        });
    }
    /**
     * Add and remove a class on focus to open 2nd level of navigation on keyboard only usage
     *
     * @param nodes List of links
     * @param className Name of the class to add
     */
    addFocusClass(nodes, className) {
        nodes.forEach((node) => {
            // typeCast node -> HTMLElement
            if (node.nodeType == Node.ELEMENT_NODE) {
                const link = node;
                // add class on focus
                link.addEventListener('focus', () => {
                    link.parentElement.classList.add(className);
                    link.setAttribute('aria-expanded', 'true');
                });
                // remove class on leaving last item in submenu
                if (link.nextElementSibling) {
                    const subMenu = link.nextElementSibling;
                    const subMenuLinks = subMenu.querySelectorAll('a');
                    const lastLinkIndex = subMenuLinks.length - 1;
                    const lastLink = subMenuLinks[lastLinkIndex];
                    //@TODO fix bug if you move backwards
                    lastLink.addEventListener('blur', () => {
                        link.parentElement.classList.remove(className);
                        link.setAttribute('aria-expanded', 'false');
                    });
                }
            }
        });
    }
}
exports["default"] = Menu;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
var exports = __webpack_exports__;
/*!**************************!*\
  !*** ./src/js/script.ts ***!
  \**************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const menu_1 = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.ts");
new menu_1.default('.nav-desktop', '#nav-desktop__button');

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsZUFBZTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7O1VDaERmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZUFBZSxtQkFBTyxDQUFDLGdEQUFnQjtBQUN2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2tsYXRzY2htb2huXzIyLy4vc3JjL2pzL21vZHVsZXMvbWVudS50cyIsIndlYnBhY2s6Ly9rbGF0c2NobW9obl8yMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rbGF0c2NobW9obl8yMi8uL3NyYy9qcy9zY3JpcHQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgTWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZW51Q2xhc3NOYW1lLCBtZW51QnV0dG9uSWQpIHtcclxuICAgICAgICAvLyBvcGVuIHN1Ym1lbnUgb24gZm9jdXNcclxuICAgICAgICBjb25zdCBtZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke21lbnVDbGFzc05hbWV9IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuIGFgKTtcclxuICAgICAgICB0aGlzLmFkZEZvY3VzQ2xhc3MobWVudUxpbmtzLCAnZXhwYW5kZWQnKTtcclxuICAgICAgICAvLyBvcGVuIG1lbnUgb24gYnV0dG9uIHByZXNzIChtb2JpbGUpXHJcbiAgICAgICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVudUJ1dHRvbklkKTtcclxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW51Q2xhc3NOYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbWVudUJ1dHRvbicsIG1lbnVCdXR0b24pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtZW51JywgbWVudSk7XHJcbiAgICAgICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhbmQgcmVtb3ZlIGEgY2xhc3Mgb24gZm9jdXMgdG8gb3BlbiAybmQgbGV2ZWwgb2YgbmF2aWdhdGlvbiBvbiBrZXlib2FyZCBvbmx5IHVzYWdlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5vZGVzIExpc3Qgb2YgbGlua3NcclxuICAgICAqIEBwYXJhbSBjbGFzc05hbWUgTmFtZSBvZiB0aGUgY2xhc3MgdG8gYWRkXHJcbiAgICAgKi9cclxuICAgIGFkZEZvY3VzQ2xhc3Mobm9kZXMsIGNsYXNzTmFtZSkge1xyXG4gICAgICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgLy8gdHlwZUNhc3Qgbm9kZSAtPiBIVE1MRWxlbWVudFxyXG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGluayA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgY2xhc3Mgb24gZm9jdXNcclxuICAgICAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluay5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBjbGFzcyBvbiBsZWF2aW5nIGxhc3QgaXRlbSBpbiBzdWJtZW51XHJcbiAgICAgICAgICAgICAgICBpZiAobGluay5uZXh0RWxlbWVudFNpYmxpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJNZW51ID0gbGluay5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ViTWVudUxpbmtzID0gc3ViTWVudS5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdExpbmtJbmRleCA9IHN1Yk1lbnVMaW5rcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RMaW5rID0gc3ViTWVudUxpbmtzW2xhc3RMaW5rSW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQFRPRE8gZml4IGJ1ZyBpZiB5b3UgbW92ZSBiYWNrd2FyZHNcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TGluay5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gTWVudTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IG1lbnVfMSA9IHJlcXVpcmUoXCIuL21vZHVsZXMvbWVudVwiKTtcclxubmV3IG1lbnVfMS5kZWZhdWx0KCcubmF2LWRlc2t0b3AnLCAnI25hdi1kZXNrdG9wX19idXR0b24nKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9