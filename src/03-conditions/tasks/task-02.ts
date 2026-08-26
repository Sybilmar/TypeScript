/**
 * A company evaluates employees every month.
 * If an employee's performance score is 80 or above, they receive a performance bonus.
 * Otherwise, they do not receive a bonus.
 * Employee information:
 * | Information       | Value         |
 * | ----------------- | ------------- |
 * | Employee Name     | Dimas Pratama |
 * | Performance Score | 78            |
 * 
 * Tasks:
 * 1. Declare the variables.
 * 2. Use an if...else statement.
 * 3. Display the evaluation result. If eligible will display "Bonus Approved", 
 * otherwise display "Bonus not approved"
 */

const employeeName: string = "Dimas Pratama";
const performanceScore: number = 78;
const MINIMUM_SCORE_FOR_BONUS: number = 80;
let evaluationResult: string;

if (performanceScore >= MINIMUM_SCORE_FOR_BONUS) {
  evaluationResult = "Bonus Approved";
} else {
  evaluationResult = "Bonus not approved";
}
console.log(`Employee Name: ${employeeName}`);
console.log(`Performance Score: ${performanceScore}`);
console.log(`Status: ${evaluationResult}`);
