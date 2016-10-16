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
var MedicationProgressComponent = (function () {
    function MedicationProgressComponent() {
        this.title = "Medication Progress";
        //prescriptions: Prescription[];
        this.prescriptions = [
            { id: 1, name: 'Concerta', totalDailyAmount: 4, pillTakenToday: 1, dosage: 2, frequencyAmount: 1, frequency: 'Daily' },
            { id: 2, name: 'Vicodin', totalDailyAmount: 4, pillTakenToday: 1, dosage: 2, frequencyAmount: 1, frequency: 'Daily' },
            { id: 3, name: 'Ibuprofen', totalDailyAmount: 4, pillTakenToday: 3, dosage: 2, frequencyAmount: 1, frequency: 'Daily' }
        ];
    }
    MedicationProgressComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-medicationPregress',
            templateUrl: 'medicationProgress.component.html',
            styleUrls: ['medicationProgress.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], MedicationProgressComponent);
    return MedicationProgressComponent;
}());
exports.MedicationProgressComponent = MedicationProgressComponent;
//# sourceMappingURL=medicationProgress.component.js.map