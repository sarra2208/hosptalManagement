import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../views/patient-management/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }
getPatients() {
  const token = localStorage.getItem('token') || '';
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

  return this.http.get<Patient[]>('http://localhost:8082/api/v0/patient/listPatients', { headers }); // example endpoint
}

deletePatient(id: string) {
  return this.http.delete(`/api/patients/${id}`);
}
  addPatient(patient: any) {
  const token = localStorage.getItem('token') || '';
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

  return this.http.post<any>('http://localhost:8082/api/v0/patient/addPatient', patient, { headers });
}

}

