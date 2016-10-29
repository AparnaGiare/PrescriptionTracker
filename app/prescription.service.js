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
require('rxjs/Rx');
var PrescriptionService = (function () {
    //private dataUrl = 'app/prescriptions.jason';
    function PrescriptionService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.prescriptionUrl = 'app/prescriptions'; // URL to web api
        this.dashboardPrescription = [];
    }
    /*discoverPrescriptions() {
        return this.http
            .get(this.prescriptionUrl)
            .map(res => res.json());
    }*/
    PrescriptionService.prototype.addToDashboard = function (prescription) {
        this.dashboardPrescription.push(prescription);
    };
    PrescriptionService.prototype.getDashboardPrescriptions = function () {
        return this.dashboardPrescription;
    };
    ////// Prescriptions functions
    PrescriptionService.prototype.update = function (prescription) {
        var url = this.prescriptionUrl + "/" + prescription.id;
        return this.http
            .put(url, JSON.stringify(prescription), { headers: this.headers })
            .toPromise()
            .then(function () { return prescription; })
            .catch(this.handleError);
    };
    PrescriptionService.prototype.getPrescriptions = function () {
        return this.http.get(this.prescriptionUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PrescriptionService.prototype.getPrescriptionSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        }) // delay 2 seconds
            .then(function () { return _this.getPrescriptions(); });
    };
    PrescriptionService.prototype.getPrescription = function (id) {
        return this.getPrescriptions()
            .then(function (prescriptions) { return prescriptions.find(function (prescription) { return prescription.id === id; }); });
    };
    PrescriptionService.prototype.create = function (name) {
        console.log("Prescription service create");
        return this.http
            .post(this.prescriptionUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    PrescriptionService.prototype.delete = function (id) {
        var url = this.prescriptionUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    PrescriptionService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PrescriptionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PrescriptionService);
    return PrescriptionService;
}());
exports.PrescriptionService = PrescriptionService;
//# sourceMappingURL=prescription.service.js.map