(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["boxinfo-boxinfo-module"],{

/***/ "./src/app/boxinfo/boxinfo.module.ts":
/*!*******************************************!*\
  !*** ./src/app/boxinfo/boxinfo.module.ts ***!
  \*******************************************/
/*! exports provided: BoxinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxinfoPageModule", function() { return BoxinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _boxinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boxinfo.page */ "./src/app/boxinfo/boxinfo.page.ts");







var routes = [
    {
        path: '',
        component: _boxinfo_page__WEBPACK_IMPORTED_MODULE_6__["BoxinfoPage"]
    }
];
var BoxinfoPageModule = /** @class */ (function () {
    function BoxinfoPageModule() {
    }
    BoxinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_boxinfo_page__WEBPACK_IMPORTED_MODULE_6__["BoxinfoPage"]]
        })
    ], BoxinfoPageModule);
    return BoxinfoPageModule;
}());



/***/ }),

/***/ "./src/app/boxinfo/boxinfo.page.html":
/*!*******************************************!*\
  !*** ./src/app/boxinfo/boxinfo.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>boxinfo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/boxinfo/boxinfo.page.scss":
/*!*******************************************!*\
  !*** ./src/app/boxinfo/boxinfo.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JveGluZm8vYm94aW5mby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/boxinfo/boxinfo.page.ts":
/*!*****************************************!*\
  !*** ./src/app/boxinfo/boxinfo.page.ts ***!
  \*****************************************/
/*! exports provided: BoxinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxinfoPage", function() { return BoxinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoxinfoPage = /** @class */ (function () {
    function BoxinfoPage() {
    }
    BoxinfoPage.prototype.ngOnInit = function () {
    };
    BoxinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-boxinfo',
            template: __webpack_require__(/*! ./boxinfo.page.html */ "./src/app/boxinfo/boxinfo.page.html"),
            styles: [__webpack_require__(/*! ./boxinfo.page.scss */ "./src/app/boxinfo/boxinfo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BoxinfoPage);
    return BoxinfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=boxinfo-boxinfo-module.js.map