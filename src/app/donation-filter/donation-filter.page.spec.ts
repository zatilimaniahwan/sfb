import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationFilterPage } from './donation-filter.page';

describe('DonationFilterPage', () => {
  let component: DonationFilterPage;
  let fixture: ComponentFixture<DonationFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationFilterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
