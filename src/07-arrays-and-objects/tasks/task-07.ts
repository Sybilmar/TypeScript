/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

const getOrderTotal = (items: { price: number; quantity: number }[]) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0);

const totalRevenue = orders
  .filter((order) => order.status === "completed")
  .reduce((sum, order) => sum + getOrderTotal(order.items), 0);

const productSalesSummary = orders
  .filter((order) => order.status === "completed")
  .flatMap((order) => order.items)
  .reduce<Record<string, number>>((acc, item) => {
    acc[item.product] = (acc[item.product] || 0) + item.quantity;
    return acc;
  }, {});

const customerTotals = orders.map((order) => ({
  id: order.id,
  customer: order.customer,
  status: order.status,
  totalAmount: getOrderTotal(order.items),
}));

console.log("Total Completed Revenue:", totalRevenue); 
console.log("Product Sales Summary:", productSalesSummary); 
console.log("Customer Totals:", customerTotals);