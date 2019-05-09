import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptOneComponent } from './opt-one.component';

describe('OptOneComponent', () => {
  let component: OptOneComponent;
  let fixture: ComponentFixture<OptOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
