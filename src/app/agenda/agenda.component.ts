import { Component, OnInit } from '@angular/core';
import {TimeslotService} from '../timeslot.service';
import {Timeslot} from '../Timeslot';

@Component({
  selector: 'pyoss-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  private timeslots: Timeslot[];

  constructor(private timeslotService: TimeslotService) { }

  ngOnInit() {
    this.timeslotService.getAll().subscribe(
      data => this.timeslots = data
    );
  }

}
