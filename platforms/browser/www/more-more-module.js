(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["more-more-module"],{

/***/ "./src/app/more/more.module.ts":
/*!*************************************!*\
  !*** ./src/app/more/more.module.ts ***!
  \*************************************/
/*! exports provided: MorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePageModule", function() { return MorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _more_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more.page */ "./src/app/more/more.page.ts");







var routes = [
    {
        path: '',
        component: _more_page__WEBPACK_IMPORTED_MODULE_6__["MorePage"]
    }
];
var MorePageModule = /** @class */ (function () {
    function MorePageModule() {
    }
    MorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_more_page__WEBPACK_IMPORTED_MODULE_6__["MorePage"]]
        })
    ], MorePageModule);
    return MorePageModule;
}());



/***/ }),

/***/ "./src/app/more/more.page.html":
/*!*************************************!*\
  !*** ./src/app/more/more.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n    <ion-toolbar>\n        <ion-title slot=\"start\">More Settings</ion-title> \n        <ion-button fill=\"blank\" slot=\"end\" (click)=\"view()\">\n            <ion-icon slot=\"start\"  name=\"unlock\"></ion-icon>\n            <p>Logout</p>\n          </ion-button>\n    </ion-toolbar>\n   \n</ion-header>\n\n<ion-content >\n    <ion-card tappable (click)=\"viewMyself()\">\n        <ion-item >\n          <ion-icon name=contact slot=\"start\"></ion-icon>\n          <ion-label>My Profile</ion-label>\n        </ion-item>\n      </ion-card>\n  <ion-card tappable (click)=\"viewOrg()\">\n    <ion-item>\n      <ion-icon name=business slot=\"start\"></ion-icon>\n      <ion-label>Organization</ion-label>\n    </ion-item>\n  </ion-card>\n  <ion-card tappable (click)=\"viewBox()\">\n      <ion-item >\n        <ion-icon name=cube slot=\"start\"></ion-icon>\n        <ion-label>Box Info</ion-label>\n      </ion-item>\n    </ion-card>\n    <ion-card tappable (click)=\"viewUser()\">\n        <ion-item >\n          <ion-icon name=people slot=\"start\"></ion-icon>\n          <ion-label>User Group</ion-label>\n        </ion-item>\n      </ion-card>\n      <ion-card tappable (click)=\"viewAnnounce()\">\n          <ion-item>\n            <ion-icon name=megaphone slot=\"start\"></ion-icon>\n            <ion-label>Announcement</ion-label>\n          </ion-item>\n        </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/more/more.page.scss":
/*!*************************************!*\
  !*** ./src/app/more/more.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-size: 0.6em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96YXRpbGltYW5pL2lvbmljcHJvamVjdHMvc2ZiL3NyYy9hcHAvbW9yZS9tb3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb3JlL21vcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcbiAgICBmb250LXNpemU6MC42ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/more/more.page.ts":
/*!***********************************!*\
  !*** ./src/app/more/more.page.ts ***!
  \***********************************/
/*! exports provided: MorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePage", function() { return MorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var MorePage = /** @class */ (function () {
    function MorePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MorePage.prototype.viewUser = function () {
        this.navCtrl.navigateForward('usergroup');
    };
    MorePage.prototype.viewOrg = function () {
        this.navCtrl.navigateForward('organization');
    };
    MorePage.prototype.viewBox = function () {
        this.navCtrl.navigateForward('boxinfo');
    };
    MorePage.prototype.viewAnnounce = function () {
        this.navCtrl.navigateForward('announcement');
    };
    MorePage.prototype.ngOnInit = function () {
    };
    MorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-more',
            template: __webpack_require__(/*! ./more.page.html */ "./src/app/more/more.page.html"),
            styles: [__webpack_require__(/*! ./more.page.scss */ "./src/app/more/more.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], MorePage);
    return MorePage;
}());



/***/ })

}]);
//# sourceMappingURL=more-more-module.js.map