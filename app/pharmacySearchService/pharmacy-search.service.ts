import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Pharmacy }           from '../pharmacy/pharmacy';

@Injectable()
export class PharmacySearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Pharmacy[]> {
    return this.http
               .get(`app/pharmacies/?name=${term}`)
               .map((r: Response) => r.json().data as Pharmacy[]);
  }
}
