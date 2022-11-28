import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Role } from '../Intefaces/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  listRolesSubject = new Subject<Role[]>();
  listRoles : Role[] = [];

  constructor(private http : HttpClient) { 
    this.refreshRoles();
  }

  url : string = "http://localhost:8080/roles";

  getAll() : Observable<Role[]>{
    return this.http.get<Role[]>(this.url);
  }

  saveUser(role: Role) : Observable<Role>{
    return this.http.post<Role>(this.url, role);
  }

  refreshRoles(){
    this.getAll().subscribe(roles=>{
      this.listRoles = roles;
      this.emitRolesSubject();
    })
  }

  emitRolesSubject(){
    this.listRolesSubject.next(this.listRoles.slice());
  }
}
