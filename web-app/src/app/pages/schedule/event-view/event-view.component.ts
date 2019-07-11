import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";
import {CalendarEvent} from 'angular-calendar';
import {ScheduleService} from "../schedule.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'ngx-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent implements OnInit{

  @Input() event: CalendarEvent;

  userOwn: boolean = false;

  participants: Array<any> = [];

  constructor(protected ref: NbDialogRef<EventViewComponent>, private scheduleService: ScheduleService) {}

  cancel() {
    this.ref.close({operation:null});
  }

  submit(operation) {
    this.ref.close({operation:operation} );
  }

  ngOnInit(){
    this.userOwn = (this.event.meta.event.pivot.invitation == 'own');

    this.scheduleService.getParticipants(this.event.meta.event.id)
    .subscribe(
        data => {
          this.participants = data.participants.map(value => {
            value.own = false;
            if(Object.is(value.pivot.invitation, 'own')) {
              value.status = 'Creator';
              value.own = true;
            }
            if(Object.is(value.pivot.invitation, 'wait'))
              value.status = 'Pending';
            if(Object.is(value.pivot.invitation, 'accept'))
              value.status = 'Confirmed';
            if(Object.is(value.pivot.invitation, 'reject'))
              value.status = 'Rejected';
            return value;
          });
        }
    );
  }

}
