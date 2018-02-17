import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedisplayComponent } from './timedisplay.component';

describe('TimedisplayComponent', () => {
  let component: TimedisplayComponent;
  let fixture: ComponentFixture<TimedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
