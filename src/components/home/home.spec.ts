/// <reference path="../../../node_modules/@types/karma/index.d.ts" />
/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />

import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './home';

describe("TableComponent", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ]
    });
  });

  it('component test', async(() => {
    TestBed.compileComponents().then(() => {
      // コンポーネントインスタンスの作成 
      let fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();

      let element = fixture.debugElement.query(By.css('h1')).nativeElement;
      expect(element.innerText).toMatch(/My First Angular 2 App/i);
    });
  }));
});