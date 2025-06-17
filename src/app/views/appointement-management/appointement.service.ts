import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';
import { AppointmentStats } from './appointementStats';

@Injectable({
  providedIn: 'root'
})
export class AppointementService {

  private apiUrl = 'http://localhost:8082/api/v0/appointment';
  
    constructor(private http: HttpClient) {}
  
    getAll(): Observable<Appointment[]> {
      const token = localStorage.getItem('token') || '';
            const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
      return this.http.get<Appointment[]>(this.apiUrl+"/listAppointments",{headers});
    }
    getNextAppointment(patientId: string) {
      const token = localStorage.getItem('token') || '';
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
  return this.http.get<any>(this.apiUrl+`/next/${patientId}`,{headers});
}
sendReminderEmail(email: string, appointment: any) {
      const token = localStorage.getItem('token') || '';
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
      return this.http.post(this.apiUrl+'/send-reminder', { email, appointment },{headers});
}
  
    create(dept: Appointment): Observable<Appointment> {
          const token = localStorage.getItem('token') || '';
            const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
      return this.http.post<Appointment>(this.apiUrl+"/addAppointment", dept,{headers});
    }
  
    update(dept: Appointment): Observable<Appointment> {
          const token = localStorage.getItem('token') || '';
            const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
      return this.http.put<Appointment>(`${this.apiUrl}/${dept.id}`, dept,{headers});
    }
  getAppointmentStats(): Observable<AppointmentStats[]> {
    
          const token = localStorage.getItem('token') || '';
            const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
  return this.http.get<AppointmentStats[]>(this.apiUrl+`/monthly-stats`,{headers});
}
    delete(id: any): Observable<void> {
          const token = localStorage.getItem('token') || '';
            const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
      return this.http.delete<void>(`${this.apiUrl}/${id}`,{headers});
    }
  
}
