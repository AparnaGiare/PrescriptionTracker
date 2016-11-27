import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

import { Prescription } from '../prescription/prescription';



@Injectable()
export class PrescriptionService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private prescriptionUrl = 'app/prescriptions';  // URL to web api

    private dashboardPrescription: Prescription[] = [];
    //private dataUrl = 'app/prescriptions.jason';

    constructor(private http: Http) {
    }

    /*discoverPrescriptions() {
        return this.http
            .get(this.prescriptionUrl)
            .map(res => res.json());
    }*/

    addToDashboard(prescription: Prescription) {
        this.dashboardPrescription.push(prescription);
    }

    getDashboardPrescriptions(): Prescription[] {
        return this.dashboardPrescription;
    }

    ////// Prescriptions functions


    update(prescription: Prescription): Promise<Prescription> {
    const url = `${this.prescriptionUrl}/${prescription.id}`;
    return this.http
    .put(url, JSON.stringify(prescription), {headers: this.headers})
    .toPromise()
    .then(() => prescription)
    .catch(this.handleError);
  }


    getPrescriptions(): Promise<Prescription[]> {
      return this.http.get(this.prescriptionUrl)
               .toPromise()
               .then(response => response.json().data as Prescription[])
               .catch(this.handleError);
    }

    getPrescriptionSlowly(): Promise<Prescription[]> {
      return new Promise<Prescription[]>(resolve =>
        setTimeout(resolve, 2000)) // delay 2 seconds
        .then(() => this.getPrescriptions());
    }

    getPrescription(id: number): Promise<Prescription> {
        return this.getPrescriptions()
             .then(prescriptions => prescriptions.find(prescription => prescription.id === id));
    }

    create(name: string): Promise<Prescription> {console.log("Prescription service create");
        return this.http
       .post(this.prescriptionUrl, JSON.stringify({name: name}), {headers: this.headers})
       .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
    }
    delete(id: number): Promise<void> {
        const url = `${this.prescriptionUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
         .toPromise()
         .then(() => null)
         .catch(this.handleError);
      }


      private handleError(error: any): Promise<any> {
          console.error('An error occurred', error); // for demo purposes only
          return Promise.reject(error.message || error);
      }

}
