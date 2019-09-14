(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RouterModuleNgFactory, RenderType_ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_0, View_ɵEmptyOutletComponent_Host_0, ɵEmptyOutletComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterModuleNgFactory", function() { return RouterModuleNgFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ɵEmptyOutletComponent", function() { return RenderType_ɵEmptyOutletComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵEmptyOutletComponent_0", function() { return View_ɵEmptyOutletComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ɵEmptyOutletComponent_Host_0", function() { return View_ɵEmptyOutletComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵEmptyOutletComponentNgFactory", function() { return ɵEmptyOutletComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var RouterModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [ɵEmptyOutletComponentNgFactory]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]]])]); });

var styles_ɵEmptyOutletComponent = [];
var RenderType_ɵEmptyOutletComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });

function View_ɵEmptyOutletComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_ɵEmptyOutletComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵEmptyOutletComponent"], [], null, null)], null, null); }
var ɵEmptyOutletComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng-component", _angular_router__WEBPACK_IMPORTED_MODULE_1__["ɵEmptyOutletComponent"], View_ɵEmptyOutletComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-meta/core */ "@ngx-meta/core");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_meta_core__WEBPACK_IMPORTED_MODULE_6__);







var routes = [
    {
        path: 'login/',
        redirectTo: 'login'
    },
    {
        path: '',
        canActivateChild: [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_6__["MetaGuard"]],
        children: [
            {
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
                data: {
                    meta: {
                        override: true,
                        title: 'Megachat - Sweet home',
                        description: 'Megachat Home Page',
                        'og:url': 'http://localhost:4000'
                    },
                }
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                data: {
                    meta: {
                        override: true,
                        title: 'Login',
                        description: 'Login to Megachat',
                        'og:url': 'http://localhost:4000/login'
                    }
                }
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
                data: {
                    meta: {
                        override: true,
                        title: 'Register',
                        description: 'Register on Megachat',
                        'og:url': 'http://localhost:4000/login'
                    }
                }
            },
            {
                path: 'chat/:room_id',
                component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"],
                data: {
                    meta: {
                        override: true,
                        title: 'Room',
                        description: 'Have a good chating',
                        'og:url': 'http://localhost:4000/chat'
                    }
                }
            },
            {
                path: 'chat',
                component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"],
                data: {
                    meta: {
                        override: true,
                        title: 'Chat',
                        description: 'Choose a person to chat with',
                        'og:url': 'http://localhost:4000/chat'
                    }
                }
            },
            {
                path: '**',
                component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
                data: {
                    meta: {
                        override: true,
                        title: 'Not Found',
                        description: 'Page is not found'
                    }
                }
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css.shim.ngstyle.js":
/*!***************************************************!*\
  !*** ./src/app/app.component.css.shim.ngstyle.js ***!
  \***************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".app-header[_ngcontent-%COMP%]\t{\n\tposition: absolute;\n\twidth: 100vw;\n\theight: 60px;\n\ttop: 0;\n\tleft: 0%;\n\tbackground: linear-gradient(#222222, #666666);\n}\n.main_section[_ngcontent-%COMP%] {\n\tposition: relative;\n\ttop: 65px;\n\twidth: 99vw;\n\theight: 75vh;\n\tborder-top: 2px solid rgba(200, 200, 200, 0.1);\n\toverflow-y: auto;\n\toverflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFlBQVk7Q0FDWixNQUFNO0NBQ04sUUFBUTtDQUNSLDZDQUE2QztBQUM5QztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsWUFBWTtDQUNaLDhDQUE4QztDQUM5QyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWhlYWRlclx0e1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDB2dztcblx0aGVpZ2h0OiA2MHB4O1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDAlO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzIyMjIyMiwgIzY2NjY2Nik7XG59XG4ubWFpbl9zZWN0aW9uIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IDY1cHg7XG5cdHdpZHRoOiA5OXZ3O1xuXHRoZWlnaHQ6IDc1dmg7XG5cdGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMSk7XG5cdG92ZXJmbG93LXk6IGF1dG87XG5cdG92ZXJmbG93LXg6IGhpZGRlbjtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.css.shim.ngstyle */ "./src/app/app.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component.ngfactory */ "./src/app/header/header.component.ngfactory.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _seo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seo.service */ "./src/app/seo.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_8__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_AppComponent = [_app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "app-header"]], null, null, null, _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeaderComponent_0"], _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _seo_service__WEBPACK_IMPORTED_MODULE_6__["SeoService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "main_section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 4, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_8__["LOCAL_STORAGE"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var AppComponent = /** @class */ (function () {
    function AppComponent(localStorage) {
        this.localStorage = localStorage;
        localStorage = localStorage;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: metaFactory, AppModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaFactory", function() { return metaFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-socket-io */ "ngx-socket-io");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngx_socket_io__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-meta/core */ "@ngx-meta/core");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_meta_core__WEBPACK_IMPORTED_MODULE_1__);


var config = { url: 'http://localhost:3001', options: {} };
function metaFactory() {
    return new _ngx_meta_core__WEBPACK_IMPORTED_MODULE_1__["MetaStaticLoader"]({
        pageTitlePositioning: _ngx_meta_core__WEBPACK_IMPORTED_MODULE_1__["PageTitlePositioning"].PrependPageTitle,
        pageTitleSeparator: ' - ',
        applicationName: 'Megachat',
        defaults: {
            title: 'Mega Mega Chat )',
            description: 'This is the best chat for the best',
            'og:image': 'http://localhost:4000/assets/megachat.png',
            'og:type': 'website',
            'og:site_name': 'Megachat.com'
        }
    });
}
var ɵ0 = (metaFactory);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());




/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! exports provided: AppServerModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return AppServerModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_server_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component.ngfactory */ "./src/app/home/home.component.ngfactory.js");
/* harmony import */ var _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component.ngfactory */ "./src/app/login/login.component.ngfactory.js");
/* harmony import */ var _register_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component.ngfactory */ "./src/app/register/register.component.ngfactory.js");
/* harmony import */ var _chat_chat_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat/chat.component.ngfactory */ "./src/app/chat/chat.component.ngfactory.js");
/* harmony import */ var _not_found_not_found_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component.ngfactory */ "./src/app/not-found/not-found.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_server__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-meta/core */ "@ngx-meta/core");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_ngx_meta_core__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @nguniversal/common */ "@nguniversal/common");
/* harmony import */ var _nguniversal_common__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_nguniversal_common__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-toolkit/universal */ "@ng-toolkit/universal");
/* harmony import */ var _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-socket-io */ "ngx-socket-io");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/http */ "@angular/http");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_angular_http__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/animations */ "@angular/animations");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_angular_animations__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
/* harmony import */ var _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
































var AppServerModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵEmptyOutletComponentNgFactory"], _home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["HomeComponentNgFactory"], _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["LoginComponentNgFactory"], _register_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RegisterComponentNgFactory"], _chat_chat_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["ChatComponentNgFactory"], _not_found_not_found_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3), new _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_server_platform_server_d"](p3_0)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_LOADER"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_server_platform_server_c"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_server_platform_server_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵTRANSITION_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵSharedStylesHost"], null, [_angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_server_platform_server_c"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵServerRendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵServerRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵNoopAnimationDriver"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_server_platform_server_a"], [_angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵServerRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4352, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], null, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_10__["ViewportScroller"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["ɵNullViewportScroller"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_n"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ngx_meta_core__WEBPACK_IMPORTED_MODULE_16__["MetaLoader"], _app_module__WEBPACK_IMPORTED_MODULE_17__["ɵ0"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_meta_core__WEBPACK_IMPORTED_MODULE_16__["MetaService"], _ngx_meta_core__WEBPACK_IMPORTED_MODULE_16__["MetaService"], [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_16__["MetaLoader"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Meta"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_meta_core__WEBPACK_IMPORTED_MODULE_16__["MetaGuard"], _ngx_meta_core__WEBPACK_IMPORTED_MODULE_16__["MetaGuard"], [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_16__["MetaService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["TransferState"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["TransferState"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nguniversal_common__WEBPACK_IMPORTED_MODULE_18__["ɵTransferHttpCacheInterceptor"], _nguniversal_common__WEBPACK_IMPORTED_MODULE_18__["ɵTransferHttpCacheInterceptor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["TransferState"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_nguniversal_common__WEBPACK_IMPORTED_MODULE_18__["ɵTransferHttpCacheInterceptor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["XhrFactory"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_server_platform_server_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpHandler"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_server_platform_server_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__["ɵa"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__["WINDOW"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__["windowFactory"], [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__["ɵa"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__["DocumentService"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__["DocumentService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__["NGT_DOCUMENT"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__["documentFactory"], [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__["DocumentService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__["ɵb"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__["LOCAL_STORAGE"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__["localStorageFactory"], [_ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__["ɵb"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__["Socket"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__["ɵa"], [ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__["ɵb"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_23__["BrowserXhr"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_server_platform_server_e"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_23__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_23__["BaseResponseOptions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_23__["XSRFStrategy"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_server_platform_server_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_23__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_23__["XHRBackend"], [_angular_http__WEBPACK_IMPORTED_MODULE_23__["BrowserXhr"], _angular_http__WEBPACK_IMPORTED_MODULE_23__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_23__["XSRFStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_http__WEBPACK_IMPORTED_MODULE_23__["RequestOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_23__["BaseRequestOptions"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_http__WEBPACK_IMPORTED_MODULE_23__["Http"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_server_platform_server_g"], [_angular_http__WEBPACK_IMPORTED_MODULE_23__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_23__["RequestOptions"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_24__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["BEFORE_APP_SERIALIZED"], function (p0_0, p0_1, p0_2) { return [_angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_server_platform_server_b"](p0_0, p0_1, p0_2)]; }, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["TransferState"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], "serverApp", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵTRANSITION_ID"], null, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_i"](p1_0), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_h"](p2_0, p2_1, p2_2)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵTRANSITION_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__["SocketIoModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__["SocketIoModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_25__["ModuleMapNgFactoryLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_25__["MODULE_MAP"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], function () { return [[{ path: "login/", redirectTo: "login" }, { path: "", canActivateChild: [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_16__["MetaGuard"]], children: [{ path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_26__["HomeComponent"], data: { meta: { override: true, title: "Megachat - Sweet home", description: "Megachat Home Page", "og:url": "http://localhost:4000" } } }, { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"], data: { meta: { override: true, title: "Login", description: "Login to Megachat", "og:url": "http://localhost:4000/login" } } }, { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_28__["RegisterComponent"], data: { meta: { override: true, title: "Register", description: "Register on Megachat", "og:url": "http://localhost:4000/login" } } }, { path: "chat/:room_id", component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_29__["ChatComponent"], data: { meta: { override: true, title: "Room", description: "Have a good chating", "og:url": "http://localhost:4000/chat" } } }, { path: "chat", component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_29__["ChatComponent"], data: { meta: { override: true, title: "Chat", description: "Choose a person to chat with", "og:url": "http://localhost:4000/chat" } } }, { path: "**", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_30__["NotFoundComponent"], data: { meta: { override: true, title: "Not Found", description: "Page is not found" } } }] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_meta_core__WEBPACK_IMPORTED_MODULE_16__["MetaModule"], _ngx_meta_core__WEBPACK_IMPORTED_MODULE_16__["MetaModule"], [[3, _ngx_meta_core__WEBPACK_IMPORTED_MODULE_16__["MetaModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_31__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_31__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserTransferStateModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserTransferStateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nguniversal_common__WEBPACK_IMPORTED_MODULE_18__["TransferHttpCacheModule"], _nguniversal_common__WEBPACK_IMPORTED_MODULE_18__["TransferHttpCacheModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__["NgtUniversalModule"], _ng_toolkit_universal__WEBPACK_IMPORTED_MODULE_20__["NgtUniversalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_17__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_17__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_http__WEBPACK_IMPORTED_MODULE_23__["HttpModule"], _angular_http__WEBPACK_IMPORTED_MODULE_23__["HttpModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["NoopAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["NoopAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ServerModule"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_25__["ModuleMapLoaderModule"], _nguniversal_module_map_ngfactory_loader__WEBPACK_IMPORTED_MODULE_25__["ModuleMapLoaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ServerTransferStateModule"], _angular_platform_server__WEBPACK_IMPORTED_MODULE_12__["ServerTransferStateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], _app_server_module__WEBPACK_IMPORTED_MODULE_1__["AppServerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__["ɵb"], { url: "http://localhost:3001", options: {} }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"], "NoopAnimations", [])]); });



/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! exports provided: AppServerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return AppServerModule; });
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());



/***/ }),

/***/ "./src/app/base.service.ts":
/*!*********************************!*\
  !*** ./src/app/base.service.ts ***!
  \*********************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



var BaseService = /** @class */ (function () {
    function BaseService(http) {
        this.http = http;
        this.base_url = 'http://localhost:3000';
    }
    BaseService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"]({ factory: function BaseService_Factory() { return new BaseService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: BaseService, providedIn: "root" });
    return BaseService;
}());



/***/ }),

/***/ "./src/app/base/base.component.ts":
/*!****************************************!*\
  !*** ./src/app/base/base.component.ts ***!
  \****************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "ngx-socket-io");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__);





var BaseComponent = /** @class */ (function () {
    function BaseComponent(platform_id, user_service, router, route) {
        this.user_service = user_service;
        this.router = router;
        this.route = route;
        this.current_user = true;
        this.show_loader = false;
        this.success = false;
        this.errors = [];
        this.is_browser = true;
        this.socket = false;
        this.is_browser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platform_id);
        this.current_user = this.is_browser ? JSON.parse(localStorage.getItem('current_user') || 'false') : false;
        if (this.current_user.id && this.is_browser) {
            var config = { url: 'http://localhost:3001', options: {} };
            this.socket = new ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"](config);
            this.socket.emit('add_client', this.current_user.id);
        }
    }
    BaseComponent.prototype.ngOnInit = function () {
    };
    BaseComponent.prototype.redirect_to = function (path, reload) {
        if (path === void 0) { path = '/'; }
        if (reload === void 0) { reload = false; }
        if (reload && this.is_browser)
            window.location.href = path;
        else
            this.router.navigate([path]);
    };
    BaseComponent.prototype.handle_request_error = function (need_alert, message) {
        if (need_alert === void 0) { need_alert = false; }
        if (message === void 0) { message = 'Unable proceed your request. Please contact system administrator.'; }
        this.success = false;
        this.errors = [];
        if (message == '401')
            this.logout();
        else if (need_alert && this.is_browser)
            alert(message);
        else
            this.errors.push(message);
        this.show_loader = false;
    };
    BaseComponent.prototype.store_user = function (user) {
        if (this.is_browser)
            localStorage.setItem('current_user', JSON.stringify(user));
    };
    BaseComponent.prototype.unstore_user = function () {
        if (this.is_browser)
            localStorage.removeItem('current_user');
    };
    BaseComponent.prototype.logout = function () {
        var _this = this;
        if (this.current_user) {
            this.user_service.logout_user(this.current_user).subscribe(function (res) {
                if (res.success) {
                    _this.unstore_user();
                    _this.redirect_to('/login', true);
                }
                else
                    _this.handle_request_error(true, res.error);
            }, function (err) {
                _this.handle_request_error(true);
            });
        }
        else
            this.redirect_to('/login');
    };
    BaseComponent.prototype.check_login = function () {
        var _this = this;
        this.user_service.is_logged(this.current_user).subscribe(function (res) {
            if (!res.success)
                _this.handle_request_error(true);
            else if (!res.data.is_logged) {
                _this.logout();
            }
        }, function (err) {
            _this.handle_request_error(true);
        });
    };
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css.shim.ngstyle.js":
/*!*********************************************************!*\
  !*** ./src/app/chat/chat.component.css.shim.ngstyle.js ***!
  \*********************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".rooms[_ngcontent-%COMP%] {\n\tposition: absolute;\n\twidth: 24.5%;\n\theight: 99%;\n\toverflow-y: auto;\n\toverflow-x: hidden;\n\tborder: 2px solid #cccccc;\n\tborder-radius: 5px;\n}\n\n.single_room[_ngcontent-%COMP%] {\n\tposition: relative;\n\twidth: 100%;\n\theight: 10%;\n\tborder-bottom: 1px solid #cccccc;\n\tpadding: 10px;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tcursor: pointer;\n}\n\n.room_selected[_ngcontent-%COMP%] {\n\tbackground: rgba(200,200,200,0.5);\n\ttransition: background 0.3s ease-out;\n}\n\n.initials[_ngcontent-%COMP%] {\n\tposition: relative;\n\tborder-radius: 50%;\n\tbackground: rgba(255,20,20,0.9);\n\tborder: 1px solid rgba(200,200,200,0.9);\n\tpadding: 5px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.room_name[_ngcontent-%COMP%] {\n\tmargin-left: 10px;\n}\n\n.room_wrapper[_ngcontent-%COMP%] {\n\tposition: absolute;\n\twidth: 74.5%;\n\theight: 99%;\n\tright: 0;\n\toverflow-y: auto;\n\toverflow-x: hidden;\n\tborder: 2px solid #cccccc;\n\tborder-radius: 5px;\n}\n\n.messages_wrapper[_ngcontent-%COMP%] {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 84%;\n\toverflow-y: auto;\n\toverflow-x: hidden;\n}\n\n.send_section[_ngcontent-%COMP%] {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 15%;\n\tbottom: 0;\n\tborder-top: 1px solid #cccccc;\n}\n\n.form_field[_ngcontent-%COMP%] {\n\tposition: absolute;\n\twidth: 86%;\n\tbottom: 0;\n\theight: 26px;\n\tleft: 0.5%;\n\tresize: none;\n\ttransition: height 0.3s ease-out;\n}\n\n.extended[_ngcontent-%COMP%] {\n\theight: 90%;\n\ttransition: height 0.3s ease-out;\n}\n\n.main_button[_ngcontent-%COMP%] {\n\tposition: absolute;\n\twidth: 11%;\n\theight: 36px;\n\tright: 0.5%;\n\tbottom: 0;\n\tfont-size: 80%;\n}\n\n.message_wrapper[_ngcontent-%COMP%] {\n\tposition: relative;\n\twidth: 100%;\n\tmargin-top: 5px;\n\tdisplay: flex;\n\tpadding-left: 5px;\n}\n\n.message[_ngcontent-%COMP%] {\n\tposition: relative;\n\tfloat: left;\n\tborder: 1px solid #cccccc;\n\tborder-radius: 5px;\n\tpadding: 5px;\n\tmax-width: 45%;\n\toverflow-wrap: break-word;\n}\n\n.message_wrapper.owner[_ngcontent-%COMP%] {\n\tjustify-content: flex-end;\n}\n\n.owner[_ngcontent-%COMP%]    > .message[_ngcontent-%COMP%] {\n\tbackground: rgba(150,150,255,0.8);\n\tmargin-right: 10px;\n}\n\n.unread_count[_ngcontent-%COMP%] {\n\tposition: absolute;\n\theight: 20px;\n\twidth: 20px;\n\tborder-radius: 50%;\n\tright: 25px;\n\tbottom: 5px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFdBQVc7Q0FDWCxnQ0FBZ0M7Q0FDaEMsYUFBYTtDQUNiLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxpQ0FBaUM7Q0FDakMsb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQiwrQkFBK0I7Q0FDL0IsdUNBQXVDO0NBQ3ZDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osV0FBVztDQUNYLFFBQVE7Q0FDUixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsU0FBUztDQUNULDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsU0FBUztDQUNULFlBQVk7Q0FDWixVQUFVO0NBQ1YsWUFBWTtDQUNaLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxnQ0FBZ0M7QUFDakM7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFlBQVk7Q0FDWixXQUFXO0NBQ1gsU0FBUztDQUNULGNBQWM7QUFDZjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsZUFBZTtDQUNmLGFBQWE7Q0FDYixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGNBQWM7Q0FDZCx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxpQ0FBaUM7Q0FDakMsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb29tcyB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDI0LjUlO1xuXHRoZWlnaHQ6IDk5JTtcblx0b3ZlcmZsb3cteTogYXV0bztcblx0b3ZlcmZsb3cteDogaGlkZGVuO1xuXHRib3JkZXI6IDJweCBzb2xpZCAjY2NjY2NjO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zaW5nbGVfcm9vbSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAlO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcblx0cGFkZGluZzogMTBweDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yb29tX3NlbGVjdGVkIHtcblx0YmFja2dyb3VuZDogcmdiYSgyMDAsMjAwLDIwMCwwLjUpO1xuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5pbml0aWFscyB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyMCwyMCwwLjkpO1xuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwMCwyMDAsMjAwLDAuOSk7XG5cdHBhZGRpbmc6IDVweDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yb29tX25hbWUge1xuXHRtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnJvb21fd3JhcHBlciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDc0LjUlO1xuXHRoZWlnaHQ6IDk5JTtcblx0cmlnaHQ6IDA7XG5cdG92ZXJmbG93LXk6IGF1dG87XG5cdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0Ym9yZGVyOiAycHggc29saWQgI2NjY2NjYztcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubWVzc2FnZXNfd3JhcHBlciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogODQlO1xuXHRvdmVyZmxvdy15OiBhdXRvO1xuXHRvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5zZW5kX3NlY3Rpb24ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDE1JTtcblx0Ym90dG9tOiAwO1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2NjY2NjYztcbn1cblxuLmZvcm1fZmllbGQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiA4NiU7XG5cdGJvdHRvbTogMDtcblx0aGVpZ2h0OiAyNnB4O1xuXHRsZWZ0OiAwLjUlO1xuXHRyZXNpemU6IG5vbmU7XG5cdHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2Utb3V0O1xufVxuXG4uZXh0ZW5kZWQge1xuXHRoZWlnaHQ6IDkwJTtcblx0dHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5tYWluX2J1dHRvbiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDExJTtcblx0aGVpZ2h0OiAzNnB4O1xuXHRyaWdodDogMC41JTtcblx0Ym90dG9tOiAwO1xuXHRmb250LXNpemU6IDgwJTtcbn1cblxuLm1lc3NhZ2Vfd3JhcHBlciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbi10b3A6IDVweDtcblx0ZGlzcGxheTogZmxleDtcblx0cGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5tZXNzYWdlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRmbG9hdDogbGVmdDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRwYWRkaW5nOiA1cHg7XG5cdG1heC13aWR0aDogNDUlO1xuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuXG4ubWVzc2FnZV93cmFwcGVyLm93bmVyIHtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLm93bmVyID4gLm1lc3NhZ2Uge1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDE1MCwxNTAsMjU1LDAuOCk7XG5cdG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnVucmVhZF9jb3VudCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0aGVpZ2h0OiAyMHB4O1xuXHR3aWR0aDogMjBweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRyaWdodDogMjVweDtcblx0Ym90dG9tOiA1cHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/chat/chat.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/chat/chat.component.ngfactory.js ***!
  \**************************************************/
/*! exports provided: RenderType_ChatComponent, View_ChatComponent_0, View_ChatComponent_Host_0, ChatComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChatComponent", function() { return RenderType_ChatComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChatComponent_0", function() { return View_ChatComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChatComponent_Host_0", function() { return View_ChatComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponentNgFactory", function() { return ChatComponentNgFactory; });
/* harmony import */ var _chat_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.component.css.shim.ngstyle */ "./src/app/chat/chat.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_ChatComponent = [_chat_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChatComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChatComponent, data: {} });

function View_ChatComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "main_button unread_count"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "strong", [["class", "white_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.unread_messages; _ck(_v, 2, 0, currVal_0); }); }
function View_ChatComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "single_room"]], [[2, "room_selected", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "initials"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "white_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "strong", [["class", "room_name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChatComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "/chat/", (_v.context.$implicit.room_id || _v.context.$implicit.user_id), ""); _ck(_v, 1, 0, currVal_1); var currVal_4 = _v.context.$implicit.unread_messages; _ck(_v, 8, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_v.context.$implicit.room_id == _co.form_data.room_id) || (_v.context.$implicit.user_id == _co.form_data.room_id)); _ck(_v, 0, 0, currVal_0); var currVal_2 = _v.context.$implicit.initials; _ck(_v, 4, 0, currVal_2); var currVal_3 = _v.context.$implicit.full_name; _ck(_v, 6, 0, currVal_3); }); }
function View_ChatComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h2", [["class", "text_header gray_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["Chat with ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.current_room.full_name; _ck(_v, 1, 0, currVal_0); }); }
function View_ChatComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "message_wrapper"]], [[2, "owner", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.$implicit.author == _co.current_user.id); _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit.text; _ck(_v, 2, 0, currVal_1); }); }
function View_ChatComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "send_section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "div", [["class", "field_container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "textarea", [["class", "form_field"], ["maxlength", "1000"], ["placeholder", "Type your message here"]], [[2, "extended", null], [1, "maxlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup.enter"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.form_data.message = $event) !== false);
        ad = (pd_4 && ad);
    } if (("keyup.enter" === en)) {
        var pd_5 = (_co.send_message() !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "button", [["class", "main_button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.send_message() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "strong", [["class", "button_text white_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Send"]))], function (_ck, _v) { var _co = _v.component; var currVal_9 = "1000"; _ck(_v, 4, 0, currVal_9); var currVal_10 = _co.form_data.message; _ck(_v, 7, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.form_data.message; var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).maxlength : null); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_ChatComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "rooms"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChatComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 7, "div", [["class", "room_wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, [["scrollMe", 1]], null, 4, "div", [["class", "messages_wrapper"]], [[8, "scrollTop", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChatComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChatComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChatComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.rooms; _ck(_v, 2, 0, currVal_0); var currVal_2 = (_co.current_room && _co.current_room.full_name); _ck(_v, 6, 0, currVal_2); var currVal_3 = _co.messages; _ck(_v, 8, 0, currVal_3); var currVal_4 = _co.form_data.room_id; _ck(_v, 10, 0, currVal_4); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).scrollHeight; _ck(_v, 4, 0, currVal_1); }); }
function View_ChatComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-chat", [], null, null, null, View_ChatComponent_0, RenderType_ChatComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChatComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-chat", _chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"], View_ChatComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.component */ "./src/app/base/base.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");






var ChatComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChatComponent, _super);
    function ChatComponent(platform_id, user_service, router, route, message_service) {
        var _this = _super.call(this, platform_id, user_service, router, route) || this;
        _this.user_service = user_service;
        _this.router = router;
        _this.route = route;
        _this.message_service = message_service;
        _this.rooms = [];
        _this.messages = [];
        _this.form_data = {
            user_id: '',
            room_id: '',
            token: '',
            message: ''
        };
        _this.current_room = {};
        if (_this.socket) {
            _this.socket.fromEvent('chat_message').subscribe(function (message) {
                if (message['room_id'] == _this.current_room['room_id']) {
                    _this.messages.push(message);
                    _this.get_rooms();
                    _this.get_messages();
                }
                else {
                    for (var i = 0; i < _this.rooms.length; i++) {
                        if (_this.rooms[i]['room_id'] == message['room_id']) {
                            _this.rooms[i]['unread_messages']++;
                            break;
                        }
                    }
                }
            });
        }
        return _this;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.check_login();
        this.form_data['token'] = this.current_user.token;
        this.form_data['user_id'] = this.current_user.id;
        this.route.params.subscribe(function (params) {
            _this.form_data['room_id'] = params['room_id'] || '';
            _this.get_rooms();
            if (_this.form_data['room_id']) {
                _this.get_messages();
            }
        });
    };
    ChatComponent.prototype.get_rooms = function () {
        var _this = this;
        this.message_service.get_rooms(this.current_user).subscribe(function (res) {
            if (res.success) {
                _this.rooms = res.data;
            }
            else {
                if (res.error == '401')
                    _this.check_login();
                else
                    _this.handle_request_error(false, res.error);
            }
        }, function (err) {
            _this.handle_request_error();
        });
    };
    ChatComponent.prototype.get_messages = function () {
        var _this = this;
        this.message_service.get_messages(this.current_user, this.form_data['room_id']).subscribe(function (res) {
            if (res.success) {
                if (_this.form_data['room_id'] != res.data.room_id) {
                    _this.form_data['room_id'] = res.data.room_id;
                    _this.redirect_to("/chat/" + _this.form_data['room_id'], true);
                }
                _this.current_room = _this.rooms.find(function (value, index, array) {
                    if (value['room_id'] == _this.form_data['room_id']) {
                        _this.rooms[index]['unread_messages'] = 0;
                        return true;
                    }
                    else
                        return false;
                });
                _this.messages = res.data.messages;
            }
            else {
                _this.handle_request_error(false, res.error);
            }
        }, function (err) {
            _this.handle_request_error();
        });
    };
    ChatComponent.prototype.send_message = function () {
        var _this = this;
        if (!this.form_data['message']) {
            return;
        }
        this.message_service.post_message(this.form_data).subscribe(function (res) {
            if (res.success) {
                if (_this.socket)
                    _this.socket.emit('send_message', res.data);
                _this.form_data['message'] = '';
            }
            else {
                _this.handle_request_error(true, res.error);
            }
        }, function (err) {
            _this.handle_request_error();
        });
    };
    return ChatComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/header/header.component.css.shim.ngstyle.js":
/*!*************************************************************!*\
  !*** ./src/app/header/header.component.css.shim.ngstyle.js ***!
  \*************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".tool_icon[_ngcontent-%COMP%] {\n\tposition: relative;\n\theight: 60%;\n\tborder-radius: 50%;\n\tcursor: pointer;\n}\n.logo[_ngcontent-%COMP%] {\n\ttop: 20%;\n\tleft: 10px;\n}\n.login_icon[_ngcontent-%COMP%] {\n\tmargin-right: 10px;\n}\n.tool_icon[_ngcontent-%COMP%]:hover { \n\ttransform: scale(1.15);\n\ttransition: transform 0.3s ease-in-out;\n\t\n}\n.greeting[_ngcontent-%COMP%]:hover {\n\tcolor: #ff1414;\n\ttransition: color 0.3s ease-in-out;\n}\n.tool_container[_ngcontent-%COMP%] {\n\tposition: relative;\n\theight: 100%;\n\twidth: 60px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n.header_tools[_ngcontent-%COMP%] {\n\tposition: absolute;\n\theight: 100%;\n\twidth: 30%;\n\tmin-width: 100px;\n\ttop: 0;\n\tright: 10px;\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsUUFBUTtDQUNSLFVBQVU7QUFDWDtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsc0NBQXNDOztBQUV2QztBQUNBO0NBQ0MsY0FBYztDQUNkLGtDQUFrQztBQUNuQztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixXQUFXO0NBQ1gsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osVUFBVTtDQUNWLGdCQUFnQjtDQUNoQixNQUFNO0NBQ04sV0FBVztDQUNYLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsbUJBQW1CO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xfaWNvbiB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0aGVpZ2h0OiA2MCU7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuLmxvZ28ge1xuXHR0b3A6IDIwJTtcblx0bGVmdDogMTBweDtcbn1cbi5sb2dpbl9pY29uIHtcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnRvb2xfaWNvbjpob3ZlciB7IFxuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcblx0XG59XG4uZ3JlZXRpbmc6aG92ZXIge1xuXHRjb2xvcjogI2ZmMTQxNDtcblx0dHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cbi50b29sX2NvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogNjBweDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyX3Rvb2xzIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAzMCU7XG5cdG1pbi13aWR0aDogMTAwcHg7XG5cdHRvcDogMDtcblx0cmlnaHQ6IDEwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"];



/***/ }),

/***/ "./src/app/header/header.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/header/header.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_HeaderComponent, View_HeaderComponent_0, View_HeaderComponent_Host_0, HeaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HeaderComponent", function() { return RenderType_HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_0", function() { return View_HeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_Host_0", function() { return View_HeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentNgFactory", function() { return HeaderComponentNgFactory; });
/* harmony import */ var _header_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.css.shim.ngstyle */ "./src/app/header/header.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _seo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../seo.service */ "./src/app/seo.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_HeaderComponent = [_header_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HeaderComponent, data: {} });

function View_HeaderComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["class", "tool_icon login_icon"]], [[8, "src", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.logout() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.logout_icon; _ck(_v, 0, 0, currVal_0); }); }
function View_HeaderComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "white_text greeting"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["Hi, ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.current_user.login; _ck(_v, 1, 0, currVal_0); }); }
function View_HeaderComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "img", [["class", "tool_icon login_icon"], ["routerLink", "/login"]], [[8, "src", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null)], function (_ck, _v) { var currVal_1 = "/login"; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.login_icon; _ck(_v, 0, 0, currVal_0); }); }
function View_HeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "img", [["class", "tool_icon logo"], ["routerLink", "/chat"]], [[8, "src", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "div", [["class", "header_tools"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = "/chat"; _ck(_v, 1, 0, currVal_1); var currVal_2 = _co.current_user; _ck(_v, 4, 0, currVal_2); var currVal_3 = _co.current_user; _ck(_v, 6, 0, currVal_3); var currVal_4 = !_co.current_user; _ck(_v, 8, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.logo_icon; _ck(_v, 0, 0, currVal_0); }); }
function View_HeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "app-header"]], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _seo_service__WEBPACK_IMPORTED_MODULE_6__["SeoService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"](".app-header", _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], View_HeaderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.component */ "./src/app/base/base.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../seo.service */ "./src/app/seo.service.ts");






var HeaderComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HeaderComponent, _super);
    function HeaderComponent(platform_id, user_service, router, route, seo_service) {
        var _this = _super.call(this, platform_id, user_service, router, route) || this;
        _this.user_service = user_service;
        _this.router = router;
        _this.route = route;
        _this.seo_service = seo_service;
        _this.logo_icon = '/assets/logo.png';
        _this.login_icon = '/assets/login.png';
        _this.logout_icon = '/assets/logout.png';
        return _this;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.seo_service.createLinkForCanonicalURL();
    };
    return HeaderComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/home/home.component.css.shim.ngstyle.js":
/*!*********************************************************!*\
  !*** ./src/app/home/home.component.css.shim.ngstyle.js ***!
  \*********************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/home/home.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/home/home.component.ngfactory.js ***!
  \**************************************************/
/*! exports provided: RenderType_HomeComponent, View_HomeComponent_0, View_HomeComponent_Host_0, HomeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HomeComponent", function() { return RenderType_HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_0", function() { return View_HomeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_Host_0", function() { return View_HomeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponentNgFactory", function() { return HomeComponentNgFactory; });
/* harmony import */ var _home_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.css.shim.ngstyle */ "./src/app/home/home.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_HomeComponent = [_home_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HomeComponent, data: {} });

function View_HomeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" home works!\n"]))], null, null); }
function View_HomeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-home", _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], View_HomeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css.shim.ngstyle.js":
/*!***********************************************************!*\
  !*** ./src/app/login/login.component.css.shim.ngstyle.js ***!
  \***********************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".main_button[_ngcontent-%COMP%] {\n\twidth: 50%;\n\theight: 30px;\n\tleft: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7Q0FDVixZQUFZO0NBQ1osU0FBUztBQUNWIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2J1dHRvbiB7XG5cdHdpZHRoOiA1MCU7XG5cdGhlaWdodDogMzBweDtcblx0bGVmdDogMjUlO1xufVxuXG4iXX0= */"];



/***/ }),

/***/ "./src/app/login/login.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/login/login.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_LoginComponent, View_LoginComponent_0, View_LoginComponent_Host_0, LoginComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LoginComponent", function() { return RenderType_LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginComponent_0", function() { return View_LoginComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginComponent_Host_0", function() { return View_LoginComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponentNgFactory", function() { return LoginComponentNgFactory; });
/* harmony import */ var _login_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.css.shim.ngstyle */ "./src/app/login/login.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_LoginComponent = [_login_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LoginComponent, data: {} });

function View_LoginComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Should not be empty"]))], null, null); }
function View_LoginComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Should not be empty"]))], null, null); }
function View_LoginComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "error_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_LoginComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "field_container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errors; _ck(_v, 2, 0, currVal_0); }, null); }
function View_LoginComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 39, "div", [["class", "form_wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h2", [["class", "text_header gray_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Login"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 36, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4210688, [["login_form", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 10, "div", [["class", "field_container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 7, "input", [["class", "form_field"], ["name", "login"], ["placeholder", "Login"], ["required", ""], ["type", "text"]], [[2, "invalid_field", null], [1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.form_data.login = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 671744, [["name", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 10, "div", [["class", "field_container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 7, "input", [["class", "form_field"], ["name", "password"], ["placeholder", "Password"], ["required", ""], ["type", "password"]], [[2, "invalid_field", null], [1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.form_data.password = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 671744, [["password", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 4, "div", [["class", "field_container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 3, "p", [["class", "text_header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 2, "a", [["routerLink", "/register"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Join us"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 2, "button", [["class", "main_button"], ["type", "button"]], [[8, "disabled", 0], [2, "button_disabled", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.log_in() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "strong", [["class", "text_header white_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Login"]))], function (_ck, _v) { var _co = _v.component; var currVal_16 = ""; _ck(_v, 11, 0, currVal_16); var currVal_17 = "login"; var currVal_18 = _co.form_data.login; _ck(_v, 14, 0, currVal_17, currVal_18); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).touched); _ck(_v, 18, 0, currVal_19); var currVal_29 = ""; _ck(_v, 22, 0, currVal_29); var currVal_30 = "password"; var currVal_31 = _co.form_data.password; _ck(_v, 25, 0, currVal_30, currVal_31); var currVal_32 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).touched); _ck(_v, 29, 0, currVal_32); var currVal_33 = !_co.success; _ck(_v, 31, 0, currVal_33); var currVal_36 = "/register"; _ck(_v, 35, 0, currVal_36); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPending; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).touched); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).required ? "" : null); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassUntouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassTouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPristine; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassDirty; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassValid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassInvalid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ngClassPending; _ck(_v, 9, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_20 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).touched); var currVal_21 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).required ? "" : null); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassUntouched; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassTouched; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPristine; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassDirty; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassValid; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassInvalid; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPending; _ck(_v, 20, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).target; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).href; _ck(_v, 34, 0, currVal_34, currVal_35); var currVal_37 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).invalid || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).invalid); var currVal_38 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).invalid || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).invalid); _ck(_v, 37, 0, currVal_37, currVal_38); }); }
function View_LoginComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-login", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-login", _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], View_LoginComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/base.component */ "./src/app/base/base.component.ts");



var LoginComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginComponent, _super);
    function LoginComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.form_data = {
            login: '',
            password: '',
            password_confirmation: '',
            email: ''
        };
        return _this;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.log_in = function () {
        var _this = this;
        this.errors = [];
        if (this.form_data['login'] && this.form_data['password']) {
            console.log(this.form_data);
            this.user_service.login_user(this.form_data).subscribe(function (res) {
                // console.log(res);
                if (res.success === true) {
                    _this.store_user(res.data);
                    _this.redirect_to('/', true);
                }
                else {
                    _this.form_data = {
                        login: '',
                        password: '',
                        password_confirmation: '',
                        email: ''
                    };
                    _this.success = false;
                    // this.errors.push(res.error);
                    _this.handle_request_error(false, res.error);
                }
            }, function (error) {
                _this.handle_request_error();
            });
        }
    };
    return LoginComponent;
}(_base_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__);




var MessageService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageService, _super);
    function MessageService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageService.prototype.get_rooms = function (current_user) {
        this._url = this.base_url + "/rooms?user_id=" + current_user.id + "&token=" + current_user.token;
        return this.http.get(this._url);
    };
    MessageService.prototype.get_messages = function (current_user, room_id) {
        this._url = this.base_url + "/rooms/" + room_id + "?user_id=" + current_user.id + "&token=" + current_user.token;
        return this.http.get(this._url);
    };
    MessageService.prototype.post_message = function (form_data) {
        this._url = this.base_url + "/messages/create";
        return this.http.post(this._url, form_data);
    };
    MessageService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"]({ factory: function MessageService_Factory() { return new MessageService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); }, token: MessageService, providedIn: "root" });
    return MessageService;
}(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/not-found/not-found.component.css.shim.ngstyle.js":
/*!*******************************************************************!*\
  !*** ./src/app/not-found/not-found.component.css.shim.ngstyle.js ***!
  \*******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"];



/***/ }),

/***/ "./src/app/not-found/not-found.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/not-found/not-found.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_NotFoundComponent, View_NotFoundComponent_0, View_NotFoundComponent_Host_0, NotFoundComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NotFoundComponent", function() { return RenderType_NotFoundComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NotFoundComponent_0", function() { return View_NotFoundComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NotFoundComponent_Host_0", function() { return View_NotFoundComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponentNgFactory", function() { return NotFoundComponentNgFactory; });
/* harmony import */ var _not_found_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component.css.shim.ngstyle */ "./src/app/not-found/not-found.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nguniversal/express-engine/tokens */ "@nguniversal/express-engine/tokens");
/* harmony import */ var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_3__);
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_NotFoundComponent = [_not_found_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NotFoundComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NotFoundComponent, data: {} });

function View_NotFoundComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" not-found works!\n"]))], null, null); }
function View_NotFoundComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-not-found", [], null, null, null, View_NotFoundComponent_0, RenderType_NotFoundComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"], [[2, _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_3__["RESPONSE"]]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NotFoundComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-not-found", _not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"], View_NotFoundComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(response) {
        this.response = response;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        // console.log(this.server_responce_service.setStatus(404));
        if (this.response) {
            // response will only be if we have express
            // this.response.statusCode = 404;
            this.response.status(404);
            console.log('here with response', this.response);
        }
    };
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css.shim.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/register/register.component.css.shim.ngstyle.js ***!
  \*****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".main_button[_ngcontent-%COMP%] {\n\twidth: 50%;\n\theight: 30px;\n\tleft: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7Q0FDVixZQUFZO0NBQ1osU0FBUztBQUNWIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2J1dHRvbiB7XG5cdHdpZHRoOiA1MCU7XG5cdGhlaWdodDogMzBweDtcblx0bGVmdDogMjUlO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/register/register.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/register/register.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_RegisterComponent, View_RegisterComponent_0, View_RegisterComponent_Host_0, RegisterComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RegisterComponent", function() { return RenderType_RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RegisterComponent_0", function() { return View_RegisterComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RegisterComponent_Host_0", function() { return View_RegisterComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponentNgFactory", function() { return RegisterComponentNgFactory; });
/* harmony import */ var _register_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.css.shim.ngstyle */ "./src/app/register/register.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_RegisterComponent = [_register_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RegisterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RegisterComponent, data: {} });

function View_RegisterComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Should not be empty "]))], null, null); }
function View_RegisterComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Should be at least 4 characters length "]))], null, null); }
function View_RegisterComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Should not be empty "]))], null, null); }
function View_RegisterComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Should be at least 3 characters length "]))], null, null); }
function View_RegisterComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Should not be empty "]))], null, null); }
function View_RegisterComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Should be at least 3 characters length "]))], null, null); }
function View_RegisterComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Should not be empty "]))], null, null); }
function View_RegisterComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Should be at least 8 characters length "]))], null, null); }
function View_RegisterComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Should not be empty"]))], null, null); }
function View_RegisterComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Should be at least 8 characters length"]))], null, null); }
function View_RegisterComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Passwords should match"]))], null, null); }
function View_RegisterComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Should not be empty "]))], null, null); }
function View_RegisterComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Invalid Email "]))], null, null); }
function View_RegisterComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h3", [["class", "text_header green"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" We have sent a confirmation link to your email. Please finish your registration by following it. "]))], null, null); }
function View_RegisterComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "text_header error_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_RegisterComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 105, "div", [["class", "form_wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h2", [["class", "text_header gray_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Registration"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 98, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4210688, [["login_form", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 13, "div", [["class", "field_container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 8, "input", [["class", "form_field"], ["minlength", "4"], ["name", "login"], ["placeholder", "Login"], ["required", ""], ["type", "text"]], [[2, "invalid_field", null], [1, "required", 0], [1, "minlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.form_data.login = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], [], { minlength: [0, "minlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, [["name", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 13, "div", [["class", "field_container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 8, "input", [["class", "form_field"], ["minlength", "3"], ["name", "first_name"], ["placeholder", "First Name"], ["required", ""], ["type", "text"]], [[2, "invalid_field", null], [1, "required", 0], [1, "minlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.form_data.first_name = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], [], { minlength: [0, "minlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 671744, [["first_name", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 13, "div", [["class", "field_container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 8, "input", [["class", "form_field"], ["minlength", "3"], ["name", "last_name"], ["placeholder", "Last Name"], ["required", ""], ["type", "text"]], [[2, "invalid_field", null], [1, "required", 0], [1, "minlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.form_data.last_name = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], [], { minlength: [0, "minlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 671744, [["last_name", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 13, "div", [["class", "field_container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 8, "input", [["class", "form_field"], ["minlength", "8"], ["name", "password"], ["placeholder", "Password"], ["required", ""], ["type", "password"]], [[2, "invalid_field", null], [1, "required", 0], [1, "minlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.form_data.password = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], [], { minlength: [0, "minlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 671744, [["password", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 15, "div", [["class", "field_container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 8, "input", [["class", "form_field"], ["minlength", "8"], ["name", "password_confirmation"], ["placeholder", "Password Confirmation"], ["required", ""], ["type", "password"]], [[2, "invalid_field", null], [1, "required", 0], [1, "minlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.form_data.password_confirmation = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], [], { minlength: [0, "minlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 671744, [["password_confirmation", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 13, "div", [["class", "field_container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 8, "input", [["class", "form_field"], ["name", "email"], ["pattern", "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"], ["placeholder", "Email"], ["required", ""], ["type", "email"]], [[2, "invalid_field", null], [1, "required", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.form_data.email = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], [], { pattern: [0, "pattern"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 671744, [["e_mail", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](93, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 4, "div", [["class", "field_container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 3, "p", [["class", "text_header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 2, "a", [["routerLink", "/login"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](97, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Login"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 2, "button", [["class", "main_button"], ["type", "button"]], [[2, "button_disabled", null], [8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.register() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, null, 1, "strong", [["class", "button_text white_text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Register"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](103, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_RegisterComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](105, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_17 = ""; _ck(_v, 11, 0, currVal_17); var currVal_18 = "4"; _ck(_v, 12, 0, currVal_18); var currVal_19 = "login"; var currVal_20 = _co.form_data.login; _ck(_v, 15, 0, currVal_19, currVal_20); var currVal_21 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).errors && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).errors.required) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).touched); _ck(_v, 19, 0, currVal_21); var currVal_22 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).errors && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).errors.minlength) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).touched); _ck(_v, 21, 0, currVal_22); var currVal_33 = ""; _ck(_v, 25, 0, currVal_33); var currVal_34 = "3"; _ck(_v, 26, 0, currVal_34); var currVal_35 = "first_name"; var currVal_36 = _co.form_data.first_name; _ck(_v, 29, 0, currVal_35, currVal_36); var currVal_37 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).errors && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).errors.required) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).touched); _ck(_v, 33, 0, currVal_37); var currVal_38 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).errors && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).errors.minlength) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).touched); _ck(_v, 35, 0, currVal_38); var currVal_49 = ""; _ck(_v, 39, 0, currVal_49); var currVal_50 = "3"; _ck(_v, 40, 0, currVal_50); var currVal_51 = "last_name"; var currVal_52 = _co.form_data.last_name; _ck(_v, 43, 0, currVal_51, currVal_52); var currVal_53 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).errors && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).errors.required) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).touched); _ck(_v, 47, 0, currVal_53); var currVal_54 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).errors && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).errors.minlength) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).touched); _ck(_v, 49, 0, currVal_54); var currVal_65 = ""; _ck(_v, 53, 0, currVal_65); var currVal_66 = "8"; _ck(_v, 54, 0, currVal_66); var currVal_67 = "password"; var currVal_68 = _co.form_data.password; _ck(_v, 57, 0, currVal_67, currVal_68); var currVal_69 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).errors && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).errors.required) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).touched); _ck(_v, 61, 0, currVal_69); var currVal_70 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).errors && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).errors.minlength) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).touched); _ck(_v, 63, 0, currVal_70); var currVal_81 = ""; _ck(_v, 67, 0, currVal_81); var currVal_82 = "8"; _ck(_v, 68, 0, currVal_82); var currVal_83 = "password_confirmation"; var currVal_84 = _co.form_data.password_confirmation; _ck(_v, 71, 0, currVal_83, currVal_84); var currVal_85 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).errors && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).errors.required) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).touched); _ck(_v, 75, 0, currVal_85); var currVal_86 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).errors && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).errors.minlength) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).touched); _ck(_v, 77, 0, currVal_86); var currVal_87 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).valid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).valid) && (_co.form_data.password != _co.form_data.password_confirmation)); _ck(_v, 79, 0, currVal_87); var currVal_98 = ""; _ck(_v, 83, 0, currVal_98); var currVal_99 = "^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"; _ck(_v, 84, 0, currVal_99); var currVal_100 = "email"; var currVal_101 = _co.form_data.email; _ck(_v, 87, 0, currVal_100, currVal_101); var currVal_102 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).errors && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).errors.required) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).touched); _ck(_v, 91, 0, currVal_102); var currVal_103 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).errors && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).errors.pattern) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).touched); _ck(_v, 93, 0, currVal_103); var currVal_106 = "/login"; _ck(_v, 97, 0, currVal_106); var currVal_109 = _co.success; _ck(_v, 103, 0, currVal_109); var currVal_110 = _co.errors; _ck(_v, 105, 0, currVal_110); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).ngClassPending; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).touched); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).required ? "" : null); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).minlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).minlength : null); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassUntouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassTouched; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPristine; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassDirty; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassValid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassInvalid; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPending; _ck(_v, 9, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_23 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).touched); var currVal_24 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).required ? "" : null); var currVal_25 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).minlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).minlength : null); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassUntouched; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassTouched; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassPristine; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassDirty; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassValid; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassInvalid; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).ngClassPending; _ck(_v, 23, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32); var currVal_39 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).touched); var currVal_40 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).required ? "" : null); var currVal_41 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).minlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).minlength : null); var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassUntouched; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassTouched; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassPristine; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassDirty; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassValid; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassInvalid; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassPending; _ck(_v, 37, 0, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48); var currVal_55 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).touched); var currVal_56 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).required ? "" : null); var currVal_57 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).minlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).minlength : null); var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassUntouched; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassTouched; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassPristine; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassDirty; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassValid; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassInvalid; var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).ngClassPending; _ck(_v, 51, 0, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64); var currVal_71 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).touched); var currVal_72 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).required ? "" : null); var currVal_73 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).minlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).minlength : null); var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).ngClassUntouched; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).ngClassTouched; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).ngClassPristine; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).ngClassDirty; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).ngClassValid; var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).ngClassInvalid; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 73).ngClassPending; _ck(_v, 65, 0, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80); var currVal_88 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).touched); var currVal_89 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).required ? "" : null); var currVal_90 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).pattern ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).pattern : null); var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassUntouched; var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassTouched; var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassPristine; var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassDirty; var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassValid; var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassInvalid; var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassPending; _ck(_v, 81, 0, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97); var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).target; var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).href; _ck(_v, 96, 0, currVal_104, currVal_105); var currVal_107 = ((((((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).invalid || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).invalid) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).invalid) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).invalid) || (_co.form_data.password != _co.form_data.password_confirmation)) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).invalid) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).invalid); var currVal_108 = ((((((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).invalid || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).invalid) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).invalid) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).invalid) || (_co.form_data.password != _co.form_data.password_confirmation)) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).invalid) || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).invalid); _ck(_v, 99, 0, currVal_107, currVal_108); }); }
function View_RegisterComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-register", [], null, null, null, View_RegisterComponent_0, RenderType_RegisterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RegisterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-register", _register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], View_RegisterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");



var RegisterComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RegisterComponent, _super);
    function RegisterComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.form_data = {
            login: '',
            password: '',
            password_confirmation: '',
            email: '',
            first_name: '',
            last_name: ''
        };
        return _this;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        console.log(this.form_data);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.user_service.register_user(this.form_data).subscribe(function (res) {
            if (res.success) {
                _this.log_in();
            }
            else {
                _this.handle_request_error(false, res.error);
            }
        }, function (error) {
            _this.handle_request_error();
        });
    };
    return RegisterComponent;
}(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]));



/***/ }),

/***/ "./src/app/seo.service.ts":
/*!********************************!*\
  !*** ./src/app/seo.service.ts ***!
  \********************************/
/*! exports provided: SeoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoService", function() { return SeoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);


var SeoService = /** @class */ (function () {
    function SeoService(doc) {
        this.doc = doc;
    }
    SeoService.prototype.createLinkForCanonicalURL = function () {
        var link = this.doc.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.doc.head.appendChild(link);
        link.setAttribute('href', this.doc.URL);
    };
    SeoService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"]({ factory: function SeoService_Factory() { return new SeoService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); }, token: SeoService, providedIn: "root" });
    return SeoService;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__);




var UserService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserService, _super);
    function UserService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserService.prototype.login_user = function (form_data) {
        if (form_data === void 0) { form_data = {}; }
        this._url = this.base_url + "/users/session/create";
        return this.http.post(this._url, form_data);
    };
    UserService.prototype.register_user = function (form_data) {
        if (form_data === void 0) { form_data = {}; }
        this._url = this.base_url + "/users/create";
        return this.http.post(this._url, form_data);
    };
    UserService.prototype.logout_user = function (current_user) {
        this._url = this.base_url + "/users/session/destroy";
        return this.http.post(this._url, current_user);
    };
    UserService.prototype.is_logged = function (current_user) {
        this._url = this.base_url + "/users/session/validate?token=" + current_user.token + "&user_id=" + current_user.id;
        return this.http.get(this._url);
    };
    UserService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"]({ factory: function UserService_Factory() { return new UserService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); }, token: UserService, providedIn: "root" });
    return UserService;
}(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! exports provided: AppServerModuleNgFactory, AppServerModule, LAZY_MODULE_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MODULE_MAP", function() { return LAZY_MODULE_MAP; });
/* harmony import */ var _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModuleNgFactory", function() { return _app_app_server_module_ngfactory__WEBPACK_IMPORTED_MODULE_0__["AppServerModuleNgFactory"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppServerModule", function() { return _app_app_server_module__WEBPACK_IMPORTED_MODULE_3__["AppServerModule"]; });




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}

var LAZY_MODULE_MAP = {};


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rmalyavc/projects/megachat/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/*!*********************************!*\
  !*** external "@angular/forms" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@ng-toolkit/universal":
/*!****************************************!*\
  !*** external "@ng-toolkit/universal" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ng-toolkit/universal");

/***/ }),

/***/ "@nguniversal/common":
/*!**************************************!*\
  !*** external "@nguniversal/common" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/common");

/***/ }),

/***/ "@nguniversal/express-engine/tokens":
/*!*****************************************************!*\
  !*** external "@nguniversal/express-engine/tokens" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/express-engine/tokens");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ }),

/***/ "@ngx-meta/core":
/*!*********************************!*\
  !*** external "@ngx-meta/core" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ngx-meta/core");

/***/ }),

/***/ "ngx-socket-io":
/*!********************************!*\
  !*** external "ngx-socket-io" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ngx-socket-io");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map