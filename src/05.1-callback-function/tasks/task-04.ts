/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */


function transformScore <T>(
    scoreList: number[],
    callback: (score: number) =>  T
): T[] {
    const results: T[] = [];
    for (const score of scoreList){
        results.push(callback(score));
    }
    return results
}
function checkPass(score: number): string {
    return score >= 70 ? "Passed" : "Failed";
}

function ConvertTograde(score: number): string {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    return "D"
}

function addBonusPoints(score: number): number{
    return score + 5;
}

function checkExcellence(score: number): string {
    return score > 90 ? "Excellent" : "Reguler"
}

const passStatus = transformScore(scores, checkPass);
const grades = transformScore(scores, ConvertTograde);
const bonusScores = transformScore(scores, addBonusPoints);
const performanceStatus = transformScore(scores, checkExcellence);

console.log("Original Scores  :", scores);
console.log("1. Pass Status   :", passStatus);
console.log("2. Letter Grades :", grades);
console.log("3. Bonus Scores  :", bonusScores);
console.log("4. Performance   :", performanceStatus);