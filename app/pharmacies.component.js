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
var router_1 = require('@angular/router');
var pharmacies_service_1 = require('./pharmacies.service');
var PharmaciesComponent = (function () {
    function PharmaciesComponent(router, pharmaciesService) {
        this.router = router;
        this.pharmaciesService = pharmaciesService;
    }
    PharmaciesComponent.prototype.getPharmacies = function () {
        var _this = this;
        this.pharmaciesService.getPharmacies().then(function (pharmacies) { return _this.pharmacies = pharmacies; });
    };
    PharmaciesComponent.prototype.ngOnInit = function () {
        this.getPharmacies();
    };
    PharmaciesComponent.prototype.onSelect = function (pharmacy) {
        this.selectedPharmacy = pharmacy;
    };
    PharmaciesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedPharmacy.id]);
    };
    PharmaciesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.pharmaciesService.create(name)
            .then(function (pharmacy) {
            _this.pharmacies.push(pharmacy);
            _this.selectedPharmacy = null;
        });
    };
    PharmaciesComponent.prototype.delete = function (pharmacy) {
        var _this = this;
        this.pharmaciesService
            .delete(pharmacy.id)
            .then(function () {
            _this.pharmacies = _this.pharmacies.filter(function (h) { return h !== pharmacy; });
            if (_this.selectedPharmacy === pharmacy) {
                _this.selectedPharmacy = null;
            }
        });
    };
    PharmaciesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-pharmacies',
            templateUrl: 'pharmacies.component.html',
            styleUrls: ['pharmacies.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, pharmacies_service_1.PharmaciesService])
    ], PharmaciesComponent);
    return PharmaciesComponent;
}());
exports.PharmaciesComponent = PharmaciesComponent;
//# sourceMappingURL=pharmacies.component.js.map