/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */
type student = {
    fullname: string;
    studentid: number;
    studentage: number;
    status: boolean;
};


const studentone: student = {
    fullname: "SGT. john mactavish",
    studentid: 11901,
    studentage: 27,
    status: false
};

const bravosix: student = {
    fullname: "CPT. john price",
    studentid: 14224,
    studentage: 41,
    status: true
};

const bravoseven: student = {
    fullname: "LT. Simon Riley",
    studentid: 20424,
    studentage: 32,
    status: true
};
console.log(`===bravo 0-9==`);
console.log(`nama: ${studentone. fullname}`);
console.log(`Id: ${studentone. studentid}`);
console.log(`Age: ${studentone. studentage}`);
console.log(`status: ${studentone. status}`);

console.log(`===bravo 6==`);
console.log(`nama: ${bravosix. fullname}`);
console.log(`Id: ${bravosix. studentid}`);
console.log(`Age: ${bravosix. studentage}`);
console.log(`status: ${bravosix. status}`);

console.log(`===bravo 0-7==`);
console.log(`nama: ${bravoseven. fullname}`);
console.log(`Id: ${bravoseven. studentid}`);
console.log(`Age: ${bravoseven. studentage}`);
console.log(`status: ${bravoseven. status}`);



