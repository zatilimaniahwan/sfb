(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donation-edit-donation-edit-module"],{

/***/ "./src/app/donation-edit/donation-edit.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/donation-edit/donation-edit.module.ts ***!
  \*******************************************************/
/*! exports provided: DonationEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationEditPageModule", function() { return DonationEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _donation_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donation-edit.page */ "./src/app/donation-edit/donation-edit.page.ts");







var routes = [
    {
        path: '',
        component: _donation_edit_page__WEBPACK_IMPORTED_MODULE_6__["DonationEditPage"]
    }
];
var DonationEditPageModule = /** @class */ (function () {
    function DonationEditPageModule() {
    }
    DonationEditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_donation_edit_page__WEBPACK_IMPORTED_MODULE_6__["DonationEditPage"]]
        })
    ], DonationEditPageModule);
    return DonationEditPageModule;
}());



/***/ }),

/***/ "./src/app/donation-edit/donation-edit.page.html":
/*!*******************************************************!*\
  !*** ./src/app/donation-edit/donation-edit.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>donationEdit</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/donation-edit/donation-edit.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/donation-edit/donation-edit.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvbmF0aW9uLWVkaXQvZG9uYXRpb24tZWRpdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/donation-edit/donation-edit.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/donation-edit/donation-edit.page.ts ***!
  \*****************************************************/
/*! exports provided: DonationEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationEditPage", function() { return DonationEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DonationEditPage = /** @class */ (function () {
    function DonationEditPage() {
    }
    DonationEditPage.prototype.ngOnInit = function () {
    };
    DonationEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-donation-edit',
            template: __webpack_require__(/*! ./donation-edit.page.html */ "./src/app/donation-edit/donation-edit.page.html"),
            styles: [__webpack_require__(/*! ./donation-edit.page.scss */ "./src/app/donation-edit/donation-edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DonationEditPage);
    return DonationEditPage;
}());



/***/ })

}]);
//# sourceMappingURL=donation-edit-donation-edit-module.js.map