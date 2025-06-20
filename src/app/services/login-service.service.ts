import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  public login(email:string,password:string){ 
   return this.http.post<any>('http://localhost:8082/auth/login', {
      username: email,
      password: password
    })};
 public register(email:string,password:string,role:string){
  return this.http.post<any>('http://localhost:8082/auth/register', {
      username: email,
      password: password,
      role:role
    })
 }
}
