import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffFormPage } from './staff-form.page';

describe('StaffFormPage', () => {
  let component: StaffFormPage;
  let fixture: ComponentFixture<StaffFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
