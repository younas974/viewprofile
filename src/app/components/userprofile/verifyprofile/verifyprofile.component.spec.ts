import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyprofileComponent } from './verifyprofile.component';

describe('VerifyprofileComponent', () => {
  let component: VerifyprofileComponent;
  let fixture: ComponentFixture<VerifyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
