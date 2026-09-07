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

interface OrderItem {
  product: string;
  price: number;
  quantity: number;
}

interface Order {
  id: number;
  customer: string;
  status: "completed" | "cancelled" | string;
  items: OrderItem[];
}

interface OrderWithValue extends Order {
  totalValue: number;
}

interface TopSpender {
  customer: string;
  totalSpent: number;
}

const order: Order[] = [
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

const completedOrders: Order[] = orders.filter(
  (order) => order.status === "completed"
);

const ordersWithTotal: OrderWithValue[] = orders.map((order) => {
  const totalValue = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return { ...order, totalValue };
});

const customerSpending = completedOrders.reduce<Record<string, number>>((acc, order) => {
  const orderTotal = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  acc[order.customer] = (acc[order.customer] || 0) + orderTotal;
  return acc;
}, {});

const topSpender: TopSpender = Object.entries(customerSpending).reduce(
  (max, [customer, totalSpent]) =>
    totalSpent > max.totalSpent ? { customer, totalSpent } : max,
  { customer: "", totalSpent: 0 }
);

const totalRevenue: number = completedOrders.reduce((sum, order) => {
  const orderTotal = order.items.reduce(
    (itemSum, item) => itemSum + item.price * item.quantity,
    0
  );
  return sum + orderTotal;
}, 0);

const purchasedProducts: string[] = Array.from(
  new Set(
    orders
      .flatMap((order) => order.items)
      .map((item) => item.product)
  )
);

console.log("Task 1 - Completed Orders:", completedOrders);
console.log("Task 2 - Orders with Total Values:", ordersWithTotal);
console.log("Task 3 - Top Spender:", topSpender);
console.log("Task 4 - Total Revenue:", totalRevenue);
console.log("Task 5 - Purchased Products:", purchasedProducts);