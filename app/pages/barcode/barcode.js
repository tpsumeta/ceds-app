"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ionic_angular_2 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var modal_1 = require('./../modal/modal');
var http_1 = require('@angular/http');
var ionic_angular_3 = require('ionic-angular');
var BarcodePage = (function () {
    function BarcodePage(_nav, _params, modalCtrl, http, toastCtrl) {
        this._nav = _nav;
        this._params = _params;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.api = 'http://ceds.dusit.ac.th/equipment/getBySerial';
    }
    BarcodePage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'ไม่พบข้อมูล',
            duration: 3000,
            position: 'top',
        });
        toast.present();
    };
    BarcodePage.prototype.onPageLoaded = function () {
        this.eventId = this._params.get('eventId');
        this.eventTitle = this._params.get('eventTitle');
        this.buttonText = "Scan";
        this.loading = false;
    };
    BarcodePage.prototype.openModal = function () {
        this.goToResult("46LBP1S");
    };
    BarcodePage.prototype.scanQR = function () {
        var _this = this;
        this.buttonText = "Loading..";
        this.loading = true;
        ionic_native_1.BarcodeScanner.scan().then(function (barcodeData) {
            if (barcodeData.cancelled) {
                console.log("User cancelled the action!");
                _this.buttonText = "Scan";
                _this.loading = false;
                return false;
            }
            console.log("Scanned successfully!");
            console.log(barcodeData);
            _this.goToResult(barcodeData.text);
        }, function (err) {
            console.log(err);
        });
    };
    BarcodePage.prototype.goToResult = function (barcodeData) {
        this.presentModal(barcodeData);
    };
    BarcodePage.prototype.presentModal = function (barcode) {
        var _this = this;
        this.http.get(this.api + '?serial=' + barcode).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data[0]) {
                _this.modal = _this.modalCtrl.create(modal_1.ModalPage, { data: data[0] });
                _this.modal.present();
            }
            else {
                _this.presentToast();
            }
            _this.loading = false;
        });
    };
    BarcodePage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/barcode/barcode.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams, ionic_angular_2.ModalController, http_1.Http, ionic_angular_3.ToastController])
    ], BarcodePage);
    return BarcodePage;
}());
exports.BarcodePage = BarcodePage;
