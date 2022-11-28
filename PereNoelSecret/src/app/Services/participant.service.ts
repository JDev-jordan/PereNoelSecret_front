import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Participant } from '../Interfaces/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  listParticipantsSubject = new Subject<Participant[]>();
  listParticipants : Participant[] = [];

  constructor(private http : HttpClient) { 
    this.refreshParticipants();
  }

  url : string = "http://localhost:8080/participants";

  getAll() : Observable<Participant[]>{
    return this.http.get<Participant[]>(this.url);
  }
  
  getAllFree() : Observable<Participant[]>{
    return this.http.get<Participant[]>(this.url+"/free");
  }

  saveParticipant(participant: Participant) : Observable<Participant>{
    return this.http.post<Participant>(this.url, participant);
  }

  refreshParticipants(){
    this.getAll().subscribe(participants=>{
      this.listParticipants = participants;
      this.emitParticipantsSubject();
    })
  }

  refreshParticipantsFree(){
    this.getAllFree().subscribe(participants=>{
      this.listParticipants = participants;
      this.emitParticipantsSubject();
    })
  }

  emitParticipantsSubject(){
    this.listParticipantsSubject.next(this.listParticipants.slice());
  }
}
