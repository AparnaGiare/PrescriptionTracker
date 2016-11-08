import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-medicationDashboard',
  template: `
  <h1>{{title}}</h1>
  <div id="prescriptionLinkContainer">
    <nav>
      <a routerLink="dailyMedicationFrequency" routerLinkActive="active">Daily</a>
      <a routerLink="weeklyMedicationFrequency" routerLinkActive="active">Weekly</a>
      <a routerLink="monthlyMedicationFrequency" routerLinkActive="active">Monthly</a>
      
    </nav>
  </div>
  <router-outlet></router-outlet>`,
  styleUrls: ['medicationDashboard.component.css']

})
export class medicationDashboardComponent {
  title = 'Medication Frequency Tracker';
}
