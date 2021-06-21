import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContantdetailsComponent } from './contantdetails.component';

describe('ContantdetailsComponent', () => {
  let component: ContantdetailsComponent;
  let fixture: ComponentFixture<ContantdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContantdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContantdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
