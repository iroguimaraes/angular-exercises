import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2AutoCompleteInputComponent } from './ex2-auto-complete-input.component';

describe('Ex2AutoCompleteInputComponent', () => {
  let component: Ex2AutoCompleteInputComponent;
  let fixture: ComponentFixture<Ex2AutoCompleteInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex2AutoCompleteInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex2AutoCompleteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
