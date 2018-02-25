import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Timeslot} from '../model/timeslot';
import {environment} from '../../../environments/environment';
import {Day} from '../model/day';


@Injectable()
export class TimeslotService {

    private getURL: string = environment.rootUrl + 'timeslots';
    private getFirstURL: string = environment.rootUrl + 'days?next=true';
    private dobookingURL: string = environment.rootUrl + 'slot/book';

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Timeslot[]> {
        return this.http.get<Timeslot[]>(this.getURL);
    }

  getFirstAvailableDay(): Observable<Day> {
      return this.http.get<Day> (this.getFirstURL);
  }

  doBooking(slot: Timeslot) {
      const data = {
        fromH: slot.from.hour,
        fromM: slot.from.minutes,
        toH: slot.to.hour,
        toM: slot.to.minutes //todo check why zero even if shouldnt
      };
    return this.http.post(this.dobookingURL, data);
  }
}
