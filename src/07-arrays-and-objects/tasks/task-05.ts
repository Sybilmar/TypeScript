/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

const studentScore = students.map((student) => {
    const score = student.answers.reduce((acc, answer, index) => {
        return answer === correctAnswers[index] ? acc + 20 : acc
    }, 0)

    return { ...student, score }
})

const passedStudents = studentScore.filter((student) => student.score > 70)

const topStudents = studentScore.reduce((highest, current) => {
    return current.score > highest.score ? current : highest
})