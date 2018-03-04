import {Component, OnInit} from '@angular/core';
import {TimeslotService} from '../services/timeslot.service';
import {Day} from '../model/day';
import {DayService} from '../services/day.service';
import {Timeslot} from '../model/timeslot';

@Component({
    selector: 'pyoss-day',
    templateUrl: './day.component.html',
    styleUrls: ['./day.component.css'],
})
export class DayComponent implements OnInit {

    private day: Day;
    private viewingDaysInAdvance: number;

    constructor(private timeslotService: TimeslotService, private dayService: DayService) {
    }

    ngOnInit() {
        this.registerCurrentDaySubscription();

        this.dayService.fetchNextAvailableDay();
        this.viewingDaysInAdvance = 0;
    }

    nextDay() {
        this.updateDisplayedDay(++this.viewingDaysInAdvance);
    }

    previousDay() {
        this.updateDisplayedDay(--this.viewingDaysInAdvance);
    }

    updateDay(event: Timeslot) {
        event.available = false;
    }

    previousIsEnabled(): boolean {
        return this.viewingDaysInAdvance !== 0;
    }

    private registerCurrentDaySubscription() {
        this.dayService.currentDaySubject.subscribe(day => this.day = day);
    }

    private updateDisplayedDay(advanceDays: number) {
        this.dayService.fetchNextAvailableDayPlus(advanceDays);
    }
}
