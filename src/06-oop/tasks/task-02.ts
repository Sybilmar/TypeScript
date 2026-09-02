/**
 * A digital wallet application stores information about a user's account.
 * 
 * A wallet has:
 * - Owner name
 * - Wallet ID
 * - Balance
 * 
 * For example, Jude Bellingham creates a wallet with:
 * | Property        | Value           |
 * | --------------- | --------------- |
 * | Wallet ID       | WAL001          |
 * | Owner           | Harry Maguire   |
 * | Initial Balance | Rp500,000       |
 * 
 * The application allows the user to:
 * - Deposit money
 * - Withdraw money
 * - Check the current balance
 * However, the balance must not be changed directly from outside the class.
 * 
 * Student Tasks:
 * Create: class DigitalWallet
 * Use:
 * - private balance: number;
 * 
 * The class should provide public methods:
 * - deposit(amount)
 * - withdraw(amount)
 * - getBalance()
 * - showWalletInfo()
 * 
 * Business Rules
 * deposit():
 * - Amount must be greater than 0.
 * 
 * withdraw():
 * - Amount must be greater than 0.
 * - Amount cannot exceed the current balance.
 */
class DigitalWallet {
    public walletId: string;
    public owner: string;
    private balance: number;

    constructor(walletId: string, owner: string, initialBalance: number = 0) {
        this.walletId = walletId;
        this.owner = owner;
        this.balance = initialBalance >= 0 ? initialBalance : 0;
    }

    public deposit(amount: number): void {
        if (amount <= 0) {
            console.log(`[DEPOSIT FAILED] Deposit amount must be greater than 0.`);
            return;
        }

        this.balance += amount;
        console.log(`[DEPOSIT SUCCESS] Rp${amount.toLocaleString()} deposited into ${this.owner}'s wallet.`);
    }

    public withdraw(amount: number): void {
        if (amount <= 0) {
            console.log(`[WITHDRAWAL FAILED] Withdrawal amount must be greater than 0.`);
            return;
        }

        if (amount > this.balance) {
            console.log(`[WITHDRAWAL FAILED] Insufficient balance. Available: Rp${this.balance.toLocaleString()}`);
            return;
        }

        this.balance -= amount;
        console.log(`[WITHDRAWAL SUCCESS] Rp${amount.toLocaleString()} withdrawn from ${this.owner}'s wallet.`);
    }

    public getBalance(): number {
        return this.balance;
    }

    public showWalletInfo(): void {
        console.log(`=== DIGITAL WALLET INFO ===`);
        console.log(`Wallet ID : ${this.walletId}`);
        console.log(`Owner     : ${this.owner}`);
        console.log(`Balance   : Rp${this.balance.toLocaleString()}`);
    }
}

const myWallet = new DigitalWallet("WAL001", "Harry Maguire", 500000);

myWallet.showWalletInfo();

myWallet.deposit(250000);
myWallet.withdraw(100000);
myWallet.withdraw(1000000); 

console.log(`Current Balance: Rp${myWallet.getBalance().toLocaleString()}`);
myWallet.showWalletInfo();

