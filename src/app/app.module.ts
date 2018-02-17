import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AgendaComponent} from './agenda/agenda.component';
import {TimeslotService} from './timeslot.service';
import {HttpClientModule} from '@angular/common/http';
import {PyossHelperModule} from './pyoss-helper/pyoss-helper.module';
import {PyossGridModule} from './pyoss-grid/pyoss-grid.module';


@NgModule({
    declarations: [
        AppComponent,
        AgendaComponent,
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
