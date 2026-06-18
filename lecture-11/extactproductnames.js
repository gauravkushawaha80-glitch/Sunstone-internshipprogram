const products=[
    {id:1,name:"laptop"},
    {id:2,name:"phone"},
    {id:3,name:"tablet"}
];
//filter long words 
const words=["apple","banana","cat","elephant","dog"];
const q3=words.filter(function(animal){
    return animal.length>5;
})
console.log(q3);
const users=[{name:"a",age:16},
    {name:"B",age:23},
    {name:"C",age:19}
];
const use=users.filter(function(aged){
 //   return aged.age<18;
    return aged.age>20;
});
const q2=users.filter(age=>age.age>18);
console.log(use);
console.log("fileter ");
console.log(q2);
//count total characters
const words1=["hello","world","javascript"];
const comt= words1.reduce((total,word)=>total+=word.length,0);
console.log(comt);    
 const semt=words1.reduce(function(total,word){
    return total+=word.length
 },0);
 console.log(semt);
 // get squares of even numbers
 const nums=[1,2,3,4,5,6,7,8,];
 const even=nums.filter(nums=>nums%2==0).map(nums=>nums*nums,0);
 console.log(even);
 // total salary of empoyees
 const employees=[
    {name:"A",salary:30000},
    { name:"B",salary:50000},
    {name:"V",salary:90000}
 ];
 const salary=employees.reduce(function(total,e){
    return total+=e.salary;
 },0);
 console.log(salary);
 const q1=employees.reduce((total,e)=>total+=e.salary,0);
 console.log(q1);
 // question -8
 // name of passed student 
 //pass marks=40
  const studentsmarks=[
    {name:"A",marks:35},
    {name:"B",marks:75},
    {name:"c",marks:45}
  ];
   const marks1 =studentsmarks.filter((nums)=>nums.marks>40).map((num)=>num.name);
   console.log(marks1);
   //
   const marks2=studentsmarks.filter(function(M){
    return M.marks>40;
   }).map(function(z){

    return z.name;
   });
   console.log(marks2);
// question-9
// average marks of stduents 
const averagemarks=[80,90,70,60];
const average = averagemarks.reduce(function(sum,n){
    return   sum+=n;
},0)/averagemarks.length;
console.log(average);
//
const average1 = averagemarks.reduce((total,n)=>total+=n,0)/averagemarks.length;
console.log(average1);
// 10
// 
const fruits=[
    "apple",
    "banana",
    "watermelan",
    "orange",
    "banana",
    "apple"
];
const q10=fruits.reduce(function(occ,fruit){
 occ[fruit]=(occ[fruit]||0)+1;;
 return occ;
},{});
console.log(q10);
//
const q11=fruits.reduce((occ,fruit)=>{occ[fruit]=(occ[fruit]||0)+1;return occ},{});
console.log(q11);
//11
//top performing stduents
const performingstudents=[
    {name:"Utkarsh",marks:[80,90,85]},
    {name:"Yukta",marks:[95,92,98]},
    {name:"Navneet",marks:[60,70,65]}
];
const averagz =performingstudents.map(function(s){
   return {
            name: s.name,
            avg: s.marks.reduce(function (total, mark) {
                return total + mark;
            }, 0) / s.marks.length
        };

}).filter(function(s){
    return s.avg>=85;
}).sort(function(a,b){  
    return b.avg-a.avg;
}).map(function(s){
    return s.name;
});
console.log(averagz);
//12
// group products by category
const products12=[

    {name:"Laptop",category:"Electronics"},
    {name:"phone",category:"Electronics"},
    {name:"Shirt",category:"Clothing"}
];
const q12=products12.reduce(function(group,product){
    if(!group[product.category]){
        group[product.category]=[];
    }
    group[product.category].push(product.name);
    return group;
},{});
console.log(q12);
