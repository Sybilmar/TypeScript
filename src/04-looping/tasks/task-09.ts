/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

interface Student {
    name: string;
    score: number;
}

const students: Student[] = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let gradeACount: number = 0;
let gradeBCount: number = 0;
let gradeCCount: number = 0;
let gradeDCount: number = 0;

let highestScore: number = students[0].score;
let lowestScore: number = students[0].score;
let totalScore: number = 0;

for (const student of students) {
    const score = student.score;
    totalScore += score;

    if (score >= 90) {
        gradeACount++;
    } else if (score >= 80) {
        gradeBCount++;
    } else if (score >= 70) {
        gradeCCount++;
    } else {
        gradeDCount++;
    }

    if (score > highestScore) {
        highestScore = score;
    }
    if (score < lowestScore) {
        lowestScore = score;
    }
}

const averageScore: number = totalScore / students.length;

console.log(`Grade A count: ${gradeACount}`);
console.log(`Grade B count: ${gradeBCount}`);
console.log(`Grade C count: ${gradeCCount}`);
console.log(`Grade D count: ${gradeDCount}`);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);