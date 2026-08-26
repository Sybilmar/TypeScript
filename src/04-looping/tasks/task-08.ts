/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
interface Order {
  id: string;
  paid: boolean;
  stockAvailable: boolean;
}

const orders: Order[] = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

let readyToShipCount: number = 0;
let unpaidCount: number = 0;
let waitingForStockCount: number = 0;
const readyToShipIds: string[] = [];

for (const order of orders) {
  if (!order.paid) {
    unpaidCount++;
  }
  if (!order.stockAvailable) {
    waitingForStockCount++;
  }
  if (order.paid && order.stockAvailable) {
    readyToShipCount++;
    readyToShipIds.push(order.id);
  }
}
console.log(`Ready to ship count: ${readyToShipCount}`);
console.log(`Unpaid count: ${unpaidCount}`);
console.log(`Waiting for stock count: ${waitingForStockCount}`);
console.log(`Ready to ship Order IDs: ${readyToShipIds.join(", ")}`);