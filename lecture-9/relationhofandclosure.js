function multipler(factor){
    return function(number){
        return factor*number;
    }
    const t=multipler(3);
    console.log(t(10));
}