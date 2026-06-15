const students = [
  { name: "John", marks: 80 },
  { name: "Emma", marks: 40 },
  { name: "Alex", marks: 70 }
];

const passedNames = students
  .filter(s => s.marks >= 50)
  .map(s => s.name);

console.log(passedNames); 