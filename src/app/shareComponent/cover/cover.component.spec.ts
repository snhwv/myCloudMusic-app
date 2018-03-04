/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {  coverComponent } from './ cover.component';

describe(' coverComponent', () => {
  let component:  coverComponent;
  let fixture: ComponentFixture< coverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  coverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( coverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
