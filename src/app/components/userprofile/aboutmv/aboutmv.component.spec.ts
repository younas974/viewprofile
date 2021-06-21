import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmvComponent } from './aboutmv.component';

describe('AboutmvComponent', () => {
  let component: AboutmvComponent;
  let fixture: ComponentFixture<AboutmvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutmvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
