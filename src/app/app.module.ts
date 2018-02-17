import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AgendaviewComponent} from './agendaview/agendaview.component';
import {TimeslotService} from './timeslot.service';
import {HttpClientModule} from '@angular/common/http';
import {PyossHelperModule} from './pyoss-helper/pyoss-helper.module';


@NgModule({
    declarations: [
        AppComponent,
        AgendaviewComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        PyossHelperModule
    ],
    providers: [TimeslotService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
