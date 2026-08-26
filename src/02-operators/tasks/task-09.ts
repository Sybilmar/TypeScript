/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface CustomerInfo {
  voucherValue: number;
  isPremiumMember: boolean;
  rewardPointRate: number; 
}

interface CheckoutReport {
  productSubtotal: number;
  membershipDiscount: number;
  voucherDeduction: number;
  paymentBeforeTax: number;
  vat: number;
  finalPayment: number;
  rewardPoints: number;
  isFreeShippingEligible: boolean;
}

function calculateCheckout(items: CartItem[], customer: CustomerInfo): CheckoutReport {
  const productSubtotal = items.reduce(
    (total, item) => total + item.price * item.quantity, 0 );
  const membershipDiscount = customer.isPremiumMember ? productSubtotal * 0.10 : 0;
  const subtotalAfterDiscount = productSubtotal - membershipDiscount;
  const voucherDeduction = Math.min(customer.voucherValue, subtotalAfterDiscount);
  const paymentBeforeTax = subtotalAfterDiscount - voucherDeduction;
  const vat = paymentBeforeTax * 0.11;
  const finalPayment = paymentBeforeTax + vat;
  const rewardPoints = Math.floor(paymentBeforeTax / customer.rewardPointRate);
  const isFreeShippingEligible = customer.isPremiumMember || paymentBeforeTax > 1500000;

  return {
    productSubtotal,
    membershipDiscount,
    voucherDeduction,
    paymentBeforeTax,
    vat,
    finalPayment,
    rewardPoints,
    isFreeShippingEligible,
  };
}

const cartItems: CartItem[] = [
  { name: "Mechanical Keyboard", price: 850000, quantity: 1 },
  { name: "Wireless Mouse", price: 275000, quantity: 2 },
  { name: "Monitor Stand", price: 420000, quantity: 1 },
];

const customerInfo: CustomerInfo = {
  voucherValue: 100000,
  isPremiumMember: true,
  rewardPointRate: 50000,
};

const result = calculateCheckout(cartItems, customerInfo);

console.log("--- Checkout Report ---");
console.log(`Product Subtotal: Rp ${result.productSubtotal.toLocaleString("id-ID")}`);
console.log(`Membership Discount (10%): Rp ${result.membershipDiscount.toLocaleString("id-ID")}`);
console.log(`Voucher Deduction: Rp ${result.voucherDeduction.toLocaleString("id-ID")}`);
console.log(`Payment Before Tax: Rp ${result.paymentBeforeTax.toLocaleString("id-ID")}`);
console.log(`VAT (11%): Rp ${result.vat.toLocaleString("id-ID")}`);
console.log(`Final Payment: Rp ${result.finalPayment.toLocaleString("id-ID")}`);
console.log(`Reward Points Earned: ${result.rewardPoints} points`);
console.log(`Free Shipping Eligible: ${result.isFreeShippingEligible ? "True" : "False"}`);