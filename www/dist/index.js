/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/cityWeather/city.weather.component.js":
/*!*******************************************************!*\
  !*** ./src/app/cityWeather/city.weather.component.js ***!
  \*******************************************************/
/*! exports provided: CityWeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CityWeatherComponent\", function() { return CityWeatherComponent; });\n/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/button/button.component */ \"./src/shared/components/button/button.component.js\");\n/* harmony import */ var _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/input/input.component */ \"./src/shared/components/input/input.component.js\");\n/* harmony import */ var _shared_components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/title/title.component */ \"./src/shared/components/title/title.component.js\");\n/* harmony import */ var _shared_services_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/weather.service */ \"./src/shared/services/weather.service.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar CityWeatherComponent =\n/*#__PURE__*/\nfunction () {\n  function CityWeatherComponent() {\n    _classCallCheck(this, CityWeatherComponent);\n\n    this.element = null;\n    this.weatherShow = null;\n    this.city = \"\";\n    this.title = new _shared_components_title_title_component__WEBPACK_IMPORTED_MODULE_2__[\"TitleComponent\"](\"Search for a location to get the local weather\");\n    this.input = new _shared_components_input_input_component__WEBPACK_IMPORTED_MODULE_1__[\"InputComponent\"](this.city);\n    this.button = new _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_0__[\"ButtonComponent\"](\"Search\");\n    this.weatherService = new _shared_services_weather_service__WEBPACK_IMPORTED_MODULE_3__[\"WeatherService\"]();\n  }\n\n  _createClass(CityWeatherComponent, [{\n    key: \"display\",\n    value: function display() {\n      var _this = this;\n\n      var form = document.createElement(\"form\");\n      this.element = document.createElement(\"app-home\");\n      this.element.appendChild(form);\n      this.title.display(form);\n      this.input.display(form);\n      this.button.display(form);\n      this.button.elementSearch.addEventListener(\"click\", function (event) {\n        return _this.searchOnClick(event);\n      });\n      document.body.appendChild(this.element);\n    }\n  }, {\n    key: \"searchOnClick\",\n    value: function searchOnClick(event) {\n      event.preventDefault();\n      var city = this.input.city.value; // const temperatureDisplay = main.temp;\n      // const descriptionDisplay=weather [0].description;\n      // const cityDisplay=main.name;\n\n      _shared_services_weather_service__WEBPACK_IMPORTED_MODULE_3__[\"WeatherService\"].get(city).then(function (data) {\n        console.log(data);\n      });\n    }\n  }]);\n\n  return CityWeatherComponent;\n}();\n\n//# sourceURL=webpack:///./src/app/cityWeather/city.weather.component.js?");

/***/ }),

/***/ "./src/app/home/home.component.js":
/*!****************************************!*\
  !*** ./src/app/home/home.component.js ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomeComponent\", function() { return HomeComponent; });\n/* harmony import */ var _cityWeather_city_weather_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cityWeather/city.weather.component */ \"./src/app/cityWeather/city.weather.component.js\");\n/* harmony import */ var _ipWeather_ip_weather_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ipWeather/ip.weather.component */ \"./src/app/ipWeather/ip.weather.component.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar HomeComponent =\n/*#__PURE__*/\nfunction () {\n  function HomeComponent() {\n    _classCallCheck(this, HomeComponent);\n\n    this.cityWeather = new _cityWeather_city_weather_component__WEBPACK_IMPORTED_MODULE_0__[\"CityWeatherComponent\"]();\n    this.ipWeather = new _ipWeather_ip_weather_component__WEBPACK_IMPORTED_MODULE_1__[\"IpWeatherComponent\"]();\n  }\n\n  _createClass(HomeComponent, [{\n    key: \"display\",\n    value: function display() {\n      this.cityWeather.display();\n      this.ipWeather.display();\n    }\n  }]);\n\n  return HomeComponent;\n}();\n\n//# sourceURL=webpack:///./src/app/home/home.component.js?");

/***/ }),

/***/ "./src/app/ipWeather/ip.weather.component.js":
/*!***************************************************!*\
  !*** ./src/app/ipWeather/ip.weather.component.js ***!
  \***************************************************/
/*! exports provided: IpWeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IpWeatherComponent\", function() { return IpWeatherComponent; });\n/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/button/button.component */ \"./src/shared/components/button/button.component.js\");\n/* harmony import */ var _shared_components_title_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/title/title.component */ \"./src/shared/components/title/title.component.js\");\n/* harmony import */ var _shared_services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/weather.service */ \"./src/shared/services/weather.service.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar IpWeatherComponent =\n/*#__PURE__*/\nfunction () {\n  function IpWeatherComponent() {\n    _classCallCheck(this, IpWeatherComponent);\n\n    this.element = null;\n    this.title = new _shared_components_title_title_component__WEBPACK_IMPORTED_MODULE_1__[\"TitleComponent\"](\"Get weather from Geolocation\");\n    this.buttonIp = new _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_0__[\"ButtonComponent\"](\"search from your local position\");\n  }\n\n  _createClass(IpWeatherComponent, [{\n    key: \"display\",\n    value: function display() {\n      var _this = this;\n\n      var form = document.createElement(\"form\");\n      this.element = document.createElement(\"app-ip\");\n      this.element.appendChild(form);\n      this.title.display(form);\n      this.buttonIp.display(form);\n      this.buttonIp.elementSearch.addEventListener(\"click\", function (event) {\n        return _this.searchIpOnClick(event);\n      });\n      document.body.appendChild(this.element);\n    }\n  }, {\n    key: \"searchIpOnClick\",\n    value: function searchIpOnClick(event) {\n      event.preventDefault();\n      fetch(\"http://api.ipstack.com/78.193.240.64?access_key=b76a9778898df684ab11140531286fbb\").then(function (data) {\n        return data.json();\n      }).then(function (json) {\n        var ip = json.ip;\n        var city = json.city;\n        var region = json.region_name;\n        console.log(ip, region, city);\n        _shared_services_weather_service__WEBPACK_IMPORTED_MODULE_2__[\"WeatherService\"].get(city).then(function (json) {\n          return console.log(json);\n        });\n      });\n    }\n  }]);\n\n  return IpWeatherComponent;\n}();\n\n//# sourceURL=webpack:///./src/app/ipWeather/ip.weather.component.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/home/home.component */ \"./src/app/home/home.component.js\");\n\nvar home = new _app_home_home_component__WEBPACK_IMPORTED_MODULE_0__[\"HomeComponent\"]();\nhome.display(); // import { Router } from \"./shared/router\";\n// import { LoginComponent } from \"./app/login/login.component\";\n// import { RegisterComponent } from \"./app/register/register.component\";\n// import { HomeComponent } from \"./app/home/home.component\";\n// Router\n//     .add(\n//         \"login\",\n//         \"/login\",\n//         new LoginComponent\n//     ).add(\n//         \"register\",\n//         \"/register\",\n//         new RegisterComponent\n//     ).add(\n//         \"home\",\n//         \"/home\",\n//         new HomeComponent\n//     )\n//     .navigate(\"login\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.scss?");

/***/ }),

/***/ "./src/shared/components/button/button.component.js":
/*!**********************************************************!*\
  !*** ./src/shared/components/button/button.component.js ***!
  \**********************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonComponent\", function() { return ButtonComponent; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ButtonComponent =\n/*#__PURE__*/\nfunction () {\n  function ButtonComponent(text) {\n    _classCallCheck(this, ButtonComponent);\n\n    this.text = text;\n    this.elementSearch = null;\n    this.container = null;\n  }\n\n  _createClass(ButtonComponent, [{\n    key: \"display\",\n    value: function display() {\n      this.container = document.createElement(\"app-button\");\n      this.elementSearch = document.createElement(\"button\");\n      this.elementSearch.setAttribute(\"type\", \"submit\");\n      this.elementSearch.appendChild(document.createTextNode(this.text));\n      this.container.appendChild(this.elementSearch);\n      document.body.appendChild(this.container);\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this.container.parentNode.removeChild(this.container);\n    }\n  }]);\n\n  return ButtonComponent;\n}();\n\n//# sourceURL=webpack:///./src/shared/components/button/button.component.js?");

/***/ }),

/***/ "./src/shared/components/input/input.component.js":
/*!********************************************************!*\
  !*** ./src/shared/components/input/input.component.js ***!
  \********************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputComponent\", function() { return InputComponent; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar InputComponent =\n/*#__PURE__*/\nfunction () {\n  function InputComponent() {\n    _classCallCheck(this, InputComponent);\n\n    this.container = null;\n    this.city = null;\n  }\n\n  _createClass(InputComponent, [{\n    key: \"display\",\n    value: function display() {\n      this.city = document.createElement(\"input\");\n      this.container = document.createElement(\"div\");\n      this.container.appendChild(this.city);\n      document.body.appendChild(this.container);\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this.container.parentNode.removeChild(this.container);\n    }\n  }]);\n\n  return InputComponent;\n}();\n\n//# sourceURL=webpack:///./src/shared/components/input/input.component.js?");

/***/ }),

/***/ "./src/shared/components/title/title.component.js":
/*!********************************************************!*\
  !*** ./src/shared/components/title/title.component.js ***!
  \********************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleComponent\", function() { return TitleComponent; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TitleComponent =\n/*#__PURE__*/\nfunction () {\n  function TitleComponent(text) {\n    _classCallCheck(this, TitleComponent);\n\n    this.text = text;\n    this.element = null;\n  }\n\n  _createClass(TitleComponent, [{\n    key: \"display\",\n    value: function display() {\n      this.element = document.createElement(\"app-title\");\n      var title = document.createElement(\"h1\");\n      this.element.appendChild(title);\n      title.appendChild(document.createTextNode(this.text));\n      document.body.appendChild(this.element);\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this.element.parentNode.removeChild(this.element);\n    }\n  }]);\n\n  return TitleComponent;\n}();\n\n//# sourceURL=webpack:///./src/shared/components/title/title.component.js?");

/***/ }),

/***/ "./src/shared/services/weather.service.js":
/*!************************************************!*\
  !*** ./src/shared/services/weather.service.js ***!
  \************************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WeatherService\", function() { return WeatherService; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar WeatherService =\n/*#__PURE__*/\nfunction () {\n  function WeatherService() {\n    _classCallCheck(this, WeatherService);\n  }\n\n  _createClass(WeatherService, null, [{\n    key: \"getWeather\",\n    value: function getWeather() {\n      return WeatherService;\n    }\n  }, {\n    key: \"get\",\n    value: function get(city) {\n      return new Promise(function (resolve, reject) {\n        var xhr = new XMLHttpRequest();\n        xhr.open(\"GET\", \"http://api.openweathermap.org/data/2.5/weather?q=\".concat(city, \"&APPID=b13ce98f5d2582ec3975bfd2870ec78a\"));\n\n        xhr.onload = xhr.onerror = function () {\n          if (200 === xhr.status) {\n            return resolve(JSON.parse(xhr.response));\n          }\n\n          reject(xhr);\n        };\n\n        xhr.send();\n      });\n    }\n  }]);\n\n  return WeatherService;\n}();\n\n//# sourceURL=webpack:///./src/shared/services/weather.service.js?");

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/index.js ./src/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/index.scss */\"./src/index.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/index.scss?");

/***/ })

/******/ });