import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudittrailPage } from './audittrail.page';

describe('AudittrailPage', () => {
  let component: AudittrailPage;
  let fixture: ComponentFixture<AudittrailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudittrailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudittrailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
