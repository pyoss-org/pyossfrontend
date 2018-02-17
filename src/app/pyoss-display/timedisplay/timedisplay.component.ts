import {Component, Input, OnInit} from '@angular/core';
import {DateTime} from '../../agenda/model/datetime';

@Component({
    selector: 'pyoss-timedisplay',
    templateUrl: './timedisplay.component.html',
    styleUrls: ['./timedisplay.component.css'],
})
export class TimedisplayComponent implements OnInit {

    @Input('model')
    private model: DateTime;

    constructor() {
    }

    ngOnInit() {
    }

    private format(hours: number, minutes: number): string {
        return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    }

}
