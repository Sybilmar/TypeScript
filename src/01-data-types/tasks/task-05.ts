/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type software = {
    ID : number;
    employeeName : string;
    CheckIn : string;
    CheckOut : String;
    workingHours : number;
    Attedance : boolean;
};

const Person1 : software = {
    ID : 78924,
    employeeName : "Liviana",
    CheckIn : "07:00",
    CheckOut : "07:01",
    workingHours : 24,
    Attedance : false,
}
const specificDate1: Date = new Date("2026-07-27");

const Person2 : software = {
    ID : 78956,
    employeeName : "Pia",
    CheckIn : "09:00",
    CheckOut : "10:01",
    workingHours : 19,
    Attedance : true,
}
const specificDate2: Date = new Date("2026-07-67");

const Person3 : software = {
    ID : 789767,
    employeeName : "Vin",
    CheckIn : "07:78",
    CheckOut : "07:56",
    workingHours : 9,
    Attedance : false,
}
const specificDate3: Date = new Date("2879-07-27");

console.log(`===Person1===`)
console.log(`ID: ${Person1. ID}`);
console.log(`employee Name: ${Person1. employeeName}`);
console.log(`Date: ${specificDate1}`);
console.log(`Check In: ${Person1. CheckIn }`);
console.log(`Check Out : ${Person1. CheckOut}`);
console.log(`Working Hours: ${Person1. workingHours} Hours`);
console.log(`Attendance: ${Person1. Attedance}`);

console.log(`===Person2===`)  
console.log(`ID: ${Person2. ID}`);
console.log(`employee Name: ${Person2. employeeName}`);
console.log(`Date: ${specificDate2}`);
console.log(`Check In: ${Person2. CheckIn }`);
console.log(`Check Out : ${Person2. CheckOut}`);
console.log(`Working Hours: ${Person2. workingHours} Hours`);
console.log(`Attendance: ${Person2. Attedance}`);

console.log(`===Person3===`)
console.log(`ID: ${Person3. ID}`);
console.log(`employee Name: ${Person3. employeeName}`);
console.log(`Date: ${specificDate3}`);
console.log(`Check In: ${Person3. CheckIn }`);
console.log(`Check Out : ${Person3. CheckOut}`);
console.log(`Working Hours: ${Person3. workingHours} Hours`);
console.log(`Attendance: ${Person3. Attedance}`);