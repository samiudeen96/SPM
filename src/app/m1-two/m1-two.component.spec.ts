import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M1TwoComponent } from './m1-two.component';

describe('M1TwoComponent', () => {
  let component: M1TwoComponent;
  let fixture: ComponentFixture<M1TwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M1TwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M1TwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
