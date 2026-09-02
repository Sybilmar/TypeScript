/**
 * Teacher has list of student score:
 */
const scores = [85, 72, 91, 64, 88];

/**
 * The teacher wants to process the scores in different ways.
 * One report should simply display each score:
 * 
 * Score: 85
 * Score: 72
 * Score: 91
 * ...
 * 
 * Second report should determine whether each student passed.
 * Third report should determine grade of score with rules below.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |

 * Instead of creating different looping functions, create one reusable 
 * function that receives the processing logic as a callback.
 */

const Score: number[] = [85, 72, 91, 64, 88];

function processScores(
    scores: number[],
    callback: (score: number) => void
): void {
    for (const score of scores) {
        callback(score);
    }
}

function printScore(score: number): void {
    console.log(`Score: ${score}`);
}

function checkPass(score: number): void {
    const status = score >= 70 ? "PASSED" : "FAILED";
    console.log(`Score ${score}: ${status}`);
}

function showGrade(score: number): void {
    let grade: string;

    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else {
        grade = "D";
    }

    console.log(`Score ${score}: Grade ${grade}`);
}

// 1. First Report: Simply display each score
console.log("=== REPORT 1: SCORES ===");
processScores(scores, printScore);

// 2. Second Report: Determine whether each student passed (Passing grade: >= 70)
console.log("\n=== REPORT 2: PASS/FAIL ===");
processScores(scores, checkPass);

// 3. Third Report: Determine letter grade
console.log("\n=== REPORT 3: GRADES ===");
processScores(scores, showGrade);
// implementation of callback function
processScores(scores, printScore)
processScores(scores, showGrade)