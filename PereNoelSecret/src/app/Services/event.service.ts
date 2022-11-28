import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Event } from '../Interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  listEventsSubject = new Subject<Event[]>();
  listEvents : Event[] = [];

  constructor(private http : HttpClient) { 
    this.refreshEvents();
  }

  url : string = "http://localhost:8080/events";

  getAll() : Observable<Event[]>{
    return this.http.get<Event[]>(this.url);
  }

  saveEvent(event: Event) : Observable<Event>{
    return this.http.post<Event>(this.url, event);
  }

  refreshEvents(){
    this.getAll().subscribe(events=>{
      this.listEvents = events;
      this.emitEventsSubject();
    })
  }

  emitEventsSubject(){
    this.listEventsSubject.next(this.listEvents.slice());
  }
}
