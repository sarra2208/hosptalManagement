import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stuff } from './stuff';

@Injectable({
  providedIn: 'root'
})
export class StuffService {
  private baseUrl = 'http://localhost:8082/api/v0/staff'; // Adjust base URL to match backend

  constructor(private http: HttpClient) {}

  getAllStaff(): Observable<Stuff[]> {
     const token = localStorage.getItem('token') || '';
              const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<Stuff[]>(this.baseUrl+"/listStaffs",{headers});
  }

  getStaffById(id: string): Observable<Stuff> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<Stuff>(`${this.baseUrl}/${id}`,{headers});
  }

  createStaff(stuff: Stuff): Observable<Stuff> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post<Stuff>(this.baseUrl+"/addStaff", stuff,{headers});
  }

  updateStaff(id: string, stuff: Stuff): Observable<Stuff> {
        const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.put<Stuff>(`${this.baseUrl}/${id}`, stuff,{headers});
  }

  deleteStaff(id: string): Observable<void> {
        const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.delete<void>(`${this.baseUrl}/${id}`,{headers});
  }
}
