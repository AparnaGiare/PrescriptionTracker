import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';
import './rxjs-extensions';



// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }             from './app.component';
import { PharmacyDetailComponent }  from './pharmacy-detail.component';
import { PharmaciesComponent }      from './pharmacies.component';
import { PharmaciesService }        from './pharmacies.service';
import { DashboardComponent }       from './dashboard.component';
import { PharmacySearchComponent}   from './pharmacy-search.component';
import { PrescriptionFormComponent } from './prescription-form.component';
import { MedicationProgressComponent } from './medicationProgress.component';
import { HighlightDirective }          from './progressBar.directive';




@NgModule({
  imports: [ 
    BrowserModule,    
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
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
          path: 'medicationProgress',
          component: MedicationProgressComponent
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
    HighlightDirective

   ], 

   providers: [
    PharmaciesService
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
