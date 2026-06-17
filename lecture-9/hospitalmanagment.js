let patients = [];
let doctors = [];
let totalBeds = 5;
let availableBeds = 5;

// ----- Doctor Functions -----
function addDoctor(id, name, specialist, timing) {
  doctors.push({ id, name, specialist, timing });
  console.log(`Dr. ${name} (${specialist}) added. Timing: ${timing}`);
}

function showDoctors() {
  console.log("\n--- Doctor List ---");
  doctors.forEach(d => {
    console.log(`${d.id}: Dr. ${d.name} - ${d.specialist} - Timing: ${d.timing}`);
  });
}

// ----- Patient Functions -----
function registerPatient(id, name, age, disease) {
  patients.push({ id, name, age, disease, admitted: false, doctor: null });
  console.log(`Patient ${name} registered with ID ${id}`);
}

function assignDoctor(patientId, doctorId) {
  let patient = patients.find(p => p.id === patientId);
  let doctor = doctors.find(d => d.id === doctorId);

  if (!patient || !doctor) {
    console.log("Patient or Doctor not found!");
    return;
  }

  patient.doctor = doctor.name;
  console.log(`Dr. ${doctor.name} assigned to ${patient.name}`);
}

function admitPatient(id) {
  let patient = patients.find(p => p.id === id);

  if (!patient) {
    console.log("Patient not found!");
    return;
  }
  if (availableBeds === 0) {
    console.log("No beds available!");
    return;
  }

  patient.admitted = true;
  availableBeds--;
  console.log(`${patient.name} admitted. Beds left: ${availableBeds}`);
}

function dischargePatient(id) {
  let patient = patients.find(p => p.id === id);

  if (!patient || !patient.admitted) {
    console.log("Patient not admitted!");
    return;
  }

  patient.admitted = false;
  availableBeds++;
  console.log(`${patient.name} discharged. Beds left: ${availableBeds}`);
}

function showPatients() {
  console.log("\n--- Patient List ---");
  patients.forEach(p => {
    console.log(`${p.id}: ${p.name}, Age ${p.age}, ${p.disease}, Doctor: ${p.doctor || "Not Assigned"} - ${p.admitted ? "Admitted" : "Not Admitted"}`);
  });
}

// ---- Example usage ----
addDoctor(1, "Anjali Verma", "Cardiologist", "9 AM - 1 PM");
addDoctor(2, "Rohit Mehra", "Neurologist", "2 PM - 6 PM");

registerPatient(101, "Suresh Kumar", 45, "Chest Pain");
registerPatient(102, "Priya Singh", 30, "Migraine");

assignDoctor(101, 1);
assignDoctor(102, 2);

admitPatient(101);

showDoctors();
showPatients();

dischargePatient(101);
showPatients();