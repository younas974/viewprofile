import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkavailityComponent } from './workavaility.component';

describe('WorkavailityComponent', () => {
  let component: WorkavailityComponent;
  let fixture: ComponentFixture<WorkavailityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkavailityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkavailityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
