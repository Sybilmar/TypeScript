/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

interface Attendance {
  name: string;
  present: boolean;
}

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentCount: number = 0;
let absentCount: number = 0;
const absentStudents: string[] = [];


for (const record of attendances) {
  if (record.present) {
    presentCount++;
  } else {
    absentCount++;
    absentStudents.push(record.name);
  }
}

const totalStudents: number = attendances.length;
const attendancePercentage: number = (presentCount / totalStudents) * 100;

console.log(`Present Students: ${presentCount}`);
console.log(`Absent Students: ${absentCount}`);
console.log(`Absent Student Names: ${absentStudents.join(", ")}`);
console.log(`Attendance Percentage: ${attendancePercentage.toFixed(2)}%`);
