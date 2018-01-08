webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddGuard = (function () {
    function AddGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AddGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.userCheck().then(function (authenticated) {
            if (authenticated) {
                return true;
            }
            else {
                _this.router.navigate(["/"]);
            }
        });
    };
    return AddGuard;
}());
AddGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AddGuard);

var _a, _b;
//# sourceMappingURL=add-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/add-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddServiceService = (function () {
    function AddServiceService(_http) {
        this._http = _http;
    }
    //when adding with sign up form
    AddServiceService.prototype.postService = function (post) {
        console.log("service data");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("/serviceapi/addservice", JSON.stringify(post), options)
            .map(function (result) {
            return result.json();
        });
    };
    AddServiceService.prototype.getAllServices = function () {
        return this._http.get("/serviceapi/allservices")
            .map(function (response) {
            return response.json();
        });
    };
    return AddServiceService;
}());
AddServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AddServiceService);

var _a;
//# sourceMappingURL=add-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/add-service/add-service.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".defaultCardStyle{\r\n  background: rgb(245,245,245);\r\n  padding: 10px;\r\n  margin-top: 15px;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n.btnSmallMargin {\r\n  margin-top: 7px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-service/add-service.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"row\">\r\n  <div class=\"col\"></div>\r\n  <div class=\"col-md-8\">\r\n    <div class=\"card defaultCardStyle\">\r\n      <h1 class='text-center headerFont'><strong>Add a Service</strong></h1>\r\n      <form (ngSubmit)='onSubmit(f); f.resetForm()'  #f='ngForm'>\r\n          <div class=\"form-group\">\r\n            <label for='type'><strong>Type:</strong></label>\r\n            <input id='type' type=\"text\" class='form-control' ngModel name='type' required>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label><strong>Price:</strong></label>\r\n            <input class='form-control' type=\"number\" ngModel name='price' required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label><strong>Description:</strong></label>\r\n            <input class='form-control' type=\"text\" ngModel required name='desc'>\r\n          </div>\r\n          <button type='submit' class=\"btn btn-success\" [disabled]='f.invalid'>Submit</button>\r\n          <div class=\"alert alert-success btnSmallMargin\" *ngIf=\"serviceAdded\">\r\n            <p>Service has been added</p>\r\n          </div>\r\n          <div *ngIf=\"serverMessage != ''\">\r\n            <div class=\"alert alert-danger btnSmallMargin\">{{serverMessage}}</div>\r\n          </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"col\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/add-service/add-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_service_service__ = __webpack_require__("../../../../../src/app/add-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddServiceComponent = (function () {
    function AddServiceComponent(_addServiceService) {
        this._addServiceService = _addServiceService;
        this.serverMessage = '';
        this.serviceAdded = false;
    }
    AddServiceComponent.prototype.ngOnInit = function () {
    };
    AddServiceComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this.serviceAdded = false;
        this.serverMessage = '';
        this._addServiceService.postService(f.value)
            .subscribe(function (info) {
            if (info.message) {
                _this.serverMessage = info.message;
            }
            else {
                _this.serviceAdded = true;
            }
        });
    };
    return AddServiceComponent;
}());
AddServiceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-add-service',
        template: __webpack_require__("../../../../../src/app/add-service/add-service.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-service/add-service.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__add_service_service__["a" /* AddServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__add_service_service__["a" /* AddServiceService */]) === "function" && _a || Object])
], AddServiceComponent);

var _a;
//# sourceMappingURL=add-service.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isAdmin().then(function (authenticated) {
            if (authenticated) {
                return true;
            }
            else {
                _this.router.navigate(["/"]);
            }
        });
    };
    return AdminGuard;
}());
AdminGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AdminGuard);

var _a, _b;
//# sourceMappingURL=admin-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\" id =\"style\">\r\n\r\n\r\n\r\n\r\n  <!-- components (pages) route through this code -->\r\n  <router-outlet></router-outlet>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import the DataService

var AppComponent = (function () {
    function AppComponent(_dataService) {
        this._dataService = _dataService;
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_service_service__ = __webpack_require__("../../../../../src/app/add-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sign_up_form_sign_up_form_component__ = __webpack_require__("../../../../../src/app/sign-up-form/sign-up-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_order_service_order_component__ = __webpack_require__("../../../../../src/app/service-order/service-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__customer_customer_component__ = __webpack_require__("../../../../../src/app/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__select_customer_select_customer_component__ = __webpack_require__("../../../../../src/app/select-customer/select-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__customer_service__ = __webpack_require__("../../../../../src/app/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_dashboard_service_dashboard_component__ = __webpack_require__("../../../../../src/app/service-dashboard/service-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_order_service__ = __webpack_require__("../../../../../src/app/service-order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__customer_service_order_service__ = __webpack_require__("../../../../../src/app/customer-service-order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__view_service_order_view_service_order_component__ = __webpack_require__("../../../../../src/app/view-service-order/view-service-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__add_service_add_service_component__ = __webpack_require__("../../../../../src/app/add-service/add-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__user_signup_user_signup_component__ = __webpack_require__("../../../../../src/app/user-signup/user-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_guard_service__ = __webpack_require__("../../../../../src/app/admin-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__add_guard_service__ = __webpack_require__("../../../../../src/app/add-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__employee_sign_in_employee_sign_in_component__ = __webpack_require__("../../../../../src/app/employee-sign-in/employee-sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__customer_landing_page_customer_landing_page_component__ = __webpack_require__("../../../../../src/app/customer-landing-page/customer-landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__customer_create_account_customer_create_account_component__ = __webpack_require__("../../../../../src/app/customer-create-account/customer-create-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__customer_sign_in_customer_sign_in_component__ = __webpack_require__("../../../../../src/app/customer-sign-in/customer-sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__customer_portal_customer_portal_component__ = __webpack_require__("../../../../../src/app/customer-portal/customer-portal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__view_service_order_view_service_order_update_view_service_order_update_component__ = __webpack_require__("../../../../../src/app/view-service-order/view-service-order-update/view-service-order-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__view_service_order_view_service_order_info_view_service_order_info_component__ = __webpack_require__("../../../../../src/app/view-service-order/view-service-order-info/view-service-order-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__customer_pending_work_customer_pending_work_component__ = __webpack_require__("../../../../../src/app/customer-pending-work/customer-pending-work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__view_customer_service_order_view_customer_service_order_component__ = __webpack_require__("../../../../../src/app/view-customer-service-order/view-customer-service-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__customer_header_customer_header_component__ = __webpack_require__("../../../../../src/app/customer-header/customer-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__customer_closed_work_customer_closed_work_component__ = __webpack_require__("../../../../../src/app/customer-closed-work/customer-closed-work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__view_customer_closed_order_view_customer_closed_order_component__ = __webpack_require__("../../../../../src/app/view-customer-closed-order/view-customer-closed-order.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__landing_page_landing_page_component__["a" /* LandingPageComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sign_up_form_sign_up_form_component__["a" /* SignUpFormComponent */],
            __WEBPACK_IMPORTED_MODULE_10__service_order_service_order_component__["a" /* ServiceOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__customer_customer_component__["a" /* CustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_12__select_customer_select_customer_component__["a" /* SelectCustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_14__service_dashboard_service_dashboard_component__["a" /* ServiceDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_17__view_service_order_view_service_order_component__["a" /* ViewServiceOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_19__add_service_add_service_component__["a" /* AddServiceComponent */],
            __WEBPACK_IMPORTED_MODULE_20__user_signup_user_signup_component__["a" /* UserSignupComponent */],
            __WEBPACK_IMPORTED_MODULE_25__employee_sign_in_employee_sign_in_component__["a" /* EmployeeSignInComponent */],
            __WEBPACK_IMPORTED_MODULE_26__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_27__customer_landing_page_customer_landing_page_component__["a" /* CustomerLandingPageComponent */],
            __WEBPACK_IMPORTED_MODULE_28__customer_create_account_customer_create_account_component__["a" /* CustomerCreateAccountComponent */],
            __WEBPACK_IMPORTED_MODULE_29__customer_sign_in_customer_sign_in_component__["a" /* CustomerSignInComponent */],
            __WEBPACK_IMPORTED_MODULE_30__customer_portal_customer_portal_component__["a" /* CustomerPortalComponent */],
            __WEBPACK_IMPORTED_MODULE_31__view_service_order_view_service_order_update_view_service_order_update_component__["a" /* ViewServiceOrderUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_32__view_service_order_view_service_order_info_view_service_order_info_component__["a" /* ViewServiceOrderInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_33__customer_pending_work_customer_pending_work_component__["a" /* CustomerPendingWorkComponent */],
            __WEBPACK_IMPORTED_MODULE_34__view_customer_service_order_view_customer_service_order_component__["a" /* ViewCustomerServiceOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_35__customer_header_customer_header_component__["a" /* CustomerHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_36__customer_closed_work_customer_closed_work_component__["a" /* CustomerClosedWorkComponent */],
            __WEBPACK_IMPORTED_MODULE_37__view_customer_closed_order_view_customer_closed_order_component__["a" /* ViewCustomerClosedOrderComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_routing__["a" /* routes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_13__customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_15__service_order_service__["a" /* ServiceOrderService */], __WEBPACK_IMPORTED_MODULE_16__customer_service_order_service__["a" /* CustomerServiceOrderService */], __WEBPACK_IMPORTED_MODULE_0__add_service_service__["a" /* AddServiceService */], __WEBPACK_IMPORTED_MODULE_21__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_22__auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_23__admin_guard_service__["a" /* AdminGuard */], __WEBPACK_IMPORTED_MODULE_24__add_guard_service__["a" /* AddGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__employee_sign_in_employee_sign_in_component__ = __webpack_require__("../../../../../src/app/employee-sign-in/employee-sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_form_sign_up_form_component__ = __webpack_require__("../../../../../src/app/sign-up-form/sign-up-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_order_service_order_component__ = __webpack_require__("../../../../../src/app/service-order/service-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_component__ = __webpack_require__("../../../../../src/app/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__select_customer_select_customer_component__ = __webpack_require__("../../../../../src/app/select-customer/select-customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_dashboard_service_dashboard_component__ = __webpack_require__("../../../../../src/app/service-dashboard/service-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__view_service_order_view_service_order_component__ = __webpack_require__("../../../../../src/app/view-service-order/view-service-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_service_add_service_component__ = __webpack_require__("../../../../../src/app/add-service/add-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_signup_user_signup_component__ = __webpack_require__("../../../../../src/app/user-signup/user-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__customer_landing_page_customer_landing_page_component__ = __webpack_require__("../../../../../src/app/customer-landing-page/customer-landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__customer_portal_customer_portal_component__ = __webpack_require__("../../../../../src/app/customer-portal/customer-portal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__view_customer_service_order_view_customer_service_order_component__ = __webpack_require__("../../../../../src/app/view-customer-service-order/view-customer-service-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__view_customer_closed_order_view_customer_closed_order_component__ = __webpack_require__("../../../../../src/app/view-customer-closed-order/view-customer-closed-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_guard_service__ = __webpack_require__("../../../../../src/app/admin-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__add_guard_service__ = __webpack_require__("../../../../../src/app/add-guard.service.ts");

















var routes = [
    {
        path: 'landingpage', canActivate: [__WEBPACK_IMPORTED_MODULE_14__auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_1__landing_page_landing_page_component__["a" /* LandingPageComponent */]
    },
    {
        path: 'nouser', canActivate: [__WEBPACK_IMPORTED_MODULE_16__add_guard_service__["a" /* AddGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_9__user_signup_user_signup_component__["a" /* UserSignupComponent */]
    },
    {
        path: 'signupform', canActivate: [__WEBPACK_IMPORTED_MODULE_14__auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_2__sign_up_form_sign_up_form_component__["a" /* SignUpFormComponent */]
    },
    {
        path: 'landingpage', canActivate: [__WEBPACK_IMPORTED_MODULE_14__auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_1__landing_page_landing_page_component__["a" /* LandingPageComponent */]
    },
    {
        path: 'findcustomer', canActivate: [__WEBPACK_IMPORTED_MODULE_14__auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_5__select_customer_select_customer_component__["a" /* SelectCustomerComponent */]
    },
    {
        path: 'customerdashboard', canActivate: [__WEBPACK_IMPORTED_MODULE_14__auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_4__customer_customer_component__["a" /* CustomerComponent */]
    },
    {
        path: 'createserviceorder', canActivate: [__WEBPACK_IMPORTED_MODULE_14__auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_3__service_order_service_order_component__["a" /* ServiceOrderComponent */]
    },
    {
        path: 'servicedashboard', canActivate: [__WEBPACK_IMPORTED_MODULE_14__auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_6__service_dashboard_service_dashboard_component__["a" /* ServiceDashboardComponent */]
    },
    {
        path: 'viewserviceorder', canActivate: [__WEBPACK_IMPORTED_MODULE_14__auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_7__view_service_order_view_service_order_component__["a" /* ViewServiceOrderComponent */]
    },
    {
        path: 'signin',
        component: __WEBPACK_IMPORTED_MODULE_0__employee_sign_in_employee_sign_in_component__["a" /* EmployeeSignInComponent */]
    },
    {
        path: 'addservice', canActivate: [__WEBPACK_IMPORTED_MODULE_15__admin_guard_service__["a" /* AdminGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_8__add_service_add_service_component__["a" /* AddServiceComponent */]
    },
    {
        path: 'usersignup', canActivate: [__WEBPACK_IMPORTED_MODULE_15__admin_guard_service__["a" /* AdminGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_9__user_signup_user_signup_component__["a" /* UserSignupComponent */]
    },
    {
        path: 'customerlanding',
        component: __WEBPACK_IMPORTED_MODULE_10__customer_landing_page_customer_landing_page_component__["a" /* CustomerLandingPageComponent */]
    },
    {
        path: 'customerportal', canActivate: [__WEBPACK_IMPORTED_MODULE_14__auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_11__customer_portal_customer_portal_component__["a" /* CustomerPortalComponent */]
    },
    {
        path: 'viewcustomerserviceorder', canActivate: [__WEBPACK_IMPORTED_MODULE_14__auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_12__view_customer_service_order_view_customer_service_order_component__["a" /* ViewCustomerServiceOrderComponent */]
    },
    {
        path: 'viewcustomerclosedeorder', canActivate: [__WEBPACK_IMPORTED_MODULE_14__auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_13__view_customer_closed_order_view_customer_closed_order_component__["a" /* ViewCustomerClosedOrderComponent */]
    },
    {
        path: 'landingpage',
        redirectTo: 'landingpage',
    },
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
    },
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isAuthenticated().then(function (authenticated) {
            if (authenticated) {
                return true;
            }
            else {
                _this.router.navigate(["/"]);
            }
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(dataService) {
        this.dataService = dataService;
        this.loggedIn = false;
    }
    AuthService.prototype.isAuthenticated = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.dataService.getUserInfo()
                .subscribe(function (req) {
                if (req._id) {
                    console.log("Did see ID");
                    _this.loggedIn = true;
                    resolve(_this.loggedIn);
                }
                else {
                    console.log("Did not see ID");
                    _this.loggedIn = false;
                    resolve(_this.loggedIn);
                }
            }, function (error) { return console.log(error); });
        });
        return promise;
    };
    AuthService.prototype.isAdmin = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.dataService.getUserInfo()
                .subscribe(function (req) {
                console.log("Req is: ", req);
                if (req.local.role === "Admin") {
                    console.log("Is Admin");
                    _this.loggedIn = true;
                    resolve(_this.loggedIn);
                }
                else {
                    console.log("Is not Admin");
                    _this.loggedIn = false;
                    resolve(_this.loggedIn);
                }
            }, function (error) { return console.log(error); });
        });
        return promise;
    };
    AuthService.prototype.userCheck = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.dataService.usersCheck()
                .subscribe(function (req) {
                console.log("Req is: ", req);
                if (req.successMsg === "yes") {
                    console.log("Access Allowed");
                    _this.loggedIn = true;
                    resolve(_this.loggedIn);
                }
                else {
                    console.log("Rejected");
                    _this.loggedIn = false;
                    resolve(_this.loggedIn);
                }
            }, function (error) { return console.log(error); });
        });
        return promise;
    };
    AuthService.prototype.login = function () {
        this.loggedIn = true;
    };
    AuthService.prototype.logout = function () {
        this.loggedIn = false;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/customer-closed-work/customer-closed-work.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".defaultCardStyle{\r\n  background: rgb(245,245,245);\r\n  padding: 10px;\r\n  margin-top: 15px;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n\r\n.goldBack{\r\n  background: rgb(228,188,54);\r\n  border-style: solid;\r\n  border-color: black;\r\n  border-width: 2px;\r\n}\r\n\r\n.rowStyle {\r\n  background: rgb(0,62,83);\r\n  color: rgb(210,233,225);\r\n  cursor: pointer;\r\n}\r\n.pendingOrderStyle {\r\n  color: rgb(119,181,254);\r\n}\r\n.progressOrderStyle {\r\n  color: rgb(231,35,48);\r\n}\r\n.waitCustomerOrderStyle {\r\n  color: rgb(216,176,140);\r\n}\r\n.waitCustomerOrderStyle:hover {\r\n  color: rgb(216,176,140);\r\n}\r\n.waitPartsOrderStyle {\r\n  color: rgb(255,154,0);\r\n}\r\n.workCompOrderStyle {\r\n  color: rgb(172,189,55);\r\n}\r\n.rowStyle:hover{\r\n  background: rgb(210,233,225);\r\n  color: rgb(0,62,83);\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  border-color: rgb(228,188,54);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer-closed-work/customer-closed-work.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card defaultCardStyle\">\n      <h1 class=\"text-center headerFont\"><strong>Service History</strong></h1>\n      <table class=\"table\">\n        <thead class=\"goldBack\">\n          <tr>\n            <th>Mechanic</th>\n            <th>Status</th>\n            <th>Vehicle</th>\n            <th>Location</th>\n            <th>Services</th>\n            <th>Created</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let order of closedServices\" (click)=\"selectOrder(order._id)\" class=\"rowStyle\">\n            <td>{{order.cusAttendant}}</td>\n            <td>{{order.status | uppercase}}</td>\n            <td>{{order.cusCarMake}} {{order.cusCarModel}}, {{order.cusCarYear}}</td>\n            <td>{{order.location}}</td>\n            <td>\n              <div *ngFor=\"let service of order.cusCarService\">\n                <div *ngIf=\"service.status == 'complete'\">{{service.type}}</div>\n              </div>\n            </td>\n            <td>{{order.created_at | date:\"medium\"}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/customer-closed-work/customer-closed-work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerClosedWorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_service_service__ = __webpack_require__("../../../../../src/app/add-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_service_order_service__ = __webpack_require__("../../../../../src/app/customer-service-order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerClosedWorkComponent = (function () {
    function CustomerClosedWorkComponent(dataService, addServiceService, router, customerServiceOrderService) {
        this.dataService = dataService;
        this.addServiceService = addServiceService;
        this.router = router;
        this.customerServiceOrderService = customerServiceOrderService;
        this.currentUser = {};
        this.currentServices = [];
        this.closedServices = [];
    }
    CustomerClosedWorkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getUserInfo().subscribe(function (user) {
            console.log(user);
            _this.currentUser = user.local;
            console.log("EMAIL ", user.local.email);
            _this.getCustomerOrders(user.local.email);
        });
    };
    CustomerClosedWorkComponent.prototype.getCustomerOrders = function (email) {
        var _this = this;
        this.dataService.getCustomerServiceOrder(email).subscribe(function (orders) {
            console.log("ORDERS ARE: ", orders);
            _this.currentServices = orders;
            for (var i = 0; i < orders.length; i++) {
                if (orders[i].status === "closed") {
                    _this.closedServices.push(orders[i]);
                }
            }
        });
    };
    CustomerClosedWorkComponent.prototype.selectOrder = function (value) {
        this.customerServiceOrderService.updateCurrentOrder(value);
        this.router.navigate(["/viewcustomerclosedeorder"]);
    };
    return CustomerClosedWorkComponent;
}());
CustomerClosedWorkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-customer-closed-work',
        template: __webpack_require__("../../../../../src/app/customer-closed-work/customer-closed-work.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer-closed-work/customer-closed-work.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__add_service_service__["a" /* AddServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__add_service_service__["a" /* AddServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__customer_service_order_service__["a" /* CustomerServiceOrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__customer_service_order_service__["a" /* CustomerServiceOrderService */]) === "function" && _d || Object])
], CustomerClosedWorkComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=customer-closed-work.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer-create-account/customer-create-account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btnSmallMargin {\r\n  margin-top: 7px;\r\n}\r\n.defaultCardStyle{\r\n  background: rgb(245,245,245);\r\n  padding: 10px;\r\n  margin-top: 15px;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer-create-account/customer-create-account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card defaultCardStyle\">\r\n  <form class=\"form-signin\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n    <h2 class=\"text-center headerFont\"><strong>Create Your Account</strong></h2>\r\n    <label for=\"fName\"><strong>First Name</strong></label>\r\n    <input type=\"text\" id=\"fName\" ngModel name=\"fName\" class=\"form-control\" placeholder=\"First Name\" required>\r\n\r\n    <label for=\"lName\"><strong>Last Name</strong></label>\r\n    <input type=\"text\" id=\"lName\" ngModel name=\"lName\" class=\"form-control\" placeholder=\"Last Name\" required>\r\n\r\n    <label for=\"inputEmail\"><strong>Email Address</strong></label>\r\n    <input type=\"email\" id=\"inputEmail\" ngModel name=\"email\" class=\"form-control\" placeholder=\"Email address\" required>\r\n\r\n    <label for=\"phoneNumber\"><strong>Phone Number</strong></label>\r\n    <input type=\"email\" id=\"phoneNumber\" ngModel name=\"phoneNumber\" class=\"form-control\" placeholder=\"Phone Number\" required>\r\n\r\n    <label for=\"inputPassword\"><strong>Password</strong></label>\r\n    <input type=\"password\" id=\"inputPassword\" ngModel name=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n\r\n    <label for=\"inputPassword2\"><strong>Confirm Password</strong></label>\r\n    <input type=\"password\" id=\"inputPassword2\" ngModel name=\"password2\" class=\"form-control\" placeholder=\"Confirm Password\" required>\r\n\r\n    <button class=\"btn btn-lg btn-info btnSmallMargin btn-block\" type=\"submit\">Sign Up</button>\r\n    <div *ngIf=\"errMsg != ''\" class=\"alert alert-danger btnSmallMargin\">\r\n      <p>{{errMsg}}</p>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/customer-create-account/customer-create-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerCreateAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerCreateAccountComponent = (function () {
    function CustomerCreateAccountComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errMsg = "";
    }
    CustomerCreateAccountComponent.prototype.ngOnInit = function () {
    };
    CustomerCreateAccountComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.errMsg = "";
        if (form.value.password != form.value.password2) {
            this.errMsg = "The passwords entered do not match.  Please try again.";
            return;
        }
        this.dataService.signUpCusUser(form.value)
            .subscribe(function (info) {
            console.log(info.url);
            var urlPath = info.url;
            var urlPathArray = urlPath.split('/');
            var lastSegment = urlPathArray[urlPathArray.length - 1];
            if (lastSegment == "customerlanding") {
                _this.errMsg = "There is already an account with this email.";
            }
            console.log(lastSegment);
            _this.router.navigate([lastSegment]);
        });
    };
    return CustomerCreateAccountComponent;
}());
CustomerCreateAccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-customer-create-account',
        template: __webpack_require__("../../../../../src/app/customer-create-account/customer-create-account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer-create-account/customer-create-account.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], CustomerCreateAccountComponent);

var _a, _b;
//# sourceMappingURL=customer-create-account.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer-header/customer-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pageHeaderStyle {\r\n  font-size: 50px;\r\n}\r\n.introHeader {\r\n  background: rgb(0,62,83);\r\n  border-color: rgb(228,188,54);\r\n  border-width: 2px;\r\n  border-style: solid;\r\n  color: rgb(210,233,225);\r\n  font-family: 'Merriweather', serif;\r\n  margin-bottom: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer-header/customer-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header text-center jumbotron introHeader jumbrotron-fluid\">\n    <div class=\"container\">\n      <div *ngIf=\"!isLoggedIn\">\n        <h1 class=\"pageHeaderStyle text-center\">Welcome to The Garage App</h1>\n      </div>\n      <div *ngIf=\"isLoggedIn\">\n        <h1 class=\"pageHeaderStyle text-center\">{{name}}'s Account</h1>\n          <button type=\"button\" routerLink=\"/customerportal\" class=\"btn btn-outline-primary\">Home</button>\n          <button type=\"button\" (click)=\"logOut()\" class=\"btn btn-outline-danger\">Logout</button>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/customer-header/customer-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerHeaderComponent = (function () {
    function CustomerHeaderComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.isLoggedIn = false;
        this.name = "";
    }
    CustomerHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedIn = false;
        this.name = "";
        this.dataService.getUserInfo()
            .subscribe(function (req) {
            if (req.local && !req.local.role) {
                _this.isLoggedIn = true;
                _this.name = req.local.first_name + " " + req.local.last_name;
            }
            else {
                console.log("Is not admin");
            }
        }, function (error) { return console.log(error); });
    };
    CustomerHeaderComponent.prototype.logOut = function () {
        var _this = this;
        this.dataService.logOutUser()
            .subscribe(function (info) {
            console.log(info.url);
            var urlPath = info.url;
            var urlPathArray = urlPath.split('/');
            var lastSegment = urlPathArray[urlPathArray.length - 1];
            console.log(lastSegment);
            _this.router.navigate(['customerlanding']);
        });
    };
    return CustomerHeaderComponent;
}());
CustomerHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-customer-header',
        template: __webpack_require__("../../../../../src/app/customer-header/customer-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer-header/customer-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], CustomerHeaderComponent);

var _a, _b;
//# sourceMappingURL=customer-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer-landing-page/customer-landing-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer-landing-page/customer-landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-customer-header></app-customer-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <app-customer-sign-in></app-customer-sign-in>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <app-customer-create-account></app-customer-create-account>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/customer-landing-page/customer-landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerLandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerLandingPageComponent = (function () {
    function CustomerLandingPageComponent() {
    }
    CustomerLandingPageComponent.prototype.ngOnInit = function () {
    };
    return CustomerLandingPageComponent;
}());
CustomerLandingPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-customer-landing-page',
        template: __webpack_require__("../../../../../src/app/customer-landing-page/customer-landing-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer-landing-page/customer-landing-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CustomerLandingPageComponent);

//# sourceMappingURL=customer-landing-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer-pending-work/customer-pending-work.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".defaultCardStyle{\r\n  background: rgb(245,245,245);\r\n  padding: 10px;\r\n  margin-top: 15px;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n\r\n.goldBack{\r\n  background: rgb(228,188,54);\r\n  border-style: solid;\r\n  border-color: black;\r\n  border-width: 2px;\r\n}\r\n.fireFont {\r\n  color: rgb(206,33,0);\r\n}\r\n\r\n.rowStyle {\r\n  background: rgb(0,62,83);\r\n  color: rgb(210,233,225);\r\n  cursor: pointer;\r\n}\r\n.pendingOrderStyle {\r\n  color: rgb(119,181,254);\r\n}\r\n.progressOrderStyle {\r\n  color: rgb(231,35,48);\r\n}\r\n.waitCustomerOrderStyle {\r\n  color: rgb(216,176,140);\r\n}\r\n.waitCustomerOrderStyle:hover {\r\n  color: rgb(216,176,140);\r\n}\r\n.waitPartsOrderStyle {\r\n  color: rgb(255,154,0);\r\n}\r\n.workCompOrderStyle {\r\n  color: rgb(172,189,55);\r\n}\r\n.rowStyle:hover{\r\n  background: rgb(210,233,225);\r\n  color: rgb(0,62,83);\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  border-color: rgb(228,188,54);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer-pending-work/customer-pending-work.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card defaultCardStyle\">\r\n      <h1 class=\"text-center headerFont fireFont\"><strong>Current Services In Progress</strong></h1>\r\n      <table class=\"table\">\r\n        <thead class=\"goldBack\">\r\n          <tr>\r\n            <th>Mechanic</th>\r\n            <th>Status</th>\r\n            <th>Vehicle</th>\r\n            <th>Location</th>\r\n            <th>Ordered</th>\r\n            <th>Recommended</th>\r\n            <th>Created</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let order of pendingServices\" (click)=\"selectOrder(order._id)\" class=\"rowStyle\">\r\n            <td>{{order.cusAttendant}}</td>\r\n            <td>{{order.status | uppercase}}</td>\r\n            <td>{{order.cusCarMake}} {{order.cusCarModel}}, {{order.cusCarYear}}</td>\r\n            <td>{{order.location}}</td>\r\n            <td>\r\n              <div *ngFor=\"let service of order.cusCarService\">\r\n                <div *ngIf=\"service.status == 'pending' || service.status == 'complete'\">{{service.type}}</div>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div *ngFor=\"let recService of order.cusCarService\">\r\n                <div *ngIf=\"recService.status == 'recommended'\">{{recService.type}}</div>\r\n              </div>\r\n            </td>\r\n            <td>{{order.created_at | date:\"medium\"}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/customer-pending-work/customer-pending-work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerPendingWorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_service_service__ = __webpack_require__("../../../../../src/app/add-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_service_order_service__ = __webpack_require__("../../../../../src/app/customer-service-order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerPendingWorkComponent = (function () {
    function CustomerPendingWorkComponent(dataService, addServiceService, router, customerServiceOrderService) {
        this.dataService = dataService;
        this.addServiceService = addServiceService;
        this.router = router;
        this.customerServiceOrderService = customerServiceOrderService;
        this.currentUser = {};
        this.currentServices = [];
        this.pendingServices = [];
    }
    CustomerPendingWorkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getUserInfo().subscribe(function (user) {
            console.log(user);
            _this.currentUser = user.local;
            console.log("EMAIL ", user.local.email);
            _this.getCustomerOrders(user.local.email);
        });
    };
    CustomerPendingWorkComponent.prototype.getCustomerOrders = function (email) {
        var _this = this;
        this.dataService.getCustomerServiceOrder(email).subscribe(function (orders) {
            console.log("ORDERS ARE: ", orders);
            _this.currentServices = orders;
            for (var i = 0; i < orders.length; i++) {
                if (orders[i].status != "closed") {
                    _this.pendingServices.push(orders[i]);
                }
            }
            console.log(_this.currentServices);
        });
    };
    CustomerPendingWorkComponent.prototype.selectOrder = function (value) {
        this.customerServiceOrderService.updateCurrentOrder(value);
        this.router.navigate(["/viewcustomerserviceorder"]);
    };
    return CustomerPendingWorkComponent;
}());
CustomerPendingWorkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-customer-pending-work',
        template: __webpack_require__("../../../../../src/app/customer-pending-work/customer-pending-work.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer-pending-work/customer-pending-work.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__add_service_service__["a" /* AddServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__add_service_service__["a" /* AddServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__customer_service_order_service__["a" /* CustomerServiceOrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__customer_service_order_service__["a" /* CustomerServiceOrderService */]) === "function" && _d || Object])
], CustomerPendingWorkComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=customer-pending-work.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer-portal/customer-portal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer-portal/customer-portal.component.html":
/***/ (function(module, exports) {

module.exports = "<app-customer-header></app-customer-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-customer-pending-work></app-customer-pending-work>\r\n      <app-customer-closed-work></app-customer-closed-work>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/customer-portal/customer-portal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerPortalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerPortalComponent = (function () {
    function CustomerPortalComponent() {
    }
    CustomerPortalComponent.prototype.ngOnInit = function () {
    };
    return CustomerPortalComponent;
}());
CustomerPortalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-customer-portal',
        template: __webpack_require__("../../../../../src/app/customer-portal/customer-portal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer-portal/customer-portal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CustomerPortalComponent);

//# sourceMappingURL=customer-portal.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer-service-order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerServiceOrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerServiceOrderService = (function () {
    function CustomerServiceOrderService() {
        this.currentServiceOrder = "";
        this.serviceOrderInfo = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    CustomerServiceOrderService.prototype.updateCurrentOrder = function (id) {
        this.currentServiceOrder = id;
        console.log("Current order:");
        console.log(this.currentServiceOrder);
    };
    CustomerServiceOrderService.prototype.currentServiceOrderInfo = function () {
        return this.currentServiceOrder;
    };
    return CustomerServiceOrderService;
}());
CustomerServiceOrderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CustomerServiceOrderService);

//# sourceMappingURL=customer-service-order.service.js.map

/***/ }),

/***/ "../../../../../src/app/customer-sign-in/customer-sign-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btnSmallMargin {\r\n  margin-top: 7px;\r\n}\r\n.defaultCardStyle{\r\n  background: rgb(245,245,245);\r\n  padding: 10px;\r\n  margin-top: 15px;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer-sign-in/customer-sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card defaultCardStyle\">\r\n  <form class=\"form-signin\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n    <h2 class=\"text-center headerFont\"><strong>Sign In</strong></h2>\r\n    <label for=\"loginEmail\"><strong>Email address:</strong></label>\r\n    <input type=\"email\" id=\"loginEmail\" ngModel name=\"email\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\r\n    <label for=\"loginPassword\"><strong>Password</strong></label>\r\n    <input type=\"password\" id=\"loginPassword\" ngModel name=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n    <button class=\"btn btn-lg btn-primary btnSmallMargin btn-block\" type=\"submit\">Sign in</button>\r\n  </form>\r\n  <div class=\"alert alert-danger btnSmallMargin\" *ngIf=\"errorMessage != ''\">\r\n    <p>{{errorMessage}}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/customer-sign-in/customer-sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerSignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerSignInComponent = (function () {
    function CustomerSignInComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = "";
    }
    CustomerSignInComponent.prototype.ngOnInit = function () {
    };
    CustomerSignInComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.errorMessage = "";
        console.log(form.value);
        this.dataService.logInCusUser(form.value)
            .subscribe(function (info) {
            console.log(info.url);
            var urlPath = info.url;
            var urlPathArray = urlPath.split('/');
            var lastSegment = urlPathArray[urlPathArray.length - 1];
            console.log(lastSegment);
            if (lastSegment == "customerlanding") {
                _this.errorMessage = "Incorrect Login Information";
                return;
            }
            _this.router.navigate([lastSegment]);
        }, function (error) { return console.log(error); });
    };
    return CustomerSignInComponent;
}());
CustomerSignInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-customer-sign-in',
        template: __webpack_require__("../../../../../src/app/customer-sign-in/customer-sign-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer-sign-in/customer-sign-in.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], CustomerSignInComponent);

var _a, _b;
//# sourceMappingURL=customer-sign-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerService = (function () {
    function CustomerService() {
        this.currentCustomer = {
            _id: "",
            fName: "",
            lName: "",
            phNumber: "",
            email: ""
        };
    }
    CustomerService.prototype.updateCurrentCust = function (id, fname, lname, phnumber, email) {
        this.currentCustomer._id = id;
        this.currentCustomer.fName = fname;
        this.currentCustomer.lName = lname;
        this.currentCustomer.phNumber = phnumber;
        this.currentCustomer.email = email;
        console.log("Current Customer:");
        console.log(this.currentCustomer);
    };
    CustomerService.prototype.currentCustomerInfo = function () {
        return this.currentCustomer;
    };
    return CustomerService;
}());
CustomerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CustomerService);

//# sourceMappingURL=customer.service.js.map

/***/ }),

/***/ "../../../../../src/app/customer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
var Customer = (function () {
    function Customer() {
    }
    return Customer;
}());

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".defaultCardStyle{\r\n  background: rgb(245,245,245);\r\n  padding: 10px;\r\n  margin-top: 15px;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n.headerColor {\r\n  color: rgb(0,62,83);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-md-7\">\r\n      <div class=\"card defaultCardStyle\">\r\n        <h3 class='text-center headerFont headerColor'><strong>Customer Info</strong></h3>\r\n        <h5><span class=\"headerColor\">Name: </span>{{fullName}}</h5>\r\n        <h5><span class=\"headerColor\">Phone Number: </span>{{phoneNumber}}</h5>\r\n        <h5><span class=\"headerColor\">Email: </span>{{email}}</h5>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_service__ = __webpack_require__("../../../../../src/app/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerComponent = (function () {
    function CustomerComponent(customerService) {
        this.customerService = customerService;
        this.fullName = "";
        this.phoneNumber = "";
        this.email = "";
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var currentCustomer = this.customerService.currentCustomerInfo();
        this.fullName = currentCustomer.fName + currentCustomer.lName;
        this.phoneNumber = currentCustomer.phNumber;
        this.email = currentCustomer.email;
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-customer',
        template: __webpack_require__("../../../../../src/app/customer/customer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer/customer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__customer_service__["a" /* CustomerService */]) === "function" && _a || Object])
], CustomerComponent);

var _a;
//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer__ = __webpack_require__("../../../../../src/app/customer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.getCustomers = function () {
        var _this = this;
        return this._http.get("/api/all")
            .map(function (response) {
            _this.result = response.json();
            return response.json();
        });
    };
    DataService.prototype.getCustomer = function (id) {
        var _this = this;
        return this._http.get("/api/all/" + id)
            .map(function (response) {
            _this.result = response.json();
            return response.json();
        });
    };
    //when adding with sign up form
    DataService.prototype.postCustomers = function (post) {
        //console.log(Customer + "service data");
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("/api/addCustomer", JSON.stringify(post), options)
            .map(function (result) {
            return result.json();
        });
    };
    //when adding with service order
    DataService.prototype.addCustomer = function (post) {
        var _this = this;
        console.log(__WEBPACK_IMPORTED_MODULE_1__customer__["a" /* Customer */] + "service data");
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("/api/addCustomer", JSON.stringify(post), options)
            .map(function (result) {
            _this.result = result.json().data;
            return result.json();
        });
    };
    DataService.prototype.updateCustomer = function (post, id) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post('/api/update/' + id, JSON.stringify(post), options)
            .map(function (result) { return _this.result = result.json(); });
    };
    DataService.prototype.postServiceOrder = function (post) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("/api/addserviceorder", JSON.stringify(post), options)
            .map(function (result) {
            _this.result = result.json();
            return result.json();
        });
    };
    DataService.prototype.getServiceOrders = function () {
        var _this = this;
        return this._http.get("/api/allserviceorders")
            .map(function (response) {
            _this.result = response.json();
            return response.json();
        });
    };
    DataService.prototype.getServiceOrder = function (id) {
        var _this = this;
        return this._http.get("/api/allserviceorders/" + id)
            .map(function (response) {
            _this.result = response.json();
            return response.json();
        });
    };
    DataService.prototype.updateServiceOrder = function (id, post) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put("/api/updateserviceorder/" + id, JSON.stringify(post), options)
            .map(function (result) {
            _this.result = result.json();
            return result.json();
        });
    };
    DataService.prototype.updateServiceOrderService = function (id, post) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put("/api/updateservicestatus/" + id, JSON.stringify(post), options)
            .map(function (result) {
            _this.result = result.json();
            return result.json();
        });
    };
    DataService.prototype.removeServiceOrderService = function (id, post) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put("/api/removeserviceorderservice/" + id, JSON.stringify(post), options)
            .map(function (result) {
            _this.result = result.json();
            return result.json();
        });
    };
    DataService.prototype.addServiceOrderNote = function (id, post) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put("/api/addserviceordernote/" + id, JSON.stringify(post), options)
            .map(function (result) {
            _this.result = result.json();
            return result.json();
        });
    };
    DataService.prototype.addServiceOrderService = function (id, post) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put("/api/addserviceorderservice/" + id, JSON.stringify(post), options)
            .map(function (result) {
            _this.result = result.json();
            return result.json();
        });
    };
    DataService.prototype.signUpUser = function (post) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("/auth/signup", JSON.stringify(post), options);
    };
    DataService.prototype.logInUser = function (post) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("/auth/login", JSON.stringify(post), options);
    };
    DataService.prototype.logOutUser = function () {
        return this._http.get("/auth/logout");
    };
    DataService.prototype.getUserInfo = function () {
        var _this = this;
        return this._http.get("/auth/userinfo")
            .map(function (response) {
            _this.result = response.json();
            return response.json();
        });
    };
    DataService.prototype.usersCheck = function () {
        var _this = this;
        return this._http.get("/auth/allusers")
            .map(function (response) {
            _this.result = response.json();
            return response.json();
        });
    };
    DataService.prototype.getAllEmployees = function () {
        var _this = this;
        return this._http.get("/auth/allemployees")
            .map(function (response) {
            _this.result = response.json();
            return response.json();
        });
    };
    //Customer Portal Routes
    //Create customer user account
    DataService.prototype.signUpCusUser = function (post) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("/auth/signupcustomer", JSON.stringify(post), options);
    };
    //log into customer portal
    DataService.prototype.logInCusUser = function (post) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("/auth/logincustomer", JSON.stringify(post), options);
    };
    DataService.prototype.getCustomerServiceOrder = function (id) {
        var _this = this;
        return this._http.get("/api/allcustomerserviceorders/" + id)
            .map(function (response) {
            _this.result = response.json();
            return response.json();
        });
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/employee-sign-in/employee-sign-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btnSmallMargin {\r\n  margin-top: 7px;\r\n}\r\n.defaultCardStyle{\r\n  background: rgb(245,245,245);\r\n  padding: 10px;\r\n  margin-top: 15px;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n.pageHeaderStyle {\r\n  font-size: 50px;\r\n}\r\n.introHeader {\r\n  background: rgb(0,62,83);\r\n  border-color: rgb(228,188,54);\r\n  border-width: 2px;\r\n  border-style: solid;\r\n  color: rgb(210,233,225);\r\n  font-family: 'Merriweather', serif;\r\n  margin-bottom: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employee-sign-in/employee-sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header text-center jumbotron introHeader jumbrotron-fluid\">\r\n    <div class=\"container\">\r\n        <h1 class=\"pageHeaderStyle text-center\">The Garage App</h1>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card defaultCardStyle\">\r\n        <h2 class=\"text-center headerFont\"><strong>Please sign in</strong></h2>\r\n        <form class=\"form-signin\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n          <div class=\"form-group\">\r\n            <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n            <input type=\"email\" id=\"inputEmail\" ngModel name=\"email\" class=\"form-control\"  placeholder=\"Email address\" required autofocus>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n            <input type=\"password\" id=\"inputPassword\" ngModel name=\"password\"  class=\"form-control\" placeholder=\"Password\" required>\r\n          </div>\r\n          <button class=\"btn btn-lg btn-primary  btn-block btnSmallMargin\" type=\"submit\">Sign in</button>\r\n          <div class=\"alert alert-danger btnSmallMargin\" *ngIf=\"errorMessage != ''\">\r\n            <p>{{errorMessage}}</p>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/employee-sign-in/employee-sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeSignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeSignInComponent = (function () {
    function EmployeeSignInComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = "";
    }
    EmployeeSignInComponent.prototype.ngOnInit = function () {
    };
    EmployeeSignInComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.errorMessage = "";
        console.log(form.value);
        this.dataService.logInUser(form.value)
            .subscribe(function (info) {
            console.log(info.url);
            var urlPath = info.url;
            var urlPathArray = urlPath.split('/');
            var lastSegment = urlPathArray[urlPathArray.length - 1];
            console.log(lastSegment);
            if (lastSegment === "") {
                _this.errorMessage = "Incorrect Login Information";
                return;
            }
            _this.router.navigate([lastSegment]);
        });
    };
    return EmployeeSignInComponent;
}());
EmployeeSignInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-employee-sign-in',
        template: __webpack_require__("../../../../../src/app/employee-sign-in/employee-sign-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employee-sign-in/employee-sign-in.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], EmployeeSignInComponent);

var _a, _b;
//# sourceMappingURL=employee-sign-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.nav-styles{\r\n    background-color:#101820;\r\n    color: #A5ACAF;\r\n  }\r\n  .navbar-brand{\r\n    color: #A5ACAF;\r\n  }\r\n  .nav-link{\r\n    color: #A5ACAF;\r\n  }\r\n  .logOutStyle {\r\n    cursor: pointer;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg nav-styles\">\r\n    <a class=\"navbar-brand\" routerLink=\"/landingpage\">Garage App</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"/servicedashboard\">Service Dashboard</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/createserviceorder\">Create Service Order</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/customerlanding\">Customer Portal</a>\r\n        </li>\r\n\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Other Options\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <a class=\"dropdown-item\" routerLink=\"/signupform\">Sign Up Customer</a>\r\n            <a class=\"dropdown-item\" routerLink=\"/findcustomer\">Search For Customer</a>\r\n            <a *ngIf=\"isAdmin\" class=\"dropdown-item\" routerLink=\"/usersignup\">Sign Up Employee</a>\r\n            <a *ngIf=\"isAdmin\" class=\"dropdown-item\" routerLink=\"/addservice\">Add Service</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      </div>\r\n      <ul class=\"nav justify-content-end\">\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link logOutStyle\" (click)=\"logOut()\">Sign Out</a>\r\n          </li>\r\n      </ul>\r\n\r\n  </nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.isAdmin = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAdmin = false;
        this.dataService.getUserInfo()
            .subscribe(function (req) {
            console.log("role: ", req.local.role);
            if (req.local.role === "Admin") {
                console.log("Is Admin");
                _this.isAdmin = true;
            }
            else {
                console.log("Is not admin");
            }
        }, function (error) { return console.log(error); });
    };
    HeaderComponent.prototype.logOut = function () {
        var _this = this;
        this.dataService.logOutUser()
            .subscribe(function (info) {
            console.log(info.url);
            var urlPath = info.url;
            var urlPathArray = urlPath.split('/');
            var lastSegment = urlPathArray[urlPathArray.length - 1];
            console.log(lastSegment);
            _this.router.navigate([lastSegment]);
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.signupcustomer{\r\n    background-color: black;\r\n    color: yellow;\r\n}\r\n#button1{\r\n    background-color: white;\r\n    color: black;\r\n}\r\n.findcustomer{\r\n    background-color: #00788C;\r\n    color: #1D1160;\r\n\r\n}\r\n#button2{\r\n    background-color: #ffffff;\r\n    color:  #888B8D;\r\n}\r\n.createserviceorder{\r\n    background-color: #008248;\r\n    color: #ffffff;\r\n\r\n}\r\n#button3{\r\n    background-color: #ffffff;\r\n    color:  #008248;\r\n}\r\n.servicedashboard{\r\n    background-color: #B72B35;\r\n    color: #111111\r\n}\r\n#button4{\r\n    background-color: #FFFFFF;\r\n    color: #A4A9AD\r\n\r\n}\r\n.usersignup{\r\n    background-color: #552583;\r\n    color: #FDB927;\r\n}\r\n#button5{\r\n    background-color: #FFFFFF;\r\n    color: #000000;\r\n}\r\n.addservice {\r\n    background-color: #0E3386;\r\n    color: #CC3433;\r\n\r\n}\r\n#button6{\r\n    background-color: #ffffff;\r\n    color: #CC3433;\r\n}\r\n.rowMargin{\r\n  margin-top: 15px;\r\n}\r\n.cardPadding{\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n}\r\n.hoverStyle:hover {\r\n  background: rgb(228,188,54);\r\n  cursor: pointer;\r\n  color: rgb(0,62,83);\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: rgb(141,172,166)\r\n}\r\n.mainHeader{\r\n  font-family: 'PT Serif', serif;\r\n}\r\n.cardHeader{\r\n  font-family: 'Bree Serif', serif;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "    <app-header></app-header>\r\n<div class = 'jumbotron'>\r\n\r\n  <!-- Begin page content -->\r\n\r\n\r\n\r\n  <div class = \"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <h1 class=\"text-center mainHeader\"><strong>Main Menu</strong></h1>\r\n      </div>\r\n    </div>\r\n  <div class = 'row'>\r\n    <div class='col-md-4'>\r\n      <div class=\"card rowMargin cardPadding hoverStyle signupcustomer\" routerLink=\"/signupform\">\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title text-center cardHeader\"><div>Sign Up</div> Customer</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"card rowMargin cardPadding hoverStyle findcustomer\" routerLink=\"/findcustomer\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title text-center cardHeader\"><div>Find</div> Customer</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"card rowMargin cardPadding hoverStyle createserviceorder\" routerLink=\"/createserviceorder\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title text-center cardHeader\"><div>Create a </div>Service Order</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div><!--end of row -->\r\n<div class = \"row\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"card rowMargin cardPadding hoverStyle servicedashboard\" routerLink=\"/servicedashboard\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title text-center cardHeader\"><div>View Service</div> Dashboard</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div *ngIf=\"isAdmin\">\r\n      <div class=\"card rowMargin usersignup cardPadding hoverStyle\" routerLink=\"/usersignup\">\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title text-center cardHeader\"><div>Employee</div> Sign Up</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div *ngIf=\"isAdmin\">\r\n      <div class=\"card rowMargin cardPadding addservice hoverStyle\" routerLink=\"/addservice\">\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title text-center cardHeader\"><div>Add</div> Service</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div><!--end of row -->\r\n</div> <!-- /container -->\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- Bootstrap core JavaScript\r\n      ================================================== -->\r\n<!-- Placed at the end of the document so the pages load faster -->\r\n<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->\r\n<script src=\"../../../../assets/js/ie10-viewport-bug-workaround.js\"></script>\r\n"

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingPageComponent = (function () {
    function LandingPageComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.isAdmin = false;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAdmin = false;
        this.dataService.getUserInfo()
            .subscribe(function (req) {
            console.log("role: ", req.local.role);
            if (req.local.role === "Admin") {
                console.log("Is Admin");
                _this.isAdmin = true;
            }
            else {
                console.log("Is not admin");
            }
        }, function (error) { return console.log(error); });
    };
    LandingPageComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.value);
        this.dataService.logInUser(form.value)
            .subscribe(function (info) {
            console.log(info.url);
            var urlPath = info.url;
            var urlPathArray = urlPath.split('/');
            var lastSegment = urlPathArray[urlPathArray.length - 1];
            console.log(lastSegment);
            _this.router.navigate([lastSegment]);
        });
    };
    return LandingPageComponent;
}());
LandingPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-landing-page',
        template: __webpack_require__("../../../../../src/app/landing-page/landing-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing-page/landing-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LandingPageComponent);

var _a, _b;
//# sourceMappingURL=landing-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/select-customer/select-customer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btnMargin {\r\n  margin-top: 7px;\r\n}\r\n.defaultCardStyle{\r\n  background: rgb(245,245,245);\r\n  padding: 10px;\r\n  margin-top: 15px;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/select-customer/select-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-md-7\">\r\n      <div class=\"card defaultCardStyle text-center\">\r\n        <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n          <h2 class=\"headerFont\"><strong>Look Up Customer By Phone Number</strong></h2>\r\n          <input type=\"text\" id=\"custSearchPhone\" class=\"form-control\" ngModel name=\"custSearchPhone\" placeholder=\"Enter 10 Digit Phone Number\" required minlength=\"10\" maxlength=\"10\">\r\n          <button class=\"btn btn-primary btnMargin\" type=\"submit\" [disabled]=\"!f.valid\">Submit</button>\r\n        </form>\r\n        <div *ngIf=\"errorMsg != ''\">\r\n          <div class=\"alert alert-danger\">{{errorMsg}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/select-customer/select-customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCustomerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_service__ = __webpack_require__("../../../../../src/app/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectCustomerComponent = (function () {
    function SelectCustomerComponent(customerService, dataService, router) {
        this.customerService = customerService;
        this.dataService = dataService;
        this.router = router;
        this.errorMsg = "";
    }
    SelectCustomerComponent.prototype.ngOnInit = function () {
    };
    SelectCustomerComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.value.custSearchPhone);
        this.dataService.getCustomer(form.value.custSearchPhone)
            .subscribe(function (response) {
            if (response.length > 0) {
                console.log(response);
                console.log(response[0]._id);
                var customerId = response[0]._id;
                var firstName = response[0].fName;
                var lastName = response[0].lName;
                var phoneNumber = response[0].phNumber;
                var email = response[0].email;
                _this.customerService.updateCurrentCust(customerId, firstName, lastName, phoneNumber, email);
                _this.errorMsg = "";
                _this.router.navigate(["/customerdashboard"]);
            }
            else {
                _this.errorMsg = "Number Not In Database";
            }
        }, function (error) { return console.log(error); });
    };
    return SelectCustomerComponent;
}());
SelectCustomerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-select-customer',
        template: __webpack_require__("../../../../../src/app/select-customer/select-customer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/select-customer/select-customer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__customer_service__["a" /* CustomerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], SelectCustomerComponent);

var _a, _b, _c;
//# sourceMappingURL=select-customer.component.js.map

/***/ }),

/***/ "../../../../../src/app/service-dashboard/service-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".defaultCardStyle{\r\n  background: rgb(245,245,245);\r\n  padding: 10px;\r\n  margin-top: 15px;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n\r\n.goldBack{\r\n  background: rgb(228,188,54);\r\n  border-style: solid;\r\n  border-color: black;\r\n  border-width: 2px;\r\n}\r\n\r\n.rowStyle {\r\n  background: rgb(0,62,83);\r\n  color: rgb(210,233,225);\r\n  cursor: pointer;\r\n}\r\n.pendingOrderStyle {\r\n  color: rgb(119,181,254);\r\n}\r\n.progressOrderStyle {\r\n  color: rgb(231,35,48);\r\n}\r\n.waitCustomerOrderStyle {\r\n  color: rgb(216,176,140);\r\n}\r\n.waitCustomerOrderStyle:hover {\r\n  color: rgb(216,176,140);\r\n}\r\n.waitPartsOrderStyle {\r\n  color: rgb(255,154,0);\r\n}\r\n.workCompOrderStyle {\r\n  color: rgb(172,189,55);\r\n}\r\n.rowStyle:hover{\r\n  background: rgb(210,233,225);\r\n  color: rgb(0,62,83);\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  border-color: rgb(228,188,54);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/service-dashboard/service-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card defaultCardStyle\">\r\n        <h1 class=\"text-center headerFont\"><strong>Dashboard</strong></h1>\r\n        <table class=\"table\">\r\n          <thead class=\"goldBack\">\r\n            <tr>\r\n              <th>Customer</th>\r\n              <th>Status</th>\r\n              <th>Vehicle</th>\r\n              <th>Location</th>\r\n              <th>Assigned</th>\r\n              <th>Services</th>\r\n              <th>Created</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let order of orders\" (click)=\"selectOrder(order._id)\" class=\"rowStyle\">\r\n              <td>{{order.cusFirstName}} {{order.cusLastName}}</td>\r\n              <td *ngIf=\"order.status == 'pending'\" class=\"pendingOrderStyle\">{{order.status | uppercase}}</td>\r\n              <td *ngIf=\"order.status == 'in progress'\" class=\"progressOrderStyle\">{{order.status | uppercase}}</td>\r\n              <td *ngIf=\"order.status == 'waiting on customer'\" class=\"waitCustomerOrderStyle\">{{order.status | uppercase}}</td>\r\n              <td *ngIf=\"order.status == 'waiting on parts'\" class=\"waitPartsOrderStyle\">{{order.status | uppercase}}</td>\r\n              <td *ngIf=\"order.status == 'work complete'\" class=\"workCompOrderStyle\">{{order.status | uppercase}}</td>\r\n              <td>{{order.cusCarMake}} {{order.cusCarModel}}, {{order.cusCarYear}}</td>\r\n              <td>{{order.location}}</td>\r\n              <td>{{order.cusAttendant}}</td>\r\n              <td>\r\n                <span *ngFor=\"let service of order.cusCarService\">\r\n                  <div *ngIf=\"service.status == 'pending'\" class=\"pendingOrderStyle\">{{service.type}}</div>\r\n                  <div *ngIf=\"service.status == 'complete'\" class=\"workCompOrderStyle\">{{service.type}}</div>\r\n                  <div *ngIf=\"service.status == 'recommended'\" class=\"waitCustomerOrderStyle\">{{service.type}}</div>\r\n                </span>\r\n              </td>\r\n              <td>{{order.created_at | date:\"medium\"}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/service-dashboard/service-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_order_service__ = __webpack_require__("../../../../../src/app/service-order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceDashboardComponent = (function () {
    function ServiceDashboardComponent(dataService, serviceOrderService, router) {
        this.dataService = dataService;
        this.serviceOrderService = serviceOrderService;
        this.router = router;
        this.orders = [];
    }
    ServiceDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getServiceOrders()
            .subscribe(function (order) {
            for (var i = 0; i < order.length; i++) {
                if (order[i].status != "closed") {
                    _this.orders.push(order[i]);
                }
            }
        }, function (error) { return console.log(error); });
    };
    ServiceDashboardComponent.prototype.selectOrder = function (value) {
        this.serviceOrderService.updateCurrentOrder(value);
        this.router.navigate(["/viewserviceorder"]);
    };
    ServiceDashboardComponent.prototype.logOut = function () {
        var _this = this;
        this.dataService.logOutUser()
            .subscribe(function (info) {
            console.log(info.url);
            var urlPath = info.url;
            var urlPathArray = urlPath.split('/');
            var lastSegment = urlPathArray[urlPathArray.length - 1];
            console.log(lastSegment);
            _this.router.navigate([lastSegment]);
        });
    };
    ServiceDashboardComponent.prototype.loggedInInfo = function () {
        this.dataService.getUserInfo()
            .subscribe(function (req) { return console.log(req); }, function (error) { return console.log(error); });
    };
    return ServiceDashboardComponent;
}());
ServiceDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-service-dashboard',
        template: __webpack_require__("../../../../../src/app/service-dashboard/service-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/service-dashboard/service-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_order_service__["a" /* ServiceOrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_order_service__["a" /* ServiceOrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ServiceDashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=service-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/service-order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceOrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiceOrderService = (function () {
    function ServiceOrderService() {
        this.currentServiceOrder = "";
        this.serviceOrderInfo = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    ServiceOrderService.prototype.updateCurrentOrder = function (id) {
        this.currentServiceOrder = id;
        console.log("Current order:");
        console.log(this.currentServiceOrder);
    };
    ServiceOrderService.prototype.currentServiceOrderInfo = function () {
        return this.currentServiceOrder;
    };
    return ServiceOrderService;
}());
ServiceOrderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ServiceOrderService);

//# sourceMappingURL=service-order.service.js.map

/***/ }),

/***/ "../../../../../src/app/service-order/service-order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btnMargin {\r\n  margin-top: 15px;\r\n}\r\n.btnSmallMargin {\r\n  margin-top: 7px;\r\n}\r\n.defaultCardStyle{\r\n  background: rgb(245,245,245);\r\n  padding: 10px;\r\n  margin-top: 15px;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/service-order/service-order.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card defaultCardStyle\">\r\n        <h1 class=\"text-center headerFont\"><strong>Enter Service Order</strong></h1>\r\n        <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n          <label for=\"cusFirstName\"><strong>First Name:</strong></label>\r\n          <input type=\"text\" id=\"cusFirstName\" class=\"form-control\" ngModel name=\"cusFirstName\" required>\r\n          <label for=\"cusLastName\"><strong>Last Name:</strong></label>\r\n          <input type=\"text\" id=\"cusLastName\" class=\"form-control\" ngModel name=\"cusLastName\" required>\r\n          <label for=\"cusPhoneNumber\"><strong>Phone Number:</strong></label>\r\n          <input type=\"text\" id=\"cusPhoneNumber\" class=\"form-control\" ngModel name=\"cusPhoneNumber\" required>\r\n          <label for=\"cusEmail\"><strong>Email:</strong></label>\r\n          <input type=\"email\" id=\"cusEmail\" class=\"form-control\" ngModel name=\"cusEmail\" required email>\r\n          <label for=\"cusCarVin\"><strong>VIN:</strong></label>\r\n          <input type=\"text\" id=\"cusCarVin\" class=\"form-control\" ngModel name=\"cusCarVin\" required>\r\n          <label for=\"cusCarMake\"><strong>Make:</strong></label>\r\n          <input type=\"text\" id=\"cusCarMake\" class=\"form-control\" ngModel name=\"cusCarMake\" required>\r\n          <label for=\"cusCarModel\"><strong>Model:</strong></label>\r\n          <input type=\"text\" id=\"cusCarModel\" class=\"form-control\" ngModel name=\"cusCarModel\" required>\r\n          <label for=\"cusCarYear\"><strong>Year:</strong></label>\r\n          <input type=\"text\" id=\"cusCarYear\" class=\"form-control\" ngModel name=\"cusCarYear\" required>\r\n          <label for=\"serviceAttendant\"><strong>Assigned To:</strong></label>\r\n          <select type=\"text\" id=\"serviceAttendant\" class=\"form-control\" ngModel name=\"cusAttendant\" required>\r\n            <option *ngFor=\"let employee of allEmployeesArray\" value=\"{{employee}}\">{{employee}}</option>\r\n          </select>\r\n          <label for=\"cusService\"><strong>Service:</strong></label>\r\n          <select type=\"text\" id=\"cusCarServiceOne\" class=\"form-control\" [(ngModel)]=\"cusCarServiceOne\" name=\"cusCarServiceOne\" required>\r\n            <option *ngFor=\"let service of cusCarServiceArray\" value='{\"type\":\"{{service.type}}\",\"price\":\"{{service.price}}\",\"desc\":\"{{service.desc}}\",\"status\":\"pending\"}'>{{service.type}}</option>\r\n          </select>\r\n          <button class=\"btn btn-link btn-sm\" type=\"button\" (click)=\"addServiceField()\">Another Service</button>\r\n          <div id=\"appendItemDiv\"></div>\r\n          <button class=\"btn btn-dark btnMargin\" type=\"submit\" [disabled]=\"!f.valid\">Submit Order</button>\r\n          <div *ngIf=\"successMessage != ''\">\r\n            <div class=\"alert alert-success btnSmallMargin\" >{{successMessage}}<div><button type=\"button\" class=\"btn btn-success btnSmallMargin\" routerLink=\"/servicedashboard\">Current Orders</button></div></div>\r\n          </div>\r\n          <div *ngIf=\"errorMsg != ''\">\r\n            <div class=\"alert alert-danger btnSmallMargin\">{{errorMsg}}</div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/service-order/service-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_service_service__ = __webpack_require__("../../../../../src/app/add-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiceOrderComponent = (function () {
    function ServiceOrderComponent(dataService, addServiceService) {
        this.dataService = dataService;
        this.addServiceService = addServiceService;
        this.cusCarService = [];
        this.cusCarServiceOne = "";
        this.cusCarServiceArray = [{ type: "", price: "", desc: "", status: "" }];
        this.count = 0;
        this.allEmployeesArray = [];
        this.successMessage = "";
        this.errorMsg = "";
    }
    ServiceOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addServiceService.getAllServices()
            .subscribe(function (services) {
            console.log(services);
            for (var i = 0; i < services.length; i++) {
                _this.cusCarServiceArray.push(services[i]);
            }
            console.log(_this.cusCarServiceArray);
        }, function (error) { return console.log(error); });
        this.loadAllEmployees();
    };
    ServiceOrderComponent.prototype.onSubmit = function (form) {
        var _this = this;
        // remove empty service fields and then post service
        this.successMessage = "";
        this.errorMsg = "";
        this.cusCarService = [];
        var jsonString = form.value.cusCarServiceOne;
        console.log("STRING ", jsonString);
        var jsonService = JSON.parse(jsonString);
        console.log("JSON: ", jsonService);
        if (jsonService.type != "" && jsonService.type != null) {
            this.cusCarService.push(jsonService);
        }
        for (var i = 1; i < this.count + 1; i++) {
            var serviceValue = $("#cusCarService-" + i).val().trim();
            // var jsonValString = "'" + serviceValue + "'";
            // console.log("json:", jsonValString);
            var jsonValue = JSON.parse(serviceValue);
            for (var j = 0; j < this.cusCarService.length; j++) {
                if (jsonValue.type == this.cusCarService[j].type) {
                    this.errorMsg = "You cannot enter duplicate services to a service order.";
                    return;
                }
            }
            if (jsonValue.type != "") {
                this.cusCarService.push(jsonValue);
            }
        }
        form.value.status = "pending";
        form.value.location = "Lot";
        form.value.cusCarService = this.cusCarService;
        this.dataService.postServiceOrder(form.value)
            .subscribe(function (info) {
            console.log(info);
            _this.successMessage = "Service Order Created";
        });
        //add customer if phone number is not already in database
        console.log(form.value.cusPhoneNumber);
        this.dataService.getCustomer(form.value.cusPhoneNumber)
            .subscribe(function (response) {
            if (response.length > 0) {
                console.log("already in database");
                $("#appendItemDiv").empty();
                _this.count = 0;
                form.reset();
            }
            else {
                var customerInfo = {
                    fName: form.value.cusFirstName,
                    lName: form.value.cusLastName,
                    phNumber: form.value.cusPhoneNumber,
                    email: form.value.cusEmail,
                    make: form.value.cusCarMake,
                    model: form.value.cusCarModel,
                    vin: form.value.cusCarVin,
                    year: form.value.cusCarYear
                };
                _this.dataService.addCustomer(customerInfo)
                    .subscribe(function (res) {
                    console.log("this was a success");
                    $("#appendItemDiv").empty();
                    _this.count = 0;
                    form.reset();
                });
            }
        }, function (error) { return console.log(error); });
    };
    ServiceOrderComponent.prototype.loadAllEmployees = function () {
        var _this = this;
        this.dataService.getAllEmployees()
            .subscribe(function (res) {
            console.log("Employees ", res);
            for (var i = 0; i < res.length; i++) {
                _this.allEmployeesArray.push(res[i].employeeName);
            }
        });
    };
    ServiceOrderComponent.prototype.addServiceField = function () {
        this.count++;
        var selectDiv = $("<select>");
        selectDiv.attr("id", "cusCarService-" + this.count);
        for (var i = 0; i < this.cusCarServiceArray.length; i++) {
            var option = $("<option>");
            var serviceText = this.cusCarServiceArray[i];
            var jsonValue = '{"type":"' + serviceText.type + '","price":"' + serviceText.price + '","desc":"' + serviceText.desc + '","status":"pending"}';
            option.attr("value", jsonValue);
            option.text(serviceText.type);
            selectDiv.append(option);
        }
        $("#appendItemDiv").append(selectDiv);
    };
    return ServiceOrderComponent;
}());
ServiceOrderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-service-order',
        template: __webpack_require__("../../../../../src/app/service-order/service-order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/service-order/service-order.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__add_service_service__["a" /* AddServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__add_service_service__["a" /* AddServiceService */]) === "function" && _b || Object])
], ServiceOrderComponent);

var _a, _b;
//# sourceMappingURL=service-order.component.js.map

/***/ }),

/***/ "../../../../../src/app/sign-up-form/sign-up-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btnMargin {\r\n  margin-top: 7px;\r\n}\r\n.defaultCardStyle{\r\n  background: rgb(245,245,245);\r\n  padding: 10px;\r\n  margin-top: 15px;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-up-form/sign-up-form.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"card defaultCardStyle\">\r\n  <h1 class=\"headerFont text-center\"><strong>Sign Up Customer</strong></h1>\r\n\r\n  <form (ngSubmit)='onSubmit(s)' #s='ngForm'>\r\n\r\n      <div class='form-group'>\r\n          <label for=\"fName\"><strong>First Name:</strong></label>\r\n          <input id='fName' type=\"text\" class='form-control' ngModel name='fName' required [(ngModel)]='s.fName' #fName='ngModel'>\r\n          <div *ngIf=\"fName.invalid && (fName.dirty || fName.touched)\" class=\"alert alert-danger\">\r\n              <div *ngIf=\"fName.errors.required\"> First Name is required.</div>\r\n          </div>\r\n      </div>\r\n      <div class='form-group'>\r\n      <label for=\"lName\"><strong>Last Name:</strong></label>\r\n      <input type=\"text\" id='lName' class='form-control' ngModel name='lName' required [(ngModel)]='s.lName' #lName='ngModel'>\r\n      <div *ngIf=\"lName.invalid && (lName.dirty || lName.touched)\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"lName.errors.required\"> Last Name is required.</div>\r\n      </div>\r\n      </div>\r\n      <div class='form-group'>\r\n        <label for=\"phNumber\"><strong>Phone Number:</strong></label>\r\n        <input type=\"text\" id='phNumber' class='form-control' ngModel name='phNumber'>\r\n      </div>\r\n      <div class='form-group'>\r\n        <label for=\"email\"><strong>Email address:</strong></label>\r\n        <input type=\"email\" id='email' class='form-control' ngModel name='email'>\r\n      </div>\r\n      <div class='form-group'>\r\n        <label for=\"make\"><strong>Make:</strong></label>\r\n        <input type=\"text\" id='make' class='form-control' ngModel name='make'>\r\n      </div>\r\n      <div class='form-group'>\r\n        <label for=\"model\"><strong>Model:</strong></label>\r\n        <input type=\"text\" id='model' class='form-control' ngModel name='model'>\r\n      </div>\r\n      <div class='form-group'>\r\n        <label for=\"vin\"><strong>VIN:</strong></label>\r\n        <input type=\"text\" id='vin' class='form-control' ngModel name='vin'>\r\n      </div>\r\n      <div class='form-group'>\r\n        <label for=\"year\"><strong>Year:</strong></label>\r\n        <input type=\"text\" id='year' class='form-control' ngModel name='year'>\r\n      </div>\r\n      <div class='form-group'>\r\n        <label for=\"engine\"><strong>Engine:</strong></label>\r\n        <input type=\"text\" id='engine' class='form-control' ngModel name='engine'>\r\n      </div>\r\n      <div class='form-group'>\r\n        <label for=\"tire\"><strong>Tire:</strong></label>\r\n        <input type=\"text\" id='tire' class='form-control' ngModel name='tire'>\r\n      </div>\r\n\r\n      <button type='submit' class=\"btn btn-primary btnMargin\" [disabled]='s.invalid'>Submit</button>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/sign-up-form/sign-up-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpFormComponent = (function () {
    function SignUpFormComponent(_dataService) {
        this._dataService = _dataService;
    }
    SignUpFormComponent.prototype.ngOnInit = function () {
        // this is the build of the form used in the html
        // this.customerFrm = this.fb.group({
        //   'fName' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(45)])],
        //   'lName' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        //   'phNumber' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        //   'email' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        //   'make' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        //   'model' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        //   'vin' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        //   'year' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        //   'engine' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        //   'tire' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        // });
    };
    //postCustomer function 
    SignUpFormComponent.prototype.onSubmit = function (s) {
        this._dataService.postCustomers(s.value)
            .subscribe(function (info) { return console.log(info); });
    };
    return SignUpFormComponent;
}());
SignUpFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-sign-up-form',
        template: __webpack_require__("../../../../../src/app/sign-up-form/sign-up-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sign-up-form/sign-up-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], SignUpFormComponent);

var _a;
//# sourceMappingURL=sign-up-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-signup/user-signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btnSmallMargin {\r\n  margin-top: 7px;\r\n}\r\n.defaultCardStyle{\r\n  background: rgb(245,245,245);\r\n  padding: 10px;\r\n  margin-top: 15px;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-signup/user-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"card defaultCardStyle\">\r\n        <form class=\"form-signin\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n          <h2 class=\"text-center headerFont\"><strong>Employee Sign Up</strong></h2>\r\n          <div class=\"form-group\">\r\n            <label for=\"fName\"><strong>First Name:</strong></label>\r\n            <input type=\"text\" id=\"fName\" ngModel name=\"fName\" class=\"form-control\" placeholder=\"First Name\" required autofocus>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"lName\"><strong>Last Name:</strong></label>\r\n            <input type=\"text\" id=\"lName\" ngModel name=\"lName\" class=\"form-control\" placeholder=\"Last Name\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n          <label for=\"userRole\"><strong>User Role:</strong></label>\r\n            <select type=\"text\" id=\"userRole\" ngModel name=\"userRole\" class=\"form-control\" placeholder=\"User Role\" required>\r\n              <option value=\"Admin\">Admin</option>\r\n              <option value=\"Mechanic\">Mechanic</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"text\"><strong>Email Address:</strong></label>\r\n            <input type=\"email\" id=\"inputEmail\" ngModel name=\"email\" class=\"form-control\" placeholder=\"Email address\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"inputPassword\"><strong>Password:</strong></label>\r\n            <input type=\"password\" id=\"inputPassword\" ngModel name=\"password\" class=\"form-control\" placeholder=\"Password\" required>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"inputPassword2\"><strong>Confirm Password:</strong></label>\r\n            <input type=\"password\" id=\"inputPassword2\" ngModel name=\"password2\" class=\"form-control\" placeholder=\"Confirm Password\" required>\r\n          </div>\r\n          <button class=\"btn btn-lg  btn-block btn-primary\" type=\"submit\">Sign Up</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user-signup/user-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserSignupComponent = (function () {
    function UserSignupComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    UserSignupComponent.prototype.ngOnInit = function () {
    };
    UserSignupComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.value);
        this.dataService.signUpUser(form.value)
            .subscribe(function (info) {
            console.log(info.url);
            var urlPath = info.url;
            var urlPathArray = urlPath.split('/');
            var lastSegment = urlPathArray[urlPathArray.length - 1];
            console.log(lastSegment);
            _this.router.navigate([lastSegment]);
        });
    };
    return UserSignupComponent;
}());
UserSignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-signup',
        template: __webpack_require__("../../../../../src/app/user-signup/user-signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-signup/user-signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UserSignupComponent);

var _a, _b;
//# sourceMappingURL=user-signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/view-customer-closed-order/view-customer-closed-order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".viewCustomerOrderStyle {\r\n  background: rgb(245,245,245);\r\n  padding: 10px;\r\n  margin-top: 15px;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n\r\n.headerColor {\r\n  color: rgb(0,62,83);\r\n}\r\n.greenColor {\r\n  color: green;\r\n}\r\n\r\n.yellowColor {\r\n  color: rgb(228,188,54);\r\n}\r\n\r\n.blueColor {\r\n  color: blue;\r\n}\r\n\r\n.redColor {\r\n  color: rgb(186,0,1);\r\n}\r\n\r\n.infoColor {\r\n  color: rgb(23,119,148);\r\n}\r\n\r\n\r\n.pendingColor {\r\n  color: rgb(0,23,164);\r\n}\r\n\r\n.inProgressColor {\r\n  color: rgb(255,102,2);\r\n}\r\n\r\n.partsColor {\r\n  color: rgb(196,0,123);\r\n}\r\n\r\n.customerColor {\r\n  color: rgb(255,0,2);\r\n}\r\n\r\n.workCompletedColor {\r\n  color: rgb(22,172,2);\r\n}\r\n.closedColor{\r\n  color: rgb(99,0,164);\r\n}\r\n.descStyle{\r\n  color: black;\r\n}\r\n.hoverItem:hover{\r\n  background: rgb(228,188,54);\r\n  cursor: pointer;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: rgb(0,62,83);\r\n}\r\n.clickedClass{\r\n  background: rgb(179,201,196);\r\n  cursor: pointer;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: rgb(0,62,83);\r\n}\r\n.approveSelectedBtn {\r\n  margin-right: 5px;\r\n}\r\n.declineBtn {\r\n  margin-right: 5px;\r\n}\r\n.bodyFont {\r\n  font-family: 'Bree Serif', serif;\r\n}\r\n.bodyColor {\r\n  color: rgb(29,89,179);\r\n}\r\n.priceFont {\r\n  font-family: 'Tinos', serif;\r\n}\r\n.statusFont {\r\n  font-family: 'Roboto Slab', serif;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-customer-closed-order/view-customer-closed-order.component.html":
/***/ (function(module, exports) {

module.exports = "<app-customer-header></app-customer-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card viewCustomerOrderStyle\">\n        <h1 class='text-center headerColor headerFont'><strong>View Service Order</strong></h1>\n        <hr>\n        <div *ngIf=\"orderInfo?.status =='closed'\">\n          <h3 class=\"text-center closedColor headerFont\"><strong>STATUS: {{orderInfo?.status |uppercase}}</strong></h3>\n        </div>\n        <hr>\n        <div *ngIf=\"recommendServiceArr.length > 0\">\n          <div class=\"text-center\">\n            <h4 class=\"pendingColor headerFont\"><u><strong>Recommended Services</strong></u></h4>\n              <h5 class='text-center customerColor headerFont'>(Please select services below)</h5>\n            <div *ngFor=\"let service of orderInfo?.cusCarService\">\n              <h5 *ngIf=\"service.status == 'recommended'\" class=\"infoColor hoverItem bodyFont\"><li><strong><u>{{service.type}} (${{service.price}})-</u></strong><p class=\"descStyle\">{{service.desc}}</p></li></h5>\n            </div>\n          </div>\n          <hr>\n        </div>\n        <div class=\"text-center\">\n          <h3 class=\"headerColor headerFont\"><strong><u>General Info</u></strong></h3>\n          <h5 class=\"bodyFont\">Make: {{orderInfo?.cusCarMake}}</h5>\n          <h5 class=\"bodyFont\">Model: {{orderInfo?.cusCarModel}}</h5>\n          <h5 class=\"bodyFont\">Year: {{orderInfo?.cusCarYear}}</h5>\n          <h5 class=\"bodyFont\">Attendant: {{orderInfo?.cusAttendant}}</h5>\n          <h5 class=\"bodyFont\">Location: {{orderInfo?.location}}</h5>\n          <h5 class=\"bodyFont\">Created: {{orderInfo?.created_at | date:\"medium\"}}</h5>\n          <h5 class=\"bodyFont\">Last Update: {{orderInfo?.updatedAt | date:\"medium\"}}</h5>\n        </div>\n        <hr>\n        <div class=\"text-center\">\n          <h3 class=\"headerColor headerFont\"><strong><u>Current Services</u></strong></h3>\n            <div *ngFor=\"let service of orderInfo?.cusCarService\" >\n              <h5 class=\"greenColor statusFont\"><li *ngIf=\"service.status == 'complete'\">{{service.status | uppercase}}: {{service.type}}</li></h5>\n            </div>\n        </div>\n        <div *ngIf=\"declinedServiceArr.length > 0\">\n          <hr>\n          <div class=\"text-center\">\n            <h3 class=\"headerColor headerFont\"><strong><u>Declined Recommendations</u></strong></h3>\n            <div *ngFor=\"let service of orderInfo?.cusCarService\" >\n              <h5 class=\"yellowColor statusFont\"><li *ngIf=\"service.status == 'declined'\">{{service.status | uppercase}}: {{service.type}}</li></h5>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card viewCustomerOrderStyle\">\n        <h1 class='text-center headerColor headerFont'><strong>Cost Breakdown</strong></h1>\n        <hr>\n        <div class=\"text-center\">\n          <h3 class=\"headerColor headerFont\"><strong><u>Completed Services</u></strong></h3>\n            <div *ngFor=\"let service of orderInfo?.cusCarService\" >\n              <h5 class=\"greenColor priceFont\"><li *ngIf=\"service.status == 'complete'\">{{service.type}}- ${{service.price | number: \"1.2-2\"}}</li></h5>\n            </div>\n        </div>\n        <hr>\n        <div class=\"text-center\">\n          <h3 class=\"headerColor headerFont\"><strong><u>Tax</u></strong></h3>\n          <h5 class=\"greenColor priceFont\">Current Services @ 7.5%: ${{taxCurrent | number: \"1.2-2\"}}</h5>\n          <hr>\n          <h3 class=\"headerColor headerFont\"><strong><u>Total</u></strong></h3>\n          <h5 class=\"greenColor priceFont\">Current Services: ${{totalCost | number: \"1.2-2\"}}</h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/view-customer-closed-order/view-customer-closed-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCustomerClosedOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_service_order_service__ = __webpack_require__("../../../../../src/app/customer-service-order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewCustomerClosedOrderComponent = (function () {
    function ViewCustomerClosedOrderComponent(customerServiceOrderService, dataService, router) {
        this.customerServiceOrderService = customerServiceOrderService;
        this.dataService = dataService;
        this.router = router;
        this.orderId = "";
        this.currentServiceArr = [];
        this.recommendServiceArr = [];
        this.declinedServiceArr = [];
        this.currentTotalCost = 0;
        this.selectedTotalCost = 0;
        this.totalCurrentAndSelectCost = 0;
        this.totalCost = 0;
        this.taxWithSelected = 0;
        this.taxCurrent = 0;
        this.selectedArray = [];
    }
    ViewCustomerClosedOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderId = this.customerServiceOrderService.currentServiceOrderInfo();
        if (this.orderId == "") {
            this.router.navigate(["/customerportal"]);
            return;
        }
        this.getOrderInfo(this.orderId);
        this.customerServiceOrderService.serviceOrderInfo.subscribe(function (id) {
            _this.getOrderInfo(id);
        });
    };
    ViewCustomerClosedOrderComponent.prototype.getOrderInfo = function (value) {
        var _this = this;
        this.dataService.getServiceOrder(this.orderId)
            .subscribe(function (response) {
            _this.orderInfo = response[0];
            _this.currentServiceArr = [];
            _this.recommendServiceArr = [];
            console.log(_this.orderInfo);
            console.log(_this.orderInfo.notes);
            for (var i = 0; i < response[0].cusCarService.length; i++) {
                if (response[0].cusCarService[i].status == "complete") {
                    _this.currentServiceArr.push(response[0].cusCarService[i]);
                }
            }
            for (var i = 0; i < response[0].cusCarService.length; i++) {
                if (response[0].cusCarService[i].status == "recommended") {
                    _this.recommendServiceArr.push(response[0].cusCarService[i]);
                }
            }
            for (var i = 0; i < response[0].cusCarService.length; i++) {
                if (response[0].cusCarService[i].status == "declined") {
                    _this.declinedServiceArr.push(response[0].cusCarService[i]);
                }
            }
            console.log("LENGTH OF REC: ", _this.recommendServiceArr);
            if (response[0].status == "waiting on customer" && _this.recommendServiceArr.length == 0) {
                var updateStatusObj = {
                    status: "pending"
                };
                _this.dataService.updateServiceOrder(_this.orderId, updateStatusObj)
                    .subscribe(function (res) {
                    _this.customerServiceOrderService.serviceOrderInfo.next(_this.orderId);
                });
            }
            console.log(_this.currentServiceArr);
            _this.getCurrentCost();
        }, function (error) { return console.log(error); });
    };
    ViewCustomerClosedOrderComponent.prototype.getCurrentCost = function () {
        this.currentTotalCost = 0;
        for (var i = 0; i < this.currentServiceArr.length; i++) {
            var serviceCost = parseFloat(this.currentServiceArr[i].price);
            this.currentTotalCost = this.currentTotalCost + serviceCost;
        }
        this.getTotalCost();
    };
    ViewCustomerClosedOrderComponent.prototype.getTotalCost = function () {
        this.taxCurrent = 0;
        this.totalCost = 0;
        this.taxCurrent = this.currentTotalCost * .075;
        this.totalCost = this.currentTotalCost + this.taxCurrent;
    };
    return ViewCustomerClosedOrderComponent;
}());
ViewCustomerClosedOrderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-view-customer-closed-order',
        template: __webpack_require__("../../../../../src/app/view-customer-closed-order/view-customer-closed-order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/view-customer-closed-order/view-customer-closed-order.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__customer_service_order_service__["a" /* CustomerServiceOrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__customer_service_order_service__["a" /* CustomerServiceOrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ViewCustomerClosedOrderComponent);

var _a, _b, _c;
//# sourceMappingURL=view-customer-closed-order.component.js.map

/***/ }),

/***/ "../../../../../src/app/view-customer-service-order/view-customer-service-order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".viewCustomerOrderStyle {\r\n  background: rgb(245,245,245);\r\n  padding: 10px;\r\n  margin-top: 15px;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n\r\n.headerColor {\r\n  color: rgb(0,62,83);\r\n}\r\n.greenColor {\r\n  color: green;\r\n}\r\n\r\n.yellowColor {\r\n  color: rgb(228,188,54);\r\n}\r\n\r\n.blueColor {\r\n  color: blue;\r\n}\r\n\r\n.redColor {\r\n  color: rgb(186,0,1);\r\n}\r\n\r\n.infoColor {\r\n  color: rgb(23,119,148);\r\n}\r\n\r\n\r\n.pendingColor {\r\n  color: rgb(0,23,164);\r\n}\r\n\r\n.inProgressColor {\r\n  color: rgb(255,102,2);\r\n}\r\n\r\n.partsColor {\r\n  color: rgb(196,0,123);\r\n}\r\n\r\n.customerColor {\r\n  color: rgb(255,0,2);\r\n}\r\n\r\n.workCompletedColor {\r\n  color: rgb(22,172,2);\r\n}\r\n.closedColor{\r\n  color: rgb(99,0,164);\r\n}\r\n.descStyle{\r\n  color: black;\r\n}\r\n.hoverItem:hover{\r\n  background: rgb(228,188,54);\r\n  cursor: pointer;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: rgb(0,62,83);\r\n}\r\n.clickedClass{\r\n  background: rgb(179,201,196);\r\n  cursor: pointer;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: rgb(0,62,83);\r\n}\r\n.approveSelectedBtn {\r\n  margin-right: 5px;\r\n}\r\n.declineBtn {\r\n  margin-right: 5px;\r\n}\r\n.bodyFont {\r\n  font-family: 'Bree Serif', serif;\r\n}\r\n.bodyColor {\r\n  color: rgb(29,89,179);\r\n}\r\n.priceFont {\r\n  font-family: 'Tinos', serif;\r\n}\r\n.statusFont {\r\n  font-family: 'Roboto Slab', serif;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-customer-service-order/view-customer-service-order.component.html":
/***/ (function(module, exports) {

module.exports = "<app-customer-header></app-customer-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card viewCustomerOrderStyle\">\n        <h1 class='text-center headerColor headerFont'><strong>View Service Order</strong></h1>\n        <hr>\n        <div *ngIf=\"orderInfo?.status =='pending'\">\n          <h3 class=\"text-center pendingColor headerFont\"><strong>STATUS: {{orderInfo?.status |uppercase}}</strong></h3>\n        </div>\n        <div *ngIf=\"orderInfo?.status =='in progress'\">\n          <h3 class=\"text-center inProgressColor headerFont\"><strong>STATUS: {{orderInfo?.status |uppercase}}</strong></h3>\n        </div>\n        <div *ngIf=\"orderInfo?.status =='waiting on parts'\">\n          <h3 class=\"text-center partsColor headerFont\"><strong>STATUS: {{orderInfo?.status |uppercase}}</strong></h3>\n        </div>\n        <div *ngIf=\"orderInfo?.status =='waiting on customer'\">\n          <h2 class=\"text-center customerColor headerFont\"><strong>STATUS: {{orderInfo?.status |uppercase}}</strong></h2>\n        </div>\n        <div *ngIf=\"orderInfo?.status =='work complete'\">\n          <h3 class=\"text-center workCompletedColor headerFont\"><strong>STATUS: {{orderInfo?.status |uppercase}}</strong></h3>\n        </div>\n        <div *ngIf=\"orderInfo?.status =='closed'\">\n          <h3 class=\"text-center closedColor headerFont\"><strong>STATUS: {{orderInfo?.status |uppercase}}</strong></h3>\n        </div>\n        <hr>\n        <div *ngIf=\"recommendServiceArr.length > 0\">\n          <div class=\"text-center\">\n            <h4 class=\"pendingColor headerFont\"><u><strong>Recommended Services</strong></u></h4>\n              <h5 class='text-center customerColor headerFont'>(Please select services below)</h5>\n            <div *ngFor=\"let service of orderInfo?.cusCarService\">\n              <h5 *ngIf=\"service.status == 'recommended'\" [ngClass]=\"{'clickedClass': isActive(service) }\" class=\"infoColor hoverItem bodyFont\" (click)=\"selectService(service)\"><li><strong><u>{{service.type}} (${{service.price}})-</u></strong><p class=\"descStyle\">{{service.desc}}</p></li></h5>\n            </div>\n            <div *ngIf=\"approveMessage != '' && selectedServicesArr.length > 0\">\n              <div class=\"alert alert-success\"><p>{{approveMessage}}</p><button class=\"btn btn-primary approveSelectedBtn\" (click)=\"updateSelectedService('pending')\">Confirm Approval</button><button class=\"btn btn-danger\" (click)=\"approveMessage = ''\">Cancel</button></div>\n            </div>\n            <div *ngIf=\"declineMessage != '' && selectedServicesArr.length > 0\">\n              <div class=\"alert alert-danger\"><p>{{declineMessage}}</p><button class=\"btn btn-warning declineBtn\" (click)=\"updateSelectedService('declined')\">Decline Services</button><button class=\"btn btn-danger\" (click)=\"declineMessage = ''\">Cancel</button></div>\n            </div>\n            <div *ngIf=\"declineMessage == '' && approveMessage == '' && selectedServicesArr.length > 0\">\n              <button class=\"btn btn-primary approveSelectedBtn\" (click)=\"showApproveMsg()\">Approve Selected</button><button class=\"btn btn-warning\" (click)=\"showDeclineMsg()\">Decline Selected</button>\n            </div>\n          </div>\n          <hr>\n        </div>\n        <div class=\"text-center\">\n          <h3 class=\"headerColor headerFont\"><strong><u>General Info</u></strong></h3>\n          <h5 class=\"bodyFont\">Make: {{orderInfo?.cusCarMake}}</h5>\n          <h5 class=\"bodyFont\">Model: {{orderInfo?.cusCarModel}}</h5>\n          <h5 class=\"bodyFont\">Year: {{orderInfo?.cusCarYear}}</h5>\n          <h5 class=\"bodyFont\">Attendant: {{orderInfo?.cusAttendant}}</h5>\n          <h5 class=\"bodyFont\">Location: {{orderInfo?.location}}</h5>\n          <h5 class=\"bodyFont\">Created: {{orderInfo?.created_at | date:\"medium\"}}</h5>\n          <h5 class=\"bodyFont\">Last Update: {{orderInfo?.updatedAt | date:\"medium\"}}</h5>\n        </div>\n        <hr>\n        <div class=\"text-center\">\n          <h3 class=\"headerColor headerFont\"><strong><u>Current Services</u></strong></h3>\n            <div *ngFor=\"let service of orderInfo?.cusCarService\" >\n              <h5 class=\"greenColor statusFont\"><li *ngIf=\"service.status == 'complete'\">{{service.status | uppercase}}: {{service.type}}</li></h5>\n              <h5 class=\"blueColor statusFont\"><li *ngIf=\"service.status == 'pending'\">{{service.status | uppercase}}: {{service.type}}</li></h5>\n            </div>\n        </div>\n        <div *ngIf=\"declinedServiceArr.length > 0\">\n          <hr>\n          <div class=\"text-center\">\n            <h3 class=\"headerColor headerFont\"><strong><u>Declined Recommendations</u></strong></h3>\n            <div *ngFor=\"let service of orderInfo?.cusCarService\" >\n              <h5 class=\"yellowColor statusFont\"><li *ngIf=\"service.status == 'declined'\">{{service.status | uppercase}}: {{service.type}}</li></h5>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card viewCustomerOrderStyle\">\n        <h1 class='text-center headerColor headerFont'><strong>Cost Breakdown</strong></h1>\n        <hr>\n        <div class=\"text-center\">\n          <h3 class=\"headerColor headerFont\"><strong><u>Current Services</u></strong></h3>\n            <div *ngFor=\"let service of orderInfo?.cusCarService\" >\n              <h5 class=\"greenColor priceFont\"><li *ngIf=\"service.status == 'complete' || service.status == 'pending'\">{{service.type}}- ${{service.price | number: \"1.2-2\"}}</li></h5>\n            </div>\n        </div>\n        <div *ngIf=\"selectedServicesArr.length > 0\">\n          <hr>\n          <div class=\"text-center\">\n            <h3 class=\"headerColor headerFont\"><strong><u>Selected Services</u></strong></h3>\n            <div *ngFor=\"let service of selectedServicesArr\">\n              <h5 class=\"infoColor priceFont\"><li>{{service.type}}- ${{service.price | number: \"1.2-2\"}}</li></h5>\n            </div>\n          </div>\n        </div>\n        <hr>\n        <div class=\"text-center\">\n          <h3 class=\"headerColor headerFont\"><strong><u>Tax</u></strong></h3>\n          <h5 class=\"greenColor priceFont\">Current Services @ 7.5%: ${{taxCurrent | number: \"1.2-2\"}}</h5>\n          <div *ngIf=\"selectedServicesArr.length > 0\">\n            <h5 class=\"infoColor priceFont\">Current and Selected Services @ 7.5%: ${{taxWithSelected | number: \"1.2-2\"}}</h5>\n          </div>\n          <hr>\n          <h3 class=\"headerColor headerFont\"><strong><u>Total</u></strong></h3>\n          <h5 class=\"greenColor priceFont\">Current Services: ${{totalCost | number: \"1.2-2\"}}</h5>\n          <div *ngIf=\"selectedServicesArr.length > 0\">\n            <h5 class=\"infoColor priceFont\">Current and Selected Services: ${{totalCurrentAndSelectCost | number: \"1.2-2\"}}</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/view-customer-service-order/view-customer-service-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCustomerServiceOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_service_order_service__ = __webpack_require__("../../../../../src/app/customer-service-order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewCustomerServiceOrderComponent = (function () {
    function ViewCustomerServiceOrderComponent(customerServiceOrderService, dataService, router) {
        this.customerServiceOrderService = customerServiceOrderService;
        this.dataService = dataService;
        this.router = router;
        this.orderId = "";
        this.declineMessage = "";
        this.approveMessage = "";
        this.currentServiceArr = [];
        this.recommendServiceArr = [];
        this.declinedServiceArr = [];
        this.selectedServicesArr = [];
        this.currentTotalCost = 0;
        this.selectedTotalCost = 0;
        this.totalCurrentAndSelectCost = 0;
        this.totalCost = 0;
        this.taxWithSelected = 0;
        this.taxCurrent = 0;
        this.selectedArray = [];
    }
    ViewCustomerServiceOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderId = this.customerServiceOrderService.currentServiceOrderInfo();
        if (this.orderId == "") {
            this.router.navigate(["/customerportal"]);
            return;
        }
        this.getOrderInfo(this.orderId);
        this.customerServiceOrderService.serviceOrderInfo.subscribe(function (id) {
            _this.getOrderInfo(id);
        });
    };
    ViewCustomerServiceOrderComponent.prototype.getOrderInfo = function (value) {
        var _this = this;
        this.dataService.getServiceOrder(this.orderId)
            .subscribe(function (response) {
            _this.orderInfo = response[0];
            _this.currentServiceArr = [];
            _this.recommendServiceArr = [];
            console.log(_this.orderInfo);
            console.log(_this.orderInfo.notes);
            for (var i = 0; i < response[0].cusCarService.length; i++) {
                if (response[0].cusCarService[i].status == "complete" || response[0].cusCarService[i].status === "pending") {
                    _this.currentServiceArr.push(response[0].cusCarService[i]);
                }
            }
            for (var i = 0; i < response[0].cusCarService.length; i++) {
                if (response[0].cusCarService[i].status == "recommended") {
                    _this.recommendServiceArr.push(response[0].cusCarService[i]);
                }
            }
            for (var i = 0; i < response[0].cusCarService.length; i++) {
                if (response[0].cusCarService[i].status == "declined") {
                    _this.declinedServiceArr.push(response[0].cusCarService[i]);
                }
            }
            console.log("LENGTH OF REC: ", _this.recommendServiceArr);
            if (response[0].status == "waiting on customer" && _this.recommendServiceArr.length == 0) {
                var updateStatusObj = {
                    status: "pending"
                };
                _this.dataService.updateServiceOrder(_this.orderId, updateStatusObj)
                    .subscribe(function (res) {
                    _this.customerServiceOrderService.serviceOrderInfo.next(_this.orderId);
                });
            }
            console.log(_this.currentServiceArr);
            _this.getCurrentCost();
        }, function (error) { return console.log(error); });
    };
    ViewCustomerServiceOrderComponent.prototype.selectService = function (service) {
        this.approveMessage = "";
        this.declineMessage = "";
        for (var i = 0; i < this.selectedServicesArr.length; i++) {
            if (service == this.selectedServicesArr[i]) {
                var newSelectArray = this.selectedServicesArr.filter(function (index) { return index != service; });
                this.selectedServicesArr = newSelectArray;
                this.getSelectedTotalCost();
                return;
            }
        }
        this.addServiceToDisplay(service);
    };
    ViewCustomerServiceOrderComponent.prototype.isActive = function (service) {
        for (var i = 0; i < this.selectedServicesArr.length; i++) {
            if (service == this.selectedServicesArr[i]) {
                return true;
            }
        }
        return false;
    };
    ;
    ViewCustomerServiceOrderComponent.prototype.addServiceToDisplay = function (service) {
        this.selectedServicesArr.push(service);
        console.log("Selected Array: ", this.selectedServicesArr);
        this.getSelectedTotalCost();
    };
    ViewCustomerServiceOrderComponent.prototype.getSelectedTotalCost = function () {
        this.selectedTotalCost = 0;
        for (var i = 0; i < this.selectedServicesArr.length; i++) {
            var serviceCost = parseFloat(this.selectedServicesArr[i].price);
            this.selectedTotalCost = this.selectedTotalCost + serviceCost;
        }
        console.log("Selected Total Cost: ", this.selectedTotalCost);
        this.getCurrentCost();
    };
    ViewCustomerServiceOrderComponent.prototype.getCurrentCost = function () {
        this.currentTotalCost = 0;
        for (var i = 0; i < this.currentServiceArr.length; i++) {
            var serviceCost = parseFloat(this.currentServiceArr[i].price);
            this.currentTotalCost = this.currentTotalCost + serviceCost;
        }
        this.getTotalCost();
    };
    ViewCustomerServiceOrderComponent.prototype.getTotalCost = function () {
        this.taxWithSelected = 0;
        this.taxCurrent = 0;
        this.totalCost = 0;
        this.totalCurrentAndSelectCost = 0;
        this.taxCurrent = this.currentTotalCost * .075;
        this.taxWithSelected = (this.selectedTotalCost + this.currentTotalCost) * .075;
        this.totalCost = this.currentTotalCost + this.taxCurrent;
        this.totalCurrentAndSelectCost = this.currentTotalCost + this.selectedTotalCost + this.taxWithSelected;
    };
    ViewCustomerServiceOrderComponent.prototype.showApproveMsg = function () {
        this.approveMessage = "";
        var chosenServices = "";
        for (var i = 0; i < this.selectedServicesArr.length; i++) {
            if (this.selectedServicesArr.length == 1) {
                chosenServices += this.selectedServicesArr[i].type;
            }
            else if (i == this.selectedServicesArr.length - 1) {
                chosenServices += " and " + this.selectedServicesArr[i].type;
            }
            else {
                chosenServices += " " + this.selectedServicesArr[i].type + ",";
            }
        }
        this.approveMessage = "Please confirm that you approve your mechanic to complete the " + chosenServices + ". This will bring your bill total to $" + this.totalCurrentAndSelectCost.toFixed(2) + ".";
    };
    ViewCustomerServiceOrderComponent.prototype.showDeclineMsg = function () {
        this.declineMessage = "";
        var chosenServices = "";
        for (var i = 0; i < this.selectedServicesArr.length; i++) {
            if (this.selectedServicesArr.length == 1) {
                chosenServices += this.selectedServicesArr[i].type;
            }
            else if (i == this.selectedServicesArr.length - 1) {
                chosenServices += " and " + this.selectedServicesArr[i].type;
            }
            else {
                chosenServices += " " + this.selectedServicesArr[i].type + ",";
            }
        }
        this.declineMessage = "Please confirm that you would like to decline the " + chosenServices + " recommended by your mechanic.";
    };
    ViewCustomerServiceOrderComponent.prototype.updateSelectedService = function (newStatus) {
        this.approveMessage = "";
        this.declineMessage = "";
        for (var i = 0; i < this.selectedServicesArr.length; i++) {
            var updateObj = {
                type: this.selectedServicesArr[i].type,
                newStatus: newStatus
            };
            this.dataService.updateServiceOrderService(this.orderId, updateObj)
                .subscribe(function (res) {
                console.log("service updated: ", res);
            });
        }
        this.customerServiceOrderService.serviceOrderInfo.next(this.orderId);
        this.selectedServicesArr = [];
        console.log("CURRENT SERVICES ARRAY: ", this.currentServiceArr);
    };
    return ViewCustomerServiceOrderComponent;
}());
ViewCustomerServiceOrderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-view-customer-service-order',
        template: __webpack_require__("../../../../../src/app/view-customer-service-order/view-customer-service-order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/view-customer-service-order/view-customer-service-order.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__customer_service_order_service__["a" /* CustomerServiceOrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__customer_service_order_service__["a" /* CustomerServiceOrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ViewCustomerServiceOrderComponent);

var _a, _b, _c;
//# sourceMappingURL=view-customer-service-order.component.js.map

/***/ }),

/***/ "../../../../../src/app/view-service-order/view-service-order-info/view-service-order-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".headerColor {\r\n  color: rgb(0,62,83);\r\n}\r\n.fireHeadColor {\r\n  color: rgb(204,47,18);\r\n}\r\n\r\n.greenColor {\r\n  color: green;\r\n}\r\n\r\n.yellowColor {\r\n  color: rgb(228,188,54);\r\n}\r\n\r\n.blueColor {\r\n  color: blue;\r\n}\r\n\r\n.redColor {\r\n  color: rgb(186,0,1);\r\n}\r\n\r\n.infoColor {\r\n  color: rgb(7,157,163);\r\n}\r\n.viewServiceOrderStyle {\r\n  background: rgb(245,245,245);\r\n  padding: 10px;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n.tabNavStyle {\r\n  margin-top: 15px;\r\n}\r\n.pillStyle {\r\n  cursor: pointer;\r\n  background: rgb(0,62,83);\r\n}\r\n.pillColor {\r\n  color: rgb(228,188,54);\r\n}\r\n\r\n.bodyFont {\r\n  font-family: 'Bree Serif', serif;\r\n}\r\n.bodyColor {\r\n  color: rgb(29,89,179);\r\n}\r\n.priceFont {\r\n  font-family: 'Tinos', serif;\r\n}\r\n.statusFont {\r\n  font-family: 'Roboto Slab', serif;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-service-order/view-service-order-info/view-service-order-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"toggleInfoView\">\r\n  <ul class=\"nav nav-pills tabNavStyle\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link pillStyle\" (click)=\"toggleInfoView = false\"><span class=\"pillColor\">Cost</span></a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"card viewServiceOrderStyle\">\r\n    <h2 class='text-center fireHeadColor headerFont'><strong>View Service Order</strong></h2>\r\n    <h3 class=\"headerColor headerFont\"><u>Customer Info</u></h3>\r\n    <h5 class=\"bodyFont\"><span class=\"bodyColor\">Name: </span>{{orderInfo?.cusFirstName}} {{orderInfo?.cusLastName}}</h5>\r\n    <h5 class=\"bodyFont\"><span class=\"bodyColor\">Phone Number: </span>{{orderInfo?.cusPhoneNumber}}</h5>\r\n    <h5 class=\"bodyFont\"><span class=\"bodyColor\">Email: </span>{{orderInfo?.cusEmail}}</h5>\r\n    <div *ngIf=\"currentServiceArr.length > 0\">\r\n      <h3 class=\"headerColor headerFont\"><u>Current Services</u></h3>\r\n      <div *ngFor=\"let service of currentServiceArr\">\r\n        <h5 *ngIf=\"service.status == 'complete'\" class=\"greenColor statusFont\"><li>{{service.status | uppercase}}: {{service.type}}</li></h5>\r\n        <h5 *ngIf=\"service.status == 'pending'\" class=\"blueColor statusFont\"><li>{{service.status | uppercase}}: {{service.type}}</li></h5>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"recServiceArr.length > 0\">\r\n      <h3 class=\"headerColor headerFont\"><u>Recommended Services</u></h3>\r\n      <div *ngFor=\"let service of recServiceArr\" >\r\n        <h5 class=\"infoColor statusFont\"><li *ngIf=\"service.status == 'recommended'\">{{service.status | uppercase}}: {{service.type}}</li></h5>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"declinedServiceArr.length > 0\">\r\n      <h3 class=\"headerColor headerFont\"><u>Declined Services</u></h3>\r\n      <div *ngFor=\"let service of declinedServiceArr\">\r\n        <h5 class=\"yellowColor statusFont\"><li *ngIf=\"service.status == 'declined'\">{{service.status | uppercase}}: {{service.type}}</li></h5>\r\n      </div>\r\n    </div>\r\n    <h3 class=\"headerColor headerFont\"><u>General Info</u></h3>\r\n    <h5 class=\"bodyFont\"><span class=\"bodyColor\">Status: </span>{{orderInfo?.status | uppercase}}</h5>\r\n    <h5 class=\"bodyFont\"><span class=\"bodyColor\">Make: </span>{{orderInfo?.cusCarMake}}</h5>\r\n    <h5 class=\"bodyFont\"><span class=\"bodyColor\">Model: </span>{{orderInfo?.cusCarModel}}</h5>\r\n    <h5 class=\"bodyFont\"><span class=\"bodyColor\">Year: </span>{{orderInfo?.cusCarYear}}</h5>\r\n    <h5 class=\"bodyFont\"><span class=\"bodyColor\">Attendant: </span>{{orderInfo?.cusAttendant}}</h5>\r\n    <h5 class=\"bodyFont\"><span class=\"bodyColor\">Location: </span>{{orderInfo?.location}}</h5>\r\n    <h5 class=\"bodyFont\"><span class=\"bodyColor\">Notes:</span></h5>\r\n    <ul>\r\n      <li *ngFor=\"let note of orderNotes\">{{note}}</li>\r\n    </ul>\r\n    <h5 class=\"bodyFont\"><span class=\"bodyColor\">Created: </span>{{orderInfo?.created_at | date:\"medium\"}}</h5>\r\n    <h5 class=\"bodyFont\"><span class=\"bodyColor\">Last Update: </span>{{orderInfo?.updatedAt | date:\"medium\"}}</h5>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!toggleInfoView\">\r\n  <ul class=\"nav nav-pills tabNavStyle\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link pillStyle\" (click)=\"toggleInfoView = true\"><span class=\"pillColor\">Info</span></a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"card viewServiceOrderStyle\">\r\n    <h2 class='text-center fireHeadColor headerFont'><strong>View Cost Breakdown</strong></h2>\r\n    <h3 class=\"text-center headerColor headerFont\"><u>Current Services</u></h3>\r\n      <div *ngFor=\"let service of currentServiceArr\">\r\n              <h5 class=\"greenColor text-center priceFont\"><li *ngIf=\"service.status == 'complete' || service.status == 'pending'\">{{service.type}}- ${{service.price | number: \"1.2-2\"}}</li></h5>\r\n      </div>\r\n      <div *ngIf=\"recServiceArr.length > 0\">\r\n        <hr>\r\n        <div class=\"text-center\">\r\n          <h3 class=\"headerColor headerFont\"><u>Recommended Services</u></h3>\r\n          <div *ngFor=\"let service of recServiceArr\">\r\n            <h5 class=\"bodyColor priceFont\"><li>{{service.type}}- ${{service.price | number: \"1.2-2\"}}</li></h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"text-center\">\r\n        <h3 class=\"headerColor headerFont\"><u>Tax</u></h3>\r\n        <h5 class=\"greenColor priceFont\">Current Services @ 7.5%: ${{taxCurrent | number: \"1.2-2\"}}</h5>\r\n        <div *ngIf=\"recServiceArr.length > 0\">\r\n          <h5 class=\"bodyColor priceFont\">Current and Recommended Services @ 7.5%: ${{taxWithRec | number: \"1.2-2\"}}</h5>\r\n        </div>\r\n        <hr>\r\n        <h3 class=\"headerColor headerFont\"><u>Total</u></h3>\r\n        <h5 class=\"greenColor priceFont\">Current Services: ${{totalCost | number: \"1.2-2\"}}</h5>\r\n        <div *ngIf=\"recServiceArr.length > 0\">\r\n          <h5 class=\"bodyColor priceFont\">Current and Recommended Services: ${{totalCurrentAndRecCost | number: \"1.2-2\"}}</h5>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/view-service-order/view-service-order-info/view-service-order-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewServiceOrderInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_order_service__ = __webpack_require__("../../../../../src/app/service-order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewServiceOrderInfoComponent = (function () {
    function ViewServiceOrderInfoComponent(serviceOrderService, dataService) {
        this.serviceOrderService = serviceOrderService;
        this.dataService = dataService;
        this.orderId = "";
        this.orderNotes = [];
        this.recServiceArr = [];
        this.declinedServiceArr = [];
        this.currentServiceArr = [];
        this.toggleInfoView = true;
        this.currentTotalCost = 0;
        this.recTotalCost = 0;
        this.totalCurrentAndRecCost = 0;
        this.totalCost = 0;
        this.taxWithRec = 0;
        this.taxCurrent = 0;
    }
    ViewServiceOrderInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderId = this.serviceOrderService.currentServiceOrderInfo();
        this.getOrderInfo(this.orderId);
        this.serviceOrderService.serviceOrderInfo.subscribe(function (id) {
            _this.getOrderInfo(id);
        });
    };
    ViewServiceOrderInfoComponent.prototype.getOrderInfo = function (value) {
        var _this = this;
        this.dataService.getServiceOrder(this.orderId)
            .subscribe(function (response) {
            _this.declinedServiceArr = [];
            _this.orderInfo = response[0];
            _this.orderNotes = response[0].notes;
            _this.recServiceArr = [];
            _this.currentServiceArr = [];
            console.log(_this.orderInfo);
            console.log(_this.orderInfo.notes);
            for (var i = 0; i < response[0].cusCarService.length; i++) {
                if (response[0].cusCarService[i].status == "recommended") {
                    _this.recServiceArr.push(response[0].cusCarService[i]);
                }
            }
            for (var i = 0; i < response[0].cusCarService.length; i++) {
                if (response[0].cusCarService[i].status === "declined") {
                    _this.declinedServiceArr.push(response[0].cusCarService[i]);
                }
            }
            for (var i = 0; i < response[0].cusCarService.length; i++) {
                if (response[0].cusCarService[i].status === "complete" || response[0].cusCarService[i].status === "pending") {
                    _this.currentServiceArr.push(response[0].cusCarService[i]);
                }
            }
            console.log(_this.recServiceArr);
            _this.getRecTotalCost();
        }, function (error) { return console.log(error); });
    };
    ViewServiceOrderInfoComponent.prototype.getRecTotalCost = function () {
        this.recTotalCost = 0;
        for (var i = 0; i < this.recServiceArr.length; i++) {
            var serviceCost = parseFloat(this.recServiceArr[i].price);
            this.recTotalCost = this.recTotalCost + serviceCost;
        }
        console.log("Rec Total Cost: ", this.recTotalCost);
        this.getCurrentCost();
    };
    ViewServiceOrderInfoComponent.prototype.getCurrentCost = function () {
        this.currentTotalCost = 0;
        for (var i = 0; i < this.currentServiceArr.length; i++) {
            var serviceCost = parseFloat(this.currentServiceArr[i].price);
            this.currentTotalCost = this.currentTotalCost + serviceCost;
        }
        this.getTotalCost();
    };
    ViewServiceOrderInfoComponent.prototype.getTotalCost = function () {
        this.taxWithRec = 0;
        this.taxCurrent = 0;
        this.totalCost = 0;
        this.totalCurrentAndRecCost = 0;
        this.taxCurrent = this.currentTotalCost * .075;
        this.taxWithRec = (this.recTotalCost + this.currentTotalCost) * .075;
        this.totalCost = this.currentTotalCost + this.taxCurrent;
        this.totalCurrentAndRecCost = this.currentTotalCost + this.recTotalCost + this.taxWithRec;
    };
    return ViewServiceOrderInfoComponent;
}());
ViewServiceOrderInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-view-service-order-info',
        template: __webpack_require__("../../../../../src/app/view-service-order/view-service-order-info/view-service-order-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/view-service-order/view-service-order-info/view-service-order-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_order_service__["a" /* ServiceOrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_order_service__["a" /* ServiceOrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object])
], ViewServiceOrderInfoComponent);

var _a, _b;
//# sourceMappingURL=view-service-order-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/view-service-order/view-service-order-update/view-service-order-update.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".viewServiceOrderStyle {\r\n  background: rgb(245,245,245);\r\n  padding: 10px;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n.headerColor {\r\n  color: rgb(0,62,83);\r\n}\r\n.tabNavStyle {\r\n  margin-top: 15px;\r\n}\r\n.pillStyle {\r\n  cursor: pointer;\r\n  background: rgb(0,62,83);\r\n}\r\n.pillColor {\r\n  color: rgb(228,188,54);\r\n}\r\n.smTopMargin {\r\n  margin-top: 7px;\r\n}\r\n.smRightMargin {\r\n  margin-right: 5px;\r\n}\r\n.bodyFont {\r\n  font-family: 'Bree Serif', serif;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-service-order/view-service-order-update/view-service-order-update.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"toggleUpdateView\">\r\n  <ul class=\"nav nav-pills tabNavStyle\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link pillStyle\" (click)=\"toggleUpdateView = false\"><span class=\"pillColor\">Services</span></a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"card viewServiceOrderStyle\">\r\n      <form (ngSubmit)=\"onSubmit(f);f.reset()\" #f=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <h2 class=\"text-center headerColor headerFont\"><strong>Update General Info</strong></h2>\r\n          <label for=\"status\"><strong>Status:</strong></label>\r\n          <select type=\"text\" id=\"status\" class=\"form-control\" ngModel name=\"status\">\r\n           <option value=\"\"></option>\r\n           <option value=\"pending\">Pending</option>\r\n           <option value=\"in progress\">In Progress</option>\r\n           <option value=\"waiting on parts\">Waiting on Parts</option>\r\n           <option value= \"waiting on customer\">Waiting on Customer</option>\r\n           <option value=\"work complete\">Work Completed</option>\r\n           <option value=\"closed\">Closed</option>\r\n         </select>\r\n         <label for=\"location\"><strong>Location:</strong></label>\r\n         <select type=\"text\" id=\"location\" class=\"form-control\" ngModel name=\"location\">\r\n          <option value=\"\"></option>\r\n          <option value=\"Lot\">Lot</option>\r\n          <option value=\"Bay-1\">Bay 1</option>\r\n          <option value=\"Bay-2\">Bay 2</option>\r\n          <option value=\"Bay-3\">Bay 3</option>\r\n        </select>\r\n        <label for=\"cusAttendant\"><strong>Attendant:</strong></label>\r\n        <select type=\"text\" id=\"cusAttendant\" class=\"form-control\" ngModel name=\"cusAttendant\" required>\r\n          <option *ngFor=\"let employee of allEmployeesArray\" value=\"{{employee}}\">{{employee}}</option>\r\n        </select>\r\n        <button type=\"submit\" class=\"btn btn-primary smTopMargin\">Update Info</button>\r\n      </div>\r\n    </form>\r\n    <form (ngSubmit)=\"onNoteSubmit(note);note.reset()\" #note=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"orderNotes\"><strong>Add Notes:</strong></label>\r\n        <textarea class=\"form-control\" type=\"text\" id=\"orderNotes\" name=\"notes\" ngModel required></textarea>\r\n        <button [disabled]=\"!note.valid\"  type=\"submit\" class=\"btn btn-success smTopMargin\">Add Note</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!toggleUpdateView\">\r\n  <ul class=\"nav nav-pills tabNavStyle\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link pillStyle\" (click)=\"toggleUpdateView = true\"><span class=\"pillColor\">General Info</span></a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"card viewServiceOrderStyle\">\r\n    <h2 class=\"text-center headerColor headerFont\"><strong>Update Services</strong></h2>\r\n    <form #newserv=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"newCarService\"><strong>Recommend Service:</strong></label>\r\n        <select type=\"text\" id=\"newCarService\" class=\"form-control\" ngModel name=\"newCarService\" required>\r\n          <option *ngFor=\"let service of allCarServiceArray\" value='{\"type\":\"{{service.type}}\",\"price\":\"{{service.price}}\",\"desc\":\"{{service.desc}}\",\"status\":\"recommended\"}'>{{service.type}}</option>\r\n        </select>\r\n        <button [disabled]=\"!newserv.valid\" (click)=\"addToProposeServArray(newserv); newserv.reset()\"  type=\"button\" class=\"btn btn-dark smTopMargin\">Enter</button>\r\n        <div *ngIf = \"addErrMsg != ''\" class=\"alert alert-danger\">\r\n          <p>{{addErrMsg}}</p>\r\n        </div>\r\n        <div *ngIf = \"addDecErrMsg != ''\" class=\"alert alert-danger text-center\">\r\n          <p>{{addDecErrMsg}}</p><button class=\"btn btn-warning\" (click)=\"changeToRec(declineToRecType)\">Confirm</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div *ngIf=\"curAddServiceArray.length > 0\">\r\n      <form #recserv=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"recCarService\"><strong>Update Recommended Services:</strong></label>\r\n          <select type=\"text\" id=\"recCarService\" class=\"form-control\" ngModel name=\"recCarService\" required>\r\n            <option *ngFor=\"let service of curAddServiceArray\" value='{\"type\":\"{{service.type}}\",\"price\":\"{{service.price}}\",\"desc\":\"{{service.desc}}\",\"status\":\"recommended\"}'>{{service.type}}</option>\r\n          </select>\r\n          <button [disabled]=\"!recserv.valid\" (click)=\"approveRecServ(recserv); recserv.reset()\" type=\"button\" class=\"btn btn-info smTopMargin smRightMargin\">Approve Service</button>\r\n          <button [disabled]=\"!recserv.valid\" (click)=\"declineRecServ(recserv); recserv.reset()\" type=\"button\" class=\"btn btn-warning smTopMargin smRightMargin\">Decline Service</button>\r\n          <button [disabled]=\"!recserv.valid\" (click)=\"removeRecService(recserv); recserv.reset()\" type=\"button\" class=\"btn btn-danger smTopMargin\">Remove Service</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <form #serv=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"curCarService\"><strong>Update Current Services:</strong></label>\r\n        <select type=\"text\" id=\"curCarService\" class=\"form-control\" ngModel name=\"curCarService\" required>\r\n          <option *ngFor=\"let service of curCarServiceArray\" value='{\"type\":\"{{service.type}}\"}'>{{service.type}} ({{service.status}})</option>\r\n        </select>\r\n        <button [disabled]=\"!serv.valid\" (click)=\"completeService(serv); serv.reset()\"  type=\"button\" class=\"btn btn-success smTopMargin smRightMargin\">Complete Service</button>\r\n        <button [disabled]=\"!serv.valid\" (click)=\"removeService(serv); serv.reset()\"  type=\"button\" class=\"btn btn-danger smTopMargin smRightMargin\">Remove Service</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/view-service-order/view-service-order-update/view-service-order-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewServiceOrderUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_order_service__ = __webpack_require__("../../../../../src/app/service-order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_service_service__ = __webpack_require__("../../../../../src/app/add-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewServiceOrderUpdateComponent = (function () {
    function ViewServiceOrderUpdateComponent(serviceOrderService, dataService, addServiceService, router) {
        this.serviceOrderService = serviceOrderService;
        this.dataService = dataService;
        this.addServiceService = addServiceService;
        this.router = router;
        this.orderId = "";
        this.orderNotes = [];
        this.curCarServiceArray = [];
        this.allCarServiceArray = [];
        this.curAddServiceArray = [];
        this.declineServiceArray = [];
        this.allEmployeesArray = [""];
        this.addErrMsg = "";
        this.addDecErrMsg = "";
        this.declineToRecType = "";
        this.toggleUpdateView = true;
    }
    ViewServiceOrderUpdateComponent.prototype.ngOnInit = function () {
        this.orderId = this.serviceOrderService.currentServiceOrderInfo();
        if (this.orderId == "") {
            this.router.navigate(["/servicedashboard"]);
            return;
        }
        this.getCurrentServices(this.orderId);
        this.getCurrentRecServices(this.orderId);
        this.loadAllServices();
        this.loadAllEmployees();
    };
    ViewServiceOrderUpdateComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.value.cusAttendant == "" || form.value.cusAttendant == null) {
            delete form.value.cusAttendant;
        }
        if (form.value.status == "" || form.value.status == null) {
            delete form.value.status;
        }
        if (form.value.location == "" || form.value.location == null) {
            delete form.value.location;
        }
        console.log(form.value);
        console.log(this.orderId);
        this.dataService.updateServiceOrder(this.orderId, form.value)
            .subscribe(function (res) {
            _this.serviceOrderService.serviceOrderInfo.next(_this.orderId);
        });
    };
    ViewServiceOrderUpdateComponent.prototype.onNoteSubmit = function (form) {
        var _this = this;
        console.log(form.value);
        this.dataService.addServiceOrderNote(this.orderId, form.value)
            .subscribe(function (res) {
            _this.serviceOrderService.serviceOrderInfo.next(_this.orderId);
        });
    };
    ViewServiceOrderUpdateComponent.prototype.getCurrentServices = function (value) {
        var _this = this;
        this.dataService.getServiceOrder(this.orderId)
            .subscribe(function (response) {
            console.log("Array for services: ", response[0]);
            _this.curCarServiceArray = [];
            for (var i = 0; i < response[0].cusCarService.length; i++) {
                if (response[0].cusCarService[i].status == "pending" || response[0].cusCarService[i].status == "complete") {
                    _this.curCarServiceArray.push(response[0].cusCarService[i]);
                }
            }
            console.log("Array after function ", _this.curCarServiceArray);
        }, function (error) { return console.log(error); });
    };
    ViewServiceOrderUpdateComponent.prototype.getCurrentRecServices = function (value) {
        var _this = this;
        this.curAddServiceArray = [];
        this.dataService.getServiceOrder(this.orderId)
            .subscribe(function (response) {
            console.log("Array for services: ", response[0]);
            for (var i = 0; i < response[0].cusCarService.length; i++) {
                if (response[0].cusCarService[i].status == "recommended") {
                    _this.curAddServiceArray.push(response[0].cusCarService[i]);
                }
            }
            for (var i = 0; i < response[0].cusCarService.length; i++) {
                if (response[0].cusCarService[i].status == "declined") {
                    _this.declineServiceArray.push(response[0].cusCarService[i]);
                }
            }
        }, function (error) { return console.log(error); });
    };
    ViewServiceOrderUpdateComponent.prototype.loadAllServices = function () {
        var _this = this;
        this.allCarServiceArray = [];
        this.addServiceService.getAllServices()
            .subscribe(function (services) {
            for (var i = 0; i < services.length; i++) {
                _this.allCarServiceArray.push(services[i]);
            }
            console.log(_this.allCarServiceArray);
        }, function (error) { return console.log(error); });
    };
    ViewServiceOrderUpdateComponent.prototype.loadAllEmployees = function () {
        var _this = this;
        this.dataService.getAllEmployees()
            .subscribe(function (res) {
            console.log("Employees ", res);
            for (var i = 0; i < res.length; i++) {
                _this.allEmployeesArray.push(res[i].employeeName);
            }
        });
    };
    ViewServiceOrderUpdateComponent.prototype.completeService = function (form) {
        var _this = this;
        console.log("Button value is: ", form.value.curCarService);
        var jsonString = form.value.curCarService;
        var jsonServiceObj = JSON.parse(jsonString);
        jsonServiceObj["newStatus"] = "complete";
        console.log("JSON OBJ: ", jsonServiceObj);
        this.dataService.updateServiceOrderService(this.orderId, jsonServiceObj)
            .subscribe(function (res) {
            _this.serviceOrderService.serviceOrderInfo.next(_this.orderId);
            _this.getCurrentServices(_this.orderId);
        });
    };
    ViewServiceOrderUpdateComponent.prototype.removeService = function (form) {
        var _this = this;
        var jsonString = form.value.curCarService;
        var jsonServiceObj = JSON.parse(jsonString);
        console.log("JSON OBJ: ", jsonServiceObj);
        this.dataService.removeServiceOrderService(this.orderId, jsonServiceObj)
            .subscribe(function (res) {
            _this.serviceOrderService.serviceOrderInfo.next(_this.orderId);
            _this.getCurrentServices(_this.orderId);
        });
    };
    ViewServiceOrderUpdateComponent.prototype.addToProposeServArray = function (form) {
        var _this = this;
        this.addErrMsg = "";
        this.addDecErrMsg = "";
        var jsonString = form.value.newCarService;
        var jsonServiceObj = JSON.parse(jsonString);
        for (var i = 0; i < this.curCarServiceArray.length; i++) {
            if (jsonServiceObj.type === this.curCarServiceArray[i].type) {
                this.addErrMsg = jsonServiceObj.type + " is already a current service";
                return;
            }
        }
        for (var i = 0; i < this.curAddServiceArray.length; i++) {
            if (jsonServiceObj.type === this.curAddServiceArray[i].type) {
                this.addErrMsg = jsonServiceObj.type + " is already a recommended service";
                return;
            }
        }
        for (var i = 0; i < this.declineServiceArray.length; i++) {
            if (jsonServiceObj.type === this.declineServiceArray[i].type) {
                this.declineToRecType = jsonServiceObj.type;
                this.addDecErrMsg = this.declineToRecType + " has already been declined by the customer.  Are you sure you want to recommend it again?";
                return;
            }
        }
        console.log("WE ARE GETTTING HERE");
        var addServiceObj = {
            cusCarService: jsonServiceObj
        };
        this.dataService.addServiceOrderService(this.orderId, addServiceObj)
            .subscribe(function (res) {
            console.log("the response object is", res);
            _this.serviceOrderService.serviceOrderInfo.next(_this.orderId);
            _this.getCurrentRecServices(_this.orderId);
        });
    };
    ViewServiceOrderUpdateComponent.prototype.approveRecServ = function (form) {
        var _this = this;
        var jsonString = form.value.recCarService;
        console.log("json String: ", jsonString);
        var jsonServiceObj = JSON.parse(jsonString);
        jsonServiceObj["newStatus"] = "pending";
        console.log("JSON OBJ: ", jsonServiceObj);
        this.dataService.updateServiceOrderService(this.orderId, jsonServiceObj)
            .subscribe(function (res) {
            _this.serviceOrderService.serviceOrderInfo.next(_this.orderId);
            _this.getCurrentServices(_this.orderId);
            _this.getCurrentRecServices(_this.orderId);
        });
    };
    ViewServiceOrderUpdateComponent.prototype.changeToRec = function (type) {
        var _this = this;
        var serviceUpdateObj = {
            type: type,
            newStatus: "recommended"
        };
        this.dataService.updateServiceOrderService(this.orderId, serviceUpdateObj)
            .subscribe(function (res) {
            _this.serviceOrderService.serviceOrderInfo.next(_this.orderId);
            _this.getCurrentRecServices(_this.orderId);
            _this.addDecErrMsg = "";
            return;
        });
    };
    ViewServiceOrderUpdateComponent.prototype.declineRecServ = function (form) {
        var _this = this;
        var jsonString = form.value.recCarService;
        var jsonServiceObj = JSON.parse(jsonString);
        jsonServiceObj["newStatus"] = "declined";
        console.log("JSON OBJ: ", jsonServiceObj);
        this.dataService.updateServiceOrderService(this.orderId, jsonServiceObj)
            .subscribe(function (res) {
            _this.serviceOrderService.serviceOrderInfo.next(_this.orderId);
            _this.getCurrentRecServices(_this.orderId);
        });
    };
    ViewServiceOrderUpdateComponent.prototype.removeRecService = function (form) {
        var _this = this;
        var jsonString = form.value.recCarService;
        var jsonServiceObj = JSON.parse(jsonString);
        console.log("JSON OBJ: ", jsonServiceObj);
        this.dataService.removeServiceOrderService(this.orderId, jsonServiceObj)
            .subscribe(function (res) {
            _this.serviceOrderService.serviceOrderInfo.next(_this.orderId);
            _this.getCurrentRecServices(_this.orderId);
        });
    };
    return ViewServiceOrderUpdateComponent;
}());
ViewServiceOrderUpdateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-view-service-order-update',
        template: __webpack_require__("../../../../../src/app/view-service-order/view-service-order-update/view-service-order-update.component.html"),
        styles: [__webpack_require__("../../../../../src/app/view-service-order/view-service-order-update/view-service-order-update.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_order_service__["a" /* ServiceOrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_order_service__["a" /* ServiceOrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__add_service_service__["a" /* AddServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__add_service_service__["a" /* AddServiceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], ViewServiceOrderUpdateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=view-service-order-update.component.js.map

/***/ }),

/***/ "../../../../../src/app/view-service-order/view-service-order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".viewServiceOrderStyle {\r\n  background: rgb(245,245,245);\r\n  padding: 10px;\r\n  margin-top: 15px;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  border-color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-service-order/view-service-order.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <app-view-service-order-update></app-view-service-order-update>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <app-view-service-order-info></app-view-service-order-info>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/view-service-order/view-service-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewServiceOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_order_service__ = __webpack_require__("../../../../../src/app/service-order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewServiceOrderComponent = (function () {
    function ViewServiceOrderComponent(serviceOrderService, dataService) {
        this.serviceOrderService = serviceOrderService;
        this.dataService = dataService;
        this.orderId = "";
        this.orderNotes = [];
    }
    ViewServiceOrderComponent.prototype.ngOnInit = function () {
    };
    ViewServiceOrderComponent.prototype.onSubmit = function (form) {
        if (form.value.cusAttendant == "" || form.value.cusAttendant == null) {
            delete form.value.cusAttendant;
        }
        if (form.value.status == "" || form.value.status == null) {
            delete form.value.status;
        }
        if (form.value.location == "" || form.value.location == null) {
            delete form.value.location;
        }
        console.log(form.value);
        console.log(this.orderId);
        this.dataService.updateServiceOrder(this.orderId, form.value)
            .subscribe(function (res) {
            // this.getOrderInfo(this.orderId);
        });
    };
    ViewServiceOrderComponent.prototype.onNoteSubmit = function (form) {
        console.log(form.value);
        this.dataService.addServiceOrderNote(this.orderId, form.value)
            .subscribe(function (res) {
            // this.getOrderInfo(this.orderId);
        });
    };
    return ViewServiceOrderComponent;
}());
ViewServiceOrderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-view-service-order',
        template: __webpack_require__("../../../../../src/app/view-service-order/view-service-order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/view-service-order/view-service-order.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_order_service__["a" /* ServiceOrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_order_service__["a" /* ServiceOrderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object])
], ViewServiceOrderComponent);

var _a, _b;
//# sourceMappingURL=view-service-order.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map