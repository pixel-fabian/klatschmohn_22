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
    constructor(menuClassName) {
        console.log(menuClassName);
        const menuLinks = document.querySelectorAll(`${menuClassName} .menu-item-has-children a`);
        console.log('menuLinks', menuLinks);
        this.addFocusClass(menuLinks, 'expanded');
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
new menu_1.default('.nav-desktop');

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsZUFBZTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7VUN6Q2Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxlQUFlLG1CQUFPLENBQUMsZ0RBQWdCO0FBQ3ZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2xhdHNjaG1vaG5fMjIvLi9zcmMvanMvbW9kdWxlcy9tZW51LnRzIiwid2VicGFjazovL2tsYXRzY2htb2huXzIyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tsYXRzY2htb2huXzIyLy4vc3JjL2pzL3NjcmlwdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBNZW51IHtcclxuICAgIGNvbnN0cnVjdG9yKG1lbnVDbGFzc05hbWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhtZW51Q2xhc3NOYW1lKTtcclxuICAgICAgICBjb25zdCBtZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke21lbnVDbGFzc05hbWV9IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuIGFgKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbWVudUxpbmtzJywgbWVudUxpbmtzKTtcclxuICAgICAgICB0aGlzLmFkZEZvY3VzQ2xhc3MobWVudUxpbmtzLCAnZXhwYW5kZWQnKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGFuZCByZW1vdmUgYSBjbGFzcyBvbiBmb2N1cyB0byBvcGVuIDJuZCBsZXZlbCBvZiBuYXZpZ2F0aW9uIG9uIGtleWJvYXJkIG9ubHkgdXNhZ2VcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbm9kZXMgTGlzdCBvZiBsaW5rc1xyXG4gICAgICogQHBhcmFtIGNsYXNzTmFtZSBOYW1lIG9mIHRoZSBjbGFzcyB0byBhZGRcclxuICAgICAqL1xyXG4gICAgYWRkRm9jdXNDbGFzcyhub2RlcywgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0eXBlQ2FzdCBub2RlIC0+IEhUTUxFbGVtZW50XHJcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIC8vIGFkZCBjbGFzcyBvbiBmb2N1c1xyXG4gICAgICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGNsYXNzIG9uIGxlYXZpbmcgbGFzdCBpdGVtIGluIHN1Ym1lbnVcclxuICAgICAgICAgICAgICAgIGlmIChsaW5rLm5leHRFbGVtZW50U2libGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Yk1lbnUgPSBsaW5rLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJNZW51TGlua3MgPSBzdWJNZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0TGlua0luZGV4ID0gc3ViTWVudUxpbmtzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdExpbmsgPSBzdWJNZW51TGlua3NbbGFzdExpbmtJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy9AVE9ETyBmaXggYnVnIGlmIHlvdSBtb3ZlIGJhY2t3YXJkc1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBNZW51O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgbWVudV8xID0gcmVxdWlyZShcIi4vbW9kdWxlcy9tZW51XCIpO1xyXG5uZXcgbWVudV8xLmRlZmF1bHQoJy5uYXYtZGVza3RvcCcpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=