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
    private onBookEmitter: EventEmitter<Timeslot> = new EventEmitter();

    private backgroundColor: string;

    constructor(private timeslotService: TimeslotService) {
    }

    ngOnInit() {
        this.backgroundColor = this.calculateColor(this.model.available);
    }

    calculateColor(available: boolean): string {
        return available ? this.backgroundColor = '#AED581' : this.backgroundColor = '#E57373';
    }

    doBook(toBook: Timeslot) {
        if (this.model.available) {
            this.timeslotService.book(toBook);
            this.onBookEmitter.emit(toBook);
        }
    }

    enterMouse() {
        if (this.model.available) {
            this.backgroundColor = '#ddd';
        }
    }

    leaveMouse(available: boolean) {
        this.calculateColor(available);
    }
}
