import { Component } from '@angular/core';
import { Prescription }    from './prescription';


@Component({
  moduleId: module.id,
  selector: 'prescription-form',
  templateUrl: 'prescription-form.component.html',
 // styleUrls: ['href="node_modules/bootstrap/dist/css/bootstrap.min.css']
  styleUrls: [ 'prescription-form.component.css' ]

})
export class PrescriptionFormComponent {
  meds = ['Ibuprofen', 'Concerta',
            'Vicodin', 'zpac'];
  frequency = ['Daily', 'Weekly',
            'Monthly', 'Annual'];

            //Updated the Prescription Object with 2 new fields
  model = new Prescription(1,this.meds[0], 0,0,2,3,this.frequency[0]);
  submitted = false;
  
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

    active = true;

  newPrescription() {
    this.model = new Prescription(2,'', 0,0,0,0,'');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
  

}
