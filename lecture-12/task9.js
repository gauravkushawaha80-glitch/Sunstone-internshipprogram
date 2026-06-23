//promiseall
let user=new Promise((resolve) => {
    setTimeout(()=> resolve("user data"),1000);
});
let posts= new Promise((resolve)=>{
    setTimeout(() => resolve("posts data"),2000);
});
let comments =new Promise((resolve)=>{
    setTimeout(() => resolve("comments data"),1500);
});
Promise.all([user,posts,comments])
.then((suer)=>{
    console.log(suer);
});