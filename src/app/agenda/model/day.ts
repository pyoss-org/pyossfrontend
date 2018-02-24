import {Timeslot} from './timeslot';
import {PyossDate} from './date';

export interface Day {
    slots: Timeslot[];
    date: PyossDate;
}
