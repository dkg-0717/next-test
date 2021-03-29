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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/dkg-07/Documents/Proyectos/nextjs/next-test/components/Modal/Modal.js\";\n\n\nconst Modal = ({\n  show,\n  closeModal,\n  msg,\n  title\n}) => {\n  if (!show) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"custom-modal\",\n    tabIndex: \"-1\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"modal-dialog\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"modal-content\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"modal-header\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n            className: \"modal-title\",\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 10,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"button\",\n            className: \"btn-close\",\n            onClick: () => closeModal(false)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 11,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"modal-body\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: msg\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"modal-footer\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"button\",\n            className: \"btn btn-secondary\",\n            onClick: () => closeModal(false),\n            children: \"Close\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            type: \"button\",\n            className: \"btn btn-primary\",\n            children: \"Save changes\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vZGFsL01vZGFsLmpzPzNhNmYiXSwibmFtZXMiOlsiTW9kYWwiLCJzaG93IiwiY2xvc2VNb2RhbCIsIm1zZyIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxZQUFSO0FBQW9CQyxLQUFwQjtBQUF5QkM7QUFBekIsQ0FBRCxLQUFzQztBQUNsRCxNQUFJLENBQUNILElBQUwsRUFBVyxPQUFPLElBQVA7QUFDWCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQThCLFlBQVEsRUFBQyxJQUF2QztBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLGFBQWQ7QUFBQSxzQkFBNkJHO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUNFLGdCQUFJLEVBQUMsUUFEUDtBQUVFLHFCQUFTLEVBQUMsV0FGWjtBQUdFLG1CQUFPLEVBQUUsTUFBTUYsVUFBVSxDQUFDLEtBQUQ7QUFIM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFTRTtBQUFLLG1CQUFTLEVBQUMsWUFBZjtBQUFBLGlDQUNFO0FBQUEsc0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEYsZUFZRTtBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUFBLGtDQUNFO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQ0UscUJBQVMsRUFBQyxtQkFEWjtBQUVFLG1CQUFPLEVBQUUsTUFBTUQsVUFBVSxDQUFDLEtBQUQsQ0FGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFLRTtBQUNFLGdCQUFJLEVBQUMsUUFEUDtBQUVFLHFCQUFTLEVBQUMsaUJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE2QkQsQ0EvQkQ7O0FBaUNlRixvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IE1vZGFsID0gKHsgc2hvdywgY2xvc2VNb2RhbCwgbXNnLCB0aXRsZSB9KSA9PiB7XG4gIGlmICghc2hvdykgcmV0dXJuIG51bGxcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbFwiIHRhYkluZGV4PVwiLTFcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGl0bGV9PC9oNT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1jbG9zZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsb3NlTW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgPHA+e21zZ308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2xvc2VNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICA+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICA+U2F2ZSBjaGFuZ2VzPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Modal/Modal.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Modal/Modal */ \"./components/Modal/Modal.js\");\n\n\nvar _jsxFileName = \"/Users/dkg-07/Documents/Proyectos/nextjs/next-test/pages/index.js\";\n\n\n\nconst Home = () => {\n  const {\n    0: showModal,\n    1: setShowModal\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: productList,\n    1: setProductList\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    window.fetch('/api/avo').then(resp => resp.json()).then(({\n      entries\n    }) => setProductList(entries));\n  }, []);\n\n  const handleModal = () => {\n    setShowModal(true);\n  };\n\n  console.log(productList);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Este es el home\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n      children: JSON.stringify(productList)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined), productList.map(product => {\n      /*#__PURE__*/\n      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: product\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, undefined);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: productList.map(product => {\n        /*#__PURE__*/\n        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: product\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"btn btn-outline-primary\",\n      onClick: handleModal,\n      children: \"Mostrar Modal\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      show: showModal,\n      closeModal: setShowModal,\n      title: \"Este es el titulo del modal\",\n      msg: \"Puedes crear este componente para todo tu proyecto y solo enviarle lo que necesitas.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1c2VTdGF0ZSIsInByb2R1Y3RMaXN0Iiwic2V0UHJvZHVjdExpc3QiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJmZXRjaCIsInRoZW4iLCJyZXNwIiwianNvbiIsImVudHJpZXMiLCJoYW5kbGVNb2RhbCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwibWFwIiwicHJvZHVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUVqQixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Ysc0RBQVEsQ0FBQyxFQUFELENBQTlDO0FBRUFHLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxVQUFNLENBQUNDLEtBQVAsQ0FBYSxVQUFiLEVBQ0dDLElBREgsQ0FDUUMsSUFBSSxJQUFJQSxJQUFJLENBQUNDLElBQUwsRUFEaEIsRUFFR0YsSUFGSCxDQUVRLENBQUM7QUFBRUc7QUFBRixLQUFELEtBQWlCUCxjQUFjLENBQUNPLE9BQUQsQ0FGdkM7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLFFBQU1DLFdBQVcsR0FBRyxNQUFNO0FBQ3hCWCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNELEdBRkQ7O0FBSUFZLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWCxXQUFaO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsZ0JBQU1ZLElBQUksQ0FBQ0MsU0FBTCxDQUFlYixXQUFmO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUdHQSxXQUFXLENBQUNjLEdBQVosQ0FBZ0JDLE9BQU8sSUFBSTtBQUMxQjtBQUFBO0FBQUEsa0JBQU1BO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNELEtBRkEsQ0FISCxlQU1FO0FBQUEsZ0JBQ0dmLFdBQVcsQ0FBQ2MsR0FBWixDQUFnQkMsT0FBTyxJQUFJO0FBQzFCO0FBQUE7QUFBQSxvQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0QsT0FGQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFXRTtBQUFRLGVBQVMsRUFBQyx5QkFBbEI7QUFBNEMsYUFBTyxFQUFFTixXQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRixlQVlFLHFFQUFDLCtEQUFEO0FBQ0UsVUFBSSxFQUFFWixTQURSO0FBRUUsZ0JBQVUsRUFBRUMsWUFGZDtBQUdFLFdBQUssRUFBQyw2QkFIUjtBQUlFLFNBQUcsRUFBQztBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQSxrQkFERjtBQXFCRCxDQXRDRDs7QUF3Q2VGLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1vZGFsIGZyb20gJ0AvY29tcG9uZW50cy9Nb2RhbC9Nb2RhbCdcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuZmV0Y2goJy9hcGkvYXZvJylcbiAgICAgIC50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgICAudGhlbigoeyBlbnRyaWVzIH0pID0+IHNldFByb2R1Y3RMaXN0KGVudHJpZXMpKVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRTaG93TW9kYWwodHJ1ZSlcbiAgfVxuXG4gIGNvbnNvbGUubG9nKHByb2R1Y3RMaXN0KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5Fc3RlIGVzIGVsIGhvbWU8L2gxPlxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkocHJvZHVjdExpc3QpfTwvcHJlPlxuICAgICAge3Byb2R1Y3RMaXN0Lm1hcChwcm9kdWN0ID0+IHtcbiAgICAgICAgPGRpdj57cHJvZHVjdH08L2Rpdj5cbiAgICAgIH0pfVxuICAgICAgPHVsPlxuICAgICAgICB7cHJvZHVjdExpc3QubWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICAgIDxsaT57cHJvZHVjdH08L2xpPlxuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlTW9kYWx9Pk1vc3RyYXIgTW9kYWw8L2J1dHRvbj5cbiAgICAgIDxNb2RhbFxuICAgICAgICBzaG93PXtzaG93TW9kYWx9XG4gICAgICAgIGNsb3NlTW9kYWw9e3NldFNob3dNb2RhbH1cbiAgICAgICAgdGl0bGU9XCJFc3RlIGVzIGVsIHRpdHVsbyBkZWwgbW9kYWxcIlxuICAgICAgICBtc2c9XCJQdWVkZXMgY3JlYXIgZXN0ZSBjb21wb25lbnRlIHBhcmEgdG9kbyB0dSBwcm95ZWN0byB5IHNvbG8gZW52aWFybGUgbG8gcXVlIG5lY2VzaXRhcy5cIlxuICAgICAgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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