let fruits=["APPLE","BANANA","MANGO","DINESH","GAURAV"];
//lenth 
//array ka size batana
console.log(fruits.length);
// push
//array ke ander element dall dega
//last me element dalega
fruits.push("watermelon");
//pop
//emelnent remve kardega last se 
fruits.pop();
console.log(fruits);
// UNSHIFT
fruits.unshift("watermelon");
console.log(fruits);
//shift 
//shuru ka index me joh value hai usko remove kardega
 fruits.shift();
 console.log(fruits);
 //includes
 //check karta hai ki element present hai yah nahi
 console.log(fruits.includes("MANGO"));
 console.log(fruits.includes("watermelon"));
 // indexof
//USS ELEMENT KA INDEX KA RETURN KARDGA
 console.log(fruits.indexOf("MANGO"));
 //JOIN
 console.log(fruits.join("_"));
 // slice 
 //element tayaega uss range ka 
 console.log(fruits.slice(1,3));
// splice
// ELEMENT BATAYEGA USS RANDE KE RIGHT BOUND SE JJUST PEHLE 

console.log(fruits.splice(1,4));

    