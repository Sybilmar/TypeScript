/**
 * SMK Telkom Malang calculates each student's final score using several assessment components. 
 * Before calculating the final grade, the system stores every assessment score as a separate variable. 
 * The homeroom teacher entered the following information for one student. 
 * The student named Nadia Putri has a student ID of ST2026045. She earned 88.5 on assignments, 
 * 84 on the midterm exam, and 91.5 on the final exam. Because she submitted every assignment before the deadline, 
 * she received an attendance score of 100. The school also records that Nadia participates in extracurricular activities, 
 * so this information should also be stored.
 * 
 * Task:
 * 
 * 1. dentify all values that should be stored as variables.
 * 2. Determine the most appropriate data type for each variable.
 * 3. Create the variable declarations using TypeScript.
 * 4. Display the student data using console.log.
 */

const name: string ="Nadia Putri";
const useId: string ="ST2026045";
const nilaiMidExam: number = 84;
const nilaiFinalExam: number = 91.5;
const attendance: number = 100;
const extracurricular: boolean = true;

console.log(`nama: ${name}`);
console.log(`useId: ${useId}`);
console.log(`nilai sentara Exam ${nilaiMidExam}`);
console.log(`nilai Fix Exam: ${nilaiFinalExam}`);
console.log(`kehadiran: ${attendance}`);
console.log(`ekstrakurikuler: ${extracurricular}`);