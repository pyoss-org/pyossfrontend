import {Component, Input, OnInit} from '@angular/core';
import {Timeslot} from '../model/timeslot';

@Component({
    selector: 'pyoss-timeslot',
    templateUrl: './timeslot.component.html',
    styleUrls: ['./timeslot.component.css'],
})
export class TimeslotComponent implements OnInit {

    @Input('model')
    private model: Timeslot;

    constructor() {
    }

    ngOnInit() {
    }

    calculateColor(available: boolean): string {
        return available ? 'green' : 'red'
    }
}
