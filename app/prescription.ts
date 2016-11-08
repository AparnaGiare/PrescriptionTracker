export class Prescription{

    constructor(
        public id: number,
        public rxname: string,
        public totalDailyAmount: number,
		public pillTakenToday:number, 
        public dosage: number,
        public frequencyAmount: number,
        public frequency: string
    ){}
}