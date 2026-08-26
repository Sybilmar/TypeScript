/**
 * A lecturer wants to summarize examination results for 20 students.
 * The examination scores are stored in the following array:
 * ---------------------------------------
 * const scores = [
 * 82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 84, 92, 58, 79, 86, 71, 90, 67, 83, 76
 * ]
 * ---------------------------------------
 * 
 * Business Rules
 * - Passing score is 75.
 * - Count how many students passed.
 * - Count how many students failed.
 * - Calculate the total score.
 * - Calculate the average score.
 * 
 * Tasks: 
 * 1. Iterate through every score using a loop.
 * 2. Use conditional statements to determine pass/fail.
 * 3. Calculate:
 * - Total score
 * - Average score
 * - Number of passing students
 * - Number of failing students
 */

const scores : number[] = [
    82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 84, 92, 58, 79, 86, 71, 90, 67, 83, 76
]

const passingScore: number = 75

let passedCount: number = 0
let failedCount: number = 0
let finalScore: number = 0

for (const score of scores ) {
   finalScore += score;

   if(score >= passingScore) {
    passedCount++;
   }else{
    failedCount++;
   }
}
const averageScore: number = finalScore/scores.length

console.log(`Total Score: ${finalScore}`)
console.log(`Average Score: ${averageScore}`)
console.log(`Passed Students: ${passedCount}`)
console.log(`Failed Students: ${failedCount}`)
