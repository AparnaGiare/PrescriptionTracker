"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
require('./rxjs-extensions');
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
//import { PrescriptionDataService }  from './prescription-data';
var app_component_1 = require('./app.component');
var pharmacy_detail_component_1 = require('./pharmacy-detail.component');
var pharmacies_component_1 = require('./pharmacies.component');
var pharmacies_service_1 = require('./pharmacies.service');
var dashboard_component_1 = require('./dashboard.component');
var pharmacy_search_component_1 = require('./pharmacy-search.component');
var prescription_form_component_1 = require('./prescription-form.component');
var medicationProgress_component_1 = require('./medicationProgress.component');
var progressBar_directive_1 = require('./progressBar.directive');
var modal_component_1 = require('./modal/modal.component');
var prescription_service_1 = require('./prescription.service');
//import { ModalService}          from './modal.directive';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                //InMemoryWebApiModule.forRoot(PrescriptionDataService),
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: '/dashboard',
                        pathMatch: 'full'
                    },
                    {
                        path: 'dashboard',
                        component: dashboard_component_1.DashboardComponent
                    },
                    {
                        path: 'detail/:id',
                        component: pharmacy_detail_component_1.PharmacyDetailComponent
                    },
                    {
                        path: 'prescriptions',
                        component: prescription_form_component_1.PrescriptionFormComponent
                    },
                    {
                        path: 'pharmacies',
                        component: pharmacies_component_1.PharmaciesComponent
                    },
                    {
                        path: 'medicationProgress',
                        component: medicationProgress_component_1.MedicationProgressComponent
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                pharmacy_detail_component_1.PharmacyDetailComponent,
                pharmacies_component_1.PharmaciesComponent,
                pharmacy_search_component_1.PharmacySearchComponent,
                prescription_form_component_1.PrescriptionFormComponent,
                medicationProgress_component_1.MedicationProgressComponent,
                progressBar_directive_1.HighlightDirective,
                modal_component_1.ModalComponent
            ],
            providers: [
                pharmacies_service_1.PharmaciesService,
                prescription_service_1.PrescriptionService
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map