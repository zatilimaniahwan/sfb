(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["role-role-module"],{

/***/ "./src/app/role/role.module.ts":
/*!*************************************!*\
  !*** ./src/app/role/role.module.ts ***!
  \*************************************/
/*! exports provided: RolePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolePageModule", function() { return RolePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _role_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./role.page */ "./src/app/role/role.page.ts");







var routes = [
    {
        path: '',
        component: _role_page__WEBPACK_IMPORTED_MODULE_6__["RolePage"]
    }
];
var RolePageModule = /** @class */ (function () {
    function RolePageModule() {
    }
    RolePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_role_page__WEBPACK_IMPORTED_MODULE_6__["RolePage"]]
        })
    ], RolePageModule);
    return RolePageModule;
}());



/***/ }),

/***/ "./src/app/role/role.page.html":
/*!*************************************!*\
  !*** ./src/app/role/role.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title>Choose Role</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-label>Click the provided role when to use the application</ion-label>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <ion-item>\n      <ion-icon name=\"people\" slot=\"start\"></ion-icon>\n      <ion-label>Donator</ion-label>\n    </ion-item>\n  </ion-card>\n  <ion-card tappable (click)=\"viewLogin()\">\n      <ion-item>\n        <ion-icon name=\"business\" slot=\"start\"></ion-icon>\n        <ion-label>Charity</ion-label>\n      </ion-item>\n    </ion-card>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/role/role.page.scss":
/*!*************************************!*\
  !*** ./src/app/role/role.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGUvcm9sZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/role/role.page.ts":
/*!***********************************!*\
  !*** ./src/app/role/role.page.ts ***!
  \***********************************/
/*! exports provided: RolePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolePage", function() { return RolePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var RolePage = /** @class */ (function () {
    function RolePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RolePage.prototype.viewLogin = function () {
        this.navCtrl.navigateForward('login');
    };
    RolePage.prototype.ngOnInit = function () {
    };
    RolePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.page.html */ "./src/app/role/role.page.html"),
            styles: [__webpack_require__(/*! ./role.page.scss */ "./src/app/role/role.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], RolePage);
    return RolePage;
}());



/***/ })

}]);
//# sourceMappingURL=role-role-module.js.map