webpackJsonp([22],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UgroupformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ugroup_ugroup__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the UgroupformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UgroupformPage = /** @class */ (function () {
    function UgroupformPage(navCtrl, navParams, toastCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.ugroup = {
            id: '',
            code: '',
            desc: ''
        };
        this.title = '';
        this.btnSave = false;
        this.btnUpdate = false;
        this.btnDelete = false;
        this.ugroupID = '';
        // Set title for create/add new data
        this.title = 'Add New';
        this.btnSave = true;
        this.btnDelete = false;
        this.btnUpdate = false;
        // get current id for record
        this.ugroupID = navParams.get("ugroupID");
        // Set title if edit (Make it dynamic!!!)
        if (this.ugroupID != null || this.ugroupID != undefined) {
            this.title = 'Edit Record';
            this.btnSave = false;
            this.btnDelete = true;
            this.btnUpdate = true;
        }
        // Set properties of toaster
        this.toaster = this.toastCtrl.create({
            duration: 5000,
            position: 'bottom'
        });
    }
    UgroupformPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.ugroupID);
        if (this.ugroupID != null) {
            this.data = this.http.get('http://localhost/smartfoodbank/usergroup/usergroupbyid?id=' + this.ugroupID);
            this.data.subscribe(function (data) {
                _this.ugroup = data[0];
                console.log(_this.ugroup);
            });
        }
    };
    UgroupformPage.prototype.save = function () {
        var _this = this;
        if (this.ugroup.code == '' || this.ugroup.desc == '') {
            this.toaster.setMessage('All fields are required');
            this.toaster.present();
        }
        else {
            var url = "http://localhost/smartfoodbank/usergroup/addusergroup";
            this.data = this.http.post(url, this.ugroup, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
        }
        this.data.subscribe(function (data) {
            _this.toaster.setMessage('Data successfully added');
            _this.toaster.present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__ugroup_ugroup__["a" /* UgroupPage */], { items: data });
            console.log(data);
        });
    };
    UgroupformPage.prototype.update = function () {
        var _this = this;
        if (this.ugroupID != '') {
            var url = 'http://localhost/smartfoodbank/usergroup/updateusergroup';
            this.data = this.http.post(url, this.ugroup, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
            this.data.subscribe(function (data) {
                _this.toaster.setMessage('Data successfully updated');
                _this.toaster.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__ugroup_ugroup__["a" /* UgroupPage */], { items: data });
                console.log(data);
            });
        }
    };
    UgroupformPage.prototype.delete = function () {
        var _this = this;
        if (this.ugroupID != '') {
            console.log(this.ugroupID);
            var url = 'http://localhost/smartfoodbank/usergroup/deleteusergroup';
            this.data = this.http.post(url, this.ugroup, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
            this.data.subscribe(function (data) {
                _this.toaster.setMessage('Data successfully deleted');
                _this.toaster.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__ugroup_ugroup__["a" /* UgroupPage */], { items: data });
                console.log(data);
            });
        }
    };
    UgroupformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ugroupform',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/ugroupform/ugroupform.html"*/'<!--\n  Generated template for the StateformPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n   \n        <ion-item>\n            <ion-label floating>Code of User Group</ion-label>\n            <ion-input type="code" [(ngModel)] = "ugroup.code" ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Name of User Group</ion-label>\n            <ion-input type="desc" [(ngModel)] = "ugroup.desc" ></ion-input>\n        </ion-item>\n       <br>\n            <button ion-button round  (click) = "save()" *ngIf="btnSave">Save</button>\n            <button ion-button round  (click) = "update()" *ngIf="btnUpdate">Update</button>\n            <button ion-button round  (click) = "delete()" *ngIf="btnDelete">Delete</button>\n        \n   \n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/ugroupform/ugroupform.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], UgroupformPage);
    return UgroupformPage;
}());

//# sourceMappingURL=ugroupform.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AnnouncementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnnouncementPage = /** @class */ (function () {
    function AnnouncementPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AnnouncementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnnouncementPage');
    };
    AnnouncementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-announcement',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/announcement/announcement.html"*/'<!--\n  Generated template for the AnnouncementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>announcement</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/announcement/announcement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AnnouncementPage);
    return AnnouncementPage;
}());

//# sourceMappingURL=announcement.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BoxinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BoxinfoPage = /** @class */ (function () {
    function BoxinfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BoxinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BoxinfoPage');
    };
    BoxinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-boxinfo',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/boxinfo/boxinfo.html"*/'<!--\n  Generated template for the BoxinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Food Bank</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n        <ion-item tappable *ngFor="let item of items; let index=index" (click)="edit(item.id)">\n         <h4>{{ item.desc }}</h4> \n        </ion-item>\n      </ion-list>\n      <ion-fab right bottom>\n          <button ion-fab mini (click)="create()"><ion-icon name="add"></ion-icon></button>\n      </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/boxinfo/boxinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BoxinfoPage);
    return BoxinfoPage;
}());

//# sourceMappingURL=boxinfo.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxlocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BoxlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BoxlocationPage = /** @class */ (function () {
    function BoxlocationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BoxlocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BoxlocationPage');
    };
    BoxlocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-boxlocation',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/boxlocation/boxlocation.html"*/'<!--\n  Generated template for the BoxlocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>boxlocation</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/boxlocation/boxlocation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BoxlocationPage);
    return BoxlocationPage;
}());

//# sourceMappingURL=boxlocation.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donationinfo_donationinfo__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__receipent_receipent__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DonationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DonationPage = /** @class */ (function () {
    function DonationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DonationPage.prototype.viewDonation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__donationinfo_donationinfo__["a" /* DonationinfoPage */]);
    };
    DonationPage.prototype.viewRecipient = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__receipent_receipent__["a" /* ReceipentPage */]);
    };
    DonationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonationPage');
    };
    DonationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donation',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/donation/donation.html"*/'<!--\n  Generated template for the DonationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Donation</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button id="donation" ion-button block (click)="viewDonation()" >List of Donation</button>\n    <br>\n    <button id="recipient" ion-button block color="secondary"(click)="viewRecipient()">List of Recipient</button>\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/donation/donation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DonationPage);
    return DonationPage;
}());

//# sourceMappingURL=donation.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DonationinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DonationinfoPage = /** @class */ (function () {
    function DonationinfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DonationinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonationinfoPage');
    };
    DonationinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donationinfo',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/donationinfo/donationinfo.html"*/'<!--\n  Generated template for the DonationinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Donation Info</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n        <ion-item tappable *ngFor="let item of items; let index=index" (click)="edit(item.id)">\n         <h4>{{ item.desc }}</h4> \n        </ion-item>\n      </ion-list>\n      <ion-fab right bottom>\n          <button ion-fab mini (click)="create()"><ion-icon name="add"></ion-icon></button>\n      </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/donationinfo/donationinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DonationinfoPage);
    return DonationinfoPage;
}());

//# sourceMappingURL=donationinfo.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceipentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ReceipentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReceipentPage = /** @class */ (function () {
    function ReceipentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReceipentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReceipentPage');
    };
    ReceipentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-receipent',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/receipent/receipent.html"*/'<!--\n  Generated template for the ReceipentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>List Recipient</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n        <ion-item tappable *ngFor="let item of items; let index=index" (click)="edit(item.id)">\n         <h4>{{ item.desc }}</h4> \n        </ion-item>\n      </ion-list>\n      <ion-fab right bottom>\n          <button ion-fab mini (click)="create()"><ion-icon name="add"></ion-icon></button>\n      </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/receipent/receipent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ReceipentPage);
    return ReceipentPage;
}());

//# sourceMappingURL=receipent.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodbankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boxinfo_boxinfo__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boxlocation_boxlocation__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FoodbankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FoodbankPage = /** @class */ (function () {
    function FoodbankPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FoodbankPage.prototype.settingInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__boxinfo_boxinfo__["a" /* BoxinfoPage */]);
    };
    FoodbankPage.prototype.settingLocation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__boxlocation_boxlocation__["a" /* BoxlocationPage */]);
    };
    FoodbankPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodbankPage');
    };
    FoodbankPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-foodbank',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/foodbank/foodbank.html"*/'<!--\n  Generated template for the FoodbankPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Food Bank</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n  <button id="boxinfo" ion-button block (click)="settingInfo()" >Setting for Info</button>\n  <br>\n  <button ion-button block color="secondary"(click)="settingLocation()">Setting for Location</button>\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/foodbank/foodbank.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FoodbankPage);
    return FoodbankPage;
}());

//# sourceMappingURL=foodbank.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OrganizationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrganizationPage = /** @class */ (function () {
    function OrganizationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrganizationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrganizationPage');
    };
    OrganizationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-organization',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/organization/organization.html"*/'<!--\n  Generated template for the OrganizationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Organization</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n  <button id="boxinfo" ion-button block (click)="settingInfo()" >Setting for Info</button>\n  <br>\n  <button ion-button block color="secondary"(click)="settingLocation()">Setting for Location</button>\n</ion-content>\n\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/organization/organization.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], OrganizationPage);
    return OrganizationPage;
}());

//# sourceMappingURL=organization.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportdonationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ReportdonationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportdonationPage = /** @class */ (function () {
    function ReportdonationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReportdonationPage.prototype.ionViewDidLoad = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
                datasets: [{
                        label: '# of Donation',
                        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], ReportdonationPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], ReportdonationPage.prototype, "doughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], ReportdonationPage.prototype, "lineCanvas", void 0);
    ReportdonationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reportdonation',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/reportdonation/reportdonation.html"*/'<!--\n  Generated template for the ReportdonationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Donation</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n    <ion-list>\n        <ion-item>\n  <ion-label>Year:</ion-label>\n    <ion-select [(ngModel)]="year">\n        <ion-option value="2019">2019</ion-option>\n        <ion-option value="2018">2018</ion-option>\n      </ion-select>\n      </ion-item>\n      </ion-list>\n    <ion-card>\n        <ion-card-header>\n          Bar Chart\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #barCanvas></canvas>\n        </ion-card-content>\n      </ion-card>\n      \n    \n        <ion-card>\n          <ion-card-header>\n            Line Chart\n          </ion-card-header>\n          <ion-card-content>\n            <canvas #lineCanvas></canvas>\n          </ion-card-content>\n        </ion-card>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/reportdonation/reportdonation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ReportdonationPage);
    return ReportdonationPage;
}());

//# sourceMappingURL=reportdonation.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportrecipientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ReportrecipientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportrecipientPage = /** @class */ (function () {
    function ReportrecipientPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReportrecipientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportrecipientPage');
    };
    ReportrecipientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reportrecipient',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/reportrecipient/reportrecipient.html"*/'<!--\n  Generated template for the ReportrecipientPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>reportrecipient</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/reportrecipient/reportrecipient.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ReportrecipientPage);
    return ReportrecipientPage;
}());

//# sourceMappingURL=reportrecipient.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportdonation_reportdonation__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reportrecipient_reportrecipient__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportPage = /** @class */ (function () {
    function ReportPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReportPage.prototype.reportDonation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reportdonation_reportdonation__["a" /* ReportdonationPage */]);
    };
    ReportPage.prototype.reportRecipient = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reportrecipient_reportrecipient__["a" /* ReportrecipientPage */]);
    };
    ReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportPage');
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/report/report.html"*/'<!--\n  Generated template for the ReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Report</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n    <button id="reportDonation" ion-button block (click)="reportDonation()" >Report for Donation</button>\n    <br>\n    <button id="reportRecipient" ion-button block color="secondary"(click)="reportRecipient()">Report for Location</button>\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/report/report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 125:
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
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/announcement/announcement.module": [
		428,
		21
	],
	"../pages/bankdata/bankdata.module": [
		427,
		20
	],
	"../pages/boxinfo/boxinfo.module": [
		429,
		19
	],
	"../pages/boxlocation/boxlocation.module": [
		430,
		18
	],
	"../pages/donation/donation.module": [
		431,
		17
	],
	"../pages/donationinfo/donationinfo.module": [
		432,
		16
	],
	"../pages/foodbank/foodbank.module": [
		433,
		15
	],
	"../pages/intro/intro.module": [
		434,
		14
	],
	"../pages/officelogin/officelogin.module": [
		435,
		13
	],
	"../pages/organization/organization.module": [
		436,
		12
	],
	"../pages/organizationform/organizationform.module": [
		437,
		11
	],
	"../pages/organizationinfo/organizationinfo.module": [
		438,
		0
	],
	"../pages/publiclogin/publiclogin.module": [
		439,
		10
	],
	"../pages/receipent/receipent.module": [
		440,
		9
	],
	"../pages/register/register.module": [
		441,
		8
	],
	"../pages/report/report.module": [
		448,
		7
	],
	"../pages/reportdonation/reportdonation.module": [
		442,
		6
	],
	"../pages/reportrecipient/reportrecipient.module": [
		443,
		5
	],
	"../pages/role/role.module": [
		447,
		4
	],
	"../pages/staff/staff.module": [
		446,
		3
	],
	"../pages/ugroup/ugroup.module": [
		444,
		2
	],
	"../pages/ugroupform/ugroupform.module": [
		445,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankdataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ugroup_ugroup__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BankdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BankdataPage = /** @class */ (function () {
    function BankdataPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BankdataPage.prototype.viewUsergroup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ugroup_ugroup__["a" /* UgroupPage */]);
    };
    BankdataPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BankdataPage');
    };
    BankdataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bankdata',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/bankdata/bankdata.html"*/'<!--\n  Generated template for the BankdataPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Bank Data</ion-title>\n      <!--<ion-buttons end>\n          <button ion-button color="primary">\n           <ion-icon name="add-circle"></ion-icon>\n            &nbsp;Add New Data\n          </button>\n        </ion-buttons>-->\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n    <button id="state" ion-button block (click)="viewState()" >List of State</button>\n    <br>\n    <button ion-button block color="secondary"(click)="viewUsergroup()">List of User Group</button>\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/bankdata/bankdata.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BankdataPage);
    return BankdataPage;
}());

//# sourceMappingURL=bankdata.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/intro/intro.html"*/'<!--\n  Generated template for the IntroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>intro</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfficeloginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OfficeloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfficeloginPage = /** @class */ (function () {
    function OfficeloginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OfficeloginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OfficeloginPage');
    };
    OfficeloginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-officelogin',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/officelogin/officelogin.html"*/'<!--\n  Generated template for the OfficeloginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>officelogin</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/officelogin/officelogin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], OfficeloginPage);
    return OfficeloginPage;
}());

//# sourceMappingURL=officelogin.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OrganizationformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrganizationformPage = /** @class */ (function () {
    function OrganizationformPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrganizationformPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrganizationformPage');
    };
    OrganizationformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-organizationform',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/organizationform/organizationform.html"*/'<!--\n  Generated template for the OrganizationformPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>organizationform</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/organizationform/organizationform.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], OrganizationformPage);
    return OrganizationformPage;
}());

//# sourceMappingURL=organizationform.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicloginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PublicloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PublicloginPage = /** @class */ (function () {
    function PublicloginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PublicloginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PublicloginPage');
    };
    PublicloginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-publiclogin',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/publiclogin/publiclogin.html"*/'<!--\n  Generated template for the PublicloginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>publiclogin</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/publiclogin/publiclogin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PublicloginPage);
    return PublicloginPage;
}());

//# sourceMappingURL=publiclogin.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StaffPage = /** @class */ (function () {
    function StaffPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StaffPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StaffPage');
    };
    StaffPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-staff',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/staff/staff.html"*/'<!--\n  Generated template for the StaffPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>staff</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/staff/staff.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], StaffPage);
    return StaffPage;
}());

//# sourceMappingURL=staff.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RolePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RolePage = /** @class */ (function () {
    function RolePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RolePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RolePage');
    };
    RolePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-role',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/role/role.html"*/'<!--\n  Generated template for the RolePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Choose your role!</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/role/role.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RolePage);
    return RolePage;
}());

//# sourceMappingURL=role.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_bankdata_bankdata__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ugroup_ugroup__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_foodbank_foodbank__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_boxinfo_boxinfo__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_boxlocation_boxlocation__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_organization_organization__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_donation_donation__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_announcement_announcement__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_receipent_receipent__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_donationinfo_donationinfo__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_staff_staff__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_register_register__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_intro_intro__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_officelogin_officelogin__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_publiclogin_publiclogin__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_role_role__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_report_report__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_reportdonation_reportdonation__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_reportrecipient_reportrecipient__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_ugroupform_ugroupform__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_organizationform_organizationform__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_bankdata_bankdata__["a" /* BankdataPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ugroup_ugroup__["a" /* UgroupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_foodbank_foodbank__["a" /* FoodbankPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_boxinfo_boxinfo__["a" /* BoxinfoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_boxlocation_boxlocation__["a" /* BoxlocationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_organization_organization__["a" /* OrganizationPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_donation_donation__["a" /* DonationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_announcement_announcement__["a" /* AnnouncementPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_receipent_receipent__["a" /* ReceipentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_donationinfo_donationinfo__["a" /* DonationinfoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_organization_organization__["a" /* OrganizationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_staff_staff__["a" /* StaffPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_officelogin_officelogin__["a" /* OfficeloginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_publiclogin_publiclogin__["a" /* PublicloginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_role_role__["a" /* RolePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_reportdonation_reportdonation__["a" /* ReportdonationPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_reportrecipient_reportrecipient__["a" /* ReportrecipientPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_ugroupform_ugroupform__["a" /* UgroupformPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_organizationform_organizationform__["a" /* OrganizationformPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bankdata/bankdata.module#BankdataPageModule', name: 'BankdataPage', segment: 'bankdata', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/announcement/announcement.module#AnnouncementPageModule', name: 'AnnouncementPage', segment: 'announcement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/boxinfo/boxinfo.module#BoxinfoPageModule', name: 'BoxinfoPage', segment: 'boxinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/boxlocation/boxlocation.module#BoxlocationPageModule', name: 'BoxlocationPage', segment: 'boxlocation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donation/donation.module#DonationPageModule', name: 'DonationPage', segment: 'donation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donationinfo/donationinfo.module#DonationinfoPageModule', name: 'DonationinfoPage', segment: 'donationinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/foodbank/foodbank.module#FoodbankPageModule', name: 'FoodbankPage', segment: 'foodbank', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/officelogin/officelogin.module#OfficeloginPageModule', name: 'OfficeloginPage', segment: 'officelogin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/organization/organization.module#OrganizationPageModule', name: 'OrganizationPage', segment: 'organization', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/organizationform/organizationform.module#OrganizationformPageModule', name: 'OrganizationformPage', segment: 'organizationform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/organizationinfo/organizationinfo.module#OrganizationinfoPageModule', name: 'OrganizationinfoPage', segment: 'organizationinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/publiclogin/publiclogin.module#PublicloginPageModule', name: 'PublicloginPage', segment: 'publiclogin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/receipent/receipent.module#ReceipentPageModule', name: 'ReceipentPage', segment: 'receipent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reportdonation/reportdonation.module#ReportdonationPageModule', name: 'ReportdonationPage', segment: 'reportdonation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reportrecipient/reportrecipient.module#ReportrecipientPageModule', name: 'ReportrecipientPage', segment: 'reportrecipient', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ugroup/ugroup.module#UgroupPageModule', name: 'UgroupPage', segment: 'ugroup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ugroupform/ugroupform.module#UgroupformPageModule', name: 'UgroupformPage', segment: 'ugroupform', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/staff/staff.module#StaffPageModule', name: 'StaffPage', segment: 'staff', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/role/role.module#RolePageModule', name: 'RolePage', segment: 'role', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report/report.module#ReportPageModule', name: 'ReportPage', segment: 'report', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_bankdata_bankdata__["a" /* BankdataPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ugroup_ugroup__["a" /* UgroupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_foodbank_foodbank__["a" /* FoodbankPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_boxinfo_boxinfo__["a" /* BoxinfoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_boxlocation_boxlocation__["a" /* BoxlocationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_organization_organization__["a" /* OrganizationPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_donation_donation__["a" /* DonationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_announcement_announcement__["a" /* AnnouncementPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_receipent_receipent__["a" /* ReceipentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_donationinfo_donationinfo__["a" /* DonationinfoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_organization_organization__["a" /* OrganizationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_staff_staff__["a" /* StaffPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_officelogin_officelogin__["a" /* OfficeloginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_publiclogin_publiclogin__["a" /* PublicloginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_role_role__["a" /* RolePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_reportrecipient_reportrecipient__["a" /* ReportrecipientPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_reportdonation_reportdonation__["a" /* ReportdonationPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_ugroupform_ugroupform__["a" /* UgroupformPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_organizationform_organizationform__["a" /* OrganizationformPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 168,
	"./af.js": 168,
	"./ar": 169,
	"./ar-dz": 170,
	"./ar-dz.js": 170,
	"./ar-kw": 171,
	"./ar-kw.js": 171,
	"./ar-ly": 172,
	"./ar-ly.js": 172,
	"./ar-ma": 173,
	"./ar-ma.js": 173,
	"./ar-sa": 174,
	"./ar-sa.js": 174,
	"./ar-tn": 175,
	"./ar-tn.js": 175,
	"./ar.js": 169,
	"./az": 176,
	"./az.js": 176,
	"./be": 177,
	"./be.js": 177,
	"./bg": 178,
	"./bg.js": 178,
	"./bm": 179,
	"./bm.js": 179,
	"./bn": 180,
	"./bn.js": 180,
	"./bo": 181,
	"./bo.js": 181,
	"./br": 182,
	"./br.js": 182,
	"./bs": 183,
	"./bs.js": 183,
	"./ca": 184,
	"./ca.js": 184,
	"./cs": 185,
	"./cs.js": 185,
	"./cv": 186,
	"./cv.js": 186,
	"./cy": 187,
	"./cy.js": 187,
	"./da": 188,
	"./da.js": 188,
	"./de": 189,
	"./de-at": 190,
	"./de-at.js": 190,
	"./de-ch": 191,
	"./de-ch.js": 191,
	"./de.js": 189,
	"./dv": 192,
	"./dv.js": 192,
	"./el": 193,
	"./el.js": 193,
	"./en-SG": 194,
	"./en-SG.js": 194,
	"./en-au": 195,
	"./en-au.js": 195,
	"./en-ca": 196,
	"./en-ca.js": 196,
	"./en-gb": 197,
	"./en-gb.js": 197,
	"./en-ie": 198,
	"./en-ie.js": 198,
	"./en-il": 199,
	"./en-il.js": 199,
	"./en-nz": 200,
	"./en-nz.js": 200,
	"./eo": 201,
	"./eo.js": 201,
	"./es": 202,
	"./es-do": 203,
	"./es-do.js": 203,
	"./es-us": 204,
	"./es-us.js": 204,
	"./es.js": 202,
	"./et": 205,
	"./et.js": 205,
	"./eu": 206,
	"./eu.js": 206,
	"./fa": 207,
	"./fa.js": 207,
	"./fi": 208,
	"./fi.js": 208,
	"./fo": 209,
	"./fo.js": 209,
	"./fr": 210,
	"./fr-ca": 211,
	"./fr-ca.js": 211,
	"./fr-ch": 212,
	"./fr-ch.js": 212,
	"./fr.js": 210,
	"./fy": 213,
	"./fy.js": 213,
	"./ga": 214,
	"./ga.js": 214,
	"./gd": 215,
	"./gd.js": 215,
	"./gl": 216,
	"./gl.js": 216,
	"./gom-latn": 217,
	"./gom-latn.js": 217,
	"./gu": 218,
	"./gu.js": 218,
	"./he": 219,
	"./he.js": 219,
	"./hi": 220,
	"./hi.js": 220,
	"./hr": 221,
	"./hr.js": 221,
	"./hu": 222,
	"./hu.js": 222,
	"./hy-am": 223,
	"./hy-am.js": 223,
	"./id": 224,
	"./id.js": 224,
	"./is": 225,
	"./is.js": 225,
	"./it": 226,
	"./it-ch": 227,
	"./it-ch.js": 227,
	"./it.js": 226,
	"./ja": 228,
	"./ja.js": 228,
	"./jv": 229,
	"./jv.js": 229,
	"./ka": 230,
	"./ka.js": 230,
	"./kk": 231,
	"./kk.js": 231,
	"./km": 232,
	"./km.js": 232,
	"./kn": 233,
	"./kn.js": 233,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 235,
	"./ku.js": 235,
	"./ky": 236,
	"./ky.js": 236,
	"./lb": 237,
	"./lb.js": 237,
	"./lo": 238,
	"./lo.js": 238,
	"./lt": 239,
	"./lt.js": 239,
	"./lv": 240,
	"./lv.js": 240,
	"./me": 241,
	"./me.js": 241,
	"./mi": 242,
	"./mi.js": 242,
	"./mk": 243,
	"./mk.js": 243,
	"./ml": 244,
	"./ml.js": 244,
	"./mn": 245,
	"./mn.js": 245,
	"./mr": 246,
	"./mr.js": 246,
	"./ms": 247,
	"./ms-my": 248,
	"./ms-my.js": 248,
	"./ms.js": 247,
	"./mt": 249,
	"./mt.js": 249,
	"./my": 250,
	"./my.js": 250,
	"./nb": 251,
	"./nb.js": 251,
	"./ne": 252,
	"./ne.js": 252,
	"./nl": 253,
	"./nl-be": 254,
	"./nl-be.js": 254,
	"./nl.js": 253,
	"./nn": 255,
	"./nn.js": 255,
	"./pa-in": 256,
	"./pa-in.js": 256,
	"./pl": 257,
	"./pl.js": 257,
	"./pt": 258,
	"./pt-br": 259,
	"./pt-br.js": 259,
	"./pt.js": 258,
	"./ro": 260,
	"./ro.js": 260,
	"./ru": 261,
	"./ru.js": 261,
	"./sd": 262,
	"./sd.js": 262,
	"./se": 263,
	"./se.js": 263,
	"./si": 264,
	"./si.js": 264,
	"./sk": 265,
	"./sk.js": 265,
	"./sl": 266,
	"./sl.js": 266,
	"./sq": 267,
	"./sq.js": 267,
	"./sr": 268,
	"./sr-cyrl": 269,
	"./sr-cyrl.js": 269,
	"./sr.js": 268,
	"./ss": 270,
	"./ss.js": 270,
	"./sv": 271,
	"./sv.js": 271,
	"./sw": 272,
	"./sw.js": 272,
	"./ta": 273,
	"./ta.js": 273,
	"./te": 274,
	"./te.js": 274,
	"./tet": 275,
	"./tet.js": 275,
	"./tg": 276,
	"./tg.js": 276,
	"./th": 277,
	"./th.js": 277,
	"./tl-ph": 278,
	"./tl-ph.js": 278,
	"./tlh": 279,
	"./tlh.js": 279,
	"./tr": 280,
	"./tr.js": 280,
	"./tzl": 281,
	"./tzl.js": 281,
	"./tzm": 282,
	"./tzm-latn": 283,
	"./tzm-latn.js": 283,
	"./tzm.js": 282,
	"./ug-cn": 284,
	"./ug-cn.js": 284,
	"./uk": 285,
	"./uk.js": 285,
	"./ur": 286,
	"./ur.js": 286,
	"./uz": 287,
	"./uz-latn": 288,
	"./uz-latn.js": 288,
	"./uz.js": 287,
	"./vi": 289,
	"./vi.js": 289,
	"./x-pseudo": 290,
	"./x-pseudo.js": 290,
	"./yo": 291,
	"./yo.js": 291,
	"./zh-cn": 292,
	"./zh-cn.js": 292,
	"./zh-hk": 293,
	"./zh-hk.js": 293,
	"./zh-tw": 294,
	"./zh-tw.js": 294
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 400;

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_donation_donation__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_organization_organization__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_foodbank_foodbank__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_report_report__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_announcement_announcement__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ugroup_ugroup__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
            // { title: 'List', component: ListPage },
            { title: 'Donation', component: __WEBPACK_IMPORTED_MODULE_5__pages_donation_donation__["a" /* DonationPage */], icon: 'hand' },
            { title: 'Report', component: __WEBPACK_IMPORTED_MODULE_8__pages_report_report__["a" /* ReportPage */], icon: 'stats' },
            { title: 'Organization', component: __WEBPACK_IMPORTED_MODULE_6__pages_organization_organization__["a" /* OrganizationPage */], icon: 'contacts' },
            { title: 'Food Bank Box', component: __WEBPACK_IMPORTED_MODULE_7__pages_foodbank_foodbank__["a" /* FoodbankPage */], icon: 'cube' },
            { title: 'User Group', component: __WEBPACK_IMPORTED_MODULE_10__pages_ugroup_ugroup__["a" /* UgroupPage */], icon: 'contact' },
            { title: 'Announcement', component: __WEBPACK_IMPORTED_MODULE_9__pages_announcement_announcement__["a" /* AnnouncementPage */], icon: 'megaphone' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}"></ion-icon>&nbsp;{{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UgroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ugroupform_ugroupform__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the UgroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UgroupPage = /** @class */ (function () {
    function UgroupPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.searchQuery = '';
        this.initializeItems();
    }
    UgroupPage.prototype.initializeItems = function () {
        var _this = this;
        var url = 'http://localhost/smartfoodbank/usergroup/usergroups';
        this.data = this.http.get(url);
        this.data.subscribe(function (data) {
            //console.log(data);
            _this.items = data;
        });
    };
    UgroupPage.prototype.create = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ugroupform_ugroupform__["a" /* UgroupformPage */]);
    };
    UgroupPage.prototype.edit = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ugroupform_ugroupform__["a" /* UgroupformPage */], { ugroupID: id });
    };
    UgroupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UgroupPage');
    };
    UgroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ugroup',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/ugroup/ugroup.html"*/'<!--\n  Generated template for the UgroupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>User Group</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n        <ion-item tappable *ngFor="let item of items; let index=index" (click)="edit(item.id)">\n         <h4>{{ item.desc }}</h4> \n        </ion-item>\n        <ion-fab right>\n          <button ion-fab mini (click)="create()"><ion-icon name="add"></ion-icon></button>\n      </ion-fab>\n      </ion-list>\n     \n\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/ugroup/ugroup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], UgroupPage);
    return UgroupPage;
}());

//# sourceMappingURL=ugroup.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/zatilimani/ionicprojects/smartfoodbank/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[347]);
//# sourceMappingURL=main.js.map