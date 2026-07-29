/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */
const Foods: number = 18000*3;
const drink: number = 5000*2;
const discount: number = 10000;
const grandTotal: number = Foods+drink;
const finalPayment: number = grandTotal-10000;
console.log(`Foods Price: ${Foods}`);
console.log(`Drinks Price: Rp. ${drink}`);
console.log(`Total: ${grandTotal}`);
console.log(`Final Payment: Rp. ${finalPayment}`);
