import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimedisplayComponent} from './timedisplay/timedisplay.component';
import {DatedisplayComponent} from './datedisplay/datedisplay.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TimedisplayComponent,
    DatedisplayComponent,
  ],
  exports: [
    TimedisplayComponent,
    DatedisplayComponent
  ]
})
export class PyossDisplayModule {
}
