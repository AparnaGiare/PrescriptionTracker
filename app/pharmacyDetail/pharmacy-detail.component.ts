import { Component, Input }         from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { OnInit }                   from '@angular/core';


import { Pharmacy }           from '../pharmacy/pharmacy';
import { PharmaciesService }  from '../pharmaciesService/pharmacies.service';


@Component({
  moduleId: module.id,
  selector: 'my-pharmacy-detail',
  templateUrl: 'pharmacy-detail.component.html',
  styleUrls: [ 'pharmacy-detail.component.css' ]

})
export class PharmacyDetailComponent implements OnInit {
  @Input()
  pharmacy: Pharmacy;

  ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
    let id = +params['id'];
    this.pharmaciesService.getPharmacy(id)
      .then(pharmacy => this.pharmacy = pharmacy);
  });
}


  constructor(
  private pharmaciesService: PharmaciesService,
  private route: ActivatedRoute,
  private location: Location
  ) {}
  save(): void {
    this.pharmaciesService.update(this.pharmacy)
    .then(() => this.goBack());
  }
  goBack(): void {
    this.location.back(); 
  }
  


}

