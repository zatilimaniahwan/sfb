(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n    <ion-toolbar>\n        <ion-title slot=\"start\">{{title}}</ion-title> \n        <ion-button fill=\"blank\" slot=\"end\" (click)=\"view()\">\n            <ion-icon slot=\"start\"  name=\"unlock\"></ion-icon>\n            <p>Logout</p>\n          </ion-button>\n    </ion-toolbar>\n    <ion-toolbar>\n        <ion-segment [(ngModel)]=\"menuType\">\n            <ion-segment-button value=\"donation\"(ionSelect)=\"segmentDonation()\">\n              <ion-label>Donation</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"recipient\"(ionSelect)=\"segmentRecipient()\">\n              <ion-label>Recipient</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n    </ion-toolbar>\n    <ion-toolbar>\n        <ion-searchbar  animated slot=\"start\" ></ion-searchbar>\n        <ion-button fill=\"blank\" slot=\"end\" (click)=\"viewFilter()\">\n            <ion-icon slot=\"end\"  name=\"options\"></ion-icon>\n          </ion-button>\n    </ion-toolbar>\n  </ion-header>\n  \n\n<ion-content>\n  <div *ngIf=\"cardDonation\">\n  <ion-card tappable  *ngFor=\"let item of items; let index=index\" (click)=\"edit(item.id)\">\n    <ion-card-header>\n      <ion-list lines=\"none\">\n        <ion-item >\n            <ion-card-subtitle slot=\"start\">Donation {{item.donation_id}}</ion-card-subtitle>\n            <ion-badge *ngIf=\" item.status == 0\" color=\"warning\" slot=\"end\">Not Collected</ion-badge>\n            <ion-badge *ngIf=\" item.status == 1\" color=\"tertiary\" slot=\"end\">Collected</ion-badge>\n            <ion-badge *ngIf=\" item.status == 2\" color=\"secondary\" slot=\"end\">Distributed</ion-badge>\n        </ion-item>\n      </ion-list>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label></ion-label>\n    </ion-card-content>\n  </ion-card>\n  </div>\n  <div *ngIf=\"cardRecipient\">\n  <ion-card tappable  *ngFor=\"let item of items; let index=index\" (click)=\"edit(item.id)\">\n    <ion-card-header>\n      <ion-list lines=\"none\">\n        <ion-item >\n            <ion-card-subtitle slot=\"start\">{{item.organisation_code}}</ion-card-subtitle>\n            <ion-badge *ngIf=\" item.status == 1\" color=\"secondary\" slot=\"end\">Active</ion-badge>\n            <ion-badge *ngIf=\" item.status == 0\" color=\"danger\" slot=\"end\"> Not Active</ion-badge>\n        </ion-item>\n      </ion-list>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label>{{item.fullname}}</ion-label>\n    </ion-card-content>\n  </ion-card>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"show\">\n      <ion-fab-button (click)=\"create()\">\n        <ion-icon name=\"create\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  \n \n     \n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-size: 0.6em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96YXRpbGltYW5pL3NmYi9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XG4gICAgZm9udC1zaXplOjAuNmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _recipient_form_recipient_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipient-form/recipient-form.page */ "./src/app/recipient-form/recipient-form.page.ts");





var Tab2Page = /** @class */ (function () {
    function Tab2Page(navCtrl, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.title = '';
        this.show = false;
        this.cardDonation = false;
        this.cardRecipient = false;
    }
    Tab2Page.prototype.viewFilter = function () {
        this.navCtrl.navigateForward('donation-filter');
    };
    Tab2Page.prototype.segmentDonation = function () {
        var _this = this;
        this.cardDonation = true;
        this.cardRecipient = false;
        var url = 'http://localhost/smartfoodbank/donation/donations';
        this.data = this.http.get(url);
        this.data.subscribe(function (data) {
            _this.items = data;
        });
        this.show = false;
        this.title = 'Donation';
    };
    Tab2Page.prototype.segmentRecipient = function () {
        var _this = this;
        this.cardRecipient = true;
        this.cardDonation = false;
        var url = 'http://localhost/smartfoodbank/recipient/recipients';
        this.data = this.http.get(url);
        this.data.subscribe(function (data) {
            _this.items = data;
        });
        this.title = 'Recipient';
        this.show = true;
    };
    Tab2Page.prototype.create = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _recipient_form_recipient_form_page__WEBPACK_IMPORTED_MODULE_4__["RecipientFormPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.prototype.ngOnInit = function () {
        var _this = this;
        this.title = 'Donation';
        this.cardDonation = true;
        this.cardRecipient = false;
        var url = 'http://localhost/smartfoodbank/donation/donations';
        this.data = this.http.get(url);
        this.data.subscribe(function (data) {
            _this.items = data;
        });
    };
    Tab2Page.prototype.edit = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _recipient_form_recipient_form_page__WEBPACK_IMPORTED_MODULE_4__["RecipientFormPage"],
                            componentProps: { value: id }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map