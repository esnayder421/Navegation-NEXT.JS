"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ \"./components/container.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/users */ \"./components/users.js\");\n\n\n\n\n\nconst index = (props)=>{\n    console.log(props);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"NexProyect\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\nextProyect\\\\pages\\\\index.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\nextProyect\\\\pages\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" Next \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\nextProyect\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\nextProyect\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\nextProyect\\\\pages\\\\index.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\nindex.getInitialProps = async (contexto)=>{\n    const res = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(\"https://jsonplaceholder.typicode.com/users\");\n    const data = await res.json();\n    console.log(data);\n    return {\n        users: data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStDO0FBQ25CO0FBQ1E7QUFDRztBQUV2QyxNQUFNSSxRQUFRLENBQUNDLFFBQVU7SUFDckJDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixxQkFFQSw4REFBQ0c7OzBCQUNHLDhEQUFDUCxrREFBSUE7MEJBQ0QsNEVBQUNROzhCQUFNOzs7Ozs7Ozs7OzswQkFFUCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDUiw4REFBQ1YsNkRBQVNBOzs7Ozs7Ozs7OztBQU1sQjtBQUVBSSxNQUFNTyxlQUFlLEdBQUcsT0FBT0MsV0FBWTtJQUN2QyxNQUFNQyxNQUFNLE1BQU1YLHVEQUFLQSxDQUFDO0lBQ3hCLE1BQU1ZLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtJQUMzQlQsUUFBUUMsR0FBRyxDQUFDTztJQUNaLE9BQU87UUFBQ0UsT0FBT0Y7SUFBSTtBQUN2QjtBQUlBLCtEQUFlVixLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlcnMnXHJcblxyXG5jb25zdCBpbmRleCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5OZXhQcm95ZWN0PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxoMT4gTmV4dCA8L2gxPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvQ29udGFpbmVyPiAgXHJcbiAgICA8L2Rpdj4gICAgIFxyXG4gICAgICAgICBcclxuICAgIClcclxufTtcclxuXHJcbmluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0bykgPT57XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgcmV0dXJuIHt1c2VyczogZGF0YX1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJIZWFkIiwiZmV0Y2giLCJVc2VycyIsImluZGV4IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwidGl0bGUiLCJoMSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHRvIiwicmVzIiwiZGF0YSIsImpzb24iLCJ1c2VycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});