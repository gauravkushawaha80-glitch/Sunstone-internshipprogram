function completed(back,callbak){
    console.log("downloading starting...");
    setTimeout(() => {
        console.log("Downloding...");
        callbak();
    },3000);
    
}
completed("downloadcomplet",()=>{
    setTimeout(()=>{
        console.log("Downlod completing");
    },2000);
});