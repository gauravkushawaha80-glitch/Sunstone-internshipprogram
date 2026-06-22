function fooddilevary(s1,delivary){
    console.log("Order placed")
    setTimeout(() => {
        console.log("Food parepared");
        delivary();

    },1000);
 }
 fooddilevary("delivary",()=>{
   setTimeout(()=>{
     console.log("FOOD delivered");
   },1000);
 });