async function greet(){
    return("hello")
    
};
console.log(greet());
//
function fetchdata(){
    setTimeout(()=>{
        console.log("DATA IS FETCHED");
    },3000);
}
async function getdata() {
    const data =fetchdata();
    console.log(data);
    
}
getdata();