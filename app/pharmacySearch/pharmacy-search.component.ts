import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { PharmacySearchService } from '../pharmacySearchService/pharmacy-search.service';
import { Pharmacy } from '../pharmacy/pharmacy';


@Component({
  moduleId: module.id,
  selector: 'pharmacy-search',
  templateUrl: 'pharmacy-search.component.html',
  styleUrls: [ 'pharmacy-search.component.css' ],
  providers: [PharmacySearchService]
})


export class PharmacySearchComponent implements OnInit {
  pharmacies: Observable<Pharmacy[]>;
  
  private searchTerms = new Subject<string>();

  constructor(
    private pharmacySearchService: PharmacySearchService,
    private router: Router) {}


  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pharmacies = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.pharmacySearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Pharmacy[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Pharmacy[]>([]);
      });
  }
  gotoDetail(pharmacy: Pharmacy): void {
    let link = ['/detail', pharmacy.id];
    this.router.navigate(link);
  }
}
