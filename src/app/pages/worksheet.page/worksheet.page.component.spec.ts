/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Worksheet.pageComponent } from './worksheet.page.component';

describe('Worksheet.pageComponent', () => {
  let component: Worksheet.pageComponent;
  let fixture: ComponentFixture<Worksheet.pageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Worksheet.pageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Worksheet.pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
