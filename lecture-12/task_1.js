function tsk1(url,callback){
    console.log("Start");
    setTimeout(()=>{
        console.log("message Input");
        callback();
    },1000);
}
 tsk1("sendmessage",()=>{
    setTimeout(() => {
         console.log("send the message");
    }, 1000);
   

 });