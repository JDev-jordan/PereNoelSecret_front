import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:8080/";

  getAll() : Observable<User[]>{
    return this.http.get<User[]>(this.url+"users");
  }
}
