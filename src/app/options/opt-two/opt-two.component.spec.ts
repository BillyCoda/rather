import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptTwoComponent } from './opt-two.component';

describe('OptTwoComponent', () => {
  let component: OptTwoComponent;
  let fixture: ComponentFixture<OptTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
