import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule.component';
import {
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule, NbDatepickerModule,
    NbDialogModule, NbInputModule, NbListModule,
    NbPopoverModule, NbSelectModule,
    NbTabsetModule, NbTooltipModule,
    NbWindowModule
} from "@nebular/theme";
import { EventFormComponent } from './event-form/event-form.component';
import {CalendarModule,DateAdapter} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ThemeModule} from "../../@theme/theme.module";
import { EventDeleteComponent } from './event-delete/event-delete.component';
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {NbDateFnsDateModule} from "@nebular/date-fns";
import { EventAnswerComponent } from './event-answer/event-answer.component';
import { EventViewComponent } from './event-view/event-view.component';
import { EventParticipantComponent } from './event-participant/event-participant.component';
import { EventParticipantFormComponent } from './event-participant-form/event-participant-form.component';

@NgModule({
  declarations: [ScheduleComponent, EventFormComponent, EventDeleteComponent, EventAnswerComponent, EventViewComponent, EventParticipantComponent, EventParticipantFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        ThemeModule,
        NbDialogModule.forChild(),
        NbCardModule,
        NbCheckboxModule,
        NbTabsetModule,
        NbButtonModule,
        NbInputModule,
        NbSelectModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        NbDatepickerModule,
        ReactiveFormsModule,
        NgxMaterialTimepickerModule,
        NbDateFnsDateModule,
        NbListModule,
    ],
  entryComponents: [
    EventFormComponent,
    EventDeleteComponent,
      EventViewComponent,
      EventAnswerComponent,
      EventParticipantFormComponent
  ],
})
export class ScheduleModule { }
