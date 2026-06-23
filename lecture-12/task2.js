function login(callback){
    setTimeout(()=>{
        console.log("login successful");
        callback();
    },1000);
}
function profile(callback){
    setTimeout(()=>{
        console.log("profile loaded");
        callback();
    },1000);
}
function posts(callback){
    setTimeout(() => {
    console.log("posts loeded");
    callback();
    },1000);
}
 login(()=>{
    profile(()=>{
        posts(()=>{
            console.log("Done");
        });
    });
 });