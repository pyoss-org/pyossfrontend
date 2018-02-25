import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Day} from '../model/day';
import {Subject} from 'rxjs/Subject';
import {Page} from '../model/page';

@Injectable()
export class DayService {

    public currentDaySubject: Subject<Day> = new Subject<Day>();

  private availableDaysUrl: string = environment.rootUrl + 'days?next=true';

    constructor(private http: HttpClient) {
    }

    fetchNextAvailableDay() {
        this.fetchNextAvailableDayPlus(0);
    }

    fetchNextAvailableDayPlus(numberOfDays: number) {
        return this.http.get<Page<Day>>(`${this.availableDaysUrl}&page=${numberOfDays}`)
            .subscribe(page => this.sendNextDay(page.content[0]));
    }

    private sendNextDay(day) {
        this.currentDaySubject.next(day);
    }
}
