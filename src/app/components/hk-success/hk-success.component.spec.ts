import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HkSuccessComponent } from './hk-success.component';

describe('HkSuccessComponent', () => {
  let component: HkSuccessComponent;
  let fixture: ComponentFixture<HkSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HkSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HkSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
