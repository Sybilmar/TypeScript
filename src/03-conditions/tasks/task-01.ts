/**
 * SMK Telkom Malang is preparing the graduation list for Grade 12 students. A student is eligible to graduate only if all of the following requirements are satisfied:

 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * The administration received the following student information.
 * | Information  | Value      |
 * | ------------ | ---------- |
 * | Student Name | Alya Putri |
 * | Final Score  | 82         |
 * | Attendance   | 94         |
 * | Tuition Paid | Yes        |
 * 
 * Tasks:
 * 1. Declare all required variables.
 * 2. Implement the decision using an if statement.
 * 3. Display the appropriate message. if student meets all requirement, 
 * will be display "Congratulations! You are eligible to graduate.", 
 * otherwise display "You are not eligible to graduate."
 */

const studentName: string = "Alya Putri";
const finalScore: number = 82;
const attendance: number = 94;
const isTuitionPaid: boolean = true;
const MIN_SCORE: number = 75;
const MIN_ATTENDANCE: number = 75;
const isEligible: boolean =
  finalScore >= MIN_SCORE &&
  attendance >= MIN_ATTENDANCE &&
  isTuitionPaid;

const message: string = isEligible
  ? "Congratulations! You are eligible to graduate."
  : "You are not eligible to graduate.";

console.log(`Student: ${studentName}`);
console.log(message);
