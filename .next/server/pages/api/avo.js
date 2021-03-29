module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/avo/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./database/data.js":
/*!**************************!*\
  !*** ./database/data.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = {\n  '2zd33b8c': {\n    name: 'Maluma Hass Avocado',\n    id: '2zd33b8c',\n    sku: 'NUR72KCM',\n    price: 1.15,\n    image: '/images/maluma.jpg',\n    attributes: {\n      description: 'A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert. Maluma Babyy. It is a chance seedling of unknown parentage',\n      shape: 'Oval',\n      hardiness: '1 °C',\n      taste: 'Catchy, is an avocado'\n    }\n  },\n  '6trfgkkj': {\n    name: 'Fuerte Avocado',\n    id: '6trfgkkj',\n    sku: 'AX4M8SJV',\n    price: 1.21,\n    image: '/images/fuerte.jpg',\n    attributes: {\n      description: 'The Fuerte avocado is the second largest commercial variety behind Hass. It is a long time California commercial variety valued for its winter season ripening and its B-Type blossom type which most growers plant adjacent to the Hass for a more consistent production cycle. This avocado tends to produce heavily in alternate years.',\n      shape: 'Pear',\n      hardiness: '-1 °C',\n      taste: 'Magnificent, is a strong avocado'\n    }\n  },\n  '7bcr49em': {\n    name: 'Gwen Hass Avocado',\n    id: '7bcr49em',\n    sku: 'HYA78F6J',\n    price: 1.25,\n    image: '/images/gwen.jpg',\n    attributes: {\n      description: \"A seedling bred from 'Hass' x 'Thille' in 1982, 'Gwen' is higher yielding and more dwarfing than 'Hass' in California. The fruit has an oval shape, slightly smaller than 'Hass' (100–200 g or 3.5–7.1 oz), with a rich, nutty flavor. The skin texture is more finely pebbled than 'Hass', and is dull green when ripe. It is frost-hardy down to −1 °C (30 °F)\",\n      shape: 'Plump',\n      hardiness: '−1 °C',\n      taste: 'Superb, is an avocado'\n    }\n  },\n  '098323ks': {\n    name: 'Bacon Avocado',\n    id: '098323ks',\n    sku: 'BXD100BLK',\n    price: 1.51,\n    image: '/images/bacon.jpg',\n    attributes: {\n      description: 'Developed by a farmer, James Bacon, in 1954, Bacon has medium-sized fruit with smooth, green skin with yellow-green, light-tasting flesh. When ripe, the skin remains green, but darkens slightly, and fruit yields to gentle pressure. It is cold-hardy down to −5 °C (23 °F)',\n      shape: 'Oval',\n      hardiness: '−5 °C',\n      taste: 'Creamy, is an avocado'\n    }\n  },\n  b8uthe2y: {\n    name: 'Hass Avocado',\n    id: 'b8uthe2y',\n    sku: 'RMRCZN7E',\n    price: 1.39,\n    image: '/images/hass.jpg',\n    attributes: {\n      description: \"The 'Hass' is the most common cultivar of avocado. It produces fruit year-round and accounts for 80% of cultivated avocados in the world.[21][55] All 'Hass' trees are descended from a single 'mother tree' raised by a mail carrier named Rudolph Hass, of La Habra Heights, California.[20][55] Hass patented the productive tree in 1935. The 'mother tree', of uncertain subspecies, died of root rot and was cut down in September 2002.[21][55][56] 'Hass' trees have medium-sized (150–250 g or 5.3–8.8 oz), ovate fruit with a black, pebbled skin. The flesh has a nutty, rich flavor with 19% oil. A hybrid Guatemalan type can withstand temperatures to −1 °C (30 °F)\",\n      shape: 'Oval',\n      hardiness: '−1 °C',\n      taste: 'Gorgeous, is an avocado'\n    }\n  },\n  ewxsd6xb: {\n    name: 'Lamb Hass Avocado',\n    id: 'ewxsd6xb',\n    sku: 'N55229ZA',\n    price: 1.34,\n    image: '/images/lamb.jpg',\n    attributes: {\n      description: 'The Lamb Hass avocado is a cross between a Hass and Gwen avocado. The fruits are larger in size and later maturing than Hass. It is gaining in popularity as a commercial and backyard variety due to its exceptional flavor and easy peeling qualities. The tree has an upright, compact habit.',\n      shape: 'Obovate',\n      hardiness: '-2 °C',\n      taste: 'Great, is an avocado'\n    }\n  },\n  fpr72m9k: {\n    name: 'Pinkerton Avocado',\n    id: 'fpr72m9k',\n    sku: 'B4HZ42TM',\n    price: 1.27,\n    image: '/images/pinkerton.jpg',\n    attributes: {\n      description: \"First grown on the Pinkerton Ranch in Saticoy, California, in the early 1970s, 'Pinkerton' is a seedling of 'Hass' x 'Rincon'. The large fruit has a small seed, and its green skin deepens in color as it ripens. The thick flesh has a smooth, creamy texture, pale green color, good flavor, and high oil content. It shows some cold tolerance, to −1 °C (30 °F) and bears consistently heavy crops. A hybrid Guatemalan type, it has excellent peeling characteristics\",\n      shape: 'Long pear',\n      hardiness: '−1 °C',\n      taste: 'Marvelous, is an avocado'\n    }\n  },\n  t9dv25gs: {\n    name: 'Reed Avocado',\n    id: 't9dv25gs',\n    sku: 'ZY3T9XXC',\n    price: 1.18,\n    image: '/images/reed.jpg',\n    attributes: {\n      description: 'Developed from a chance seedling found in 1948 by James S. Reed in California, this cultivar has large, round, green fruit with a smooth texture and dark, thick, glossy skin. Smooth and delicate, the flesh has a slightly nutty flavor. The skin ripens green. A Guatemalan type, it is hardy to −1 °C (30 °F). Tree size is about 5 by 4 m (16.4 by 13.1 ft)',\n      shape: 'Round',\n      hardiness: '−1 °C',\n      taste: 'Exquisite, is an avocado'\n    }\n  },\n  t345w48y: {\n    name: 'Zutano Avocado',\n    id: 't345w48y',\n    sku: 'MW79ZZ6Y',\n    price: 1.25,\n    image: '/images/zutano.jpg',\n    attributes: {\n      description: 'The Zutano avocado is a cold hardy, consistent producing avocado variety. It resembles the Fuerte in appearance but is less flavorful but more cold hardy. The green fruits are obovate in shape with waxy bumps on the skin. The flesh has a low oil but high water content which causes it to have a more fibrous texture.',\n      shape: 'Pear',\n      hardiness: '-5 °C',\n      taste: 'Splendid, is an avocado'\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9kYXRhLmpzPzhiYjQiXSwibmFtZXMiOlsiZGF0YSIsIm5hbWUiLCJpZCIsInNrdSIsInByaWNlIiwiaW1hZ2UiLCJhdHRyaWJ1dGVzIiwiZGVzY3JpcHRpb24iLCJzaGFwZSIsImhhcmRpbmVzcyIsInRhc3RlIiwiYjh1dGhlMnkiLCJld3hzZDZ4YiIsImZwcjcybTlrIiwidDlkdjI1Z3MiLCJ0MzQ1dzQ4eSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxJQUFJLEdBQUc7QUFDWCxjQUFZO0FBQ1ZDLFFBQUksRUFBRSxxQkFESTtBQUVWQyxNQUFFLEVBQUUsVUFGTTtBQUdWQyxPQUFHLEVBQUUsVUFISztBQUlWQyxTQUFLLEVBQUUsSUFKRztBQUtWQyxTQUFLLEVBQUUsb0JBTEc7QUFNVkMsY0FBVSxFQUFFO0FBQ1ZDLGlCQUFXLEVBQ1QsK0xBRlE7QUFHVkMsV0FBSyxFQUFFLE1BSEc7QUFJVkMsZUFBUyxFQUFFLE1BSkQ7QUFLVkMsV0FBSyxFQUFFO0FBTEc7QUFORixHQUREO0FBZVgsY0FBWTtBQUNWVCxRQUFJLEVBQUUsZ0JBREk7QUFFVkMsTUFBRSxFQUFFLFVBRk07QUFHVkMsT0FBRyxFQUFFLFVBSEs7QUFJVkMsU0FBSyxFQUFFLElBSkc7QUFLVkMsU0FBSyxFQUFFLG9CQUxHO0FBTVZDLGNBQVUsRUFBRTtBQUNWQyxpQkFBVyxFQUNULDRVQUZRO0FBR1ZDLFdBQUssRUFBRSxNQUhHO0FBSVZDLGVBQVMsRUFBRSxPQUpEO0FBS1ZDLFdBQUssRUFBRTtBQUxHO0FBTkYsR0FmRDtBQTZCWCxjQUFZO0FBQ1ZULFFBQUksRUFBRSxtQkFESTtBQUVWQyxNQUFFLEVBQUUsVUFGTTtBQUdWQyxPQUFHLEVBQUUsVUFISztBQUlWQyxTQUFLLEVBQUUsSUFKRztBQUtWQyxTQUFLLEVBQUUsa0JBTEc7QUFNVkMsY0FBVSxFQUFFO0FBQ1ZDLGlCQUFXLEVBQ1Qsa1dBRlE7QUFHVkMsV0FBSyxFQUFFLE9BSEc7QUFJVkMsZUFBUyxFQUFFLE9BSkQ7QUFLVkMsV0FBSyxFQUFFO0FBTEc7QUFORixHQTdCRDtBQTJDWCxjQUFZO0FBQ1ZULFFBQUksRUFBRSxlQURJO0FBRVZDLE1BQUUsRUFBRSxVQUZNO0FBR1ZDLE9BQUcsRUFBRSxXQUhLO0FBSVZDLFNBQUssRUFBRSxJQUpHO0FBS1ZDLFNBQUssRUFBRSxtQkFMRztBQU1WQyxjQUFVLEVBQUU7QUFDVkMsaUJBQVcsRUFDVCxnUkFGUTtBQUdWQyxXQUFLLEVBQUUsTUFIRztBQUlWQyxlQUFTLEVBQUUsT0FKRDtBQUtWQyxXQUFLLEVBQUU7QUFMRztBQU5GLEdBM0NEO0FBeURYQyxVQUFRLEVBQUU7QUFDUlYsUUFBSSxFQUFFLGNBREU7QUFFUkMsTUFBRSxFQUFFLFVBRkk7QUFHUkMsT0FBRyxFQUFFLFVBSEc7QUFJUkMsU0FBSyxFQUFFLElBSkM7QUFLUkMsU0FBSyxFQUFFLGtCQUxDO0FBTVJDLGNBQVUsRUFBRTtBQUNWQyxpQkFBVyxFQUNULG9wQkFGUTtBQUdWQyxXQUFLLEVBQUUsTUFIRztBQUlWQyxlQUFTLEVBQUUsT0FKRDtBQUtWQyxXQUFLLEVBQUU7QUFMRztBQU5KLEdBekRDO0FBdUVYRSxVQUFRLEVBQUU7QUFDUlgsUUFBSSxFQUFFLG1CQURFO0FBRVJDLE1BQUUsRUFBRSxVQUZJO0FBR1JDLE9BQUcsRUFBRSxVQUhHO0FBSVJDLFNBQUssRUFBRSxJQUpDO0FBS1JDLFNBQUssRUFBRSxrQkFMQztBQU1SQyxjQUFVLEVBQUU7QUFDVkMsaUJBQVcsRUFDVCxrU0FGUTtBQUdWQyxXQUFLLEVBQUUsU0FIRztBQUlWQyxlQUFTLEVBQUUsT0FKRDtBQUtWQyxXQUFLLEVBQUU7QUFMRztBQU5KLEdBdkVDO0FBcUZYRyxVQUFRLEVBQUU7QUFDUlosUUFBSSxFQUFFLG1CQURFO0FBRVJDLE1BQUUsRUFBRSxVQUZJO0FBR1JDLE9BQUcsRUFBRSxVQUhHO0FBSVJDLFNBQUssRUFBRSxJQUpDO0FBS1JDLFNBQUssRUFBRSx1QkFMQztBQU1SQyxjQUFVLEVBQUU7QUFDVkMsaUJBQVcsRUFDVCw2Y0FGUTtBQUdWQyxXQUFLLEVBQUUsV0FIRztBQUlWQyxlQUFTLEVBQUUsT0FKRDtBQUtWQyxXQUFLLEVBQUU7QUFMRztBQU5KLEdBckZDO0FBbUdYSSxVQUFRLEVBQUU7QUFDUmIsUUFBSSxFQUFFLGNBREU7QUFFUkMsTUFBRSxFQUFFLFVBRkk7QUFHUkMsT0FBRyxFQUFFLFVBSEc7QUFJUkMsU0FBSyxFQUFFLElBSkM7QUFLUkMsU0FBSyxFQUFFLGtCQUxDO0FBTVJDLGNBQVUsRUFBRTtBQUNWQyxpQkFBVyxFQUNULGtXQUZRO0FBR1ZDLFdBQUssRUFBRSxPQUhHO0FBSVZDLGVBQVMsRUFBRSxPQUpEO0FBS1ZDLFdBQUssRUFBRTtBQUxHO0FBTkosR0FuR0M7QUFpSFhLLFVBQVEsRUFBRTtBQUNSZCxRQUFJLEVBQUUsZ0JBREU7QUFFUkMsTUFBRSxFQUFFLFVBRkk7QUFHUkMsT0FBRyxFQUFFLFVBSEc7QUFJUkMsU0FBSyxFQUFFLElBSkM7QUFLUkMsU0FBSyxFQUFFLG9CQUxDO0FBTVJDLGNBQVUsRUFBRTtBQUNWQyxpQkFBVyxFQUNULDhUQUZRO0FBR1ZDLFdBQUssRUFBRSxNQUhHO0FBSVZDLGVBQVMsRUFBRSxPQUpEO0FBS1ZDLFdBQUssRUFBRTtBQUxHO0FBTko7QUFqSEMsQ0FBYjtBQWlJZVYsbUVBQWYiLCJmaWxlIjoiLi9kYXRhYmFzZS9kYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGF0YSA9IHtcbiAgJzJ6ZDMzYjhjJzoge1xuICAgIG5hbWU6ICdNYWx1bWEgSGFzcyBBdm9jYWRvJyxcbiAgICBpZDogJzJ6ZDMzYjhjJyxcbiAgICBza3U6ICdOVVI3MktDTScsXG4gICAgcHJpY2U6IDEuMTUsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL21hbHVtYS5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnQSByZWxhdGl2ZWx5IG5ldyBjdWx0aXZhciwgaXQgd2FzLCB0aGUgcHJldHR5IGJveSBiYWJ5LCBkaXNjb3ZlcmVkIGluIFNvdXRoIEFmcmljYSBpbiB0aGUgZWFybHkgMTk5MHMgYnkgTXIuIEEuRy4gKERyaWVzKSBKb3ViZXJ0LiBNYWx1bWEgQmFieXkuIEl0IGlzIGEgY2hhbmNlIHNlZWRsaW5nIG9mIHVua25vd24gcGFyZW50YWdlJyxcbiAgICAgIHNoYXBlOiAnT3ZhbCcsXG4gICAgICBoYXJkaW5lc3M6ICcxIMKwQycsXG4gICAgICB0YXN0ZTogJ0NhdGNoeSwgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgJzZ0cmZna2tqJzoge1xuICAgIG5hbWU6ICdGdWVydGUgQXZvY2FkbycsXG4gICAgaWQ6ICc2dHJmZ2traicsXG4gICAgc2t1OiAnQVg0TThTSlYnLFxuICAgIHByaWNlOiAxLjIxLFxuICAgIGltYWdlOiAnL2ltYWdlcy9mdWVydGUuanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1RoZSBGdWVydGUgYXZvY2FkbyBpcyB0aGUgc2Vjb25kIGxhcmdlc3QgY29tbWVyY2lhbCB2YXJpZXR5IGJlaGluZCBIYXNzLiBJdCBpcyBhIGxvbmcgdGltZSBDYWxpZm9ybmlhIGNvbW1lcmNpYWwgdmFyaWV0eSB2YWx1ZWQgZm9yIGl0cyB3aW50ZXIgc2Vhc29uIHJpcGVuaW5nIGFuZCBpdHMgQi1UeXBlIGJsb3Nzb20gdHlwZSB3aGljaCBtb3N0IGdyb3dlcnMgcGxhbnQgYWRqYWNlbnQgdG8gdGhlIEhhc3MgZm9yIGEgbW9yZSBjb25zaXN0ZW50IHByb2R1Y3Rpb24gY3ljbGUuIFRoaXMgYXZvY2FkbyB0ZW5kcyB0byBwcm9kdWNlIGhlYXZpbHkgaW4gYWx0ZXJuYXRlIHllYXJzLicsXG4gICAgICBzaGFwZTogJ1BlYXInLFxuICAgICAgaGFyZGluZXNzOiAnLTEgwrBDJyxcbiAgICAgIHRhc3RlOiAnTWFnbmlmaWNlbnQsIGlzIGEgc3Ryb25nIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG4gICc3YmNyNDllbSc6IHtcbiAgICBuYW1lOiAnR3dlbiBIYXNzIEF2b2NhZG8nLFxuICAgIGlkOiAnN2JjcjQ5ZW0nLFxuICAgIHNrdTogJ0hZQTc4RjZKJyxcbiAgICBwcmljZTogMS4yNSxcbiAgICBpbWFnZTogJy9pbWFnZXMvZ3dlbi5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkEgc2VlZGxpbmcgYnJlZCBmcm9tICdIYXNzJyB4ICdUaGlsbGUnIGluIDE5ODIsICdHd2VuJyBpcyBoaWdoZXIgeWllbGRpbmcgYW5kIG1vcmUgZHdhcmZpbmcgdGhhbiAnSGFzcycgaW4gQ2FsaWZvcm5pYS4gVGhlIGZydWl0IGhhcyBhbiBvdmFsIHNoYXBlLCBzbGlnaHRseSBzbWFsbGVyIHRoYW4gJ0hhc3MnICgxMDDigJMyMDAgZyBvciAzLjXigJM3LjEgb3opLCB3aXRoIGEgcmljaCwgbnV0dHkgZmxhdm9yLiBUaGUgc2tpbiB0ZXh0dXJlIGlzIG1vcmUgZmluZWx5IHBlYmJsZWQgdGhhbiAnSGFzcycsIGFuZCBpcyBkdWxsIGdyZWVuIHdoZW4gcmlwZS4gSXQgaXMgZnJvc3QtaGFyZHkgZG93biB0byDiiJIxIMKwQyAoMzAgwrBGKVwiLFxuICAgICAgc2hhcGU6ICdQbHVtcCcsXG4gICAgICBoYXJkaW5lc3M6ICfiiJIxIMKwQycsXG4gICAgICB0YXN0ZTogJ1N1cGVyYiwgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgJzA5ODMyM2tzJzoge1xuICAgIG5hbWU6ICdCYWNvbiBBdm9jYWRvJyxcbiAgICBpZDogJzA5ODMyM2tzJyxcbiAgICBza3U6ICdCWEQxMDBCTEsnLFxuICAgIHByaWNlOiAxLjUxLFxuICAgIGltYWdlOiAnL2ltYWdlcy9iYWNvbi5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnRGV2ZWxvcGVkIGJ5IGEgZmFybWVyLCBKYW1lcyBCYWNvbiwgaW4gMTk1NCwgQmFjb24gaGFzIG1lZGl1bS1zaXplZCBmcnVpdCB3aXRoIHNtb290aCwgZ3JlZW4gc2tpbiB3aXRoIHllbGxvdy1ncmVlbiwgbGlnaHQtdGFzdGluZyBmbGVzaC4gV2hlbiByaXBlLCB0aGUgc2tpbiByZW1haW5zIGdyZWVuLCBidXQgZGFya2VucyBzbGlnaHRseSwgYW5kIGZydWl0IHlpZWxkcyB0byBnZW50bGUgcHJlc3N1cmUuIEl0IGlzIGNvbGQtaGFyZHkgZG93biB0byDiiJI1IMKwQyAoMjMgwrBGKScsXG4gICAgICBzaGFwZTogJ092YWwnLFxuICAgICAgaGFyZGluZXNzOiAn4oiSNSDCsEMnLFxuICAgICAgdGFzdGU6ICdDcmVhbXksIGlzIGFuIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG4gIGI4dXRoZTJ5OiB7XG4gICAgbmFtZTogJ0hhc3MgQXZvY2FkbycsXG4gICAgaWQ6ICdiOHV0aGUyeScsXG4gICAgc2t1OiAnUk1SQ1pON0UnLFxuICAgIHByaWNlOiAxLjM5LFxuICAgIGltYWdlOiAnL2ltYWdlcy9oYXNzLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiVGhlICdIYXNzJyBpcyB0aGUgbW9zdCBjb21tb24gY3VsdGl2YXIgb2YgYXZvY2Fkby4gSXQgcHJvZHVjZXMgZnJ1aXQgeWVhci1yb3VuZCBhbmQgYWNjb3VudHMgZm9yIDgwJSBvZiBjdWx0aXZhdGVkIGF2b2NhZG9zIGluIHRoZSB3b3JsZC5bMjFdWzU1XSBBbGwgJ0hhc3MnIHRyZWVzIGFyZSBkZXNjZW5kZWQgZnJvbSBhIHNpbmdsZSAnbW90aGVyIHRyZWUnIHJhaXNlZCBieSBhIG1haWwgY2FycmllciBuYW1lZCBSdWRvbHBoIEhhc3MsIG9mIExhIEhhYnJhIEhlaWdodHMsIENhbGlmb3JuaWEuWzIwXVs1NV0gSGFzcyBwYXRlbnRlZCB0aGUgcHJvZHVjdGl2ZSB0cmVlIGluIDE5MzUuIFRoZSAnbW90aGVyIHRyZWUnLCBvZiB1bmNlcnRhaW4gc3Vic3BlY2llcywgZGllZCBvZiByb290IHJvdCBhbmQgd2FzIGN1dCBkb3duIGluIFNlcHRlbWJlciAyMDAyLlsyMV1bNTVdWzU2XSAnSGFzcycgdHJlZXMgaGF2ZSBtZWRpdW0tc2l6ZWQgKDE1MOKAkzI1MCBnIG9yIDUuM+KAkzguOCBveiksIG92YXRlIGZydWl0IHdpdGggYSBibGFjaywgcGViYmxlZCBza2luLiBUaGUgZmxlc2ggaGFzIGEgbnV0dHksIHJpY2ggZmxhdm9yIHdpdGggMTklIG9pbC4gQSBoeWJyaWQgR3VhdGVtYWxhbiB0eXBlIGNhbiB3aXRoc3RhbmQgdGVtcGVyYXR1cmVzIHRvIOKIkjEgwrBDICgzMCDCsEYpXCIsXG4gICAgICBzaGFwZTogJ092YWwnLFxuICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxuICAgICAgdGFzdGU6ICdHb3JnZW91cywgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgZXd4c2Q2eGI6IHtcbiAgICBuYW1lOiAnTGFtYiBIYXNzIEF2b2NhZG8nLFxuICAgIGlkOiAnZXd4c2Q2eGInLFxuICAgIHNrdTogJ041NTIyOVpBJyxcbiAgICBwcmljZTogMS4zNCxcbiAgICBpbWFnZTogJy9pbWFnZXMvbGFtYi5qcGcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIExhbWIgSGFzcyBhdm9jYWRvIGlzIGEgY3Jvc3MgYmV0d2VlbiBhIEhhc3MgYW5kIEd3ZW4gYXZvY2Fkby4gVGhlIGZydWl0cyBhcmUgbGFyZ2VyIGluIHNpemUgYW5kIGxhdGVyIG1hdHVyaW5nIHRoYW4gSGFzcy4gSXQgaXMgZ2FpbmluZyBpbiBwb3B1bGFyaXR5IGFzIGEgY29tbWVyY2lhbCBhbmQgYmFja3lhcmQgdmFyaWV0eSBkdWUgdG8gaXRzIGV4Y2VwdGlvbmFsIGZsYXZvciBhbmQgZWFzeSBwZWVsaW5nIHF1YWxpdGllcy4gVGhlIHRyZWUgaGFzIGFuIHVwcmlnaHQsIGNvbXBhY3QgaGFiaXQuJyxcbiAgICAgIHNoYXBlOiAnT2JvdmF0ZScsXG4gICAgICBoYXJkaW5lc3M6ICctMiDCsEMnLFxuICAgICAgdGFzdGU6ICdHcmVhdCwgaXMgYW4gYXZvY2FkbycsXG4gICAgfSxcbiAgfSxcbiAgZnByNzJtOWs6IHtcbiAgICBuYW1lOiAnUGlua2VydG9uIEF2b2NhZG8nLFxuICAgIGlkOiAnZnByNzJtOWsnLFxuICAgIHNrdTogJ0I0SFo0MlRNJyxcbiAgICBwcmljZTogMS4yNyxcbiAgICBpbWFnZTogJy9pbWFnZXMvcGlua2VydG9uLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiRmlyc3QgZ3Jvd24gb24gdGhlIFBpbmtlcnRvbiBSYW5jaCBpbiBTYXRpY295LCBDYWxpZm9ybmlhLCBpbiB0aGUgZWFybHkgMTk3MHMsICdQaW5rZXJ0b24nIGlzIGEgc2VlZGxpbmcgb2YgJ0hhc3MnIHggJ1JpbmNvbicuIFRoZSBsYXJnZSBmcnVpdCBoYXMgYSBzbWFsbCBzZWVkLCBhbmQgaXRzIGdyZWVuIHNraW4gZGVlcGVucyBpbiBjb2xvciBhcyBpdCByaXBlbnMuIFRoZSB0aGljayBmbGVzaCBoYXMgYSBzbW9vdGgsIGNyZWFteSB0ZXh0dXJlLCBwYWxlIGdyZWVuIGNvbG9yLCBnb29kIGZsYXZvciwgYW5kIGhpZ2ggb2lsIGNvbnRlbnQuIEl0IHNob3dzIHNvbWUgY29sZCB0b2xlcmFuY2UsIHRvIOKIkjEgwrBDICgzMCDCsEYpIGFuZCBiZWFycyBjb25zaXN0ZW50bHkgaGVhdnkgY3JvcHMuIEEgaHlicmlkIEd1YXRlbWFsYW4gdHlwZSwgaXQgaGFzIGV4Y2VsbGVudCBwZWVsaW5nIGNoYXJhY3RlcmlzdGljc1wiLFxuICAgICAgc2hhcGU6ICdMb25nIHBlYXInLFxuICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxuICAgICAgdGFzdGU6ICdNYXJ2ZWxvdXMsIGlzIGFuIGF2b2NhZG8nLFxuICAgIH0sXG4gIH0sXG4gIHQ5ZHYyNWdzOiB7XG4gICAgbmFtZTogJ1JlZWQgQXZvY2FkbycsXG4gICAgaWQ6ICd0OWR2MjVncycsXG4gICAgc2t1OiAnWlkzVDlYWEMnLFxuICAgIHByaWNlOiAxLjE4LFxuICAgIGltYWdlOiAnL2ltYWdlcy9yZWVkLmpwZycsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdEZXZlbG9wZWQgZnJvbSBhIGNoYW5jZSBzZWVkbGluZyBmb3VuZCBpbiAxOTQ4IGJ5IEphbWVzIFMuIFJlZWQgaW4gQ2FsaWZvcm5pYSwgdGhpcyBjdWx0aXZhciBoYXMgbGFyZ2UsIHJvdW5kLCBncmVlbiBmcnVpdCB3aXRoIGEgc21vb3RoIHRleHR1cmUgYW5kIGRhcmssIHRoaWNrLCBnbG9zc3kgc2tpbi4gU21vb3RoIGFuZCBkZWxpY2F0ZSwgdGhlIGZsZXNoIGhhcyBhIHNsaWdodGx5IG51dHR5IGZsYXZvci4gVGhlIHNraW4gcmlwZW5zIGdyZWVuLiBBIEd1YXRlbWFsYW4gdHlwZSwgaXQgaXMgaGFyZHkgdG8g4oiSMSDCsEMgKDMwIMKwRikuIFRyZWUgc2l6ZSBpcyBhYm91dCA1IGJ5IDQgbSAoMTYuNCBieSAxMy4xIGZ0KScsXG4gICAgICBzaGFwZTogJ1JvdW5kJyxcbiAgICAgIGhhcmRpbmVzczogJ+KIkjEgwrBDJyxcbiAgICAgIHRhc3RlOiAnRXhxdWlzaXRlLCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxuICB0MzQ1dzQ4eToge1xuICAgIG5hbWU6ICdadXRhbm8gQXZvY2FkbycsXG4gICAgaWQ6ICd0MzQ1dzQ4eScsXG4gICAgc2t1OiAnTVc3OVpaNlknLFxuICAgIHByaWNlOiAxLjI1LFxuICAgIGltYWdlOiAnL2ltYWdlcy96dXRhbm8uanBnJyxcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1RoZSBadXRhbm8gYXZvY2FkbyBpcyBhIGNvbGQgaGFyZHksIGNvbnNpc3RlbnQgcHJvZHVjaW5nIGF2b2NhZG8gdmFyaWV0eS4gSXQgcmVzZW1ibGVzIHRoZSBGdWVydGUgaW4gYXBwZWFyYW5jZSBidXQgaXMgbGVzcyBmbGF2b3JmdWwgYnV0IG1vcmUgY29sZCBoYXJkeS4gVGhlIGdyZWVuIGZydWl0cyBhcmUgb2JvdmF0ZSBpbiBzaGFwZSB3aXRoIHdheHkgYnVtcHMgb24gdGhlIHNraW4uIFRoZSBmbGVzaCBoYXMgYSBsb3cgb2lsIGJ1dCBoaWdoIHdhdGVyIGNvbnRlbnQgd2hpY2ggY2F1c2VzIGl0IHRvIGhhdmUgYSBtb3JlIGZpYnJvdXMgdGV4dHVyZS4nLFxuICAgICAgc2hhcGU6ICdQZWFyJyxcbiAgICAgIGhhcmRpbmVzczogJy01IMKwQycsXG4gICAgICB0YXN0ZTogJ1NwbGVuZGlkLCBpcyBhbiBhdm9jYWRvJyxcbiAgICB9LFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBkYXRhXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./database/data.js\n");

/***/ }),

/***/ "./database/db.js":
/*!************************!*\
  !*** ./database/db.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./database/data.js\");\n// Oh you curious...\n// This is not a real database,\n// But let's imagine it is one :)\n\n\nclass Database {\n  constructor() {}\n\n  async getAll() {\n    const asArray = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    await randomDelay();\n    return asArray;\n  }\n\n  async getById(id) {\n    if (!Object.prototype.hasOwnProperty.call(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"], id)) {\n      return null;\n    }\n\n    const entry = _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id];\n    await randomDelay();\n    return entry;\n  }\n\n} // Let's also add a delay to make it a bit closer to reality\n\n\nconst randomDelay = () => new Promise(resolve => {\n  const max = 350;\n  const min = 100;\n  const delay = Math.floor(Math.random() * (max - min + 1)) + min;\n  setTimeout(resolve, delay);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Database);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9kYi5qcz9lMTUwIl0sIm5hbWVzIjpbIkRhdGFiYXNlIiwiY29uc3RydWN0b3IiLCJnZXRBbGwiLCJhc0FycmF5IiwiT2JqZWN0IiwidmFsdWVzIiwiYWxsRGF0YSIsInJhbmRvbURlbGF5IiwiZ2V0QnlJZCIsImlkIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZW50cnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm1heCIsIm1pbiIsImRlbGF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQU4sQ0FBZTtBQUNiQyxhQUFXLEdBQUcsQ0FBRzs7QUFFakIsUUFBTUMsTUFBTixHQUFlO0FBQ2IsVUFBTUMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsNkNBQWQsQ0FBaEI7QUFDQSxVQUFNQyxXQUFXLEVBQWpCO0FBQ0EsV0FBT0osT0FBUDtBQUNEOztBQUVELFFBQU1LLE9BQU4sQ0FBY0MsRUFBZCxFQUFrQjtBQUNoQixRQUFJLENBQUNMLE1BQU0sQ0FBQ00sU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDTiw2Q0FBckMsRUFBOENHLEVBQTlDLENBQUwsRUFBd0Q7QUFDdEQsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBTUksS0FBSyxHQUFHUCw2Q0FBTyxDQUFDRyxFQUFELENBQXJCO0FBQ0EsVUFBTUYsV0FBVyxFQUFqQjtBQUNBLFdBQU9NLEtBQVA7QUFDRDs7QUFqQlksQyxDQW9CZjs7O0FBQ0EsTUFBTU4sV0FBVyxHQUFHLE1BQ2xCLElBQUlPLE9BQUosQ0FBYUMsT0FBRCxJQUFhO0FBQ3ZCLFFBQU1DLEdBQUcsR0FBRyxHQUFaO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLEdBQVo7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsTUFBaUJMLEdBQUcsR0FBR0MsR0FBTixHQUFZLENBQTdCLENBQVgsSUFBOENBLEdBQTVEO0FBRUFLLFlBQVUsQ0FBQ1AsT0FBRCxFQUFVRyxLQUFWLENBQVY7QUFDRCxDQU5ELENBREY7O0FBU2VsQix1RUFBZiIsImZpbGUiOiIuL2RhdGFiYXNlL2RiLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gT2ggeW91IGN1cmlvdXMuLi5cbi8vIFRoaXMgaXMgbm90IGEgcmVhbCBkYXRhYmFzZSxcbi8vIEJ1dCBsZXQncyBpbWFnaW5lIGl0IGlzIG9uZSA6KVxuaW1wb3J0IGFsbERhdGEgZnJvbSAnLi9kYXRhJ1xuXG5jbGFzcyBEYXRhYmFzZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgYXN5bmMgZ2V0QWxsKCkge1xuICAgIGNvbnN0IGFzQXJyYXkgPSBPYmplY3QudmFsdWVzKGFsbERhdGEpXG4gICAgYXdhaXQgcmFuZG9tRGVsYXkoKVxuICAgIHJldHVybiBhc0FycmF5XG4gIH1cblxuICBhc3luYyBnZXRCeUlkKGlkKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYWxsRGF0YSwgaWQpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IGVudHJ5ID0gYWxsRGF0YVtpZF1cbiAgICBhd2FpdCByYW5kb21EZWxheSgpXG4gICAgcmV0dXJuIGVudHJ5XG4gIH1cbn1cblxuLy8gTGV0J3MgYWxzbyBhZGQgYSBkZWxheSB0byBtYWtlIGl0IGEgYml0IGNsb3NlciB0byByZWFsaXR5XG5jb25zdCByYW5kb21EZWxheSA9ICgpID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgbWF4ID0gMzUwXG4gICAgY29uc3QgbWluID0gMTAwXG4gICAgY29uc3QgZGVsYXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG5cbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KVxuICB9KVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhYmFzZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./database/db.js\n");

/***/ }),

/***/ "./pages/api/avo/index.js":
/*!********************************!*\
  !*** ./pages/api/avo/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/database */ \"./database/db.js\");\n\n\nconst allAvos = async (request, response) => {\n  const db = new _database__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const allEntries = await db.getAll();\n  const length = allEntries.length;\n  response.statusCode = 200;\n  response.setHeader('Content-type', 'application/json');\n  response.end(JSON.stringify({\n    entries: allEntries,\n    length\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (allAvos);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXZvL2luZGV4LmpzPzNkZTUiXSwibmFtZXMiOlsiYWxsQXZvcyIsInJlcXVlc3QiLCJyZXNwb25zZSIsImRiIiwiREIiLCJhbGxFbnRyaWVzIiwiZ2V0QWxsIiwibGVuZ3RoIiwic3RhdHVzQ29kZSIsInNldEhlYWRlciIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE9BQU9DLE9BQVAsRUFBZ0JDLFFBQWhCLEtBQTZCO0FBQzNDLFFBQU1DLEVBQUUsR0FBRyxJQUFJQyxpREFBSixFQUFYO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLE1BQU1GLEVBQUUsQ0FBQ0csTUFBSCxFQUF6QjtBQUNBLFFBQU1DLE1BQU0sR0FBR0YsVUFBVSxDQUFDRSxNQUExQjtBQUNBTCxVQUFRLENBQUNNLFVBQVQsR0FBc0IsR0FBdEI7QUFDQU4sVUFBUSxDQUFDTyxTQUFULENBQW1CLGNBQW5CLEVBQW1DLGtCQUFuQztBQUNBUCxVQUFRLENBQUNRLEdBQVQsQ0FBYUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRUMsV0FBTyxFQUFFUixVQUFYO0FBQXVCRTtBQUF2QixHQUFmLENBQWI7QUFDRCxDQVBEOztBQVNlUCxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9hdm8vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgREIgZnJvbSAnQC9kYXRhYmFzZSdcblxuY29uc3QgYWxsQXZvcyA9IGFzeW5jIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICBjb25zdCBkYiA9IG5ldyBEQigpXG4gIGNvbnN0IGFsbEVudHJpZXMgPSBhd2FpdCBkYi5nZXRBbGwoKVxuICBjb25zdCBsZW5ndGggPSBhbGxFbnRyaWVzLmxlbmd0aDtcbiAgcmVzcG9uc2Uuc3RhdHVzQ29kZSA9IDIwMDtcbiAgcmVzcG9uc2Uuc2V0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICByZXNwb25zZS5lbmQoSlNPTi5zdHJpbmdpZnkoeyBlbnRyaWVzOiBhbGxFbnRyaWVzLCBsZW5ndGggfSkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsbEF2b3M7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/avo/index.js\n");

/***/ })

/******/ });