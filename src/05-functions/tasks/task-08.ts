/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
type Submissions = {
    student: string
    submitted: boolean
    score: number
}
const submissions: Submissions[] = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function countSubmitted(list: Submissions[]): number {
    let count = 0;
    for (const item of list) {
        if (item.submitted) {
            count++
        }
    }
    return count
}

function countUnsubmitted(list: Submissions[]): number {
    let count = 0;
    for (const item of list) {
        if (!item.submitted) {
            count++;
        }
    }
    return count;
}
function calculateAverageScore(list: Submissions[]): number {
    let totalScore = 0;
    let submittedCount = 0;

    for (const item of list) {
        if (item.submitted) {
            totalScore += item.score;
            submittedCount++;
        }
    }

    return submittedCount === 0 ? 0 : totalScore / submittedCount;
}

function findHighestScorer(list: Submissions[]): Submission | null {
    let highest: Submissions | null = null;

    for (const item of list) {
        if (item.submitted) {
            if (!highest || item.score > highest.score) {
                highest = item;
            }
        }
    }

    return highest;
}

function printSubmissionReport(list: Submissions[]): void {
    const submittedTotal = countSubmitted(list);
    const unsubmittedTotal = (list);
    const avgScore = calculateAverageScore(list);
    const topStudent = findHighestScorer(list);

    console.log("=== SUBMISSION REPORT ===");
    console.log(`Total Submitted  : ${submittedTotal}`);
    console.log(`Total Missing    : ${unsubmittedTotal}`);
    console.log(`Average Score    : ${avgScore.toFixed(2)}`);

    if (topStudent) {
        console.log(`Highest Scorer   : ${topStudent.student} (${topStudent.score})`);
    }
}
printSubmissionReport(submissions)