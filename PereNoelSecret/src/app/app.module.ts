import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './Users/list-users/list-users.component';

import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { EditUserComponent } from './Users/edit-user/edit-user.component';
import {DialogModule} from 'primeng/dialog';
import {KeyFilterModule} from 'primeng/keyfilter';
import { ListParticipantsComponent } from './Participants/list-participants/list-participants.component';
import { ListEventsComponent } from './Events/list-events/list-events.component';
import { EditParticipantComponent } from './Participants/edit-participant/edit-participant.component';
import { EditEventComponent } from './Events/edit-event/edit-event.component';
import {ListboxModule} from 'primeng/listbox';
import {PanelModule} from 'primeng/panel';
import {PickListModule} from 'primeng/picklist';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { RegisterComponent } from './Auth/register/register.component';
import {PasswordModule} from 'primeng/password';
import { CheckboxModule } from "primeng/checkbox";
import { LoginComponent } from './Auth/login/login.component';
import { RequestInterceptor } from './Interceptor/request.interceptor';
import { HomeComponent } from './Home/home/home.component';
import {SidebarModule} from 'primeng/sidebar';


@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    EditUserComponent,
    ListParticipantsComponent,
    ListEventsComponent,
    EditParticipantComponent,
    EditEventComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    DialogModule,
    KeyFilterModule,
    ListboxModule,
    PanelModule,
    PickListModule,
    DataViewModule,
    DropdownModule,
    PasswordModule,
    MultiSelectModule,
    CheckboxModule,
    SidebarModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
