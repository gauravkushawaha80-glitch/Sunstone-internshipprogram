const customers = [
  { customer: "John", amount: 50000 },
  { customer: "Emma", amount: 20000 }
];

const totalSpending = customers.reduce((sum, c) => sum + c.amount, 0);

console.log("Total Spending:", totalSpending);
//10
const students = [
  { name: "John", marks: [80, 90, 85] },
  { name: "Emma", marks: [95, 92, 98] }
];

const studentAverages = students.map(student => {
  const total = student.marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / student.marks.length;
  return { name: student.name, average: average };
});

console.log("Student Averages:", studentAverages);
