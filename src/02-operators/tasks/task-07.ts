/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const ROOM_PRICE_PER_NIGHT: number = 650000;
const NIGHTS_STAYED: number =4;
const SERVICE_CHARGE: number =120000;
const TAX_RATE: number = 0.11;
const VIP_DISCOUNT_RATE: number = 0.12;
const IS_VIP: boolean = true;

const roomSubtotal: number = ROOM_PRICE_PER_NIGHT*NIGHTS_STAYED;
const discountAmount: number = IS_VIP ? roomSubtotal * VIP_DISCOUNT_RATE : 0;
const discountRoomCost: number = roomSubtotal -discountAmount;

const taxableSubtotal: number = ROOM_PRICE_PER_NIGHT * NIGHTS_STAYED;
const taxAmount: number = taxableSubtotal *  TAX_RATE;
const finalPayment: number = taxableSubtotal + taxAmount;
const isEligibleForFreeBreakfast: boolean = NIGHTS_STAYED >= 3 || IS_VIP;

console.log('===Hotel===')
console.log(`Room Subtotal    : Rp ${roomSubtotal.toLocaleString("id-ID")}`);
console.log(`Discount (12%)   : Rp ${discountAmount.toLocaleString("id-ID")}`);
console.log(`Service Charge   : Rp ${SERVICE_CHARGE.toLocaleString("id-ID")}`);
console.log(`Tax (11%)        : Rp ${taxAmount.toLocaleString("id-ID")}`);
console.log(`Final Payment    : Rp ${finalPayment.toLocaleString("id-ID")}`);
console.log(`Free Breakfast   : ${isEligibleForFreeBreakfast ? "Yes" : "No"}`);