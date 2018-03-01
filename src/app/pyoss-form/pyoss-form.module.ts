import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonDirective} from './button/button.directive';
import {NumberInputComponent} from './input/number-input/number-input.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ButtonDirective,
    NumberInputComponent,
  ],
  exports: [
    ButtonDirective,
    NumberInputComponent
  ],
})
export class PyossFormModule {
}
