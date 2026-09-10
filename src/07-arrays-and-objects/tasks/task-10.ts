import { addUncaughtExceptionCaptureCallback } from "node:process";

/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

interface Question {
    id: number;
    question: string;
    correctAnswer: string;
    category: string;
}

interface Answer {
    questionId: number;
    answer: string;
}

interface Submission {
    student: string;
    answers: Answer[];
}

interface StudentResult {
    student: string;
    score: number;
    correct: number;
    wrong: number;
}

interface Analytics {
    totalStudents: number;
    averageScore: number;
    highestScore: number;
    lowestScore: number;
    passedStudents: number;
    failedStudents: number;
    passRate: number;
}

const questionMap = new Map<number, Question>(
    questions.map((q) => [q.id, q])
);

const studentResults: StudentResult[] = submissions.map((sub) => {
    let correct = 0;
    let wrong = 0;

    sub.answers.forEach((ans) => {
        const q = questionMap.get(ans.questionId);
        if (q && q.correctAnswer === ans.answer) {
            correct++;
        } else {
            wrong++;
        }
    });

    return {
        student: sub.student,
        score: correct * 25,
        correct,
        wrong,
    };
});

const categoryStats: Record<string, { totalScore: number; count: number }> = {};

submissions.forEach((sub) => {
    sub.answers.forEach((ans) => {
        const q = questionMap.get(ans.questionId);
        if (q) {
            if (!categoryStats[q.category]) {
                categoryStats[q.category] = { totalScore: 0, count: 0 };
            }
            categoryStats[q.category].count++;
            if (q.correctAnswer === ans.answer) {
                categoryStats[q.category].totalScore += 25;
            }
        }
    });
});

const categoryAverage: Record<string, number> = {};
for (const category in categoryStats) {
    const stat = categoryStats[category]
    categoryAverage[category] = Number((stat.totalScore / (stat.count / 4)).toFixed(2))
}

const scored = studentResults.map((r) => r.score)
const totalStudents = studentResults.length
const ScoreSum = scored.reduce((sum, score) => sum+score, 0);
const passedStudents = studentResults.filter((r) => r.score >= 75).length
const failedStudents = totalStudents - passedStudents;

const analytics: Analytics = {
    totalStudents,
    averageScore: Number((ScoreSum/ totalStudents).toFixed(2)),
    highestScore: Math.max(...scored),
    lowestScore: Math.min(...scored),
    passedStudents,
    failedStudents,
    passRate: Number(((passedStudents / totalStudents) * 100).toFixed(2)),
};
console.log("student Results:", studentResults)
console.log("Category Average:", categoryAverage)
console.log("Final Analytics:", analytics)




