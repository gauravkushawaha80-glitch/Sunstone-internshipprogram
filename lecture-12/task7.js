function deposite(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Money deposite");
            resolve(5000);
        },1000)
    });
}
function Withdraw(balance){
    return new Promise((resolve)=>{
        setTimeout(() => {
            balance-=1000;
            console.log("Withdraw money");
            resolve(balance);
        }, 1000);
    })
}
deposite()
.then(Withdraw)
.then((balance)=>{
    console.log("current balance =",balance);
});