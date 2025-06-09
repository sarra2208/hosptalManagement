export interface Patient {
  id: string;
  firstname: string;
  lastname: string;
  birthdate: string;  // ISO date string format e.g. "1990-01-01"
  gender: string;
  mobile: string;
  email: string;
  assignedDoctor: string;
  lastAppointment: Date;
}