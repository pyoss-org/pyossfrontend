import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[pyossBlock]',
})
export class BlockDirective implements OnInit {

    @Input('color')
    private color: string = 'blue';

    constructor(private el: ElementRef) {
        }


    ngOnInit(): void {
        this.addBackgroundColor(this.color);
    }

    private addBackgroundColor(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
