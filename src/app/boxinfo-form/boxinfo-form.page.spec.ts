import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxinfoFormPage } from './boxinfo-form.page';

describe('BoxinfoFormPage', () => {
  let component: BoxinfoFormPage;
  let fixture: ComponentFixture<BoxinfoFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxinfoFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxinfoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
