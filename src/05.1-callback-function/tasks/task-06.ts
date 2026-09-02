/**
 * A company has employee salary data below.
 * The HR department wants to process the same employee data using different rules.
 * For example:
 * - Calculate final salary.
 * - Determine bonus eligibility.
 * - Generate employee performance status.
 * 
 * Bonus rules:
 * - Performance ≥ 90 → 15% of salary and status is "Exceeds Expectations"
 * - Performance ≥ 80 → 10% of salary and status is "Meets Expectations"
 * - Performance ≥ 70 → 5% of salary and status is "Needs Improvement"
 * - Below 70 → no bonus and status is "Unsatisfactory"
 * 
 * TASK:
 * Create a reusable function that accepts:
 * - employee array
 * - callback function
 * 
 * The callback should determine what operation is performed on each employee.
 * Students should create at least three callbacks below.
 * The processing function should not contain the HR business rules.
 */
type Employee = {
    name: string;
    salary: number;
    performance: number;
};

type PERFORMANCE_STATUS = "Exceeds Expectations" | "Meets Expectations" | "Needs Improvement" | "Unsatisfactory";
type EMPLOYEE_BONUS = Employee & { bonus: number; finalSalary: number };
type EMPLOYEE_PERFORMANCE = Employee & { status: PERFORMANCE_STATUS };
type EMPLOYEE_SUMMARY = { name: string; netPay: number; status: PERFORMANCE_STATUS };

const employees: Employee[] = [
    { name: "Alya", salary: 5000000, performance: 92 },
    { name: "Budi", salary: 6500000, performance: 78 },
    { name: "Citra", salary: 7200000, performance: 88 },
    { name: "Dimas", salary: 4500000, performance: 95 },
    { name: "Eka", salary: 8000000, performance: 69 }
];

// Helper function to calculate bonus amount based on performance rules
function calculateBonusAmount(salary: number, performance: number): number {
    if (performance >= 90) return salary * 0.15;
    if (performance >= 80) return salary * 0.10;
    if (performance >= 70) return salary * 0.05;
    return 0;
}

// 1. Callback to calculate bonus and final salary
function calculateFinalSalary(selectedEmployee: Employee): EMPLOYEE_BONUS {
    const bonus = calculateBonusAmount(selectedEmployee.salary, selectedEmployee.performance);
    return {
        ...selectedEmployee,
        bonus,
        finalSalary: selectedEmployee.salary + bonus
    };
}

// 2. Callback to determine performance status
function getPerformanceStatus(selectedEmployee: Employee): EMPLOYEE_PERFORMANCE {
    let status: PERFORMANCE_STATUS;

    if (selectedEmployee.performance >= 90) {
        status = "Exceeds Expectations";
    } else if (selectedEmployee.performance >= 80) {
        status = "Meets Expectations";
    } else if (selectedEmployee.performance >= 70) {
        status = "Needs Improvement";
    } else {
        status = "Unsatisfactory";
    }

    return {
        ...selectedEmployee,
        status
    };
}

// 3. Callback to generate a lightweight summary (3rd callback)
function generateEmployeeSummary(selectedEmployee: Employee): EMPLOYEE_SUMMARY {
    const bonus = calculateBonusAmount(selectedEmployee.salary, selectedEmployee.performance);
    const statusData = getPerformanceStatus(selectedEmployee);

    return {
        name: selectedEmployee.name,
        netPay: selectedEmployee.salary + bonus,
        status: statusData.status
    };
}

// Reusable processing function
function employeeProcess<T>(
    arr: Employee[],
    callback: (employee: Employee) => T
): T[] {
    const results: T[] = [];
    for (const employee of arr) {
        results.push(callback(employee));
    }
    return results;
}

// Execution
const employeeWithFinalSalary = employeeProcess(employees, calculateFinalSalary);
const employeeWithPerformanceStatus = employeeProcess(employees, getPerformanceStatus);
const employeeSummaries = employeeProcess(employees, generateEmployeeSummary);

console.log(`====== EMPLOYEES WITH FINAL SALARY + BONUS ======`);
console.log(employeeWithFinalSalary);

console.log(`\n====== EMPLOYEES WITH PERFORMANCE STATUS ======`);
console.log(employeeWithPerformanceStatus);

console.log(`\n====== EMPLOYEES SUMMARY REPORT ======`);
console.log(employeeSummaries);
