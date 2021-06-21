import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserexperienceComponent } from './userexperience.component';

describe('UserexperienceComponent', () => {
  let component: UserexperienceComponent;
  let fixture: ComponentFixture<UserexperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserexperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
