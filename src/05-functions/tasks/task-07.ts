/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */
type Student = {
  name: string;
  major: string;
  active: boolean;
}

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(list: Student[]): number{
  let count = 0;
  for (const student of list) {
    if(student.active){
      count++
    }
  }
  return count
}

function countInactiveStudents(list: Student[]): number{
  let count = 0;
  for (const student of list){
    if (!student.active){
      count++
    }
  }
  return count

}

function countStudentsByMajor(list: Student[], targetMajor: string): number{
  let count = 0
  for (const student of list){
    if (student.major === targetMajor){
      count++
    }
  }
  return count
}

function printEnrollmentReport(list: Student[]): void{
  const activeCount = countActiveStudents(list)
  const InactiveCount = countInactiveStudents(list);

  console.log("=== ENROLLMENT REPORT ===");
  console.log(`Total Active Students: ${activeCount}`);
  console.log(`Total Inactive Students: ${InactiveCount}`);
  console.log("-------------------------");
  console.log("Students by Major:");

  const majors: string[] = [];
    for (const student of list) {
      if (!majors.includes(student.major)){
        majors.push(student.major)
      }
    }
    for (const major of majors){
      const totalInMajor = countStudentsByMajor(list, major)
      console.log(`- ${major}: ${totalInMajor} `)
    }
}
printEnrollmentReport(students)