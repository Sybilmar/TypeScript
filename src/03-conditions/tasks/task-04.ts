/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */
const CustomerName: string = "Nadia Putri";
const PremiumMember: boolean = true;
const RoomAvailable: boolean = false;


const reservationStatus: Record <string,string>  = {
    "true_true": `Welcome ${CustomerName} Kamar Berhasil dipesan Dan Free nanti di upgrade Via`,
    "true_false": `Welcome ${CustomerName} Kamar Berhasil Dipesan`,
    "false_true": `Welcome ${CustomerName} kamar ini sedang penuh, anda berada di waiting Via's room`,
    "false_false": `Welcome ${CustomerName} kamar ini penuh, salah sendiri telat `
};
console.log(reservationStatus[`${RoomAvailable}_${PremiumMember}`]);

