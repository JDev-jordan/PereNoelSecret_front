import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listUsersSubject = new Subject<User[]>();
  listUsers : User[] = [];

  constructor(private http : HttpClient) { 
    this.refreshUsers();
  }

  url : string = "http://localhost:8080/users";

  getAll() : Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  saveUser(user: User) : Observable<User>{
    return this.http.post<User>(this.url, user);
  }

  refreshUsers(){
    this.getAll().subscribe(users=>{
      this.listUsers = users;
      this.emitUsersSubject();
    })
  }

  emitUsersSubject(){
    this.listUsersSubject.next(this.listUsers.slice());
  }
}
