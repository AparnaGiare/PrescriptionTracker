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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var prescription_service_1 = require('../prescriptionService/prescription.service');
var prescription_1 = require('../prescription/prescription');
var MedicationProgressComponent = (function () {
    function MedicationProgressComponent(router, prescriptionService) {
        this.router = router;
        this.prescriptionService = prescriptionService;
        this.active = true;
        this.prescriptionModel = new prescription_1.Prescription(4, "", 0, 0, 0, 0, "Daily");
        this.title = "Medication Progress";
        //balanceMedication: number;
        //prescriptions: Prescription[];
        this.prescriptions = [
            { id: 1, rxname: 'Concerta', totalDailyAmount: 4, pillTakenToday: 1, dosage: 2, frequencyAmount: 1, frequency: 'Daily' },
            { id: 2, rxname: 'Vicodin', totalDailyAmount: 4, pillTakenToday: 2, dosage: 2, frequencyAmount: 1, frequency: 'Daily' },
            { id: 3, rxname: 'Ibuprofen', totalDailyAmount: 4, pillTakenToday: 3, dosage: 2, frequencyAmount: 1, frequency: 'Daily' }
        ];
    }
    MedicationProgressComponent.prototype.getStyle = function () {
        if (this.showStyle) {
            return "yellow";
        }
        else {
            return "";
        }
    };
    MedicationProgressComponent.prototype.onSelect = function (prescription) {
        this.selectedPrescription = prescription;
    };
    MedicationProgressComponent.prototype.getPrescriptions = function () {
        /*this.prescriptionService
            .getPrescriptions()
            .then(prescriptions => this.prescriptions = prescriptions)*/
    };
    MedicationProgressComponent.prototype.ngOnInit = function () {
        this.getPrescriptions();
        //console.log("LENGTH OG THE ARRAY " + this.getPrescriptions.length);
        // this.refreshPrescriptions();
        //this.configuredPrescriptions = this.prescriptionService.getDashboardPrescriptions();
    };
    /* refreshPrescriptions(){
         getPrescriptions();
             this.prescriptionService.discoverPrescriptions()
             .subscribe(data => {
                 this.refPrescriptions = data;
             })
 
     }*/
    MedicationProgressComponent.prototype.addToDashboard = function (prescription) {
        //console.log('adding prescription', prescription);
        //this.prescriptionService.addToDashboard(prescription);
        //    prescription.name.trim();
        /*if (!prescription.name) { return; }
            this.prescriptionService.create(prescription.name)
            .then(prescription => {
            this.prescriptions.push(prescription);
            //this.selectedHero = null;
        });*/
    };
    MedicationProgressComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.prescriptionService.create(name)
            .then(function (prescription) {
            _this.prescriptions.push(prescription);
            //this.selectedHero = null;
        });
    };
    MedicationProgressComponent.prototype.getWidth = function (prescription) {
        this.selectedPrescription = prescription;
        if (this.selectedPrescription.id == 1) {
            return "25%";
        }
        else if (this.selectedPrescription.id == 2) {
            return "50%";
        }
        else if (this.selectedPrescription.id == 3) {
            return "75%";
        }
        else {
            return "50%";
        }
    };
    MedicationProgressComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-medicationProgress',
            templateUrl: './medicationProgress.component.html',
            styleUrls: ['./medicationProgress.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, prescription_service_1.PrescriptionService])
    ], MedicationProgressComponent);
    return MedicationProgressComponent;
}());
exports.MedicationProgressComponent = MedicationProgressComponent;
//# sourceMappingURL=medicationProgress.component.js.map