import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'pyoss-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.css'],
})
export class RowComponent implements OnInit {

    @Input('class')
    private class: string;

    constructor() {
    }

    ngOnInit() {
    }

}
