/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetApiComponent } from './getApi.component';

describe('GetApiComponent', () => {
  let component: GetApiComponent;
  let fixture: ComponentFixture<GetApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
