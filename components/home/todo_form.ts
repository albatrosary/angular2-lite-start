import {Component, Output, EventEmitter} from 'angular2/core';
import {Todo} from './todo';

@Component({
  selector: 'todo-form',
  template: `
    <form (ngSubmit)="addTodo()">
      <input type="text" [(ngModel)]="task" size="30"
             placeholder="add new todo here">
      <input class="btn-primary" type="submit" value="add">
    </form>`
})
export class TodoForm {
  // newTask が発行されたらhome.ts[(newTask)="addTask($event)]" が実行される
  @Output() newTask = new EventEmitter<Todo>();
  task: string = '';

  addTodo() {
    if (this.task) {
      // home.tsのaddTask(task: Todo)へデータを入れ込む
      this.newTask.emit({text:this.task, done:false});
    }
    this.task = '';
  }
}
