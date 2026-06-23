   function evenodd(num){
    return new Promise((resolve,rejected)=>{
        if(num%2==0){
            resolve("Ever Number");
        }
        else{
            rejected("odd Number");
        }
    })
   }
   evenodd(11)
   .then(result=>console.log(result))
    .catch(err=>console.log(err));
 
   