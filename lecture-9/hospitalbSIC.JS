let patients[];
let doctors[];
function registration(id,name,age,contact_number,discharge_date){
    patients.push({id,name,age,contact_number,discharge_date});

}
function doctors(doctor_name,contact_number){
    doctors.push({
        doctor_name,contact_number
    });
}