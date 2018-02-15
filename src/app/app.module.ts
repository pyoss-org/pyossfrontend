import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AgendaviewComponent } from './agendaview/agendaview.component';
import {TimeslotService} from './timeslot.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AgendaviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [TimeslotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
