import { Patient } from "../patient-management/patient";
import { Stuff } from "../stuff-management/stuff";

export interface Appointment {
   id: number;
   date: string;
   heure: string;
   description: string;
   note: string;
   state: string;
   staff: Stuff;
   patient: Patient;
}
