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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var C_Users_kevin_nextjs_discover_coffee_stores_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_kevin_nextjs_discover_coffee_stores_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_kevin_nextjs_discover_coffee_stores_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/banner */ \"./components/banner.js\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/card */ \"./components/card.js\");\n/* harmony import */ var _data_coffee_stores_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/coffee-stores.json */ \"./data/coffee-stores.json\");\n/* harmony import */ var _lib_coffee_stores__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/coffee-stores */ \"./lib/coffee-stores.js\");\n/* harmony import */ var _hooks_use_track_location__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-track-location */ \"./hooks/use-track-location.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Home(props) {\n    var _this = this;\n    _s();\n    var ref = (0,_hooks_use_track_location__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(), handleTrackLocation = ref.handleTrackLocation, latLong = ref.latLong, locationErrorMsg = ref.locationErrorMsg, findingLocation = ref.findingLocation;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]), coffeeStores = ref1[0], setCoffeeStores = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(_asyncToGenerator(C_Users_kevin_nextjs_discover_coffee_stores_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var fetchedCoffeeStores;\n        return C_Users_kevin_nextjs_discover_coffee_stores_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!latLong) {\n                        _ctx.next = 11;\n                        break;\n                    }\n                    _ctx.prev = 1;\n                    _ctx.next = 4;\n                    return (0,_lib_coffee_stores__WEBPACK_IMPORTED_MODULE_7__.fetchCoffeeStores)(latLong);\n                case 4:\n                    fetchedCoffeeStores = _ctx.sent;\n                    setCoffeeStores(fetchedCoffeeStores);\n                    _ctx.next = 11;\n                    break;\n                case 8:\n                    _ctx.prev = 8;\n                    _ctx.t0 = _ctx[\"catch\"](1);\n                    console.log({\n                        err: _ctx.t0\n                    });\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                1,\n                8\n            ]\n        ]);\n    })), [\n        latLong\n    ]);\n    var handleOnBannerBtnClick = function() {\n        console.log('Banner clicked');\n        handleTrackLocation();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Coffee Connoisseur\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kevin\\\\nextjs\\\\discover-coffee-stores\\\\pages\\\\index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kevin\\\\nextjs\\\\discover-coffee-stores\\\\pages\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kevin\\\\nextjs\\\\discover-coffee-stores\\\\pages\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kevin\\\\nextjs\\\\discover-coffee-stores\\\\pages\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        buttonText: findingLocation ? 'Locating...' : 'View stores nearby',\n                        handleOnClick: handleOnBannerBtnClick\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kevin\\\\nextjs\\\\discover-coffee-stores\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    locationErrorMsg.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: locationErrorMsg\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kevin\\\\nextjs\\\\discover-coffee-stores\\\\pages\\\\index.js\",\n                        lineNumber: 54,\n                        columnNumber: 40\n                    }, this) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().heroImage),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/static/hero-image.png\",\n                            width: 700,\n                            height: 400\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\kevin\\\\nextjs\\\\discover-coffee-stores\\\\pages\\\\index.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kevin\\\\nextjs\\\\discover-coffee-stores\\\\pages\\\\index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    coffeeStores.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionWrapper),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().heading2),\n                                children: \"Coffee Stores Near Me\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kevin\\\\nextjs\\\\discover-coffee-stores\\\\pages\\\\index.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().cardLayout),\n                                children: coffeeStores.map(function(item) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        name: item.name,\n                                        imgUrl: item.imgUrl || 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',\n                                        href: \"/coffee-store/\".concat(item.id)\n                                    }, item.id, false, {\n                                        fileName: \"C:\\\\Users\\\\kevin\\\\nextjs\\\\discover-coffee-stores\\\\pages\\\\index.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kevin\\\\nextjs\\\\discover-coffee-stores\\\\pages\\\\index.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kevin\\\\nextjs\\\\discover-coffee-stores\\\\pages\\\\index.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    props.coffeeStores.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().sectionWrapper),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().heading2),\n                                children: \"Toronto Coffee Stores\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kevin\\\\nextjs\\\\discover-coffee-stores\\\\pages\\\\index.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().cardLayout),\n                                children: props.coffeeStores.map(function(item) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        name: item.name,\n                                        imgUrl: item.imgUrl || 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',\n                                        href: \"/coffee-store/\".concat(item.id)\n                                    }, item.id, false, {\n                                        fileName: \"C:\\\\Users\\\\kevin\\\\nextjs\\\\discover-coffee-stores\\\\pages\\\\index.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 17\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kevin\\\\nextjs\\\\discover-coffee-stores\\\\pages\\\\index.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kevin\\\\nextjs\\\\discover-coffee-stores\\\\pages\\\\index.js\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kevin\\\\nextjs\\\\discover-coffee-stores\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kevin\\\\nextjs\\\\discover-coffee-stores\\\\pages\\\\index.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"nXO7iFZVnC3oomgZvtXvueRHeIg=\", false, function() {\n    return [\n        _hooks_use_track_location__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixJQUFJLENBQUNFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQU1yQnRDLEtBQUssQ0FBQ0ssWUFBWSxDQUFDb0IsTUFBTSxHQUFHLENBQUMsZ0ZBQzNCYixDQUFHO3dCQUFDQyxTQUFTLEVBQUV0QixnRkFBcUI7O3dHQUNsQ3lDLENBQUU7Z0NBQUNuQixTQUFTLEVBQUV0QiwwRUFBZTswQ0FBRSxDQUFxQjs7Ozs7O3dHQUNwRHFCLENBQUc7Z0NBQUNDLFNBQVMsRUFBRXRCLDRFQUFpQjswQ0FDOUJTLEtBQUssQ0FBQ0ssWUFBWSxDQUFDOEIsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSTtrREFDM0IsTUFDaEIsQ0FBQyw4REFEZ0IzQyx3REFBSTt3Q0FDSHdCLElBQUksRUFBRW1CLElBQUksQ0FBQ25CLElBQUk7d0NBQ2ZvQixNQUFNLEVBQ0pELElBQUksQ0FBQ0MsTUFBTSxJQUNYLENBQWdLO3dDQUVsS2hCLElBQUksRUFBRyxDQUFjLGdCQUFVLE9BQVJlLElBQUksQ0FBQ0UsRUFBRTt1Q0FDekJGLElBQUksQ0FBQ0UsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTOUIsQ0FBQztHQTdFdUJ2QyxJQUFJOztRQUV4QkgsaUVBQWdCOzs7S0FGSUcsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL2Jhbm5lcic7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2NhcmQnO1xuaW1wb3J0IGNvZmZlZVN0b3Jlc0RhdGEgZnJvbSAnLi4vZGF0YS9jb2ZmZWUtc3RvcmVzLmpzb24nO1xuaW1wb3J0IHsgZmV0Y2hDb2ZmZWVTdG9yZXMgfSBmcm9tICcuLi9saWIvY29mZmVlLXN0b3Jlcyc7XG5pbXBvcnQgdXNlVHJhY2tMb2NhdGlvbiBmcm9tICcuLi9ob29rcy91c2UtdHJhY2stbG9jYXRpb24nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgY29mZmVlU3RvcmVzID0gYXdhaXQgZmV0Y2hDb2ZmZWVTdG9yZXMoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY29mZmVlU3RvcmVzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc3QgeyBoYW5kbGVUcmFja0xvY2F0aW9uLCBsYXRMb25nLCBsb2NhdGlvbkVycm9yTXNnLCBmaW5kaW5nTG9jYXRpb24gfSA9XG4gICAgdXNlVHJhY2tMb2NhdGlvbigpO1xuICBjb25zdCBbY29mZmVlU3RvcmVzLCBzZXRDb2ZmZWVTdG9yZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgaWYgKGxhdExvbmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZldGNoZWRDb2ZmZWVTdG9yZXMgPSBhd2FpdCBmZXRjaENvZmZlZVN0b3JlcyhsYXRMb25nKTtcbiAgICAgICAgc2V0Q29mZmVlU3RvcmVzKGZldGNoZWRDb2ZmZWVTdG9yZXMpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHsgZXJyIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2xhdExvbmddKTtcblxuICBjb25zdCBoYW5kbGVPbkJhbm5lckJ0bkNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdCYW5uZXIgY2xpY2tlZCcpO1xuICAgIGhhbmRsZVRyYWNrTG9jYXRpb24oKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q29mZmVlIENvbm5vaXNzZXVyPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0dlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHAnIC8+XG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPEJhbm5lclxuICAgICAgICAgIGJ1dHRvblRleHQ9e2ZpbmRpbmdMb2NhdGlvbiA/ICdMb2NhdGluZy4uLicgOiAnVmlldyBzdG9yZXMgbmVhcmJ5J31cbiAgICAgICAgICBoYW5kbGVPbkNsaWNrPXtoYW5kbGVPbkJhbm5lckJ0bkNsaWNrfVxuICAgICAgICAvPlxuICAgICAgICB7bG9jYXRpb25FcnJvck1zZy5sZW5ndGggPiAwID8gPHA+e2xvY2F0aW9uRXJyb3JNc2d9PC9wPiA6IG51bGx9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb0ltYWdlfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPScvc3RhdGljL2hlcm8taW1hZ2UucG5nJyB3aWR0aD17NzAwfSBoZWlnaHQ9ezQwMH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtjb2ZmZWVTdG9yZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uV3JhcHBlcn0+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZzJ9PkNvZmZlZSBTdG9yZXMgTmVhciBNZTwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRMYXlvdXR9PlxuICAgICAgICAgICAgICB7Y29mZmVlU3RvcmVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICBpbWdVcmw9e1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmltZ1VybCB8fFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDQ3NTM3OTM2NTAtZDRhMmI3ODNjMTVlP2l4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yMDAwJnE9ODAnXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBocmVmPXtgL2NvZmZlZS1zdG9yZS8ke2l0ZW0uaWR9YH1cbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7cHJvcHMuY29mZmVlU3RvcmVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbldyYXBwZXJ9PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmcyfT5Ub3JvbnRvIENvZmZlZSBTdG9yZXM8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkTGF5b3V0fT5cbiAgICAgICAgICAgICAge3Byb3BzLmNvZmZlZVN0b3Jlcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgaW1nVXJsPXtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWdVcmwgfHxcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA0NzUzNzkzNjUwLWQ0YTJiNzgzYzE1ZT9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjAwMCZxPTgwJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaHJlZj17YC9jb2ZmZWUtc3RvcmUvJHtpdGVtLmlkfWB9XG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJCYW5uZXIiLCJDYXJkIiwiY29mZmVlU3RvcmVzRGF0YSIsImZldGNoQ29mZmVlU3RvcmVzIiwidXNlVHJhY2tMb2NhdGlvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsInByb3BzIiwiaGFuZGxlVHJhY2tMb2NhdGlvbiIsImxhdExvbmciLCJsb2NhdGlvbkVycm9yTXNnIiwiZmluZGluZ0xvY2F0aW9uIiwiY29mZmVlU3RvcmVzIiwic2V0Q29mZmVlU3RvcmVzIiwiZmV0Y2hlZENvZmZlZVN0b3JlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJoYW5kbGVPbkJhbm5lckJ0bkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJidXR0b25UZXh0IiwiaGFuZGxlT25DbGljayIsImxlbmd0aCIsInAiLCJoZXJvSW1hZ2UiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInNlY3Rpb25XcmFwcGVyIiwiaDIiLCJoZWFkaW5nMiIsImNhcmRMYXlvdXQiLCJtYXAiLCJpdGVtIiwiaW1nVXJsIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});