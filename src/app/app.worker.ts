/// <reference lib="webworker" />
import { generateFibonacciSequence } from './fib';


addEventListener('message', ({ data }) => {
  const response = generateFibonacciSequence(data);
  postMessage(response);
});


