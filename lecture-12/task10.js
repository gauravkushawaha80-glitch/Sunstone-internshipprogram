//promise.race -> get the fastest response among multiplae taske
let server1=new Promise((resolve) => {
    setTimeout(()=> resolve("server1 response"),3000);
});
let server2= new Promise((resolve)=>{
    setTimeout(() => resolve("server2 response"),2000);
});
let server3 =new Promise((resolve)=>{
    setTimeout(() => resolve("server3 response"),1500);
});
Promise.race([server1,server2,server3])
.then((suer)=>{
    console.log(suer);
});