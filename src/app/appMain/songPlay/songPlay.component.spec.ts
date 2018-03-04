/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SongPlayComponent } from './songPlay.component';

describe('SongPlayComponent', () => {
  let component: SongPlayComponent;
  let fixture: ComponentFixture<SongPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
