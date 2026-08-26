/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */


const PLAYING_HOURS: number = 7;
const PLAYING_MINUTES: number = 35;
const HOURLY_RATE: number = 8000;
const DISCOUNT_RATE: number = 0.15;
const DISCOUNT_THRESHOLD_HOURS: number = 5;


const totalPlayingMinutes: number = (PLAYING_HOURS * 60) + PLAYING_MINUTES;
const remainingMinutes: number = totalPlayingMinutes % 60;
const totalBilledHours: number = Math.ceil(totalPlayingMinutes / 60);
const costBeforeDiscount: number = totalBilledHours * HOURLY_RATE;

const totalHoursPlayed: number = totalPlayingMinutes / 60;
const isEligibleForDiscount: boolean = totalHoursPlayed > DISCOUNT_THRESHOLD_HOURS;

const discountAmount: number = isEligibleForDiscount ? costBeforeDiscount * DISCOUNT_RATE : 0;
const finalPayment: number = costBeforeDiscount - discountAmount;


console.log(`Total Playing Time       : ${totalPlayingMinutes} minutes`);
console.log(`Remaining Minutes        : ${remainingMinutes} minutes`);
console.log(`Total Billed Hours       : ${totalBilledHours} hours`);
console.log(`Payment Before Discount  : Rp ${costBeforeDiscount.toLocaleString("id-ID")}`);
console.log(`Discount Amount (15%)    : Rp ${discountAmount.toLocaleString("id-ID")}`);
console.log(`Final Payment            : Rp ${finalPayment.toLocaleString("id-ID")}`);