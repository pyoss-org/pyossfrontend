import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Timeslot} from '../model/timeslot';
import {environment} from '../../../environments/environment';


@Injectable()
export class TimeslotService {

    private getURL: string = environment.rootUrl + 'timeslots';

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Timeslot[]> {
        return this.http.get<Timeslot[]>(this.getURL);
    }

}
