import {Component, Input} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";
import {CalendarEvent} from 'angular-calendar';

@Component({
  selector: 'ngx-event-answer',
  templateUrl: './event-answer.component.html',
  styleUrls: ['./event-answer.component.scss']
})

export class EventAnswerComponent {

  @Input() event: CalendarEvent;

  constructor(protected ref: NbDialogRef<EventAnswerComponent>) {}

  cancel() {
    this.ref.close(false);
  }

  submit(operation) {
    this.ref.close({operation: operation, id: this.event.meta.event.id});
  }

}

