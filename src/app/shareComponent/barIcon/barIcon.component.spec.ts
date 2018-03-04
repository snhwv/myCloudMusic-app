/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BarIconComponent } from './barIcon.component';

describe('BarIconComponent', () => {
  let component: BarIconComponent;
  let fixture: ComponentFixture<BarIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
