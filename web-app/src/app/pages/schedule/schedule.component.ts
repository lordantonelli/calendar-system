import {Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit, ViewEncapsulation} from '@angular/core';
import {map, filter, catchError, mergeMap, tap} from 'rxjs/operators';

import {
    isSameMonth,
    isSameDay,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    startOfDay,
    endOfDay,
    format
} from 'date-fns';

import {Observable, Subject} from 'rxjs';
import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent, CalendarEventTitleFormatter,
    CalendarView,
} from 'angular-calendar';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";

import {CustomEventTitleFormatter} from './custom-event-title-formatter.provider';
import {Event} from "./event";
import {NbDialogService, NbToastrService} from "@nebular/theme";
import {EventFormComponent} from "./event-form/event-form.component";
import {EventDeleteComponent} from "./event-delete/event-delete.component";
import {ScheduleService} from "./schedule.service";
import {EventAnswerComponent} from "./event-answer/event-answer.component";
import {EventViewComponent} from "./event-view/event-view.component";
import {Browser} from "leaflet";
import {EventParticipantFormComponent} from "./event-participant-form/event-participant-form.component";


const colors: any = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};


@Component({
    selector: 'ngx-calendar',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: CalendarEventTitleFormatter,
            useClass: CustomEventTitleFormatter
        }
    ],
    encapsulation: ViewEncapsulation.None,
})
export class ScheduleComponent implements OnInit {

    action_edit: CalendarEventAction = {
        label: '<i class="fa fa-fw fa-pencil-alt"></i>',
        cssClass: 'bg-light rounded ml-1',
        onClick: ({event}: { event: CalendarEvent }): void => this.editEvent(event)
    };

    action_delete: CalendarEventAction = {
        label: '<i class="fa fa-fw fa-times"></i>',
        cssClass: 'bg-light rounded ml-1 text-danger',
        onClick: ({event}: { event: CalendarEvent }): void => this.deleteEvent(event)
    };

    action_answer: CalendarEventAction = {
        label: '<i class="far fa-fw fa-calendar-check"></i>',
        cssClass: 'bg-light rounded ml-1 text-success',
        onClick: ({event}: { event: CalendarEvent }): void => this.answerEvent(event)
    };

    view: CalendarView = CalendarView.Month;

    CalendarView = CalendarView;

    viewDate: Date = new Date();

    refresh: Subject<any> = new Subject();

    events$: Observable<Array<CalendarEvent<{ event: Event }>>>;

    activeDayIsOpen: boolean = true;

    closeResult: string;

    constructor(
        private http: HttpClient,
        private dialogService: NbDialogService,
        private scheduleService: ScheduleService,
        private toastrService: NbToastrService
    ) {
    }

    fetchEvents(): void {
        const getStart: any = {
            month: startOfMonth,
            week: startOfWeek,
            day: startOfDay
        }[this.view];

        const getEnd: any = {
            month: endOfMonth,
            week: endOfWeek,
            day: endOfDay
        }[this.view];

        const params = new HttpParams()
            .set(
                'start',
                format(getStart(this.viewDate), 'YYYY-MM-DD  HH:mm')
            )
            .set(
                'end',
                format(getEnd(this.viewDate), 'YYYY-MM-DD  HH:mm')
            )


        this.events$ = this.http
            .get(`${environment.api_url}/events`, {params})
            .pipe(
                map(({events}: { events: Event[] }) => {
                    return events.map((event: Event) => {
                        let actions: CalendarEventAction[] = [];

                        if(event.pivot.invitation == 'own'){
                            actions.push(this.action_edit);
                            actions.push(this.action_delete);
                        }
                        if(event.pivot.invitation == 'wait'){
                            actions.push(this.action_answer);
                        }
                        return {
                            start: new Date(event.start),
                            end: new Date(event.end),
                            title: event.title,
                            color: colors[event.color],
                            allDay: !!(event.all_day),
                            actions: actions,
                            resizable: {
                                beforeStart: true,
                                afterEnd: true
                            },
                            draggable: true,
                            cssClass: ((event.pivot.invitation == 'reject') ? 'text-reject' : ''),
                            meta: {
                                event
                            }
                        };
                    });
                })
            );
    }

    dayClicked({date, events}: { date: Date; events: Array<CalendarEvent<{ event: Event }>> }): void {
        if (isSameMonth(date, this.viewDate)) {
            this.activeDayIsOpen = !((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0);
            this.viewDate = date;
        }
    }

    eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
        let data_form = {
            id: event.meta.event.id,
            start_date: ScheduleService.formatDate(newStart),
            start_time: ScheduleService.formatTime(newStart),
            end_date: ScheduleService.formatDate(newEnd),
            end_time: ScheduleService.formatTime(newEnd),
        };
        this.scheduleService.updateEvent(data_form).subscribe(
            success => {
                if (success.overlap){
                    this.toastrService.show('However, there is an overlap in your calendar.', `Event successfully edited`, {
                        status: 'warning'
                    });
                } else {
                    this.toastrService.show('', `Event successfully edited`, {
                        status: 'success'
                    });
                }
                this.refresh.next();
                this.fetchEvents();
            },
            error => {
                this.toastrService.show('', `Error editing event, please try again!`, {
                    status: 'danger'
                });
            }
        );
    }

    handleEvent(action: string, event: CalendarEvent): void {
        console.log(event);
        this.dialogService.open(EventViewComponent, {context: {event: event}})
            .onClose.subscribe(data => {
                if(!data) return;
                switch (data.operation) {
                    case 'edit':
                        this.editEvent(event);
                        break;
                    case 'delete':
                        this.deleteEvent(event);
                        break;
                    case 'accept':
                    case 'reject':
                        this.scheduleService.answerEvent(data.operation, event.meta.event.id).subscribe(
                            success => {
                                this.toastrService.show('', `Event successfully answered`, {
                                    status: 'success'
                                });
                                this.refresh.next();
                                this.fetchEvents();
                            },
                            error => {
                                this.toastrService.show('', `Error answering event, please try again!`, {
                                    status: 'danger'
                                });
                            }
                        );
                        break;
                    case 'remove-participant':
                        this.scheduleService.removeParticipantEvent(event.meta.event.id, data.id).subscribe(
                            success => {
                                this.toastrService.show('', `Participant successfully removed`, {
                                    status: 'success'
                                });
                                this.refresh.next();
                                this.fetchEvents();
                            },
                            error => {
                                this.toastrService.show('', `Error removing participant, please try again!`, {
                                    status: 'danger'
                                });
                            }
                        );
                        break;
                    case 'add-participant':
                        this.addParticipantEvent(event);
                        break;
                }
        });
    }

    setView(view: CalendarView) {
        this.view = view;
    }

    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }

    ngOnInit() {
        this.fetchEvents();
    }

    newEvent() {
        this.dialogService.open(EventFormComponent)
            .onClose.subscribe(data_form => {
                if(data_form) {
                    this.scheduleService.createEvent(data_form).subscribe(
                        success => {
                            if (success.overlap){
                                this.toastrService.show('However, there is an overlap in your calendar.', `Event successfully created`, {
                                    status: 'warning'
                                });
                            } else {
                                this.toastrService.show('', `Event successfully created`, {
                                    status: 'success'
                                });
                            }
                            this.refresh.next();
                            this.fetchEvents();
                        },
                        error => {
                            this.toastrService.show('', `Error creating event, please try again!`, {
                                status: 'danger'
                            });
                        }
                    );
                }
        });
    }

    editEvent(event: CalendarEvent) {
        this.dialogService.open(EventFormComponent, {context: {event: event}})
            .onClose.subscribe(data_form => {
                console.log(data_form);
                if(data_form) {
                    this.scheduleService.updateEvent(data_form).subscribe(
                        success => {
                            if (success.overlap){
                                this.toastrService.show('However, there is an overlap in your calendar.', `Event successfully edited`, {
                                    status: 'warning'
                                });
                            } else {
                                this.toastrService.show('', `Event successfully edited`, {
                                    status: 'success'
                                });
                            }
                            this.refresh.next();
                            this.fetchEvents();
                        },
                        error => {
                            this.toastrService.show('', `Error editing event, please try again!`, {
                                status: 'danger'
                            });
                        }
                    );
                }
        });
    }

    deleteEvent(event: CalendarEvent) {
        this.dialogService.open(EventDeleteComponent, {context: {event: event}})
            .onClose.subscribe(id => {
            if (id) {
                this.scheduleService.deleteEvent(id).subscribe(
                    success => {
                        this.toastrService.show('', `Event successfully removed`, {
                            status: 'success'
                        });
                        this.events$ = this.events$.pipe(map(events => {
                            return events.filter(iEvent => iEvent.meta.event.id != event.meta.event.id)
                        }));
                        this.refresh.next();
                    },
                    error => {
                        this.toastrService.show('', `Error removing event, please try again!`, {
                            status: 'danger'
                        });
                    }
                );
            }
        });
    }

    answerEvent(event: CalendarEvent) {
        this.dialogService.open(EventAnswerComponent, {context: {event: event}})
            .onClose.subscribe(data => {
            if (data) {
                this.scheduleService.answerEvent(data.operation, data.id).subscribe(
                    success => {
                        if (success.overlap){
                            this.toastrService.show('However, there is an overlap in your calendar.', `Event successfully answered`, {
                                status: 'warning'
                            });
                        } else {
                            this.toastrService.show('', `Event successfully answered`, {
                                status: 'success'
                            });
                        }
                        this.refresh.next();
                        this.fetchEvents();
                    },
                    error => {
                        this.toastrService.show('', `Error answering event, please try again!`, {
                            status: 'danger'
                        });
                    }
                );
            }
        });
    }

    addParticipantEvent(event: CalendarEvent) {
        this.dialogService.open(EventParticipantFormComponent, {context: {event: event}})
            .onClose.subscribe(data_form => {
            console.log(data_form);
            if(data_form) {
                this.scheduleService.addParticipantEvent(data_form).subscribe(
                    success => {
                        this.toastrService.show('', `Participants successfully invited`, {
                            status: 'success'
                        });
                        this.refresh.next();
                        this.fetchEvents();
                    },
                    error => {
                        this.toastrService.show('', `Error inviting participants, please try again!`, {
                            status: 'danger'
                        });
                    }
                );
            }
        });
    }
}

