function getmarks(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(95);
        }, 1000);
    })
}
getmarks()
.then((marks)=>{
  console.log("marks=",marks);
  if(marks>=90){
    return "A";
  }
  else if(marks>=75){
    return "B";
  }
  else{
    return "C";
  }
})
.then((grade)=>{
    console.log("grade=",grade);
});