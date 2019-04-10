(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donation-filter-donation-filter-module"],{

/***/ "./src/app/donation-filter/donation-filter.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/donation-filter/donation-filter.module.ts ***!
  \***********************************************************/
/*! exports provided: DonationFilterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationFilterPageModule", function() { return DonationFilterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _donation_filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donation-filter.page */ "./src/app/donation-filter/donation-filter.page.ts");







var routes = [
    {
        path: '',
        component: _donation_filter_page__WEBPACK_IMPORTED_MODULE_6__["DonationFilterPage"]
    }
];
var DonationFilterPageModule = /** @class */ (function () {
    function DonationFilterPageModule() {
    }
    DonationFilterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_donation_filter_page__WEBPACK_IMPORTED_MODULE_6__["DonationFilterPage"]]
        })
    ], DonationFilterPageModule);
    return DonationFilterPageModule;
}());



/***/ }),

/***/ "./src/app/donation-filter/donation-filter.page.html":
/*!***********************************************************!*\
  !*** ./src/app/donation-filter/donation-filter.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"previous()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\n          </ion-buttons>\n      <ion-title>Filter</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n      <ion-list lines=\"none\">\n          <ion-label>Status</ion-label>\n          <ion-item >\n              <ion-chip color=\"secondary\"> <ion-label>Not collected</ion-label></ion-chip>\n              <ion-chip color=\"tertiary\"> <ion-label>Collected</ion-label></ion-chip>\n          </ion-item>\n      </ion-list>\n      <ion-list>\n          <ion-label>Name of Food Bank</ion-label>\n          <ion-select placeholder=\"Select One\">\n            <ion-select-option value=\"f\">Female</ion-select-option>\n            <ion-select-option value=\"m\">Male</ion-select-option>\n          </ion-select>\n      </ion-list>\n      <ion-list>\n          <ion-label>State</ion-label>\n          <ion-select placeholder=\"Select One\">\n            <ion-select-option value=\"f\">Female</ion-select-option>\n            <ion-select-option value=\"m\">Male</ion-select-option>\n          </ion-select>\n      </ion-list>\n    <ion-list>\n        <ion-button expand=\"block\" fill=\"outline\"><ion-icon slot=\"start\" name=\"search\"></ion-icon>Search</ion-button>\n    </ion-list>\n           \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/donation-filter/donation-filter.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/donation-filter/donation-filter.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvbmF0aW9uLWZpbHRlci9kb25hdGlvbi1maWx0ZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/donation-filter/donation-filter.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/donation-filter/donation-filter.page.ts ***!
  \*********************************************************/
/*! exports provided: DonationFilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationFilterPage", function() { return DonationFilterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var DonationFilterPage = /** @class */ (function () {
    function DonationFilterPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DonationFilterPage.prototype.previous = function () {
        this.navCtrl.navigateForward('/tabs/tab2');
    };
    DonationFilterPage.prototype.ngOnInit = function () {
    };
    DonationFilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-donation-filter',
            template: __webpack_require__(/*! ./donation-filter.page.html */ "./src/app/donation-filter/donation-filter.page.html"),
            styles: [__webpack_require__(/*! ./donation-filter.page.scss */ "./src/app/donation-filter/donation-filter.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], DonationFilterPage);
    return DonationFilterPage;
}());



/***/ })

}]);
//# sourceMappingURL=donation-filter-donation-filter-module.js.map