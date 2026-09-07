/**
 * A customer has a shopping cart below.
 * Tasks:
 * 1. Count subtotal of all products (expected result: 3.350.000)
 * 2. Calculate discount with this rules.
 *  - subtotal >= 3,000,000 → 10% discount
 *  - subtotal >= 2,000,000 → 5% discount
 *  - otherwise             → 0%
 * 
 * 3. Calculate final subtotal after given discount
 * 4. Find expensive product ( > 1.000.000)
 */

const cart = [
    {
        product: "Keyboard",
        price: 350000,
        quantity: 2,
    },
    {
        product: "Mouse",
        price: 150000,
        quantity: 1,
    },
    {
        product: "Monitor",
        price: 2500000,
        quantity: 1,
    },
];

const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

const getDiscountRate = (amount: number): number => {
    if (amount >= 3000000) return 0.10;
    if (amount >= 2000000) return 0.05;
    return 0;
};

const discountRate = getDiscountRate(subtotal);
const discountAmount = subtotal * discountRate;

const finalTotal = subtotal - discountAmount;

const expensiveProducts = cart.filter((item) => item.price > 1000000);

console.log("Subtotal:", subtotal);
console.log("Discount:", `${discountRate * 100}% (${discountAmount})`);
console.log("Final Total:", finalTotal);
console.log("Expensive Products:", expensiveProducts);