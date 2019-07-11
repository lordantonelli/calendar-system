import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";
import {EventViewComponent} from "../event-view/event-view.component";

@Component({
  selector: 'ngx-event-participant',
  templateUrl: './event-participant.component.html',
  styleUrls: ['./event-participant.component.scss']
})
export class EventParticipantComponent implements OnInit{

  @Input() participant;

  is_creator: boolean = false;

  constructor(protected ref: NbDialogRef<EventViewComponent>) { }

  getClass(){
    if(Object.is(this.participant.pivot.invitation, 'own'))
      return 'badge badge-primary px-2';
    if(Object.is(this.participant.pivot.invitation, 'wait'))
      return 'badge badge-warning px-2';
    if(Object.is(this.participant.pivot.invitation, 'accept'))
      return 'badge badge-success px-2';
    if(Object.is(this.participant.pivot.invitation, 'reject'))
      return 'badge badge-danger px-2';
  }

  submit(operation) {
    this.ref.close({operation: operation, id: this.participant.id});
  }

  ngOnInit(): void {
    if(Object.is(this.participant.pivot.invitation, 'own'))
      this.is_creator = true;
  }

}
