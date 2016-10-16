import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Pharmacy } from './pharmacy';
import { PharmaciesService } from './pharmacies.service';
import { OnInit } from '@angular/core';




@Component({
  moduleId: module.id,
  selector: 'my-pharmacies',
  templateUrl: 'pharmacies.component.html',
  styleUrls: [ 'pharmacies.component.css' ]
})

export class PharmaciesComponent implements OnInit {

    pharmacies: Pharmacy[];
    selectedPharmacy: Pharmacy;
    pharmacy: Pharmacy;

    constructor(
        private router: Router,
        private pharmaciesService: PharmaciesService) {}

    getPharmacies(): void {
       this.pharmaciesService.getPharmacies().then(pharmacies => this.pharmacies = pharmacies);
    }

    ngOnInit(): void {
        this.getPharmacies();
    }

    onSelect(pharmacy: Pharmacy): void{
      this.selectedPharmacy = pharmacy;
    } 

    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedPharmacy.id]);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
            this.pharmaciesService.create(name)
            .then(pharmacy => {
            this.pharmacies.push(pharmacy);
            this.selectedPharmacy = null;
    });
    }
    
    delete(pharmacy: Pharmacy): void {
         this.pharmaciesService
         .delete(pharmacy.id)
         .then(() => {
         this.pharmacies = this.pharmacies.filter(h => h !== pharmacy);
         if (this.selectedPharmacy === pharmacy) { this.selectedPharmacy = null; }
      });
  }

}

