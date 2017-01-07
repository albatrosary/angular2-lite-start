import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>My First {{name}} {{1+1}} App</h1>
    `,
})

export class AppComponent {
  public name: string = 'Angular';
  constructor () {
    console.log('AppComponent');
  }
}
  