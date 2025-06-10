import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clinic } from './clinic';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  private baseUrl = 'http://localhost:8082/api/v0/clinic'; // Update if your backend URL differs

  constructor(private http: HttpClient) {}

  getClinics(): Observable<Clinic[]> {
     const token = localStorage.getItem('token') || '';
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<Clinic[]>(this.baseUrl+"/listClinics",{headers});
  }

  getClinicById(id: number): Observable<Clinic> {
    return this.http.get<Clinic>(`${this.baseUrl}/${id}`);
  }

  createClinic(clinic: Clinic): Observable<Clinic> {
    const token = localStorage.getItem('token') || '';
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post<Clinic>(this.baseUrl+"/addClinic",clinic,{headers});
  }

  updateClinic(id: number, clinic: Clinic): Observable<Clinic> {
    const token = localStorage.getItem('token') || '';
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.put<Clinic>(`${this.baseUrl}/${id}`, clinic,{headers});
  }

  deleteClinic(id: number): Observable<void> {
    const token = localStorage.getItem('token') || '';
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.delete<void>(`${this.baseUrl}/${id}`,{headers});
  }
}
