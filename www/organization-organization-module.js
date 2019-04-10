(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organization-organization-module"],{

/***/ "./src/app/organization/organization.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/organization/organization.module.ts ***!
  \*****************************************************/
/*! exports provided: OrganizationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationPageModule", function() { return OrganizationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _organization_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organization.page */ "./src/app/organization/organization.page.ts");







var routes = [
    {
        path: '',
        component: _organization_page__WEBPACK_IMPORTED_MODULE_6__["OrganizationPage"]
    }
];
var OrganizationPageModule = /** @class */ (function () {
    function OrganizationPageModule() {
    }
    OrganizationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_organization_page__WEBPACK_IMPORTED_MODULE_6__["OrganizationPage"]]
        })
    ], OrganizationPageModule);
    return OrganizationPageModule;
}());



/***/ }),

/***/ "./src/app/organization/organization.page.html":
/*!*****************************************************!*\
  !*** ./src/app/organization/organization.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n    <ion-toolbar>\n        <ion-title>{{title}}</ion-title> \n        <ion-button fill=\"blank\" slot=\"start\" (click)=\"previous()\">\n            <ion-icon slot=\"start\"  name=\"arrow-back\"></ion-icon>\n          </ion-button>\n    </ion-toolbar>\n    <ion-toolbar>\n        <ion-segment [(ngModel)]=\"menuType\">\n            <ion-segment-button value=\"organization\"(ionSelect)=\"segmentOrganization()\">\n              <ion-label>Organization</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"staff\"(ionSelect)=\"segmentStaff()\">\n              <ion-label>Staff</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n    </ion-toolbar>\n    <ion-toolbar>\n        <ion-searchbar  animated slot=\"start\" ></ion-searchbar>\n        <ion-button fill=\"blank\" slot=\"end\" (click)=\"viewFilter()\">\n            <ion-icon slot=\"end\"  name=\"options\"></ion-icon>\n          </ion-button>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n      <ion-card tappable ngIf=\"cardOrg\" *ngFor=\"let item of items; let index=index\" (click)=\"editOrg(item.id)\">\n        <ion-card-header>\n          <ion-list lines=\"none\">\n            <ion-item >\n              <ion-icon name=\"contact\" slot=\"start\"></ion-icon>\n                <ion-card-subtitle slot=\"start\">{{item.organization_code}}</ion-card-subtitle>\n            </ion-item>\n          </ion-list>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-label>{{item.staff_id}}</ion-label><br>\n          <ion-label>{{item.fullname}}</ion-label>\n        </ion-card-content>\n      </ion-card>\n      <ion-card tappable ngIf=\"cardOrg\" *ngFor=\"let item of items; let index=index\" (click)=\"editStaff(item.id)\">\n          <ion-card-header>\n            <ion-list lines=\"none\">\n              <ion-item >\n                <ion-icon name=\"contact\" slot=\"start\"></ion-icon>\n                  <ion-card-subtitle slot=\"start\">{{item.organization_code}}</ion-card-subtitle>\n              </ion-item>\n            </ion-list>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-label>{{item.staff_id}}</ion-label><br>\n            <ion-label>{{item.fullname}}</ion-label>\n          </ion-card-content>\n        </ion-card>\n      <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"org\">\n          <ion-fab-button (click)=\"createOrg()\">\n            <ion-icon name=\"create\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>\n      <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"staff\">\n          <ion-fab-button (click)=\"createStaff()\">\n            <ion-icon name=\"create\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>\n      \n     \n         \n    </ion-content>\n    \n"

/***/ }),

/***/ "./src/app/organization/organization.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/organization/organization.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/organization/organization.page.ts":
/*!***************************************************!*\
  !*** ./src/app/organization/organization.page.ts ***!
  \***************************************************/
/*! exports provided: OrganizationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationPage", function() { return OrganizationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _organization_form_organization_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organization-form/organization-form.page */ "./src/app/organization-form/organization-form.page.ts");
/* harmony import */ var _staff_form_staff_form_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../staff-form/staff-form.page */ "./src/app/staff-form/staff-form.page.ts");






var OrganizationPage = /** @class */ (function () {
    function OrganizationPage(navCtrl, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.title = '';
        this.title = 'Organization';
    }
    OrganizationPage.prototype.previous = function () {
        this.navCtrl.navigateForward('/tabs/tab4');
    };
    OrganizationPage.prototype.ngOnInit = function () {
        var _this = this;
        this.org = true;
        this.staff = false;
        this.cardOrg = true;
        this.cardStaff = false;
        var url = 'http://localhost/smartfoodbank/organization/organizations';
        this.data = this.http.get(url);
        this.data.subscribe(function (data) {
            _this.items = data;
        });
    };
    OrganizationPage.prototype.segmentOrganization = function () {
        var _this = this;
        this.title = 'Organization';
        this.org = true;
        this.staff = false;
        this.cardOrg = true;
        this.cardStaff = false;
        var url = 'http://localhost/smartfoodbank/organization/organizations';
        this.data = this.http.get(url);
        this.data.subscribe(function (data) {
            _this.items = data;
        });
    };
    OrganizationPage.prototype.segmentStaff = function () {
        var _this = this;
        this.title = 'Staff';
        this.org = false;
        this.staff = true;
        this.cardOrg = false;
        this.cardStaff = true;
        var url = 'http://localhost/smartfoodbank/staff/staffs';
        this.data = this.http.get(url);
        this.data.subscribe(function (data) {
            _this.items = data;
        });
    };
    OrganizationPage.prototype.createOrg = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _organization_form_organization_form_page__WEBPACK_IMPORTED_MODULE_4__["OrganizationFormPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [2 /*return*/, modal.present()];
                }
            });
        });
    };
    OrganizationPage.prototype.createStaff = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _staff_form_staff_form_page__WEBPACK_IMPORTED_MODULE_5__["StaffFormPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [2 /*return*/, modal.present()];
                }
            });
        });
    };
    OrganizationPage.prototype.editOrg = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _organization_form_organization_form_page__WEBPACK_IMPORTED_MODULE_4__["OrganizationFormPage"],
                            componentProps: { value: id }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [2 /*return*/, modal.present()];
                }
            });
        });
    };
    OrganizationPage.prototype.editStaff = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _staff_form_staff_form_page__WEBPACK_IMPORTED_MODULE_5__["StaffFormPage"],
                            componentProps: { value: id }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [2 /*return*/, modal.present()];
                }
            });
        });
    };
    OrganizationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organization',
            template: __webpack_require__(/*! ./organization.page.html */ "./src/app/organization/organization.page.html"),
            styles: [__webpack_require__(/*! ./organization.page.scss */ "./src/app/organization/organization.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], OrganizationPage);
    return OrganizationPage;
}());



/***/ })

}]);
//# sourceMappingURL=organization-organization-module.js.map