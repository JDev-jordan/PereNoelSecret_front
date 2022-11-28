import { Component, Input, OnInit } from '@angular/core';
import { Participant } from 'src/app/Interfaces/participant';
import { User } from 'src/app/Interfaces/user';
import { ParticipantService } from 'src/app/Services/participant.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-participant',
  templateUrl: './edit-participant.component.html',
  styleUrls: ['./edit-participant.component.scss']
})
export class EditParticipantComponent implements OnInit {
  @Input() participant: Participant = {user:{lastName:"", firstName:"", email:"", password:"", roles:[]}};
  listUsers : User[] = [];

  constructor(private participantService: ParticipantService, private userService: UserService) { 
    
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe((data)=>{
      this.listUsers = data;
    });
  }

  onSave(){
    this.participantService.saveParticipant(this.participant).subscribe((participant)=>{
      this.participantService.refreshParticipants();
      alert("participant bien enregistré");
    });
  }

}
