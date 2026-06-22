function download(callback){
    setTimeout(() => {
        console.log("Download comleted");
        callback();   
    },1000);
}
function compression(callback){
    setTimeout(()=>{
        console.log("compresssion completed");
        callback();
    },1000);
}
function upload(callback){
    setTimeout(() => {
        console.log("uplode complete");
        callback();
    }, 1000);
}
console.log("Start downloading");
download(()=>{
   console.log("comprission file")
   compression(()=>{
    console.log("uplode file");
    upload(()=>{
        console.log("prosised finised");
    });
   });
});
