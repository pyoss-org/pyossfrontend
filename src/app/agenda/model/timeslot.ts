import {DateTime} from './datetime';

export interface Timeslot {
    from: DateTime;
    to: DateTime;
    available: boolean;
}
