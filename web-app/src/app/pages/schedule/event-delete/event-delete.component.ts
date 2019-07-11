import {Component, Input} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";
import {CalendarEvent} from 'angular-calendar';

@Component({
  selector: 'ngx-event-delete',
  templateUrl: './event-delete.component.html',
  styleUrls: ['./event-delete.component.scss']
})
export class EventDeleteComponent {

  @Input() event: CalendarEvent;

  constructor(protected ref: NbDialogRef<EventDeleteComponent>) {}

  cancel() {
    this.ref.close(false);
  }

  submit() {
    this.ref.close(this.event.meta.event.id);
  }

}
