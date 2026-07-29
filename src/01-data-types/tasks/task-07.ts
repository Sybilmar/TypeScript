/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type learning ={
    studentID: number,
    fullName: string,
    gradeLevel: number,
    courseID:number,
    courseTitle: string,
    instructor: string,
};

const register1: learning ={
    studentID: 636457,
    fullName: "Api ahay",
    gradeLevel: 23,
    courseID:371683,
    courseTitle: "aFront Endoh",
    instructor: "Liviana",
};

const register2: learning ={
    studentID: 48719847,
    fullName: "liviana",
    gradeLevel: 2,
    courseID: 817361763,
    courseTitle: "beken",
    instructor: "sule", };

    const register3: learning ={
    studentID: 38179381,
    fullName: "kutakuti",
    gradeLevel: 89,
    courseID:3748174,
    courseTitle: "astagfirullah",
    instructor: "Liviana", };

    console.log(`===Register1===`)
console.log(`ID: ${register1. studentID}`);
console.log(`Full Name: ${register1. fullName}`);
console.log(`Grade: ${register1. gradeLevel}`);
console.log(`course ID: ${register1. courseID}`);
console.log(`course Title: ${register1. courseTitle}`);
console.log(`instructor: ${register1. instructor}`);

   console.log(`===Register2===`)
console.log(`ID: ${register2. studentID}`);
console.log(`Full Name: ${register2. fullName}`);
console.log(`Grade: ${register2. gradeLevel}`);
console.log(`course ID: ${register2. courseID}`);
console.log(`course Title: ${register2. courseTitle}`);
console.log(`instructor: ${register2. instructor}`);

   console.log(`===Register3===`)
console.log(`ID: ${register3. studentID}`);
console.log(`Full Name: ${register3. fullName}`);
console.log(`Grade: ${register3. gradeLevel}`);
console.log(`course ID: ${register3. courseID}`);
console.log(`course Title: ${register3. courseTitle}`);
console.log(`instructor: ${register3. instructor}`);


