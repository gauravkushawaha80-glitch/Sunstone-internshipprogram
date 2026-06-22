function login(callback){
    setTimeout(() => {
        console.log("User authenticated");
        callback();
    },1000);
}
function getprofile(callback){
    setTimeout(() => {
        console.log("profile facted");
        callback();
    }, 1000);
}
login(()=>{
    getprofile(()=>{
        console.log("Dispalying profile");
    });
});