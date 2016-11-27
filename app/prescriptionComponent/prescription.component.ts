import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Prescription } from '../prescription/prescription';
import { PrescriptionService } from '../prescriptionService/prescription.service';
import { OnInit } from '@angular/core';




@Component({
  moduleId: module.id,
  selector: 'my-prescriptions',
  //templateUrl: 'pharmacies.component.html',
  //styleUrls: [ 'pharmacies.component.css' ]
})

export class PrescriptionComponent implements OnInit {

    prescriptions: Prescription[];
    selectedPrescription: Prescription;
    prescription: Prescription;

    constructor(
        private router: Router,
        private prescriptionService: PrescriptionService) {}

    getPharmacies(): void {
       this.prescriptionService.getPrescriptions().then(prescriptions => this.prescriptions = prescriptions);
    }

    ngOnInit(): void {
        this.getPharmacies();
    }

    onSelect(prescription: Prescription): void{
      this.selectedPrescription = prescription;
    } 

    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedPrescription.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
            this.prescriptionService.create(name)
            .then(prescription => {
            this.prescriptions.push(prescription);
            this.selectedPrescription = null;
    });
    }
    
    delete(prescription: Prescription): void {
         this.prescriptionService
         .delete(prescription.id)
         .then(() => {
         this.prescriptions = this.prescriptions.filter(h => h !== prescription);
         if (this.selectedPrescription === prescription) { this.selectedPrescription = null; }
      });
  }

}

