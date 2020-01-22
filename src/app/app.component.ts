import { Component } from '@angular/core';
import { generateFibonacciSequence } from './fib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input = '';
  output = [];
  counter = 0;

  constructor() {
  }

  generate() {

    if (typeof Worker !== 'undefined') {
      const worker = new Worker('./app.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        this.output.push(data);
        worker.terminate();
      };
      worker.postMessage(this.input);
    } else {
      this.output.push(generateFibonacciSequence(Number(this.input)));
    }
  }

  count(amount: number) {
    this.counter += amount;
  }
}

