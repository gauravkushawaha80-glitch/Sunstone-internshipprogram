const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
];

const discounted = products.map(p => ({
  ...p,
  price: p.price - p.price * 0.10
}));

console.log(discounted);
