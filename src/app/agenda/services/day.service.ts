import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Day} from '../model/day';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DayService {

    public currentDaySubject: Subject<Day> = new Subject<Day>();

    private getFirstURL: string = environment.rootUrl + 'days?next=true';

    constructor(private http: HttpClient) {
    }

    fetchFirstAvailableDay() {
        return this.http.get<Day>(this.getFirstURL)
            .subscribe(days => this.sendNextDay(days[0]));
    }

    private sendNextDay(day) {
        this.currentDaySubject.next(day);
    }
}
