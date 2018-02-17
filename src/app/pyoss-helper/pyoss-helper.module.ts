import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockDirective} from './directives/block.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [BlockDirective],
    exports: [
        BlockDirective,
    ],
})
export class PyossHelperModule {
}
