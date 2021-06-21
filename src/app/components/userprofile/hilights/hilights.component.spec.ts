import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HilightsComponent } from './hilights.component';

describe('HilightsComponent', () => {
  let component: HilightsComponent;
  let fixture: ComponentFixture<HilightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HilightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HilightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
