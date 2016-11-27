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
var prescription_1 = require('../prescription/prescription');
var PrescriptionFormComponent = (function () {
    function PrescriptionFormComponent() {
        this.meds = ['Ibuprofen', 'Concerta',
            'Vicodin', 'zpac'];
        this.frequency = ['Daily', 'Weekly',
            'Monthly', 'Annual'];
        //Updated the Prescription Object with 2 new fields
        this.model = new prescription_1.Prescription(1, this.meds[0], 0, 0, 2, 3, this.frequency[0]);
        this.submitted = false;
        // TODO: Remove this when we're done
        //get diagnostic() { return JSON.stringify(this.model); }
        this.active = true;
    }
    PrescriptionFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    PrescriptionFormComponent.prototype.newPrescription = function () {
        var _this = this;
        this.model = new prescription_1.Prescription(2, '', 0, 0, 0, 0, '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    PrescriptionFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'prescription-form',
            templateUrl: 'prescription-form.component.html',
            // styleUrls: ['href="node_modules/bootstrap/dist/css/bootstrap.min.css']
            styleUrls: ['prescription-form.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PrescriptionFormComponent);
    return PrescriptionFormComponent;
}());
exports.PrescriptionFormComponent = PrescriptionFormComponent;
//# sourceMappingURL=prescription-form.component.js.map