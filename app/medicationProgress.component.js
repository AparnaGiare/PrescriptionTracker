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
var Progressbar = (function () {
    function Progressbar() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Progressbar.prototype, "animate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Progressbar.prototype, "max", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Progressbar.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Progressbar.prototype, "value", void 0);
    return Progressbar;
}());
exports.Progressbar = Progressbar;
var MedicationProgressComponent = (function () {
    function MedicationProgressComponent() {
        this.max = 200;
        this.title = "Medication Progress";
        //balanceMedication: number;
        //prescriptions: Prescription[];
        this.prescriptions = [
            { id: 1, name: 'Concerta', totalDailyAmount: 4, pillTakenToday: 1, dosage: 2, frequencyAmount: 1, frequency: 'Daily' },
            { id: 2, name: 'Vicodin', totalDailyAmount: 4, pillTakenToday: 1, dosage: 2, frequencyAmount: 1, frequency: 'Daily' },
            { id: 3, name: 'Ibuprofen', totalDailyAmount: 4, pillTakenToday: 3, dosage: 2, frequencyAmount: 1, frequency: 'Daily' }
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
    MedicationProgressComponent.prototype.ngOnInit = function () {
    };
    MedicationProgressComponent.prototype.getProgressWidth = function () {
        if (this.showWidth) {
            return "50%";
        }
        else {
            return "";
        }
    };
    MedicationProgressComponent.prototype.addNewMedication = function () {
        alert("add meds");
    };
    MedicationProgressComponent.prototype.getWidth = function (prescription) {
        this.selectedPrescription = prescription;
        if (this.selectedPrescription.id == 1) {
            return "25%";
        }
        else if (this.selectedPrescription.id == 2) {
            return "25%";
        }
        else if (this.selectedPrescription.id == 3) {
            return "75%";
        }
    };
    MedicationProgressComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-medicationPregress',
            //template: '<div><div [style.background-color]="getStyle()">I am a div that wants to be styled</div><button (click)="showStyle = !showStyle;">Toggle style</button></div>',
            templateUrl: 'medicationProgress.component.html',
            /*template: '<h2>Your Progress so far......</h2><div class="row" ng-app="myApp"><div class="col-sm-12"><div class="row"><div class="col-md-3" *ngFor="let prescription of prescriptions"><div class="well"><h3 class="text-primary text-center"><span class="label label-primary">{{prescription.name}}</span></h3><br><h4 class="text-primary"><span class="label label-primary pull-right">{{prescription.totalDailyAmount}}</span> Total Pills to take today </h4><h4 class="text-success"><span class="label label-success pull-right">{{prescription.pillTakenToday}}</span>  Taken so far</h4><h4 class="text-danger"><span class="label label-danger pull-right">{{prescription.totalDailyAmount - prescription.pillTakenToday}}</span> Balance left </h4></div><div class="progress view-animate-container" ng-controller="ProgressDemoCtrl"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:65%"> {{prescription.pillTakenToday / prescription.totalDailyAmount * 100}} % Complete (success)</div></div></div></div><!--/row--></div></div> <div ng-controller="ProgressDemoCtrl"><hr />',*/
            styleUrls: ['medicationProgress.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MedicationProgressComponent);
    return MedicationProgressComponent;
}());
exports.MedicationProgressComponent = MedicationProgressComponent;
//# sourceMappingURL=medicationProgress.component.js.map