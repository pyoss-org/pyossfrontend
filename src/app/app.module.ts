import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PyossGridModule} from './pyoss-grid/pyoss-grid.module';
import {AgendaModule} from './agenda/agenda.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        // Angular
        BrowserModule,
        HttpClientModule,

        // Third party

        // Pyoss
        AgendaModule,
        PyossGridModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
