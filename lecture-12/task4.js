  function addcard(){
    return new Promise((item)=>{
        console.log("ITEM ADDED TO CARD");
        item();
    });
  }
  function payment(){
    return new Promise((item)=>{
        console.log("payment successful");
        item ();
    });

  }
  function placed(){
    return new Promise((item)=>{
        console.log("order placed");
        item();
    });
  }
  addcard()
  .then(payment)
  .then(placed)