let fruits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//advance array method
//saare elements par condition apply kar dega
const double = fruits.map(function(x){
    return x * 2;
});
const doubledemo=fruits.map(x=>x*2);
console.log(double);
console.log(doubledemo);
//filter
//tumhari condition check karega
//joh bhi element condition pass hoga voh new array ne a jayega
const even=fruits.filter(function(x){
    return x%2==0;
});
const evendemo =fruits.filter(x=>x%2!==0);
console.log(even);

console.log(evendemo);
//reduce 
// saare elements ko ek varible me conver kardega
const sum=fruits.reduce(function(sum,x){
    return sum+x;
},0);
const sum1=fruits.reduce((sum,x)=>sum+x,0);
const sum2=fruits.reduce((sum,x)=>sum+x);

console.log(sum);
console.log(sum1);
console.log(sum2);
//find 
//jese hi condtion setisfi huye condition prin kar dega
const f=fruits.find(function(x){
    return x==3;

});
const fdemo=fruits.find(x=>x==3);
console.log(f);
console.log(fdemo);
//some
// batata hai ke conditon kuch elements saricfy kar rahe ahi ya nahi 
 const s=fruits.some(function(x){
    return x>3;
 });
 const sdemo=fruits.some(x=>x>3);
 console.log(s);
console.log(sdemo);
//every
// batata hai ki saare elements sataify condition kar rahe hai ya nahi 
const e=fruits.every(function(x){
    return x>5;
});
const edemo=fruits.every(x=>x>5);
console.log(e);
console.log(edemo);

