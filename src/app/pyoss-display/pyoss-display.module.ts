import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimedisplayComponent} from './timedisplay/timedisplay.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        TimedisplayComponent,
    ],
    exports: [
        TimedisplayComponent
    ]
})
export class PyossDisplayModule {
}
