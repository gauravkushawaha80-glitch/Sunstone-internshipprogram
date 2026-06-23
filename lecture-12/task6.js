function selection() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Movi selected");
             resolve();
        }, 1000);

       
    });
}
function seatbook() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("seat booked");
             resolve();
        }, 1000);

  

    });
}
function payment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("payment done");
             resolve();
        }, 1000);

     
    });
}
selection()
    .then(seatbook)
    .then(payment);