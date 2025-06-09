import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http:HttpClient) { }

  getStats() {
  const token = localStorage.getItem('token') || '';
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

  return this.http.get<any>('http://localhost:8082/api/v0/stats/recent', { headers }); // example endpoint
}
}
