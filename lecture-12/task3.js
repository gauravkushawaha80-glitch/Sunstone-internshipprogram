function step1(){
    return new Promise((cd)=>{
        console.log("step1 completed");
        cd();
    })
}
function step2(){
    return new Promise((cd)=>{
        console.log("step2 completed");
        cd();
    });
}
function step3(){
    return new Promise((cd)=>{
        console.log("step3 completed");
        cd();
    });
}
function step4(){
    return new Promise((cd)=>{
        console.log("step4 completed");
        cd();
    });
}
step1()
.then(step2)
.then(step3)
.then(step4)
.then(()=>
{
    console.log("end the sesion");
});