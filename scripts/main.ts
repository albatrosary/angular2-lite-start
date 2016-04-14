import {bootstrap} from 'angular2/platform/browser'
import {Component, Input, Output, Directive, EventEmitter} from 'angular2/core';


@Component({
  selector: 'bank-account',
  template: `
    <div>Bank Name: {{bankName}}</div>
    <div>Account Id: {{id}}</div>
    <div>normalizedBankName: {{normalizedBankName}}</div>
  `
})

class BankAccount {
  @Input('bank-name') bankName: string;
  @Input('account-id') id: string;
  // this property is not bound, and won't be automatically updated by Angular
  normalizedBankName: string;
  constructor() {
    this.normalizedBankName = 'ほげ'
  }
}

// @Directive({
//   selector: 'interval-dir',
// })
@Component({
  selector: 'interval-dir',
  template: ``
})
class IntervalDir {
  @Output() everySecond = new EventEmitter();
  @Output('everyFiveSeconds') five5Secs = new EventEmitter();
  constructor() {
    setInterval(() => this.everySecond.emit("event"), 1000);
    setInterval(() => this.five5Secs.emit("event"), 5000);
  }
}

@Component({
  selector: 'my-app',
  template: `
    <bank-account bank-name="RBC" account-id="4747"></bank-account>
    <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()"></interval-dir>
  `,
  directives: [BankAccount, IntervalDir]
})
class App {
  everySecond() { console.log('second'); }
  everyFiveSeconds() { console.log('five seconds'); }
}

bootstrap(App);