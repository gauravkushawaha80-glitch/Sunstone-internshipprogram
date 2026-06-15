const numbers = [1, 2, 3, 4, 5, 6];

const evenSquares = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * n);

console.log(evenSquares); 