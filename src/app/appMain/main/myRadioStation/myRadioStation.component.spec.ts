/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyRadioStationComponent } from './myRadioStation.component';

describe('MyRadioStationComponent', () => {
  let component: MyRadioStationComponent;
  let fixture: ComponentFixture<MyRadioStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRadioStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRadioStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
