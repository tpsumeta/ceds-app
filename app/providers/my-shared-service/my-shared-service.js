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
require('rxjs/add/operator/map');
var Observable_1 = require('rxjs/Observable');
var MySharedService = (function () {
    function MySharedService() {
        var _this = this;
        this.dataChange = new Observable_1.Observable(function (observer) {
            _this.dataChangeObserver = observer;
        });
    }
    MySharedService.prototype.setData = function (data) {
        this.dataChangeObserver.next(this.data);
    };
    MySharedService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MySharedService);
    return MySharedService;
}());
exports.MySharedService = MySharedService;
