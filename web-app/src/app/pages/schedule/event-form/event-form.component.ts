import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ScheduleService} from "../schedule.service";
import {CalendarEvent} from 'angular-calendar';

@Component({
    selector: 'ngx-calendar-form',
    templateUrl: './event-form.component.html',
    styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit{

    @Input() event: CalendarEvent;

    form: FormGroup;
    submitted: boolean = false;
    allDay: boolean = false;
    title: string = 'New Event';

    listUsers: Array<any> = [];

    constructor(
        protected ref: NbDialogRef<EventFormComponent>,
        private formBuilder: FormBuilder,
        private scheduleService: ScheduleService
    ) { }

    toggleAllDay(checked: boolean) {
        this.allDay = checked;
    }

    hasErrors(field: string){
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
            title: this.form.get('title').value,
            description: this.form.get('description').value,
            start_date: (this.form.get('startDate').value) ? this.form.get('startDate').value.toJSON().substr(0,10) : null,
            end_date: (this.form.get('endDate').value) ? this.form.get('endDate').value.toJSON().substr(0,10) : null,
            start_time: this.form.get('startTime').value,
            end_time: this.form.get('endTime').value,
            all_day: this.allDay,
            color: this.form.get('color').value,
            participants: this.form.get('participants').value
        };
        this.ref.close(values);
    }

    updateForm(event){
        let start = new Date(event.start);
        let end = new Date(event.end);

        this.form.patchValue({
            id: event.id,
            title: event.title,
            description: event.description,
            startDate: start,
            startTime: !(event.all_day) ? ScheduleService.formatTime(start) : null,
            endDate: end,
            endTime: !(event.all_day) ? ScheduleService.formatTime(end) : null,
            color: event.color,
            allDay: event.all_day,
        });
        this.allDay = !!(event.all_day);
        this.title = 'Edit Event';
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            id: [ null ],
            title: [ null, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
            description: [null ],
            startDate: [ null, [Validators.required]],
            startTime: [ null, [Validators.required]],
            endDate: [ null ],
            endTime: [ null ],
            color: [ null, [Validators.required]],
            participants: [ null ],
            allDay: [ null ],
        });

        if(this.event)
            this.updateForm(this.event.meta.event);

        this.scheduleService.getUsers().subscribe(
            success => this.listUsers = success.users,
            error => {
                console.log(error);
            }
        );
    }

}
