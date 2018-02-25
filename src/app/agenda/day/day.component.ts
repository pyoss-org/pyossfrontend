import {Component, OnInit} from '@angular/core';
import {TimeslotService} from '../services/timeslot.service';
import {Day} from '../model/day';
import {DayService} from '../services/day.service';

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

    private registerCurrentDaySubscription() {
        this.dayService.currentDaySubject.subscribe(day => this.day = day);
    }

    nextDay() {
        this.updateDisplayedDay(++this.viewingDaysInAdvance);
    }

    previousDay() {
        this.updateDisplayedDay(--this.viewingDaysInAdvance);
    }

    updateDay() {
        this.updateDisplayedDay(this.viewingDaysInAdvance);
    }

    private updateDisplayedDay(advanceDays: number) {
        this.dayService.fetchNextAvailableDayPlus(advanceDays);
    }

    previousIsEnabled() : boolean {
        return this.viewingDaysInAdvance !== 0;
    }
}
