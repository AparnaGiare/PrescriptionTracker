import { Component } from '@angular/core';
import { Prescription }    from '../prescription/prescription';


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
  frequency = ['Daily', 'Weekly', 'Monthly'];

  dosageType = ['Mg', 'Ml', 'Teaspoon', 'Pills'];

  days= ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

  // check: any = []
  // arrayCheck = [{'key11':'value11'},{'key11':'value12'},{'key11':'value13'},{'key11':'value14'},{'key11':'value15'}];
  // demo2 = [1,2,3,4,5]
  // demoChk: any = [];
  // updateChecked2(value: any,event: any){
  //   if(event.target.checked){
  //     this.demoChk.push(value);
  //   }
  //   else if (!event.target.checked){
  //     let indexx = this.demoChk.indexOf(value);
  //     this.demoChk.splice(indexx,1);
  //   }
  //   console.log(this.demoChk)
  // }

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
