import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ScheduleService} from "../schedule.service";
import {CalendarEvent} from 'angular-calendar';

@Component({
    selector: 'ngx-event-participant-form',
    templateUrl: './event-participant-form.component.html',
    styleUrls: ['./event-participant-form.component.scss']
})

export class EventParticipantFormComponent implements OnInit {

    @Input() event: CalendarEvent;

    form: FormGroup;
    submitted: boolean = false;

    listUsers: Array<any> = [];

    constructor(
        protected ref: NbDialogRef<EventParticipantFormComponent>,
        private formBuilder: FormBuilder,
        private scheduleService: ScheduleService
    ) {
    }

    hasErrors(field: string) {
        return this.form.get(field).errors;
    }

    cancel() {
        this.submitted = false;
        this.ref.close(false);
    }

    submit() {
        this.submitted = true;
        const values = {
            id: this.form.get('id').value,
            participants: this.form.get('participants').value
        };
        this.ref.close(values);
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            id: [this.event.meta.event.id],
            participants: [null],
        });

        this.scheduleService.getUsers().subscribe(
            success => {
                this.scheduleService.getParticipants(this.event.meta.event.id).subscribe(
                    response => {
                        this.listUsers = success.users.filter(value => {
                            return !(response.participants.some(el => el.id === value.id ));
                        });
                    }
                )
            },
            error => {
                console.log(error);
            }
        );
    }

}

