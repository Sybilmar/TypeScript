/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */
type Submission = {
    student: string
    submitted: boolean
    score: number
}
const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];
let countSubmittedStudent: number = 0
let countUnsubmittedStudent: number = 0
let countPassedStudent: number = 0
let countFailedStudent: number = 0
let totalScore: number = 0
let countOfStudent: number = submissions.length

let UnsubmittedNamed: string[] = []
let revisionName: string[] = []


for (let index = 0; index < countOfStudent; index++) {
    /**check if student has submitted**/
    if (submissions[index].submitted) {
        countSubmittedStudent++
    } else {
        countUnsubmittedStudent
        UnsubmittedNamed.push(
            submissions[index].student
        )
    }

    //**CHeck passing score */
    if (submissions[index].score >= 75) {
        countPassedStudent++
    } else {
        countFailedStudent++
        revisionName.push(
            submissions[index].student
        )
    }
    /**increment total score*/
    totalScore += submissions[index].score
}

/**displat report*/
console.log(`Submittes Student: ${countSubmittedStudent}`)
console.log(`Unsubmitted Student: ${countUnsubmittedStudent}`)
console.log(`Passed Student: ${countPassedStudent}`)
console.log(`Failed Student: ${countFailedStudent}`)
console.log(`Student Who not Submit assegment`)
console.log(UnsubmittedNamed)
console.log(`Student Who need revise assegment`)
console.log(revisionName)
console.log(`Average Student: ${totalScore}`)

