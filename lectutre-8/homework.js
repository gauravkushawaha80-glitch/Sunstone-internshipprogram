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
//2 
const sales = [
  { category: "Electronics", amount: 500 },
  { category: "Books", amount: 100 },
  { category: "Electronics", amount: 300 }
];

const totalRevenue = sales.reduce((sum, sale) => sum + sale.amount, 0);

console.log("Total Revenue:", totalRevenue);
//3
const text = "The fox is quick. The fox is smart.";

const words = text.toLowerCase().split(/\W+/).filter(Boolean);


const foxCount = words.filter(word => word === "fox").length;

console.log("Words:", words);
console.log('Count of "fox":', foxCount);
//4
const employees = [
  { name: "A", salary: 50000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 60000 }
];


const salaries = employees.map(emp => emp.salary);

const totalSalary = salaries.reduce((sum, salary) => sum + salary, 0);

console.log("Salaries:", salaries);
console.log("Total Salary:", totalSalary);
//5
const products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
  { name: "Tablet", stock: 10 }
];


const availableProducts = products
  .filter(product => product.stock > 0)
  .map(product => product.name);

console.log("Available Products:", availableProducts);
//6
const posts = [
  { postId: 1, likes: 100 },
  { postId: 2, likes: 200 }
];


const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

console.log("Total Likes:", totalLikes);
//7


const movies = [
  { title: "Movie A", rating: 8.5 },
  { title: "Movie B", rating: 6.0 }
];

const highlyRatedTitles = movies
  .filter(movie => movie.rating > 8)
  .map(movie => movie.title);

console.log("Highly Rated Movies:", highlyRatedTitles);
//8
const customers = [
  { customer: "John", amount: 50000 },
  { customer: "Emma", amount: 20000 }
];

const totalSpending = customers.reduce((sum, c) => sum + c.amount, 0);

console.log("Total Spending:", totalSpending);
//9

const transactions = [
  { type: "credit", amount: 1000 },
  { type: "debit", amount: 300 },
  { type: "credit", amount: 500 }
];

const totalCredit = transactions
  .filter(t => t.type === "credit")
  .reduce((sum, t) => sum + t.amount, 0);

console.log("Total Credit:", totalCredit);
//10
const repos = [
  { repo: "A", stars: 100 },
  { repo: "B", stars: 200 }
];

const totalStars = repos.reduce((sum, r) => sum + r.stars, 0);
console.log(totalStars); 
//12

