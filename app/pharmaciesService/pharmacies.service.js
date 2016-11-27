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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var PharmaciesService = (function () {
    function PharmaciesService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.pharmaciesUrl = 'app/pharmacies'; // URL to web api
    }
    PharmaciesService.prototype.update = function (pharmacy) {
        var url = this.pharmaciesUrl + "/" + pharmacy.id;
        return this.http
            .put(url, JSON.stringify(pharmacy), { headers: this.headers })
            .toPromise()
            .then(function () { return pharmacy; })
            .catch(this.handleError);
    };
    PharmaciesService.prototype.getPharmacies = function () {
        return this.http.get(this.pharmaciesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PharmaciesService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        }) // delay 2 seconds
            .then(function () { return _this.getPharmacies(); });
    };
    PharmaciesService.prototype.getPharmacy = function (id) {
        return this.getPharmacies()
            .then(function (pharmacies) { return pharmacies.find(function (pharmacy) { return pharmacy.id === id; }); });
    };
    PharmaciesService.prototype.create = function (name) {
        return this.http
            .post(this.pharmaciesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    PharmaciesService.prototype.delete = function (id) {
        var url = this.pharmaciesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    PharmaciesService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PharmaciesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PharmaciesService);
    return PharmaciesService;
}());
exports.PharmaciesService = PharmaciesService;
//# sourceMappingURL=pharmacies.service.js.map