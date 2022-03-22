/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/colorChange.ts":
/*!***************************************!*\
  !*** ./src/js/modules/colorChange.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Change the color of a element on click.
 * Not really usefull, just to show how TS can be used in this blueprint.
 */
class ColorChange {
    domElements;
    colorList = ['blue', 'green', 'red'];
    constructor(elementName) {
        this.domElements = document.querySelectorAll(elementName);
        this.domElements.forEach((element) => {
            element.addEventListener('click', this.onPressElement.bind(this));
            element.style.cursor = 'pointer';
        });
    }
    onPressElement(event) {
        const randomNumber = Math.floor(Math.random() * this.colorList.length);
        event.target.style.color = this.colorList[randomNumber];
    }
}
exports["default"] = ColorChange;


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
const colorChange_1 = __webpack_require__(/*! ./modules/colorChange */ "./src/js/modules/colorChange.ts");
new colorChange_1.default('.box__title');

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7Ozs7Ozs7VUNyQmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0IsbUJBQU8sQ0FBQyw4REFBdUI7QUFDckQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbGF0c2NobW9obl8yMi8uL3NyYy9qcy9tb2R1bGVzL2NvbG9yQ2hhbmdlLnRzIiwid2VicGFjazovL2tsYXRzY2htb2huXzIyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tsYXRzY2htb2huXzIyLy4vc3JjL2pzL3NjcmlwdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogQ2hhbmdlIHRoZSBjb2xvciBvZiBhIGVsZW1lbnQgb24gY2xpY2suXHJcbiAqIE5vdCByZWFsbHkgdXNlZnVsbCwganVzdCB0byBzaG93IGhvdyBUUyBjYW4gYmUgdXNlZCBpbiB0aGlzIGJsdWVwcmludC5cclxuICovXHJcbmNsYXNzIENvbG9yQ2hhbmdlIHtcclxuICAgIGRvbUVsZW1lbnRzO1xyXG4gICAgY29sb3JMaXN0ID0gWydibHVlJywgJ2dyZWVuJywgJ3JlZCddO1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudE5hbWUpIHtcclxuICAgICAgICB0aGlzLmRvbUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50TmFtZSk7XHJcbiAgICAgICAgdGhpcy5kb21FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uUHJlc3NFbGVtZW50LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uUHJlc3NFbGVtZW50KGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jb2xvckxpc3QubGVuZ3RoKTtcclxuICAgICAgICBldmVudC50YXJnZXQuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yTGlzdFtyYW5kb21OdW1iZXJdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IENvbG9yQ2hhbmdlO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY29sb3JDaGFuZ2VfMSA9IHJlcXVpcmUoXCIuL21vZHVsZXMvY29sb3JDaGFuZ2VcIik7XHJcbm5ldyBjb2xvckNoYW5nZV8xLmRlZmF1bHQoJy5ib3hfX3RpdGxlJyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==