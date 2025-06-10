import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from './departement';
import { Clinic } from '../clinic-management/clinic';

@Injectable({ providedIn: 'root' })
export class DepartmentService {
  private apiUrl = 'http://localhost:8082/api/v0/service';
  private clinicUrl = 'http://localhost:8082/api/v0/clinic';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Department[]> {
    const token = localStorage.getItem('token') || '';
          const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<Department[]>(this.apiUrl+"/listServices",{headers});
  }

  create(dept: Department): Observable<Department> {
        const token = localStorage.getItem('token') || '';
          const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post<Department>(this.apiUrl+"/addService", dept,{headers});
  }

  update(dept: Department): Observable<Department> {
        const token = localStorage.getItem('token') || '';
          const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.put<Department>(`${this.apiUrl}/${dept.id}`, dept,{headers});
  }

  delete(id: string): Observable<void> {
        const token = localStorage.getItem('token') || '';
          const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.delete<void>(`${this.apiUrl}/${id}`,{headers});
  }

  getClinics(): Observable<Clinic[]> {
        const token = localStorage.getItem('token') || '';
          const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<Clinic[]>(this.clinicUrl+"/listClinics",{headers});
  }
}
