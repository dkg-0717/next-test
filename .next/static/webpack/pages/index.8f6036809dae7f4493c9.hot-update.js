webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Modal/Modal */ \"./components/Modal/Modal.js\");\n\n\n\nvar _jsxFileName = \"/Users/dkg-07/Documents/Proyectos/nextjs/next-test/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      showModal = _useState[0],\n      setShowModal = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      productList = _useState2[0],\n      setProductList = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    fetch('/api/avo').then(function (resp) {\n      return resp.json();\n    }).then(function (_ref) {\n      var entries = _ref.entries;\n      return setProductList(entries);\n    });\n  });\n\n  var handleModal = function handleModal() {\n    setShowModal(true);\n  };\n\n  console.log(productList);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Este es el home\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: productList.map(function (product) {\n        /*#__PURE__*/\n        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: product.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"btn btn-outline-primary\",\n      onClick: handleModal,\n      children: \"Mostrar Modal\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      show: showModal,\n      closeModal: setShowModal,\n      title: \"Este es el titulo del modal\",\n      msg: \"Puedes crear este componente para todo tu proyecto y solo enviarle lo que necesitas.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Home, \"sHeBL950WqJAAs2TbezKnedqzS0=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJwcm9kdWN0TGlzdCIsInNldFByb2R1Y3RMaXN0IiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcCIsImpzb24iLCJlbnRyaWVzIiwiaGFuZGxlTW9kYWwiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicHJvZHVjdCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFFaUJDLHNEQUFRLENBQUMsS0FBRCxDQUZ6QjtBQUFBLE1BRVZDLFNBRlU7QUFBQSxNQUVDQyxZQUZEOztBQUFBLG1CQUdxQkYsc0RBQVEsQ0FBQyxFQUFELENBSDdCO0FBQUEsTUFHVkcsV0FIVTtBQUFBLE1BR0dDLGNBSEg7O0FBS2pCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsU0FBSyxDQUFDLFVBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsSUFBTCxFQUFKO0FBQUEsS0FEWixFQUVHRixJQUZILENBRVE7QUFBQSxVQUFHRyxPQUFILFFBQUdBLE9BQUg7QUFBQSxhQUFpQk4sY0FBYyxDQUFDTSxPQUFELENBQS9CO0FBQUEsS0FGUjtBQUdELEdBSlEsQ0FBVDs7QUFNQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCVCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNELEdBRkQ7O0FBSUFVLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVixXQUFaO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFDR0EsV0FBVyxDQUFDVyxHQUFaLENBQWdCLFVBQUFDLE9BQU8sRUFBSTtBQUMxQjtBQUFBO0FBQUEsb0JBQUtBLE9BQU8sQ0FBQ0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0QsT0FGQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQU9FO0FBQVEsZUFBUyxFQUFDLHlCQUFsQjtBQUE0QyxhQUFPLEVBQUVMLFdBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFRRSxxRUFBQywrREFBRDtBQUNFLFVBQUksRUFBRVYsU0FEUjtBQUVFLGdCQUFVLEVBQUVDLFlBRmQ7QUFHRSxXQUFLLEVBQUMsNkJBSFI7QUFJRSxTQUFHLEVBQUM7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkY7QUFBQSxrQkFERjtBQWlCRCxDQWxDRDs7R0FBTUgsSTs7S0FBQUEsSTtBQW9DU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTW9kYWwgZnJvbSAnQC9jb21wb25lbnRzL01vZGFsL01vZGFsJ1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCcvYXBpL2F2bycpXG4gICAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuICAgICAgLnRoZW4oKHsgZW50cmllcyB9KSA9PiBzZXRQcm9kdWN0TGlzdChlbnRyaWVzKSlcbiAgfSlcblxuICBjb25zdCBoYW5kbGVNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRTaG93TW9kYWwodHJ1ZSlcbiAgfVxuXG4gIGNvbnNvbGUubG9nKHByb2R1Y3RMaXN0KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5Fc3RlIGVzIGVsIGhvbWU8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7cHJvZHVjdExpc3QubWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICAgIDxsaT57cHJvZHVjdC5uYW1lfTwvbGk+XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVNb2RhbH0+TW9zdHJhciBNb2RhbDwvYnV0dG9uPlxuICAgICAgPE1vZGFsXG4gICAgICAgIHNob3c9e3Nob3dNb2RhbH1cbiAgICAgICAgY2xvc2VNb2RhbD17c2V0U2hvd01vZGFsfVxuICAgICAgICB0aXRsZT1cIkVzdGUgZXMgZWwgdGl0dWxvIGRlbCBtb2RhbFwiXG4gICAgICAgIG1zZz1cIlB1ZWRlcyBjcmVhciBlc3RlIGNvbXBvbmVudGUgcGFyYSB0b2RvIHR1IHByb3llY3RvIHkgc29sbyBlbnZpYXJsZSBsbyBxdWUgbmVjZXNpdGFzLlwiXG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})