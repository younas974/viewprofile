import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestedcontriesComponent } from './interestedcontries.component';

describe('InterestedcontriesComponent', () => {
  let component: InterestedcontriesComponent;
  let fixture: ComponentFixture<InterestedcontriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestedcontriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestedcontriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
