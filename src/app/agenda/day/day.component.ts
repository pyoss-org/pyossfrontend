import {Component, OnInit} from '@angular/core';
import {TimeslotService} from '../services/timeslot.service';
import {Timeslot} from '../model/timeslot';
import {Day} from '../model/day';
import {DayService} from '../services/day.service';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'pyoss-day',
    templateUrl: './day.component.html',
    styleUrls: ['./day.component.css'],
})
export class DayComponent implements OnInit {

    private day: Day;

    constructor(private timeslotService: TimeslotService, private dayService: DayService) {
    }

    ngOnInit() {
        this.registerCurrentDaySubscription();

        this.dayService.fetchFirstAvailableDay();
    }

    private registerCurrentDaySubscription() {
        this.dayService.currentDaySubject.subscribe(day => this.day = day);
    }
}
