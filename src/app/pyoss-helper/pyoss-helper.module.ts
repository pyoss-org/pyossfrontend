import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockComponent} from './block/block.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [BlockComponent],
    exports: [
        BlockComponent,
    ],
})
export class PyossHelperModule {
}
