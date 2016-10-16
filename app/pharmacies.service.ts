import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Pharmacy } from './pharmacy';


@Injectable()
export class PharmaciesService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private pharmaciesUrl = 'app/pharmacies';  // URL to web api

  constructor(private http: Http) { }

  

  update(pharmacy: Pharmacy): Promise<Pharmacy> {
    const url = `${this.pharmaciesUrl}/${pharmacy.id}`;
    return this.http
    .put(url, JSON.stringify(pharmacy), {headers: this.headers})
    .toPromise()
    .then(() => pharmacy)
    .catch(this.handleError);
  }


    getPharmacies(): Promise<Pharmacy[]> {
      return this.http.get(this.pharmaciesUrl)
               .toPromise()
               .then(response => response.json().data as Pharmacy[])
               .catch(this.handleError);
    }

    getHeroesSlowly(): Promise<Pharmacy[]> {
      return new Promise<Pharmacy[]>(resolve =>
        setTimeout(resolve, 2000)) // delay 2 seconds
        .then(() => this.getPharmacies());
    }

    getPharmacy(id: number): Promise<Pharmacy> {
        return this.getPharmacies()
             .then(pharmacies => pharmacies.find(pharmacy => pharmacy.id === id));
    }

    create(name: string): Promise<Pharmacy> {
        return this.http
       .post(this.pharmaciesUrl, JSON.stringify({name: name}), {headers: this.headers})
       .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
    }
    delete(id: number): Promise<void> {
        const url = `${this.pharmaciesUrl}/${id}`;
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

