import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[pyossCol]',
})
export class ColumnDirective implements OnInit {

    @Input('col')
    private amount: number;

    @HostBinding('class')
    private elementClass: string;

    constructor() {
    }

    ngOnInit(): void {
        this.elementClass = ColumnDirective.format('col', this.amount);
    }

    private static format(base: string, amount: number): string {
        if(amount) {
            return `${base}-${amount}`;
        }
        return base;
    }
}
