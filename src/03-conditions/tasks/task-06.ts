/**
 * A hospital emergency department must determine the priority level of every arriving patient.
 * The hospital follows these rules:
 * 1. If the patient's condition is critical, they are immediately assigned to the Emergency Room.
 * 2. Otherwise, if the patient has an appointment:
 *  - Elderly patients (age ≥ 60) receive Priority Queue.
 *  - Other patients receive Regular Queue.
 * 3. Otherwise:
 *  - Patients with health insurance are assigned to the Insurance Registration Counter.
 *  - Patients without insurance are assigned to the General Registration Counter.
 * 
 * Today's patient information:
 * | Information        | Value      |
 * | ------------------ | ---------- |
 * | Patient Name       | Siti Rahma |
 * | Critical Condition | No         |
 * | Has Appointment    | Yes        |
 * | Age                | 67         |
 * | Has Insurance      | Yes        |
 * 
 * Tasks: 
 * 1. Declare all required variables.
 * 2. Implement the hospital workflow using conditional statements.
 * 3. Display the patient's destination.
 */
const patientName: string = "Siti Rahma";
const criticalCondition: boolean = false;
const appointment: boolean = true;
const age: number = 67;
const hasIncurance: boolean = true;

const IsEldery: boolean = age >= 60;
const destinationMatrix: Record<string, string> = {
  "true_true_true"   :   `Pasien ${patientName}: Emergency Room`,
  "true_true_false"  :   `Pasien ${patientName}: Emergency Room`,
  "true_false_true"  :   `Pasien ${patientName}: Emergency Room`,
  "true_false_false" :   `Pasien ${patientName}: Emergency Room`,
  "false_true_true"  :   `Pasien ${patientName}: Priority Queue`,
  "false_true_false" :   `Pasien ${patientName}: Regular Queue`,
  "false_false_true" :   `Pasien ${patientName}: Insurance Registration Counter`,
  "false_false_false":   `Pasien ${patientName}: General Registration Counter`
};
const subCondition: boolean = appointment ? IsEldery : hasIncurance;
const key: string = `${criticalCondition}_${appointment}_${subCondition}`;

console.log(destinationMatrix[key]); 


