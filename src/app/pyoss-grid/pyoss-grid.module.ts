import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageWrapperComponent} from './page-wrapper/page-wrapper.component';
import {RowComponent} from './row/row.component';
import {ColumnDirective} from './directives/column.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        // Components
        PageWrapperComponent,
        RowComponent,

        // Directives
        ColumnDirective,
    ],
    exports: [
        // Components
        PageWrapperComponent,
        RowComponent,

        // Directives
        ColumnDirective,
    ],
})
export class PyossGridModule {
}
