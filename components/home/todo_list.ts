import {Component, Input} from 'angular2/core';
import {Todo} from './todo';

@Component({
  selector: 'todo-list',
  styles: [`
    .done-true {
      text-decoration: line-through;
      color: grey;
    }`
  ],
  template: `
    <ul class="list-unstyled">
      <li *ngFor="#todo of todos">
        <input type="checkbox" [(ngModel)]="todo.done">
        <span class="done-{{todo.done}}">{{todo.text}}</span>
      </li>
    </ul>`
})
export class TodoList {
  @Input() todos: Todo[];
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/