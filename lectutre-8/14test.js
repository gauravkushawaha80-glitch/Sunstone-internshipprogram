const marks = [45, 80, 60, 90, 30];

const passed = marks.filter(m => m > 50);
const average = passed.reduce((sum, m) => sum + m, 0) / passed.length;

console.log(passed); 
console.log(average); 