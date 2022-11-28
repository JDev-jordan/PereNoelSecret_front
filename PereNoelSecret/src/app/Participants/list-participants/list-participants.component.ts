import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Participant } from 'src/app/Interfaces/participant';
import { ParticipantService } from 'src/app/Services/participant.service';

@Component({
  selector: 'app-list-participants',
  templateUrl: './list-participants.component.html',
  styleUrls: ['./list-participants.component.scss']
})
export class ListParticipantsComponent implements OnInit {

  listParticipantsSubscription : Subscription = <Subscription>{}
  listParticipants : Participant[] = [];
  display_editParticipantDialog: boolean = false;
  participantEdit : Participant = {user:{lastName:"", firstName:"", email:"", password:"", roles:[]}};

  constructor(private participantService : ParticipantService) { }

  ngOnInit(): void {
    this.listParticipantsSubscription = this.participantService.listParticipantsSubject.subscribe((listParticipants : Participant[])=>{
      this.listParticipants = listParticipants;
      this.participantEdit = {user:{lastName:"", firstName:"", email:"", password:"", roles:[]}};
    });
  }

  onShowEditParticipant(participant: Participant){
    this.participantEdit = participant;
    this.display_editParticipantDialog = true;
  }

  onHideEditParticipantDialog(){
    this.participantService.refreshParticipants();
  }

  onNewParticipant(){
    this.participantEdit = {user:{lastName:"", firstName:"", email:"", password:"", roles:[]}};
    this.display_editParticipantDialog = true;
  }

  ngOnDestroy() {
    this.listParticipantsSubscription.unsubscribe();
  }
}
