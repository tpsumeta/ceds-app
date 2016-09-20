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
require('rxjs/add/operator/map');
var ionic_angular_2 = require('ionic-angular');
var my_data_service_1 = require('../../providers/my-data-service/my-data-service');
var http_1 = require('@angular/http');
var HomePage = (function () {
    function HomePage(navCtrl, params, loadingCtrl, data, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.params = params;
        this.loadingCtrl = loadingCtrl;
        this.data = data;
        this.http = http;
        var api = 'http://ceds.dusit.ac.th/api/getReport?code_faculty=all&code_department=all&staff_type=all&code_person=&location_id=all&building_id=all&floor_id=all&room_id=all&n_id=all&durablegoods_id=all&type_id=all&brend_id=all&g_id=all&_=1474276776066';
        this.http.get(api).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.items = data.data;
            _this.posts = data.data;
        }, function (error) {
            console.log('Error with http.get: ', error);
        });
    }
    HomePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "กรุณารอสักครู่...",
            duration: 3000
        });
        loader.present();
    };
    HomePage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.presentLoading();
            this.items = this.posts;
            this.items = this.items.filter(function (item) {
                return (item.serial.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    HomePage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/home/home.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams, ionic_angular_2.LoadingController, my_data_service_1.MyDataService, http_1.Http])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
