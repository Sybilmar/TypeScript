/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */
type TransactionStatus = "paid" | "pending" | "cancelled";
type TransactionCategory = "HIGH VALUE" | "MEDIUM VALUE" | "LOW VALUE";

type Transaction = {
    id: string;
    customer: string;
    amount: number;
    status: TransactionStatus;
};

type TransactionWithCategory = Transaction & { category: TransactionCategory };
type TransactionWithPlatformFee = Transaction & { fee: number };

const transactions = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */

// Reusable process function accepting a callback logic
function processTransactions<T>(
    list: Transaction[],
    callback: (trx: Transaction) => T
): T[] {
    const results: T[] = [];
    for (const trx of list) {
        results.push(callback(trx));
    }
    return results;
}

// 1. Callback to extract customer's name
function extractCustomerName(trx: Transaction): string {
    return trx.customer;
}

// 2. Callback to determine transaction category
function categorizeTransaction(trx: Transaction): TransactionWithCategory {
    let category: TransactionCategory;

    if (trx.amount >= 2000000) {
        category = "HIGH VALUE";
    } else if (trx.amount >= 1000000) {
        category = "MEDIUM VALUE";
    } else {
        category = "LOW VALUE";
    }

    return {
        ...trx,
        category
    };
}

// 3. Callback to calculate platform fee
function calculatePlatformFee(trx: Transaction): TransactionWithPlatformFee {
    let feeRate = 0;

    if (trx.status === "paid") {
        feeRate = 0.02;
    } else if (trx.status === "pending") {
        feeRate = 0.01;
    } else {
        feeRate = 0;
    }

    return {
        ...trx,
        fee: trx.amount * feeRate
    };
}

// Execution
const customerNames = processTransactions(transactions, extractCustomerName);
const categorizedTransactions = processTransactions(transactions, categorizeTransaction);
const transactionsWithFee = processTransactions(transactions, calculatePlatformFee);

console.log("====== CUSTOMER NAMES ======");
console.log(customerNames);

console.log("\n====== TRANSACTION CATEGORIES ======");
console.log(categorizedTransactions);

console.log("\n====== TRANSACTIONS WITH PLATFORM FEE ======");
console.log(transactionsWithFee);