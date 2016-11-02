"use strict";
var Prescription = (function () {
    function Prescription(id, rxname, totalDailyAmount, pillTakenToday, dosage, frequencyAmount, frequency) {
        this.id = id;
        this.rxname = rxname;
        this.totalDailyAmount = totalDailyAmount;
        this.pillTakenToday = pillTakenToday;
        this.dosage = dosage;
        this.frequencyAmount = frequencyAmount;
        this.frequency = frequency;
    }
    return Prescription;
}());
exports.Prescription = Prescription;
//# sourceMappingURL=prescription.js.map