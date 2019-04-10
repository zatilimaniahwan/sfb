import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergroupFormPage } from './usergroup-form.page';

describe('UsergroupFormPage', () => {
  let component: UsergroupFormPage;
  let fixture: ComponentFixture<UsergroupFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsergroupFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsergroupFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
