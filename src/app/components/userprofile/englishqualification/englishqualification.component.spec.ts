import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishqualificationComponent } from './englishqualification.component';

describe('EnglishqualificationComponent', () => {
  let component: EnglishqualificationComponent;
  let fixture: ComponentFixture<EnglishqualificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnglishqualificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishqualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
