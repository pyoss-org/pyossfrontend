import {Component, OnInit} from '@angular/core';
import {TimeslotService} from '../services/timeslot.service';
import {Timeslot} from '../model/timeslot';
import {Day} from '../model/day';

@Component({
    selector: 'pyoss-day',
    templateUrl: './day.component.html',
    styleUrls: ['./day.component.css'],
})
export class DayComponent implements OnInit {

    private day: Day;

    constructor(private timeslotService: TimeslotService) {
    }

    ngOnInit() {
        this.timeslotService.getFirstAvailableDay().subscribe(
            data => this.day = data,
        );
    }

}
