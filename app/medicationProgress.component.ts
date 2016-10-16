import { Component } from '@angular/core';
import { Router } from '@angular/router';

//import 'animate.js';

import { Prescription } from './prescription';
import { OnInit } from '@angular/core';





@Component({
  moduleId: module.id,
  selector: 'my-medicationPregress',
  templateUrl: 'medicationProgress.component.html',
  styleUrls: [ 'medicationProgress.component.css' ]
})

export class MedicationProgressComponent  {


    title = "Medication Progress";
    //prescriptions: Prescription[];
    prescriptions : Prescription[] = [
        {id: 1, name: 'Concerta', totalDailyAmount:4 , pillTakenToday: 1, dosage: 2, frequencyAmount: 1, frequency: 'Daily'},
        {id: 2, name: 'Vicodin', totalDailyAmount:4, pillTakenToday: 1, dosage: 2, frequencyAmount: 1, frequency: 'Daily'},
        {id: 3, name: 'Ibuprofen', totalDailyAmount:4, pillTakenToday: 3, dosage: 2, frequencyAmount: 1, frequency: 'Daily'}
    ];



}

