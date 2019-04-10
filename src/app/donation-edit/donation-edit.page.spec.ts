import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationEditPage } from './donation-edit.page';

describe('DonationEditPage', () => {
  let component: DonationEditPage;
  let fixture: ComponentFixture<DonationEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
