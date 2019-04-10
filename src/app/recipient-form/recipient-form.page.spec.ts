import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientFormPage } from './recipient-form.page';

describe('RecipientFormPage', () => {
  let component: RecipientFormPage;
  let fixture: ComponentFixture<RecipientFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipientFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
