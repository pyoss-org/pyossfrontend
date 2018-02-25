import {Component, Input, OnInit} from '@angular/core';
import {PyossDate} from '../../agenda/model/date';

@Component({
  selector: 'pyoss-datedisplay',
  templateUrl: './datedisplay.component.html',
  styleUrls: ['./datedisplay.component.css']
})
export class DatedisplayComponent implements OnInit {

  @Input('model')
  private model: PyossDate;

  constructor() {
  }

  ngOnInit() {
  }

  private format(): string {
    return `${this.model.dayOfWeek} ${this.model.dayOfMonth} ${this.model.month} ${this.model.year}`
  }

}
