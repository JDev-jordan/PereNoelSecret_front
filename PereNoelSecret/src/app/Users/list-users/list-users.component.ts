import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Interfaces/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  listUsersSubscription : Subscription = <Subscription>{}; 
  listUsers : User[] = [];
  display_editUserDialog: boolean = false;
  userEdit : User = {lastName:"", firstName:"", email:"", password:"", roles:[]};

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.listUsersSubscription = this.userService.listUsersSubject.subscribe((listUsers : User[])=>{
      this.listUsers = listUsers;
      this.userEdit = {lastName:"", firstName:"", email:"", password:"", roles:[]};
    });
  }

  onShowEditUser(user: User){
    this.userEdit = user;
    this.display_editUserDialog = true;
  }

  onHideEditUserDialog(){
    this.userService.refreshUsers();
  }

  onNewUser(){
    this.userEdit = {lastName:"", firstName:"", email:"", password:"", roles:[]};
    this.display_editUserDialog = true;
  }

  ngOnDestroy() {
    this.listUsersSubscription.unsubscribe();
  }

}
