import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pyoss-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {

  @Input('input')
  private input: number;

  @Input('label')
  private label: string;

  constructor() { }

  ngOnInit() {
  }

}
