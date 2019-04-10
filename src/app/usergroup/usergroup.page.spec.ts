import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergroupPage } from './usergroup.page';

describe('UsergroupPage', () => {
  let component: UsergroupPage;
  let fixture: ComponentFixture<UsergroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsergroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsergroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
