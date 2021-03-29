webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Modal/Modal */ \"./components/Modal/Modal.js\");\n\n\n\nvar _jsxFileName = \"/Users/dkg-07/Documents/Proyectos/nextjs/next-test/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      showModal = _useState[0],\n      setShowModal = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      productList = _useState2[0],\n      setProductList = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    fetch('/api/avo').then(function (resp) {\n      return resp.json();\n    }).then(function (_ref) {\n      var entries = _ref.entries;\n      return setProductList(entries);\n    });\n  }, []);\n\n  var handleModal = function handleModal() {\n    setShowModal(true);\n  };\n\n  console.log(productList);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Este es el home\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: productList.map(function (product) {\n        /*#__PURE__*/\n        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: product.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"btn btn-outline-primary\",\n      onClick: handleModal,\n      children: \"Mostrar Modal\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      show: showModal,\n      closeModal: setShowModal,\n      title: \"Este es el titulo del modal\",\n      msg: \"Puedes crear este componente para todo tu proyecto y solo enviarle lo que necesitas.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Home, \"sHeBL950WqJAAs2TbezKnedqzS0=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJwcm9kdWN0TGlzdCIsInNldFByb2R1Y3RMaXN0IiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcCIsImpzb24iLCJlbnRyaWVzIiwiaGFuZGxlTW9kYWwiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicHJvZHVjdCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFFaUJDLHNEQUFRLENBQUMsS0FBRCxDQUZ6QjtBQUFBLE1BRVZDLFNBRlU7QUFBQSxNQUVDQyxZQUZEOztBQUFBLG1CQUdxQkYsc0RBQVEsQ0FBQyxFQUFELENBSDdCO0FBQUEsTUFHVkcsV0FIVTtBQUFBLE1BR0dDLGNBSEg7O0FBS2pCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsU0FBSyxDQUFDLFVBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsSUFBTCxFQUFKO0FBQUEsS0FEWixFQUVHRixJQUZILENBRVE7QUFBQSxVQUFHRyxPQUFILFFBQUdBLE9BQUg7QUFBQSxhQUFpQk4sY0FBYyxDQUFDTSxPQUFELENBQS9CO0FBQUEsS0FGUjtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QlQsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxHQUZEOztBQUlBVSxTQUFPLENBQUNDLEdBQVIsQ0FBWVYsV0FBWjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsZ0JBQ0dBLFdBQVcsQ0FBQ1csR0FBWixDQUFnQixVQUFBQyxPQUFPLEVBQUk7QUFDMUI7QUFBQTtBQUFBLG9CQUFLQSxPQUFPLENBQUNDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNELE9BRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFPRTtBQUFRLGVBQVMsRUFBQyx5QkFBbEI7QUFBNEMsYUFBTyxFQUFFTCxXQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBUUUscUVBQUMsK0RBQUQ7QUFDRSxVQUFJLEVBQUVWLFNBRFI7QUFFRSxnQkFBVSxFQUFFQyxZQUZkO0FBR0UsV0FBSyxFQUFDLDZCQUhSO0FBSUUsU0FBRyxFQUFDO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGO0FBQUEsa0JBREY7QUFpQkQsQ0FsQ0Q7O0dBQU1ILEk7O0tBQUFBLEk7QUFvQ1NBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1vZGFsIGZyb20gJ0AvY29tcG9uZW50cy9Nb2RhbC9Nb2RhbCdcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgnL2FwaS9hdm8nKVxuICAgICAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAgIC50aGVuKCh7IGVudHJpZXMgfSkgPT4gc2V0UHJvZHVjdExpc3QoZW50cmllcykpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZU1vZGFsID0gKCkgPT4ge1xuICAgIHNldFNob3dNb2RhbCh0cnVlKVxuICB9XG5cbiAgY29uc29sZS5sb2cocHJvZHVjdExpc3QpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPkVzdGUgZXMgZWwgaG9tZTwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtwcm9kdWN0TGlzdC5tYXAocHJvZHVjdCA9PiB7XG4gICAgICAgICAgPGxpPntwcm9kdWN0Lm5hbWV9PC9saT5cbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZU1vZGFsfT5Nb3N0cmFyIE1vZGFsPC9idXR0b24+XG4gICAgICA8TW9kYWxcbiAgICAgICAgc2hvdz17c2hvd01vZGFsfVxuICAgICAgICBjbG9zZU1vZGFsPXtzZXRTaG93TW9kYWx9XG4gICAgICAgIHRpdGxlPVwiRXN0ZSBlcyBlbCB0aXR1bG8gZGVsIG1vZGFsXCJcbiAgICAgICAgbXNnPVwiUHVlZGVzIGNyZWFyIGVzdGUgY29tcG9uZW50ZSBwYXJhIHRvZG8gdHUgcHJveWVjdG8geSBzb2xvIGVudmlhcmxlIGxvIHF1ZSBuZWNlc2l0YXMuXCJcbiAgICAgIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})