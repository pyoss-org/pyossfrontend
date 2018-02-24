import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatedisplayComponent } from './datedisplay.component';

describe('DatedisplayComponent', () => {
  let component: DatedisplayComponent;
  let fixture: ComponentFixture<DatedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
