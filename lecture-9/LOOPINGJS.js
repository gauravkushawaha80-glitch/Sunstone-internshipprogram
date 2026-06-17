let fruits=["APPLE","BANANA","MANGO","DINESH","GAURAV"];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//for of loop
console.log("for of loop");
for(let frui of fruits){
    console.log(frui);
}
//for each
console.log("for each  loop");
fruits.forEach(function(i){
    console.log(i);
})