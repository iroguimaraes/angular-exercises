import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1UserProfileFormComponent } from './ex1-user-profile-form.component';

describe('Ex1UserProfileFormComponent', () => {
  let component: Ex1UserProfileFormComponent;
  let fixture: ComponentFixture<Ex1UserProfileFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex1UserProfileFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex1UserProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
