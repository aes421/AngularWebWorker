import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  // n = (n-1) + (n-2)
  public generateFibonacciSequence(index: number): number {
    if (index <= 1) {
      return index;
    }

    return this.generateFibonacciSequence(index - 1) + this.generateFibonacciSequence(index - 2);
  }

}
