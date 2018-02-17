import { Component, OnInit } from '@angular/core';
import {TimeslotService} from '../timeslot.service';
import {Timeslot} from '../Timeslot';

@Component({
  selector: 'pyoss-agendaview',
  templateUrl: './agendaview.component.html',
  styleUrls: ['./agendaview.component.css']
})
export class AgendaviewComponent implements OnInit {
  private timeslots: Timeslot[];

  constructor(private timeslotService: TimeslotService) { }

  ngOnInit() {
    this.timeslotService.getAll().subscribe(
      data => this.timeslots = data
    );
  }

}
