/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const isPremiumMember: boolean = true;
const keyboardPrice: number = 850000;
const quantityKeyboard: number = 1;
const wirelessPrice: number = 275000;
const quantityWireless: number = 2;
const mousePrice:number =120000;
const quantityMouse: number = 1;

let totalItems: number =0;
for (let i = 0; i < quantityKeyboard; i++) { totalItems++ }
for (let i = 0; i < quantityWireless; i++ ) {totalItems++}
for (let i = 0; i < quantityMouse; i++) {totalItems++}

const total: number =
(keyboardPrice*quantityKeyboard)+
(wirelessPrice*quantityWireless)+
(mousePrice*quantityMouse);

const isEligibleDiscount: boolean = total > 1000000;
const discountAmout: number = isEligibleDiscount ? total * 0.10 : 0;
const shippingFee: number = isPremiumMember ? 0:20000;
const finalPayment: number = total- discountAmout + shippingFee;

console.log(`-----------------------------------`);
console.log (`Total Barang    : ${totalItems}`);
console.log (`Subtotal        : Rp ${total.toLocaleString()}`)
console.log(`Dapat Diskon?       : ${isEligibleDiscount ? "Ya (10%)" : "Tidak"}`);
console.log(`Potongan Diskon     : Rp ${discountAmout.toLocaleString()}`);
console.log(`Ongkos Kirim        : Rp ${shippingFee.toLocaleString()}`);
console.log(`-----------------------------------`);
console.log(`TOTAL PEMBAYARAN    : Rp ${finalPayment.toLocaleString()}`);
console.log(`-----------------------------------`);





