import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HkDayComponent } from './hk-day.component';

describe('HkDayComponent', () => {
  let component: HkDayComponent;
  let fixture: ComponentFixture<HkDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HkDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HkDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
