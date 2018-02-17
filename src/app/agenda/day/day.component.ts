import {Component, OnInit} from '@angular/core';
import {TimeslotService} from '../services/timeslot.service';
import {Timeslot} from '../model/timeslot';

@Component({
    selector: 'pyoss-day',
    templateUrl: './day.component.html',
    styleUrls: ['./day.component.css'],
})
export class DayComponent implements OnInit {

    private title: string;

    private slotsInDay: Array<Timeslot>;

    constructor(private timeslotService: TimeslotService) {
    }

    ngOnInit() {
        this.title = 'Monday';

        this.timeslotService.getAll().subscribe(
            data => this.slotsInDay = data,
        );
    }

}
