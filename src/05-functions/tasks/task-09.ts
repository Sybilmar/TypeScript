/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
type Patient = {
    id: string;
    name: string;
    age: number;
    department: string
    admitted: boolean
    bill: number
}
const patients: Patient[] = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function countAdmittedPatients(list: Patient[]): number {
    let count = 0;
    for (const patient of list) {
        if (patient.admitted) {
            count++;
        }
    }
    return count
}
function calculateTotalRevenue(list: Patient[]): number {
    let total = 0;
    for (const patient of list) {
        total += patient.bill;
    }
    return total;
}

function getPatientsByDepartment(list: Patient[], dept: string): Patient[] {
    const result: Patient[] = [];
    for (const patient of list) {
        if (patient.department === dept) {
            result.push(patient);
        }
    }
    return result;
}

function printHospitalReport(list: Patient[]): void {
    const admittedCount = countAdmittedPatients(list);
    const totalBill = calculateTotalRevenue(list);

    console.log("=== HOSPITAL PATIENT REPORT ===");
    console.log(`Total Patients: ${list.length}`);
    console.log(`Admitted Patients: ${admittedCount}`);
    console.log(`Outpatients: ${list.length - admittedCount}`);
    console.log(`Total Billing Revenue: Rp ${totalBill.toLocaleString()}`);
    console.log("-------------------------------");
}

// Example execution
printHospitalReport(patients);
