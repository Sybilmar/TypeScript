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

// Type definitions
interface Project {
  name: string;
  score: number;
}

interface Employee {
  name: string;
  department: string;
  projects: Project[];
}

interface EmployeeAverage {
  name: string;
  averageScore: number;
}

const employeeAverages: EmployeeAverage[] = employees.map((employee) => {
  const totalScore = employee.projects.reduce((sum, project) => sum + project.score, 0);
  const averageScore = Number((totalScore / employee.projects.length).toFixed(2));
  
  return {
    name: employee.name,
    averageScore,
  };
});

const topPerformers = employeeAverages.filter(
  (employee) => employee.averageScore > 85
);

const employeesWithLowScores = employees.filter((employee) =>
  employee.projects.some((project) => project.score < 80)
);

console.log("Task 1 - Average Scores:", employeeAverages);
console.log("Task 2 - Average > 85:", topPerformers);
console.log("Task 3 - Has score < 80:", employeesWithLowScores.map(e => e.name));