/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */
type Student = {
    name: String;
    score: number;
    attendance: number
}

type passStatus = "PASS" | "FAIL";
type AttendanceStatus = "SATISFACTORY" | "LOW ATTENDANCE";
type Recommendation = "Excellent" | "Good" | "Improve Attendance" | "Improve Academic Performance";

type StudentPassreport = Student & {status: passStatus};
type StudentAttendanceReport = Student & {attendanceStatus: AttendanceStatus};
type StudentsRecomendationreport = Student & {recomendation: Recommendation} 

const students: Student[] = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];
// 1. Callback to determine Pass/Fail status
function getPassStatus(student: Student): StudentPassReport {
    const isPassed = student.score >= 75 && student.attendance >= 90;
    return {
        ...student,
        status: isPassed ? "PASS" : "FAIL"
    };
}

// 2. Callback to determine Attendance status
function getAttendanceStatus(student: Student): StudentAttendanceReport {
    return {
        ...student,
        attendanceStatus: student.attendance >= 90 ? "SATISFACTORY" : "LOW ATTENDANCE"
    };
}

// 3. Callback to determine Final Recommendation
function getRecommendation(student: Student): StudentRecommendationReport {
    let recommendation: Recommendation;

    if (student.score >= 90 && student.attendance >= 90) {
        recommendation = "Excellent";
    } else if (student.score >= 75 && student.attendance >= 90) {
        recommendation = "Good";
    } else if (student.score >= 75 && student.attendance < 90) {
        recommendation = "Improve Attendance";
    } else {
        recommendation = "Improve Academic Performance";
    }

    return {
        ...student,
        recommendation
    };
}

// Generic reusable processor function
function processStudents<T>(
    studentList: Student[],
    callback: (student: Student) => T
): T[] {
    const results: T[] = [];
    for (const student of studentList) {
        results.push(callback(student));
    }
    return results;
}

// Execution
const passFailReport = processStudents(students, getPassStatus);
const attendanceReport = processStudents(students, getAttendanceStatus);
const recommendationReport = processStudents(students, getRecommendation);

console.log(`====== PASS/FAIL REPORT ======`);
console.log(passFailReport);

console.log(`\n====== ATTENDANCE REPORT ======`);
console.log(attendanceReport);

console.log(`\n====== RECOMMENDATION REPORT ======`);
console.log(recommendationReport);