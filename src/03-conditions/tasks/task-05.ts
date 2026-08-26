/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */

const StudentName: string = "Fajar Hidayat";
const GPA: number = 3.86;
const FamilyIncome: number = 4200000;
const CompetitionCount: number = 4;
const DiscRecord: boolean = false;
const DocsComplete: boolean = true;
const passesFirstScreening: boolean = GPA >= 3.75 && FamilyIncome < 5000000;
const passesSecondScreening: boolean = 
  CompetitionCount >= 3 && 
  DiscRecord && 
  DocsComplete;
const statusMatrix: Record<string, string> = {
  "true_true":   `Selamat ${StudentName}, kamu dinyatakan: Scholarship Approved!`,
  "true_false":  `Halo ${StudentName}, kamu: Passed First Screening, but Failed Second Screening.`,
  "false_true":  `Mohon maaf ${StudentName}, kamu: Failed First Screening.`,
  "false_false": `Mohon maaf ${StudentName}, kamu: Failed First Screening.`
};
console.log(statusMatrix[`${passesFirstScreening}_${passesSecondScreening}`]);