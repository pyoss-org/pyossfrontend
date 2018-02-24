import {Component, Input, OnInit} from '@angular/core';
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

    constructor(private timeslotService: TimeslotService) {
    }

    ngOnInit() {
    }

    calculateColor(available: boolean): string {
        return available ? '#AED581' : '#E57373'
    }

  doBook() {
    this.timeslotService.doBooking(this.model).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }
}
