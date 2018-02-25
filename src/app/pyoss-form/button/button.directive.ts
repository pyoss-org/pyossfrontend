import {Directive, HostBinding, OnInit} from '@angular/core';

@Directive({
    selector: '[pyossButton]'
})
export class ButtonDirective implements OnInit {

    @HostBinding('class')
    private elementClass: string;

    constructor() {
    }

    ngOnInit() {
        this.elementClass += (this.elementClass && this.elementClass.length > 0) ? ' btn btn-primary' : 'btn btn-primary';
    }

}
