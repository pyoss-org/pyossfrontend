import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Timeslot} from '../model/timeslot';
import {environment} from '../../../environments/environment';
import {DayService} from './day.service';


@Injectable()
export class TimeslotService {

    private dobookingURL: string = environment.rootUrl + 'slots';

    constructor(private http: HttpClient, private dayService: DayService) {
    }

    book(slot: Timeslot) {
        const data = {
            fromH: slot.from.hour,
            fromM: slot.from.minutes,
            toH: slot.to.hour,
            toM: slot.to.minutes //todo check why zero even if shouldn't
        };
        return this.http.post(this.dobookingURL, data)
            .subscribe(
                () => this.dayService.fetchFirstAvailableDay(),
                (error) => TimeslotService.log(error)
            );
    }

    private static log(message: string) {
        console.log(message);
    }

}
