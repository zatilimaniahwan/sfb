(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["audittrail-audittrail-module"],{

/***/ "./src/app/audittrail/audittrail.module.ts":
/*!*************************************************!*\
  !*** ./src/app/audittrail/audittrail.module.ts ***!
  \*************************************************/
/*! exports provided: AudittrailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudittrailPageModule", function() { return AudittrailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _audittrail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audittrail.page */ "./src/app/audittrail/audittrail.page.ts");







var routes = [
    {
        path: '',
        component: _audittrail_page__WEBPACK_IMPORTED_MODULE_6__["AudittrailPage"]
    }
];
var AudittrailPageModule = /** @class */ (function () {
    function AudittrailPageModule() {
    }
    AudittrailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_audittrail_page__WEBPACK_IMPORTED_MODULE_6__["AudittrailPage"]]
        })
    ], AudittrailPageModule);
    return AudittrailPageModule;
}());



/***/ }),

/***/ "./src/app/audittrail/audittrail.page.html":
/*!*************************************************!*\
  !*** ./src/app/audittrail/audittrail.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>audittrail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/audittrail/audittrail.page.scss":
/*!*************************************************!*\
  !*** ./src/app/audittrail/audittrail.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1ZGl0dHJhaWwvYXVkaXR0cmFpbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/audittrail/audittrail.page.ts":
/*!***********************************************!*\
  !*** ./src/app/audittrail/audittrail.page.ts ***!
  \***********************************************/
/*! exports provided: AudittrailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudittrailPage", function() { return AudittrailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AudittrailPage = /** @class */ (function () {
    function AudittrailPage() {
    }
    AudittrailPage.prototype.ngOnInit = function () {
    };
    AudittrailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-audittrail',
            template: __webpack_require__(/*! ./audittrail.page.html */ "./src/app/audittrail/audittrail.page.html"),
            styles: [__webpack_require__(/*! ./audittrail.page.scss */ "./src/app/audittrail/audittrail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AudittrailPage);
    return AudittrailPage;
}());



/***/ })

}]);
//# sourceMappingURL=audittrail-audittrail-module.js.map