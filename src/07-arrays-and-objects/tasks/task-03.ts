/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];

const attendanceMap = new Map (
    attendance.map((record) => [record.studentId, record. status])
)

const presentStudents = students
.filter((students) => attendanceMap.get(students.id) === "present")
.map((student) => student.name)

const absentStudents = students
.filter((student) => attendanceMap.get(student.id) === "absent")
.map((student) => student.name)

const lateStudents = students
.filter((student) => attendanceMap.get(student.id) === "late")
.map ((student) => student.name)

const studentStatues = students.map((student) => ({
    name: student.name,
    status: attendanceMap.get(student.id) ?? "unknown",
}))

console.log("1. Present:", presentStudents);
console.log("2. Absent:", absentStudents);
console.log("3. Late:", lateStudents);
console.log("4. Combined Statuses:", studentStatues);