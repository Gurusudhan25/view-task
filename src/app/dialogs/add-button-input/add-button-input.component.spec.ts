import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddButtonInputComponent } from './add-button-input.component';

describe('AddButtonInputComponent', () => {
  let component: AddButtonInputComponent;
  let fixture: ComponentFixture<AddButtonInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddButtonInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddButtonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
