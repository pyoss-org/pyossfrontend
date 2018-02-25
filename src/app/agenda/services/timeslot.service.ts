import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Timeslot} from '../model/timeslot';
import {environment} from '../../../environments/environment';


@Injectable()
export class TimeslotService {

  private dobookingURL: string = environment.rootUrl + 'slots';

  constructor(private http: HttpClient) {
  }

  book(slot: Timeslot) {
    const data = {
      fromH: slot.from.hour,
      fromM: slot.from.minute,
      toH: slot.to.hour,
      toM: slot.to.minute,
      dateY: slot.from.year,
      dateM: slot.from.monthValue,
      dateD: slot.from.dayOfMonth
    };
    console.log(data);
    this.http.post(this.dobookingURL, data)
      .subscribe();
  }

}
