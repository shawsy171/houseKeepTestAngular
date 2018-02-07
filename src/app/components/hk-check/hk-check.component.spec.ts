import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HkCheckComponent } from './hk-check.component';

describe('HkCheckComponent', () => {
  let component: HkCheckComponent;
  let fixture: ComponentFixture<HkCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HkCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HkCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
