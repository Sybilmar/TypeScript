/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Employee will get additional bonus 30.000 for each 5 hours of overtime
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

const employeeName: string = "Dimas";
const basicSalary: number = 5000000;
const overtimeHours: number = 12;
const overtimeRate: number = 50000;

const overtimePay: number = overtimeHours * overtimeRate; 
const performanceBonus: number = overtimeHours > 10 ? 300000 : 0;
const AdditionBonus: number = Math.floor(overtimeHours / 5); 
const intervalBonus: number = AdditionBonus * 30000; 
const totalBonus: number = performanceBonus + intervalBonus; 
const finalSalary: number = basicSalary + overtimePay + totalBonus;

console.log(`-----------------------------------`);
console.log(`Employee Name : ${employeeName}`);
console.log(`Basic Salary  : Rp ${basicSalary.toLocaleString('id-ID')}`);
console.log(`Overtime Pay  : Rp ${overtimePay.toLocaleString('id-ID')}`);
console.log(`Total Bonus   : Rp ${totalBonus.toLocaleString('id-ID')}`);
console.log(`-----------------------------------`);
console.log(`Final Salary  : Rp ${finalSalary.toLocaleString('id-ID')}`);