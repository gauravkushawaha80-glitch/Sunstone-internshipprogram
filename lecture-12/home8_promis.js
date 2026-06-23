function Download(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("Downloding");
            resolve();
        },1000);
    });
}
function compress(){
    return new Promise(resolve=>{
        setTimeout(() => {
            console.log("compress completed");
            resolve();
        },1000);
    });
}
function upload(){
    return new Promise(resolve=>{
        setTimeout(() => {
            console.log("upload completed");
            resolve();
        }, 1000);
    });
}
Download()
.then(()=>compress())
.then(()=>upload())
.then(()=> console.log("ALL prosess completed"));