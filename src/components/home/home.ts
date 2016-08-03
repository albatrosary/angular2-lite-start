import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import {MyAnimate01} from './animate01';
import {MyAnimate02} from './animate02';
import {MyAnimate03} from './animate03';
import {MyAnimate04} from './animate04';

@Component({
  selector: 'my-app',
  template: `
    <h1>My First {{name}} {{1+1}} App</h1>
    <my-animate-01></my-animate-01>
    <my-animate-02></my-animate-02>
    <my-animate-03></my-animate-03>
    <my-animate-04></my-animate-04>
    `
  ,directives: [MyAnimate01, MyAnimate02, MyAnimate03, MyAnimate04]
})

export class AppComponent {
  public name: string = 'Angular';
}
