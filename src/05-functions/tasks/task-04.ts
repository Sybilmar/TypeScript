/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
type student = {
    name: string;
    present: boolean;
};
const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

function printAttendanceReport(list: student[]): void {
    let totalPresent = 0;
    let totalAbsent = 0;
    const absenNames: string[] = [];

    for (const student of list) {
        if (student.present) {
            totalPresent++;
        }else{
            totalAbsent++;
            absenNames.push(student.name)
        }
    }

    console.log(`Total Present: ${totalPresent}`)
    console.log(`Total Absent: ${totalAbsent}`)
    console.log(`Names of absent students: ${absenNames.join(", ")}`)
}

printAttendanceReport(attendances)