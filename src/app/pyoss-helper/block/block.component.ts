import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'pyoss-block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css'],
})
export class BlockComponent implements OnInit {

    @Input()
    private color: string = 'blue';

    constructor() {
    }

    ngOnInit() {
    }

}
