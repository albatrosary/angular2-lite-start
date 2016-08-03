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
  selector: 'my-animate-01',
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
    }
  `],
  animations: [
    trigger('heroState', [
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      state('inactive', style({ 
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      }))
    ])
  ]
})

export class MyAnimate01 {
  public heroes = {
    state: 'active',
    name: 'Angular2'
  }; 

  toggleState () {
    this.heroes.state = this.heroes.state === 'inactive' ? 'active' : 'inactive';
  }
}
