import {Component} from 'angular2/core';
import {Todo}      from './todo';
import {TodoList}  from './todo_list';
import {TodoForm}  from './todo_form';

@Component({
  selector: 'my-app',
  template: `
    <h2>Todo</h2>
    <span>{{remaining}} of {{todos.length}} remaining</span>
    [ <a (click)="archive()">archive</a> ]
    <todo-list [todos]="todos"></todo-list>
    <todo-form (newTask)="addTask($event)"></todo-form>`,
    //<todo-form (keydown)="addTask($event)"></todo-form>
  styles:['a { cursor: pointer; cursor: hand; }'],
  directives: [TodoList, TodoForm]
})
export class AppComponent {
  todos: Todo[] = [
      {text: 'learn angular',        done: true},
      {text: 'build an angular app', done: false}
  ];

  get remaining() {
    return this.todos.filter(todo => !todo.done).length;
  }

  archive(): void {
    let oldTodos = this.todos;
    this.todos = [];
    oldTodos.forEach(todo => {
      if (!todo.done) { this.todos.push(todo); }
    });
  }

  // addTask(event) {
  //   console.log(event);
  // }
  addTask(task: Todo) {
    this.todos.push(task);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/