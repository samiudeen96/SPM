import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatpopComponent } from './floatpop.component';

describe('FloatpopComponent', () => {
  let component: FloatpopComponent;
  let fixture: ComponentFixture<FloatpopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatpopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
