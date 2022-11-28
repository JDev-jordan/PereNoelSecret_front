import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/Services/event.service';
import { Event } from 'src/app/Interfaces/event';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {

  listEventsSubscription : Subscription = <Subscription>{};
  listEvents : Event[] = [];
  display_editEventDialog: boolean = false;
  eventEdit : Event = {title:"", participants:[]};

  constructor(private eventService : EventService) { }

  ngOnInit(): void {
    this.listEventsSubscription = this.eventService.listEventsSubject.subscribe((listUsers : Event[])=>{
      this.listEvents = listUsers;
      this.eventEdit = {title:"", participants:[]};
    });
  }

  onShowEditEventDialog(event: Event){
    this.eventEdit = event;
    this.display_editEventDialog = true;
  }

  onHideEditEventDialog(){
    this.eventEdit = {title:"", participants:[]};
    this.eventService.refreshEvents();
  }

  onNewEvent(){
    this.eventEdit = {title:"", participants:[]};
    this.display_editEventDialog = true;
  }

  ngOnDestroy() {
    this.listEventsSubscription.unsubscribe();
  }
}
