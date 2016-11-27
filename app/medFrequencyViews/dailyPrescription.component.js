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
var prescription_1 = require('../prescription//prescription');
var DailyProgressComponent = (function () {
    function DailyProgressComponent(router, prescriptionService) {
        this.router = router;
        this.prescriptionService = prescriptionService;
        //private refPrescriptions : Prescription[];
        //private configuredPrescriptions: Prescription[];
        //prescriptions: Prescription[];
        //Hard coded words or phrases to display depending on the component controling the view
        this.title = "Daily";
        this.TotalViewAmountPhrase = "Total amount today";
        this.PrescriptionConsumedPhrase = "Consumed today";
        this.PillsLeftToConsume = "Balance left";
        this.active = true;
        this.prescriptionModel = new prescription_1.Prescription(4, "", 0, 0, 0, 0, "Daily");
        //balanceMedication: number;
        //prescriptions: Prescription[];
        this.prescriptions = [
            { id: 1, rxname: 'Concerta', totalDailyAmount: 4, pillTakenToday: 1, dosage: 2, frequencyAmount: 1, frequency: 'Daily' },
            { id: 2, rxname: 'Vicodin', totalDailyAmount: 4, pillTakenToday: 2, dosage: 2, frequencyAmount: 1, frequency: 'Daily' },
            { id: 3, rxname: 'Ibuprofen', totalDailyAmount: 4, pillTakenToday: 3, dosage: 2, frequencyAmount: 1, frequency: 'Daily' }
        ];
    }
    DailyProgressComponent.prototype.getStyle = function () {
        if (this.showStyle) {
            return "yellow";
        }
        else {
            return "";
        }
    };
    DailyProgressComponent.prototype.onSelect = function (prescription) {
        this.selectedPrescription = prescription;
    };
    DailyProgressComponent.prototype.getPrescriptions = function () {
        /*this.prescriptionService
            .getPrescriptions()
            .then(prescriptions => this.prescriptions = prescriptions)*/
    };
    DailyProgressComponent.prototype.ngOnInit = function () {
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
    DailyProgressComponent.prototype.addToDashboard = function (prescription) {
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
    DailyProgressComponent.prototype.add = function (name) {
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
    DailyProgressComponent.prototype.percentageWholeNumber = function (temp) {
        return Math.floor((temp.pillTakenToday / temp.totalDailyAmount) * 100);
    };
    DailyProgressComponent.prototype.getWidth = function (prescription) {
        var percent = "" + this.percentageWholeNumber(prescription);
        return percent + "%";
        /*
       this.selectedPrescription = prescription;
       if (this.selectedPrescription.id==1) {
          return "25%";
        } else if (this.selectedPrescription.id==2) {
            return "50%";
        } else if (this.selectedPrescription.id==3) {
            return "75%";
        }
        else{
            return "50%";

        } */
    };
    DailyProgressComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-medicationProgress',
            templateUrl: './medicationView.component.html',
            styleUrls: ['./medicationView.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, prescription_service_1.PrescriptionService])
    ], DailyProgressComponent);
    return DailyProgressComponent;
}());
exports.DailyProgressComponent = DailyProgressComponent;
//# sourceMappingURL=dailyPrescription.component.js.map