import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  user:any;
  constructor(private http:HttpClient) { }
  login(userLogin:User):Observable<any>{
    this.user=userLogin;
    console.log(userLogin);
    return this.http.post<any>("http://localhost:3000/login", userLogin)
    
}

get currentUser(){
  return this.user;
}  

}