import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Event } from 'src/app/Interfaces/event';
import { Participant } from 'src/app/Interfaces/participant';
import { ParticipantService } from 'src/app/Services/participant.service';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  @Input() event: Event = {title:"",participants:[]};
  selectedParticipants : Participant[] = [];
  listParticipants: Participant[] = [];
  participants: Participant[] = [];

  constructor(private participantService: ParticipantService, private eventService: EventService) { 
    
  }
  ngOnInit(): void {
    this.refreshListParticipants();
  }

  refreshListParticipants(){
    this.participantService.getAllFree().subscribe((data)=>{
      this.listParticipants = data;
    });
  }

  containsP(participants: Participant[], p : Participant){
    var contains = false;
    participants.forEach(part => {
      if(part.idParticipant == p.idParticipant){
        contains = true;
      }
    });
    return contains;
  }

  onAddParticipant(participant: Participant){
    this.selectedParticipants.push(participant);
  }
  onSave(){
    this.eventService.saveEvent(this.event).subscribe((event)=>{
      this.selectedParticipants = [];
        this.eventService.refreshEvents();
        alert("event bien enregistré");
    });
  }
}
