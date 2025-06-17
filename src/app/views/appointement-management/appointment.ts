import { Stuff } from "../stuff-management/stuff";


export class Appointment {
   id: number;
   date: string;
   heure: string;
   description: string;
   note: string;
   state: string;
   staff: Stuff;
   patient: any;

   constructor(
    id: number,
    date: string,
    heure: string,
    description: string,
    note: string,
    state: string,
    staff: Stuff,
    patient: string
  ) {
    this.id = id;
    this.date = date;
    this.heure = heure;
    this.description = description;
    this.note = note;
    this.state = state;
    this.staff = staff;
    this.patient = patient;
  }
}
