function ATM(AMOUNT,BALANCE){
    return new Promise((resolve,rejecte)=>{
        if(AMOUNT<=BALANCE){
            resolve("withdrwal Successfuly");
        }
        else{
            rejecte("insufficent balance");
        }
    });
}
ATM(2000,5000)
.then(mss =>console.log(mss))
.catch(err => console.log(err));