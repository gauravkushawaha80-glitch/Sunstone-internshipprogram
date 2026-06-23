function light(color,time){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(color);
            resolve();
        }, time);
    });
}
light("red",1000)
.then(()=>light("yellow",1000))
.then(()=> light("green",1000));