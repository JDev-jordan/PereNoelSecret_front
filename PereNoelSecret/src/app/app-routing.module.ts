import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { AuthenticationGuard } from './authentication.guard';
import { ListEventsComponent } from './Events/list-events/list-events.component';
import { HomeComponent } from './Home/home/home.component';
import { ListParticipantsComponent } from './Participants/list-participants/list-participants.component';
import { ListUsersComponent } from './Users/list-users/list-users.component';

const routes: Routes = [
  {path : 'home', component:HomeComponent},
  {path: 'users', canActivate:[AuthenticationGuard], component:ListUsersComponent},
  {path: 'participants', canActivate:[AuthenticationGuard], component:ListParticipantsComponent},
  {path: 'events', canActivate:[AuthenticationGuard], component:ListEventsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: '**', redirectTo : 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
