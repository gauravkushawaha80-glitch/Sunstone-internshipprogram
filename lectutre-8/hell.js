let students = [
  { name: "John", marks: [80, 90, 85] },
  { name: "Emma", marks: [95, 92, 98] }
];
let result = students.map(s => {
  let total = 0;
  for (let m of s.marks) {
    total += m;
  }
  let average = total / s.marks.length;
  return { name: s.name, average: average };
});

console.log(result);