/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */


interface Student {
  name: string;
  gpa: number;
  familyIncome: number;
  competitionCount: number;
  hasDisciplinaryRecord: string;
  documentsComplete: string;
}

const student: Student = {
  name: "Alya Putri",
  gpa: 3.89,
  familyIncome: 4200000,
  competitionCount: 4,
  hasDisciplinaryRecord: "No",
  documentsComplete: "Yes",
};

const TOTAL_BUDGET: number = 500000000;
const SCHOLARSHIP_AWARD: number = 12000000;


const isGpaValid: boolean = student.gpa >= 3.75;
const isIncomeValid: boolean = student.familyIncome < 5000000;
const isCompetitionValid: boolean = student.competitionCount >= 3;
const isCleanRecord: boolean = student.hasDisciplinaryRecord === "No";
const isDocsComplete: boolean = student.documentsComplete === "Yes";

const isEligible: boolean =
  isGpaValid &&
  isIncomeValid &&
  isCompetitionValid &&
  isCleanRecord &&
  isDocsComplete;

const scholarshipAmount: number = isEligible ? SCHOLARSHIP_AWARD : 0;


const remainingBudget: number = TOTAL_BUDGET - scholarshipAmount;


console.log(`Student Name       : ${student.name}`);
console.log(`Status             : ${isEligible ? "Accepted" : "Rejected"}`);
console.log(`Scholarship Amount : Rp ${scholarshipAmount.toLocaleString("id-ID")}`);
console.log(`Remaining Budget   : Rp ${remainingBudget.toLocaleString("id-ID")}`);