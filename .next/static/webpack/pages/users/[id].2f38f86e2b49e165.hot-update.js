"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/container */ \"./components/container.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst UserProfile = (props)=>{\n    _s();\n    console.log(props);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id  } = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-6 offset-md-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-header\",\n                            children: \"im\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\nextProyect\\\\pages\\\\users\\\\[id].js\",\n                            lineNumber: 14,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-body\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\nextProyect\\\\pages\\\\users\\\\[id].js\",\n                            lineNumber: 17,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\nextProyect\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 13,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\nextProyect\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 12,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\nextProyect\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Paola Quiroz\\\\OneDrive\\\\Escritorio\\\\ESTUDIO FREDE\\\\Next\\\\nextProyect\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_s(UserProfile, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = UserProfile;\nUserProfile.getInitialProps = async (contexto)=>{\n    const res = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://reqres.in/api/users/\".concat(contexto.query.id));\n    const resJson = await res.json();\n    return {\n        user: resJson.data\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUM7QUFDRDtBQUNlO0FBRW5ELE1BQU1HLGNBQWMsQ0FBQ0MsUUFBUzs7SUFDMUJDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNRyxTQUFTUCxzREFBU0E7SUFDeEIsTUFBTSxFQUFDUSxHQUFFLEVBQUMsR0FBR0QsT0FBT0UsS0FBSztJQUN6QixxQkFDSSw4REFBQ1AsNkRBQVNBO2tCQUNOLDRFQUFDUTtZQUFJQyxXQUFVO3NCQUNYLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FBZTs7Ozs7O3NDQUc5Qiw4REFBQ0Q7NEJBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2QztHQXBCTVI7O1FBRWFILGtEQUFTQTs7O0tBRnRCRztBQXNCTkEsWUFBWVMsZUFBZSxHQUFHLE9BQU9DLFdBQVk7SUFDN0MsTUFBTUMsTUFBTSxNQUFNYix1REFBS0EsQ0FBQywrQkFBaUQsT0FBbEJZLFNBQVNKLEtBQUssQ0FBQ0QsRUFBRTtJQUN4RSxNQUFNTyxVQUFVLE1BQU1ELElBQUlFLElBQUk7SUFFOUIsT0FBTztRQUFDQyxNQUFNRixRQUFRRyxJQUFJO0lBQUE7QUFDOUI7QUFHQSwrREFBZWYsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9baWRdLmpzPzE3ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbnRhaW5lcic7XHJcblxyXG5jb25zdCBVc2VyUHJvZmlsZSA9IChwcm9wcykgPT57XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcylcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdycgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC02IG9mZnNldC1tZC0zJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtaGVhZGVyJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcblVzZXJQcm9maWxlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0bykgPT57XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yZXFyZXMuaW4vYXBpL3VzZXJzLyR7Y29udGV4dG8ucXVlcnkuaWR9YClcclxuICAgIGNvbnN0IHJlc0pzb24gPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgcmV0dXJuIHt1c2VyOiByZXNKc29uLmRhdGF9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiZmV0Y2giLCJDb250YWluZXIiLCJVc2VyUHJvZmlsZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsImlkIiwicXVlcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0byIsInJlcyIsInJlc0pzb24iLCJqc29uIiwidXNlciIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n"));

/***/ })

});