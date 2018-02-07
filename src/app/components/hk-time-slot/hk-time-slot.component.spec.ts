import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HkTimeSlotComponent } from './hk-time-slot.component';

describe('HkTimeSlotComponent', () => {
  let component: HkTimeSlotComponent;
  let fixture: ComponentFixture<HkTimeSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HkTimeSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HkTimeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
