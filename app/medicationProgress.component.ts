
import { Router } from '@angular/router';
import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate,
  Directive
} from '@angular/core';
import {NgStyle} from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
//import { Prescription } from './prescription';
import { OnInit } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { PrescriptionService } from './prescription.service';
import { Prescription } from './prescription';




@Component({
  moduleId: module.id,
  selector: 'my-medicationProgress',
  templateUrl: 'medicationProgress.component.html',
  styleUrls: [ 'medicationProgress.component.css' ]
})

export class MedicationProgressComponent  implements OnInit {

    selectedPrescription: Prescription;
    showStyle: false;
    showWidth: false;
    //private refPrescriptions : Prescription[];
    //private configuredPrescriptions: Prescription[];

    //prescriptions: Prescription[];
    frequency: ['Daily', 'Weekly',
            'Monthly', 'Annual'];

    active = true;
    prescriptionModel = new Prescription(4,"", 0,0,0,0,"Daily");


      constructor( private router: Router,
        private prescriptionService: PrescriptionService,
       ) {

      }

      getStyle() 
      {
        if(this.showStyle){
            return "yellow";
        } else {
            return "";
        }
      }

      onSelect(prescription: Prescription): void{
        this.selectedPrescription = prescription;
      } 

    getPrescriptions(): void{
        /*this.prescriptionService
            .getPrescriptions()
            .then(prescriptions => this.prescriptions = prescriptions)*/

    }
     ngOnInit(): void {
        this.getPrescriptions();
        //console.log("LENGTH OG THE ARRAY " + this.getPrescriptions.length);
       // this.refreshPrescriptions();
        //this.configuredPrescriptions = this.prescriptionService.getDashboardPrescriptions();


     }

   /* refreshPrescriptions(){
        getPrescriptions();
            this.prescriptionService.discoverPrescriptions()
            .subscribe(data => {
                this.refPrescriptions = data;
            })

    }*/

     addToDashboard(prescription: Prescription) {
        //console.log('adding prescription', prescription);
        //this.prescriptionService.addToDashboard(prescription);
       //    prescription.name.trim();
        /*if (!prescription.name) { return; }
            this.prescriptionService.create(prescription.name)
            .then(prescription => {
            this.prescriptions.push(prescription);
            //this.selectedHero = null;
        });*/
    }
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
            this.prescriptionService.create(name)
            .then(prescription => {
            this.prescriptions.push(prescription);
            //this.selectedHero = null;
        });
    }
    

    
    title = "Medication Progress";
    //balanceMedication: number;
    //prescriptions: Prescription[];
  prescriptions : Prescription[] = [
        {id: 1, rxname: 'Concerta', totalDailyAmount:4 , pillTakenToday: 1, dosage: 2, frequencyAmount: 1, frequency: 'Daily'},
        {id: 2, rxname: 'Vicodin', totalDailyAmount:4, pillTakenToday: 2, dosage: 2, frequencyAmount: 1, frequency: 'Daily'},
        {id: 3, rxname: 'Ibuprofen', totalDailyAmount:4, pillTakenToday: 3, dosage: 2, frequencyAmount: 1, frequency: 'Daily'}
    ];



    getWidth(prescription: Prescription) {
        
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

        }

        
    }






}

