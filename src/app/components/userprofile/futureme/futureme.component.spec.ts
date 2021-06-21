import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturemeComponent } from './futureme.component';

describe('FuturemeComponent', () => {
  let component: FuturemeComponent;
  let fixture: ComponentFixture<FuturemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuturemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
