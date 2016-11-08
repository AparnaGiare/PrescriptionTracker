import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';


import { PharmaciesService }    from './pharmacies.service';
import { Pharmacy }             from './pharmacy';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  pharmacies: Pharmacy[] = [];

  constructor(
        private router: Router,
        private pharmaciesService: PharmaciesService) {
  }

  ngOnInit(): void {
    this.pharmaciesService.getPharmacies()
      .then(pharmacies => this.pharmacies = pharmacies.slice(1, 5));
  }

  gotoDetail(pharmacy: Pharmacy): void {
    let link = ['/detail', pharmacy.id];
    this.router.navigate(link);
  }

}

