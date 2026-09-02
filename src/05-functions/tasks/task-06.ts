/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]): number {
  let total = 0;
  for (const sale of sales){
    total += sale;
  }
  return total

}

function findHighestTransaction(sales: number[]): number {
  let Highest = sales[0]
  for (const sale of sales){
    if (sale > Highest) {
      Highest = sale
    }
  }
  return Highest
}

function findLowestTransaction(sales: number[]): number {
  let lowest = sales[0]
  for (const sale of sales){
    if (sale < lowest) {
      lowest = sale
    }
  }
  return lowest

}

function calculateAverageSale(sales: number[]): number {
  if (sales.length === 0) return 0
  return calculateAverageSale(sales) / sales.length

}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
  let count = 0
  for (const sale of sales) {
    if (sale >= minimumAmount){
      count++
    }
  }
  return count
}
console.log("Total Sales:", calculateTotalSales(sales));
console.log("Highest Transaction:", findHighestTransaction(sales));
console.log("Lowest Transaction:", findLowestTransaction(sales));
console.log("Average Sale:", calculateAverageSale(sales));
console.log("Large Transactions (>= 500k):", countLargeTransactions(sales, 500000));

