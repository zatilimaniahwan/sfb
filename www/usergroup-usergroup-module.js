(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usergroup-usergroup-module"],{

/***/ "./src/app/usergroup/usergroup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/usergroup/usergroup.module.ts ***!
  \***********************************************/
/*! exports provided: UsergroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsergroupPageModule", function() { return UsergroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _usergroup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usergroup.page */ "./src/app/usergroup/usergroup.page.ts");







var routes = [
    {
        path: '',
        component: _usergroup_page__WEBPACK_IMPORTED_MODULE_6__["UsergroupPage"]
    }
];
var UsergroupPageModule = /** @class */ (function () {
    function UsergroupPageModule() {
    }
    UsergroupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_usergroup_page__WEBPACK_IMPORTED_MODULE_6__["UsergroupPage"]]
        })
    ], UsergroupPageModule);
    return UsergroupPageModule;
}());



/***/ }),

/***/ "./src/app/usergroup/usergroup.page.html":
/*!***********************************************!*\
  !*** ./src/app/usergroup/usergroup.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"previous()\"><ion-icon name=\"arrow-back\"></ion-icon></ion-button>\n          </ion-buttons>\n        <ion-title>User Group</ion-title> \n        <ion-button fill=\"blank\" slot=\"end\" (click)=\"view()\">\n            <ion-icon slot=\"end\"  name=\"contact\"></ion-icon>\n          </ion-button>\n    </ion-toolbar>\n    <ion-toolbar>\n        <ion-searchbar></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n\n    <ion-card tappable *ngFor=\"let item of items; let index=index\" (click)=\"edit(item.id)\">\n        <ion-card-header>\n          <ion-list lines=\"none\">\n            <ion-item >\n                <ion-card-subtitle slot=\"start\">{{item.code}}</ion-card-subtitle>\n            </ion-item>\n          </ion-list>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-label>{{item.desc}}</ion-label>\n        </ion-card-content>\n      </ion-card>\n      <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n          <ion-fab-button (click)=\"create()\">\n            <ion-icon name=\"create\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/usergroup/usergroup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/usergroup/usergroup.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJncm91cC91c2VyZ3JvdXAucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/usergroup/usergroup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/usergroup/usergroup.page.ts ***!
  \*********************************************/
/*! exports provided: UsergroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsergroupPage", function() { return UsergroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _usergroup_form_usergroup_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../usergroup-form/usergroup-form.page */ "./src/app/usergroup-form/usergroup-form.page.ts");





var UsergroupPage = /** @class */ (function () {
    function UsergroupPage(navCtrl, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
    }
    UsergroupPage.prototype.previous = function () {
        this.navCtrl.navigateForward('/tabs/tab4');
    };
    UsergroupPage.prototype.ngOnInit = function () {
        var _this = this;
        var url = 'http://localhost/smartfoodbank/usergroup/usergroups';
        this.data = this.http.get(url);
        this.data.subscribe(function (data) {
            _this.items = data;
        });
    };
    UsergroupPage.prototype.create = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _usergroup_form_usergroup_form_page__WEBPACK_IMPORTED_MODULE_4__["UsergroupFormPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [2 /*return*/, modal.present()];
                }
            });
        });
    };
    UsergroupPage.prototype.edit = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _usergroup_form_usergroup_form_page__WEBPACK_IMPORTED_MODULE_4__["UsergroupFormPage"],
                            componentProps: { value: id }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [2 /*return*/, modal.present()];
                }
            });
        });
    };
    UsergroupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usergroup',
            template: __webpack_require__(/*! ./usergroup.page.html */ "./src/app/usergroup/usergroup.page.html"),
            styles: [__webpack_require__(/*! ./usergroup.page.scss */ "./src/app/usergroup/usergroup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], UsergroupPage);
    return UsergroupPage;
}());



/***/ })

}]);
//# sourceMappingURL=usergroup-usergroup-module.js.map