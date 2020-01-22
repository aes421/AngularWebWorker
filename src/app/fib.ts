export function generateFibonacciSequence(index: number): number {
    if (index <= 1) {
        return index;
    }
    return generateFibonacciSequence(index - 1) + generateFibonacciSequence(index - 2);
}