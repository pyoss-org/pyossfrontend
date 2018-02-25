import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Timeslot} from '../model/timeslot';
import {TimeslotService} from '../services/timeslot.service';

@Component({
    selector: 'pyoss-timeslot',
    templateUrl: './timeslot.component.html',
    styleUrls: ['./timeslot.component.css'],
})
export class TimeslotComponent implements OnInit {

    @Input('model')
    private model: Timeslot;

    @Output('onBook')
    private onBookEmitter: EventEmitter = new EventEmitter();

    constructor(private timeslotService: TimeslotService) {
    }

    ngOnInit() {
    }

    calculateColor(available: boolean): string {
        return available ? '#AED581' : '#E57373';
    }

    doBook(toBook: Timeslot) {
        this.timeslotService.book(toBook);
        this.onBookEmitter.emit();
    }

}
