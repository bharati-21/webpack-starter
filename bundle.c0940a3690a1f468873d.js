"use strict";
(self["webpackChunkwebpack_starter"] = self["webpackChunkwebpack_starter"] || []).push([["bundle"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _loader_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.svg */ "./src/loader.svg");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      Confetti = _useState2[0],
      setConfetti = _useState2[1];

  function loadReactConfetti() {
    __webpack_require__.e(/*! import() */ "vendors").then(__webpack_require__.t.bind(__webpack_require__, /*! react-confetti */ "./node_modules/react-confetti/dist/react-confetti.min.js", 23)).then(function (module) {
      setConfetti(module["default"]);
      console.log("Importing confetti...");
      setTimeout(function () {
        setConfetti(null);
      }, 8000);
    })["catch"](function () {
      return console.log("Failed to import react-confetti");
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h1", null, "Hello World!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, "Webpack React App"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
    src: _loader_svg__WEBPACK_IMPORTED_MODULE_1__,
    alt: "Loading Gear",
    className: "loader-gear"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    onClick: loadReactConfetti,
    className: "btn"
  }, "Import react-confetti"), Confetti ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Confetti, null) : null);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_App__WEBPACK_IMPORTED_MODULE_0__["default"], null)));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n#root {\r\n\tdisplay: flex;\r\n\theight: 100vh;\r\n\twidth: 100%;\r\n    text-align: center;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tbackground-color: #212121;\r\n\tcolor: #fafafa;\r\n}\r\n\r\n.loader-gear {\r\n\theight: 100px;\r\n\twidth: 100px;\r\n}\r\n\r\n.btn {\r\n    background-color: #fafafa;\r\n    color: #212121;\r\n    border: none;\r\n    margin: 1rem auto;\r\n    display: block;\r\n    padding: 5px 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: antiquewhite;\r\n}", "",{"version":3,"sources":["webpack://./src/App.css"],"names":[],"mappings":"AAEA;CACC,SAAS;CACT,UAAU;CACV,kCAAkC;AACnC;;AAEA;CACC,aAAa;CACb,aAAa;CACb,WAAW;IACR,kBAAkB;CACrB,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,yBAAyB;CACzB,cAAc;AACf;;AAEA;CACC,aAAa;CACb,YAAY;AACb;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,iBAAiB;IACjB,cAAc;IACd,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,8BAA8B;AAClC","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\r\n\r\nbody {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n#root {\r\n\tdisplay: flex;\r\n\theight: 100vh;\r\n\twidth: 100%;\r\n    text-align: center;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tbackground-color: #212121;\r\n\tcolor: #fafafa;\r\n}\r\n\r\n.loader-gear {\r\n\theight: 100px;\r\n\twidth: 100px;\r\n}\r\n\r\n.btn {\r\n    background-color: #fafafa;\r\n    color: #212121;\r\n    border: none;\r\n    margin: 1rem auto;\r\n    display: block;\r\n    padding: 5px 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: antiquewhite;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/App.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/loader.svg":
/*!************************!*\
  !*** ./src/loader.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f011b393ab6ddf7e98cb.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkMsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBaUc7QUFDakc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxvRkFBTzs7OztBQUkyQztBQUNuRSxPQUFPLGlFQUFlLG9GQUFPLElBQUksMkZBQWMsR0FBRywyRkFBYyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL3dlYnBhY2stc3RhcnRlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvQXBwLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXN0YXJ0ZXIvLi9zcmMvQXBwLmNzcz9kOWNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vQXBwLmNzc1wiO1xyXG5pbXBvcnQgbG9hZGVyIGZyb20gXCIuL2xvYWRlci5zdmdcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcblx0Y29uc3QgW0NvbmZldHRpLCBzZXRDb25mZXR0aV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcblx0ZnVuY3Rpb24gbG9hZFJlYWN0Q29uZmV0dGkoKSB7XHJcblx0XHRpbXBvcnQoXCJyZWFjdC1jb25mZXR0aVwiKVxyXG5cdFx0XHQudGhlbigobW9kdWxlKSA9PiB7XHJcblx0XHRcdFx0c2V0Q29uZmV0dGkobW9kdWxlLmRlZmF1bHQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiSW1wb3J0aW5nIGNvbmZldHRpLi4uXCIpO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHNldENvbmZldHRpKG51bGwpO1xyXG5cdFx0XHRcdH0sIDgwMDApO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goKCkgPT4gY29uc29sZS5sb2coXCJGYWlsZWQgdG8gaW1wb3J0IHJlYWN0LWNvbmZldHRpXCIpKTtcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcblx0XHRcdDxoMT5IZWxsbyBXb3JsZCE8L2gxPlxyXG5cdFx0XHQ8aDI+V2VicGFjayBSZWFjdCBBcHA8L2gyPlxyXG5cdFx0XHQ8aW1nIHNyYz17bG9hZGVyfSBhbHQ9XCJMb2FkaW5nIEdlYXJcIiBjbGFzc05hbWU9XCJsb2FkZXItZ2VhclwiIC8+XHJcblx0XHRcdDxidXR0b24gb25DbGljaz17bG9hZFJlYWN0Q29uZmV0dGl9IGNsYXNzTmFtZT1cImJ0blwiPlxyXG5cdFx0XHRcdEltcG9ydCByZWFjdC1jb25mZXR0aVxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0e0NvbmZldHRpID8gPENvbmZldHRpIC8+IDogbnVsbH1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xyXG5cclxucm9vdC5yZW5kZXIoXHJcbiAgICA8UmVhY3QuU3RyaWN0TW9kZT5cclxuICAgICAgICA8QXBwIC8+XHJcbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+XHJcbik7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4jcm9vdCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxyXFxuXFx0Y29sb3I6ICNmYWZhZmE7XFxyXFxufVxcclxcblxcclxcbi5sb2FkZXItZ2VhciB7XFxyXFxuXFx0aGVpZ2h0OiAxMDBweDtcXHJcXG5cXHR3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcclxcbiAgICBjb2xvcjogIzIxMjEyMTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9BcHAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FDVixrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsYUFBYTtDQUNiLFdBQVc7SUFDUixrQkFBa0I7Q0FDckIsc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0FBQ2I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbmJvZHkge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbiNyb290IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXHJcXG5cXHRjb2xvcjogI2ZhZmFmYTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRlci1nZWFyIHtcXHJcXG5cXHRoZWlnaHQ6IDEwMHB4O1xcclxcblxcdHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxyXFxuICAgIGNvbG9yOiAjMjEyMTIxO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9BcHAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbImxvYWRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJBcHAiLCJDb25mZXR0aSIsInNldENvbmZldHRpIiwibG9hZFJlYWN0Q29uZmV0dGkiLCJ0aGVuIiwibW9kdWxlIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJSZWFjdERPTSIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=