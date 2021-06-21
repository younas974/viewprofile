import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyprofileprogressComponent } from './verifyprofileprogress.component';

describe('VerifyprofileprogressComponent', () => {
  let component: VerifyprofileprogressComponent;
  let fixture: ComponentFixture<VerifyprofileprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyprofileprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyprofileprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
