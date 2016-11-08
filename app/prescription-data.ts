import { InMemoryDbService } from 'angular-in-memory-web-api';
export class PrescriptionDataService implements InMemoryDbService {
  createDb() {
    let prescriptions = [
        {id: 1, name: 'Concerta', totalDailyAmount:4 , pillTakenToday: 1, dosage: 2, frequencyAmount: 1, frequency: 'Daily'},
        {id: 2, name: 'Vicodin', totalDailyAmount:4, pillTakenToday: 2, dosage: 2, frequencyAmount: 1, frequency: 'Daily'},
        {id: 3, name: 'Ibuprofen', totalDailyAmount:4, pillTakenToday: 3, dosage: 2, frequencyAmount: 1, frequency: 'Daily'}
    ];
    return {prescriptions};
  }
}
