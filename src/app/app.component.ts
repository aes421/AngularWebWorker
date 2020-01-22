import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input = '';
  output = '';
  counter = 0;

  constructor(public service: AppService) {
  }

  generate() {
    this.output = '';
    this.output = String(this.service.generateFibonacciSequence(Number(this.input)));
  }

  count(amount: number) {
    this.counter += amount;
  }
}
