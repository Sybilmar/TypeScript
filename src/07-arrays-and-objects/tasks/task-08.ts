/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
];

const getAverageScore = (projects: { score: number}[]): number => {
    const total = projects.reduce((sum,project) => sum + project.score, 0 )
    return total / projects.length
}
const employeeAverages = employees.map((emp) => ({
  name: emp.name,
  averageScore: getAverageScore(emp.projects),
}));

const topPerformers = employeeAverages.filter((emp) => emp.averageScore > 85);

const employeesWithLowScores = employees
  .filter((emp) => emp.projects.some((project) => project.score < 80))
  .map((emp) => emp.name);

console.log("Employee Averages:", employeeAverages);
console.log("Top Performers (> 85):", topPerformers);
console.log("Employees with a project score < 80:", employeesWithLowScores);

