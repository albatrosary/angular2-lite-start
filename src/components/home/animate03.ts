import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'my-animate-03',
  template: `
    <div
      @heroState="heroes.state"
      (click)="toggleState()">
    {{heroes.name}}</div>
    `,
  styles: [`
    div {
      height: 50px;
      width: 100px;
      background-color: #eee;
    }
  `],
  animations: [
    trigger('heroState', [
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      state('inactive', style([{ 
        transform: 'translateX(100%)'
      }, { 
        backgroundColor: '#eee'
      }])),
      state('active', style([{
        transform: 'translateX(0%)'
      }, {
        backgroundColor: '#cfd8dc'
      }]))
    ])
  ]
})

export class MyAnimate03 {
  public heroes = {
    state: 'active',
    name: 'Angular2'
  }; 

  toggleState () {
    this.heroes.state = this.heroes.state === 'inactive' ? 'active' : 'inactive';
  }
}
