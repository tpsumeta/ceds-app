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
var http_1 = require('@angular/http');
var SearchPage = (function () {
    function SearchPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.api = 'http://ceds.dusit.ac.th/api/getReport?code_faculty=11&code_department=all&staff_type=all&code_person=&location_id=all&building_id=all&floor_id=all&room_id=all&n_id=all&durablegoods_id=all&type_id=all&brend_id=all&g_id=all&_=1474276776066';
    }
    SearchPage.prototype.search = function () {
        var _this = this;
        this.http.get(this.api).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data.data;
            console.log('search');
            console.log(_this.posts);
        });
    };
    SearchPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/search/search.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, http_1.Http])
    ], SearchPage);
    return SearchPage;
}());
exports.SearchPage = SearchPage;
