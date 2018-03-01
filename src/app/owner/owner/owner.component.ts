import { Component, OnInit } from '@angular/core';
import {OwnerService} from './services/owner.service';
import {OwnerConfig} from './model/ownerconfig';

@Component({
  selector: 'pyoss-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  private config: OwnerConfig;

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.ownerService.getConfig().subscribe(next => this.config = next);
  }

  save() {
    this.ownerService.save(this.config);
  }

}
