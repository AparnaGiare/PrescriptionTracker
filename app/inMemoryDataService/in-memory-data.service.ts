import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let pharmacies = [
       {id: 1, name: 'CVS', address: 'Burke Centre Conservancy, 5711 Burke Center Parkway, Burke, VA, 22015', phone:'(703) 425-9032',hours:'8AM - 10PM'},
       {id: 2, name: 'Target', address: '10301 New Guinea Rd, Fairfax, VA 22032', phone:'(703) 764-5100',hours:'8AM - 11PM'}, 
       {id: 3, name: 'Giant', address: 'Burke Center, Burke, VA 22015',phone:'(703) 425-0362',hours:'9AM - 9PM'}, 
       {id: 4, name: 'Walgreen', address: 'Old Keene Mill Shopping Center, 8414 Old Keene Mill Rd a, Springfield, VA 22152',phone:'(703) 913-6712',hours:'8AM - 10PM'},
       {id: 5, name: 'Walmart', address: '6000 Burke Commons Rd, Burke, VA 22015',phone:'(703) 250-9282',hours:'9AM - 7PM'}
    ];
    return {pharmacies};
  }

}
