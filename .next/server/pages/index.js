module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Modal/Modal.js":
/*!***********************************!*\
  !*** ./components/Modal/Modal.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modal_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.module.css */ \"./components/Modal/modal.module.css\");\n/* harmony import */ var _modal_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/dkg-07/Documents/Proyectos/nextjs/next-test/components/Modal/Modal.js\";\n\n\n\nconst Modal = ({\n  show,\n  closeModal,\n  msg,\n  title\n}) => {\n  if (!show) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: `custom-modal  ${show && _modal_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.active}`,\n    tabIndex: \"-1\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: `modal-dialog`,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"modal-content\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"modal-header\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n            className: \"modal-title\",\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 11,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"button\",\n            className: \"btn-close\",\n            onClick: () => closeModal(false)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 12,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"modal-body\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: msg\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"modal-footer\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"button\",\n            className: \"btn btn-secondary\",\n            onClick: () => closeModal(false),\n            children: \"Close\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"button\",\n            className: \"btn btn-primary\",\n            children: \"Save changes\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vZGFsL01vZGFsLmpzPzNhNmYiXSwibmFtZXMiOlsiTW9kYWwiLCJzaG93IiwiY2xvc2VNb2RhbCIsIm1zZyIsInRpdGxlIiwic3R5bGVzIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDLE1BQUY7QUFBUUMsWUFBUjtBQUFvQkMsS0FBcEI7QUFBeUJDO0FBQXpCLENBQUQsS0FBc0M7QUFDbEQsTUFBSSxDQUFDSCxJQUFMLEVBQVcsT0FBTyxJQUFQO0FBQ1gsc0JBQ0U7QUFBSyxhQUFTLEVBQUcsaUJBQWdCQSxJQUFJLElBQUlJLHdEQUFNLENBQUNDLE1BQU8sRUFBdkQ7QUFBMEQsWUFBUSxFQUFDLElBQW5FO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUcsY0FBakI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLGFBQWQ7QUFBQSxzQkFBNkJGO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUNFLGdCQUFJLEVBQUMsUUFEUDtBQUVFLHFCQUFTLEVBQUMsV0FGWjtBQUdFLG1CQUFPLEVBQUUsTUFBTUYsVUFBVSxDQUFDLEtBQUQ7QUFIM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFTRTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGlDQUNFO0FBQUEsc0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEYsZUFZRTtBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUFBLGtDQUNFO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQ0UscUJBQVMsRUFBQyxtQkFEWjtBQUVFLG1CQUFPLEVBQUUsTUFBTUQsVUFBVSxDQUFDLEtBQUQsQ0FGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFLRTtBQUNFLGdCQUFJLEVBQUMsUUFEUDtBQUVFLHFCQUFTLEVBQUMsaUJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE2QkQsQ0EvQkQ7O0FBaUNlRixvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW9kYWwubW9kdWxlLmNzcydcblxuY29uc3QgTW9kYWwgPSAoeyBzaG93LCBjbG9zZU1vZGFsLCBtc2csIHRpdGxlIH0pID0+IHtcbiAgaWYgKCFzaG93KSByZXR1cm4gbnVsbFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgY3VzdG9tLW1vZGFsICAke3Nob3cgJiYgc3R5bGVzLmFjdGl2ZX1gfSB0YWJJbmRleD1cIi0xXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGFsLWRpYWxvZ2B9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3RpdGxlfTwvaDU+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tY2xvc2VcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbG9zZU1vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgIDxwPnttc2d9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsb3NlTW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgPkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgPlNhdmUgY2hhbmdlczwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Modal/Modal.js\n");

/***/ }),

/***/ "./components/Modal/modal.module.css":
/*!*******************************************!*\
  !*** ./components/Modal/modal.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"active\": \"modal_active__1vD-D\",\n\t\"fadeIn\": \"modal_fadeIn__2n0Ca\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vZGFsL21vZGFsLm1vZHVsZS5jc3M/ZjI2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Nb2RhbC9tb2RhbC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWN0aXZlXCI6IFwibW9kYWxfYWN0aXZlX18xdkQtRFwiLFxuXHRcImZhZGVJblwiOiBcIm1vZGFsX2ZhZGVJbl9fMm4wQ2FcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Modal/modal.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Modal/Modal */ \"./components/Modal/Modal.js\");\n\n\nvar _jsxFileName = \"/Users/dkg-07/Documents/Proyectos/nextjs/next-test/pages/index.js\";\n\n\n\nconst Home = () => {\n  const {\n    0: showModal,\n    1: setShowModal\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: productList,\n    1: setProductList\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    fetch('/api/avo').then(resp => resp.json()).then(({\n      entries\n    }) => setProductList(entries));\n  }, []);\n\n  const handleModal = () => {\n    setShowModal(true);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Este es el home\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: productList.map(product => {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: product.name\n        }, product.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"btn btn-outline-primary\",\n      onClick: handleModal,\n      children: \"Mostrar Modal\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      show: showModal,\n      closeModal: setShowModal,\n      title: \"Este es el titulo del modal\",\n      msg: \"Puedes crear este componente para todo tu proyecto y solo enviarle lo que necesitas.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1c2VTdGF0ZSIsInByb2R1Y3RMaXN0Iiwic2V0UHJvZHVjdExpc3QiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwIiwianNvbiIsImVudHJpZXMiLCJoYW5kbGVNb2RhbCIsIm1hcCIsInByb2R1Y3QiLCJuYW1lIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFFakIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLEtBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NGLHNEQUFRLENBQUMsRUFBRCxDQUE5QztBQUVBRyx5REFBUyxDQUFDLE1BQU07QUFDZEMsU0FBSyxDQUFDLFVBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1FDLElBQUksSUFBSUEsSUFBSSxDQUFDQyxJQUFMLEVBRGhCLEVBRUdGLElBRkgsQ0FFUSxDQUFDO0FBQUVHO0FBQUYsS0FBRCxLQUFpQk4sY0FBYyxDQUFDTSxPQUFELENBRnZDO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFNQSxRQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUN4QlYsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLGdCQUNHRSxXQUFXLENBQUNTLEdBQVosQ0FBZ0JDLE9BQU8sSUFBSTtBQUMxQiw0QkFDRTtBQUFBLG9CQUFzQkEsT0FBTyxDQUFDQztBQUE5QixXQUFTRCxPQUFPLENBQUNFLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFHRCxPQUpBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQVVFO0FBQVEsZUFBUyxFQUFDLHlCQUFsQjtBQUE0QyxhQUFPLEVBQUVKLFdBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGLGVBV0UscUVBQUMsK0RBQUQ7QUFDRSxVQUFJLEVBQUVYLFNBRFI7QUFFRSxnQkFBVSxFQUFFQyxZQUZkO0FBR0UsV0FBSyxFQUFDLDZCQUhSO0FBSUUsU0FBRyxFQUFDO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBLGtCQURGO0FBb0JELENBbkNEOztBQXFDZUYsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTW9kYWwgZnJvbSAnQC9jb21wb25lbnRzL01vZGFsL01vZGFsJ1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCcvYXBpL2F2bycpXG4gICAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuICAgICAgLnRoZW4oKHsgZW50cmllcyB9KSA9PiBzZXRQcm9kdWN0TGlzdChlbnRyaWVzKSlcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0U2hvd01vZGFsKHRydWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+RXN0ZSBlcyBlbCBob21lPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge3Byb2R1Y3RMaXN0Lm1hcChwcm9kdWN0ID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QubmFtZX08L2xpPlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVNb2RhbH0+TW9zdHJhciBNb2RhbDwvYnV0dG9uPlxuICAgICAgPE1vZGFsXG4gICAgICAgIHNob3c9e3Nob3dNb2RhbH1cbiAgICAgICAgY2xvc2VNb2RhbD17c2V0U2hvd01vZGFsfVxuICAgICAgICB0aXRsZT1cIkVzdGUgZXMgZWwgdGl0dWxvIGRlbCBtb2RhbFwiXG4gICAgICAgIG1zZz1cIlB1ZWRlcyBjcmVhciBlc3RlIGNvbXBvbmVudGUgcGFyYSB0b2RvIHR1IHByb3llY3RvIHkgc29sbyBlbnZpYXJsZSBsbyBxdWUgbmVjZXNpdGFzLlwiXG4gICAgICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });