import 'zone.js/dist/zone';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-child',
  standalone: true,
  imports: [CommonModule],
  template: `<p>{{text}}</p>`,
})
export class Child {
  @Input({
    transform: (text: string) => {
      return text + '!';
    },
    required: true,
  })
  text!: string;
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, Child],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <my-child text='Hi'></my-child>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
