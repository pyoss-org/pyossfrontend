import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimeslotService} from './services/timeslot.service';
import {DayComponent} from './day/day.component';
import {TimeslotComponent} from './timeslot/timeslot.component';
import {AgendaComponent} from './agenda.component';
import {PyossGridModule} from '../pyoss-grid/pyoss-grid.module';
import {PyossHelperModule} from '../pyoss-helper/pyoss-helper.module';
import {PyossFormModule} from '../pyoss-form/pyoss-form.module';
import {PyossDisplayModule} from '../pyoss-display/pyoss-display.module';
import {DayService} from './services/day.service';

@NgModule({
    imports: [
        CommonModule,

        PyossFormModule,
        PyossDisplayModule,
        PyossGridModule,
        PyossHelperModule,
    ],
    declarations: [
        AgendaComponent,
        DayComponent,
        TimeslotComponent,
    ],
    providers: [
        TimeslotService,
        DayService,
    ],
    exports: [
        AgendaComponent,
    ],
})

export class AgendaModule {
}
