import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
    selector: '[pyossBlock]',
})
export class BlockDirective implements OnChanges {

    @Input('color')
    private color: string;

    constructor(private el: ElementRef) {
    }

    private addBackgroundColor(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

    private static calculateIfAbsent(color: string): string {
        if (!color) {
            return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        }
        return color;
    }

  ngOnChanges(changes: SimpleChanges): void {
    this.addBackgroundColor(BlockDirective.calculateIfAbsent(this.color));
  }
}
