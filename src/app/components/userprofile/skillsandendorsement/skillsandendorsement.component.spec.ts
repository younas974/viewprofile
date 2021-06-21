import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsandendorsementComponent } from './skillsandendorsement.component';

describe('SkillsandendorsementComponent', () => {
  let component: SkillsandendorsementComponent;
  let fixture: ComponentFixture<SkillsandendorsementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsandendorsementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsandendorsementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
