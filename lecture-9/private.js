function createbankaccount(ib) {
    let b = ib;
    return {
        deposit(a) {

            b += a;
            console.log(b);
        },
  
        withdraw(a) {
            b -= a;
            console.log(b);
        },
        checkbalance(){
            console.log(b);
        }
    };
}
const acc=createbankaccount(2000);
acc.deposit(500);
acc.withdraw(300);
acc.checkbalance();