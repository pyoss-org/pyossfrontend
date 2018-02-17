import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AgendaviewComponent} from './agendaview/agendaview.component';
import {TimeslotService} from './timeslot.service';
import {HttpClientModule} from '@angular/common/http';
import {PyossHelperModule} from './pyoss-helper/pyoss-helper.module';
import {PyossGridModule} from './pyoss-grid/pyoss-grid.module';


@NgModule({
    declarations: [
        AppComponent,
        AgendaviewComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        PyossHelperModule,
        PyossGridModule,
    ],
    providers: [TimeslotService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
