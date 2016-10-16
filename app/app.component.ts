import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/pharmacies" routerLinkActive="active">Pharmacies</a>
    <a routerLink="/prescriptions" routerLinkActive="active">Prescriptions</a>
    <a routerLink="/medicationProgress" routerLinkActive="active">Medication Progress</a>
  </nav>
  <router-outlet></router-outlet>`,
  styleUrls: ['app.component.css']

})
export class AppComponent {
  title = 'Pharmacies Near you';
}
