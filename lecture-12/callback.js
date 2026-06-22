function greet(name,callback){
    console.log(`hello ${name}`);
    callback();
    
}
function goodbye(){
    console.log("goodbye")
}
greet("shivam",goodbye);
//suppose a file takes time to download
//call back with time 
console.log("Download start");
setTimeout(()=>{
    console.log("Downloding..")
},3000);
//time dilay of 5 second
let count =0;

 const  intervalId=setInterval(()=>{
    console.log("Download peding");
    count++;
    if(count>=5){
        clearInterval(intervalId);
    }
},2000);
console.log("shown data");