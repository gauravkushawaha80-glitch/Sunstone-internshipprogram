let patients =[];
let doctors =[];

function addpatient(id,name,age,disease){
    const patient ={
        id : id,
        name : name,
        age :age,
        disease:disease
    };
    patients.push(patient);
}

function adddoctor(doctor_id , name, specialist,timeing){
   const doctor ={doctor_id:doctor_id,
    name:name,
    specialist:specialist,
    Timeing:timeing
    
   };
   doctors.push(doctor);
};
function search(id){
    const patient = patients.find(x => x.id == id);

    if(patient){
        console.log("find");
    }else{
        console.log("not find");
    }
}

addpatient(1 , "aham" , 18 , "Typhoid");
adddoctor(1,"dinesh","TB","10:00 to 9:00");
addpatient(2 , "Sheetal" , 18 , "TB",);
adddoctor(1,"rajesh","TB","9:00 to 7:00")
search(1);
search(2);

console.log(patients);
console.log(doctors);