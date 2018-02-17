import {Directive, HostBinding} from '@angular/core';

@Directive({
    selector: '[pyossCol]',
})
export class ColumnDirective {

    @HostBinding('class')
    private elementClass: string = 'col';

    constructor() {
    }
}
