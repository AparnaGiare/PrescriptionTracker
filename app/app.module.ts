import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';
import './rxjs-extensions';



// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
//import { PrescriptionDataService }  from './prescription-data';


import { AppComponent }             from './app.component';
import { PharmacyDetailComponent }  from './pharmacy-detail.component';
import { PharmaciesComponent }      from './pharmacies.component';
import { PharmaciesService }        from './pharmacies.service';
import { DashboardComponent }       from './dashboard.component';
import { PharmacySearchComponent}   from './pharmacy-search.component';
import { PrescriptionFormComponent } from './prescription-form.component';
import { MedicationProgressComponent } from './medicationProgress.component';
import { HighlightDirective }          from './progressBar.directive';
import { ModalComponent}              from './modal/modal.component';
import { PrescriptionService}         from './prescription.service';
//import { ModalService}          from './modal.directive';
import { medicationDashboardComponent } from './medFrequencyViews/medicationDashboard.component';
import { DailyProgressComponent } from './medFrequencyViews/dailyPrescription.component';
import { WeeklyProgressComponent } from './medFrequencyViews/weeklyPrescription.component';
import { MonthlyProgressComponent } from './medFrequencyViews/monthlyPrescription.component';






@NgModule({
  imports: [ 
    BrowserModule,    
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    //InMemoryWebApiModule.forRoot(PrescriptionDataService),
    RouterModule.forRoot([
        {
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
        },
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: 'detail/:id',
          component: PharmacyDetailComponent
        },      
        {
          path: 'prescriptions',
          component: PrescriptionFormComponent
        },
        {
          path: 'pharmacies',
          component: PharmaciesComponent
        },
        {
          path: 'medicationDashBoard',
          component: medicationDashboardComponent,
            children :[
              {
                  path: '',
                  redirectTo: 'dailyMedicationFrequency',
                  
             },
             {
                  path: 'dailyMedicationFrequency',
                  component: DailyProgressComponent
             },
             {
                  path: 'weeklyMedicationFrequency',
                  component: WeeklyProgressComponent
             },
             {
                  path: 'monthlyMedicationFrequency',
                  component: MonthlyProgressComponent
             }
           ]
        }
    ])
   ],
  declarations: [ 
    AppComponent, 
    DashboardComponent,
    PharmacyDetailComponent,
    PharmaciesComponent,
    PharmacySearchComponent,
    PrescriptionFormComponent,
    MedicationProgressComponent,
    HighlightDirective,
    ModalComponent,
    medicationDashboardComponent,
    DailyProgressComponent,
    WeeklyProgressComponent,
    MonthlyProgressComponent
   ], 

   providers: [
    PharmaciesService,
    PrescriptionService
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
