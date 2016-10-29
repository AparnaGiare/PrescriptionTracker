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
var prescription_service_1 = require('./prescription.service');
var PrescriptionComponent = (function () {
    function PrescriptionComponent(router, prescriptionService) {
        this.router = router;
        this.prescriptionService = prescriptionService;
    }
    PrescriptionComponent.prototype.getPharmacies = function () {
        var _this = this;
        this.prescriptionService.getPrescriptions().then(function (prescriptions) { return _this.prescriptions = prescriptions; });
    };
    PrescriptionComponent.prototype.ngOnInit = function () {
        this.getPharmacies();
    };
    PrescriptionComponent.prototype.onSelect = function (prescription) {
        this.selectedPrescription = prescription;
    };
    PrescriptionComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedPrescription.id]);
    };
    PrescriptionComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.prescriptionService.create(name)
            .then(function (prescription) {
            _this.prescriptions.push(prescription);
            _this.selectedPrescription = null;
        });
    };
    PrescriptionComponent.prototype.delete = function (prescription) {
        var _this = this;
        this.prescriptionService
            .delete(prescription.id)
            .then(function () {
            _this.prescriptions = _this.prescriptions.filter(function (h) { return h !== prescription; });
            if (_this.selectedPrescription === prescription) {
                _this.selectedPrescription = null;
            }
        });
    };
    PrescriptionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-prescriptions',
        }), 
        __metadata('design:paramtypes', [router_1.Router, prescription_service_1.PrescriptionService])
    ], PrescriptionComponent);
    return PrescriptionComponent;
}());
exports.PrescriptionComponent = PrescriptionComponent;
//# sourceMappingURL=prescription.component.js.map