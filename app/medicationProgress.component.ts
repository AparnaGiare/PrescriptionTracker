
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
import { Prescription } from './prescription';
import { OnInit } from '@angular/core';




export class Progressbar {
    @Input() private animate:boolean;
    @Input() private max:number;
    @Input() private type:string;
    @Input() private value:number;
}



@Component({
  moduleId: module.id,
  selector: 'my-medicationPregress',
  //template: '<div><div [style.background-color]="getStyle()">I am a div that wants to be styled</div><button (click)="showStyle = !showStyle;">Toggle style</button></div>',
  templateUrl: 'medicationProgress.component.html',
/*template: '<h2>Your Progress so far......</h2><div class="row" ng-app="myApp"><div class="col-sm-12"><div class="row"><div class="col-md-3" *ngFor="let prescription of prescriptions"><div class="well"><h3 class="text-primary text-center"><span class="label label-primary">{{prescription.name}}</span></h3><br><h4 class="text-primary"><span class="label label-primary pull-right">{{prescription.totalDailyAmount}}</span> Total Pills to take today </h4><h4 class="text-success"><span class="label label-success pull-right">{{prescription.pillTakenToday}}</span>  Taken so far</h4><h4 class="text-danger"><span class="label label-danger pull-right">{{prescription.totalDailyAmount - prescription.pillTakenToday}}</span> Balance left </h4></div><div class="progress view-animate-container" ng-controller="ProgressDemoCtrl"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:65%"> {{prescription.pillTakenToday / prescription.totalDailyAmount * 100}} % Complete (success)</div></div></div></div><!--/row--></div></div> <div ng-controller="ProgressDemoCtrl"><hr />',*/
styleUrls: [ 'medicationProgress.component.css' ]
})

export class MedicationProgressComponent  implements OnInit {

    selectedPrescription: Prescription;
    showStyle: false;
    showWidth: false;
    private timer:any;



      public max:number = 200;
      public currentValue:number;
      public type:string;
      public testValue:number;
      private id:number;
      

      constructor() {
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

    ngOnInit(): void {
        
    }
    

    
    title = "Medication Progress";
    //balanceMedication: number;
    //prescriptions: Prescription[];
    prescriptions : Prescription[] = [
        {id: 1, name: 'Concerta', totalDailyAmount:4 , pillTakenToday: 1, dosage: 2, frequencyAmount: 1, frequency: 'Daily'},
        {id: 2, name: 'Vicodin', totalDailyAmount:4, pillTakenToday: 1, dosage: 2, frequencyAmount: 1, frequency: 'Daily'},
        {id: 3, name: 'Ibuprofen', totalDailyAmount:4, pillTakenToday: 3, dosage: 2, frequencyAmount: 1, frequency: 'Daily'}
    ];

    getProgressWidth() {
         if(this.showWidth){
            return "50%";
        } else {
            return "";
        }
    }

     addNewMedication() {
         alert("add meds")
    }
    
    getWidth(prescription: Prescription) {
        
       this.selectedPrescription = prescription;
       if (this.selectedPrescription.id==1) {
          return "25%";
        } else if (this.selectedPrescription.id==2) {
            return "25%";
        } else if (this.selectedPrescription.id==3) {
            return "75%";
        }

        
    }






}

