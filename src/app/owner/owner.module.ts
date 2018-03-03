import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PyossGridModule} from '../pyoss-grid/pyoss-grid.module';
import {PyossHelperModule} from '../pyoss-helper/pyoss-helper.module';
import {PyossFormModule} from '../pyoss-form/pyoss-form.module';
import {PyossDisplayModule} from '../pyoss-display/pyoss-display.module';
import {OwnerComponent} from './owner/owner.component';
import {OwnerService} from './owner/services/owner.service';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,

        PyossFormModule,
        PyossDisplayModule,
        PyossGridModule,
        PyossHelperModule,
    ],
    declarations: [
        OwnerComponent,
    ],
    providers: [
        OwnerService,
    ],
    exports: [
        OwnerComponent,
    ]
})

export class OwnerModule {
}
