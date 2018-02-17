import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[pyossCol]',
})
export class ColumnDirective implements OnInit {

    @Input('col')
    private colAmount: number;

    @HostBinding('class')
    private elementClass: string;

    constructor() {
    }

    ngOnInit(): void {
        this.elementClass = ColumnDirective.format('col', this.colAmount);
    }

    private static format(base: string, amount: number): string {
        if(amount) {
            return `${base}-${amount}`;
        }
        return base;
    }

    private static formatOffset(base: string, offset: number): string {
        if(offset) {
            return this.format(base, offset);
        }
    }
}
