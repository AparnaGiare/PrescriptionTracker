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
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var pharmacy_search_service_1 = require('../pharmacySearchService/pharmacy-search.service');
var PharmacySearchComponent = (function () {
    function PharmacySearchComponent(pharmacySearchService, router) {
        this.pharmacySearchService = pharmacySearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    PharmacySearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    PharmacySearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pharmacies = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.pharmacySearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    PharmacySearchComponent.prototype.gotoDetail = function (pharmacy) {
        var link = ['/detail', pharmacy.id];
        this.router.navigate(link);
    };
    PharmacySearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pharmacy-search',
            templateUrl: 'pharmacy-search.component.html',
            styleUrls: ['pharmacy-search.component.css'],
            providers: [pharmacy_search_service_1.PharmacySearchService]
        }), 
        __metadata('design:paramtypes', [pharmacy_search_service_1.PharmacySearchService, router_1.Router])
    ], PharmacySearchComponent);
    return PharmacySearchComponent;
}());
exports.PharmacySearchComponent = PharmacySearchComponent;
//# sourceMappingURL=pharmacy-search.component.js.map