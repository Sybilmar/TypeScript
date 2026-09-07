/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */

const books = [
    { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
    { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
    { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2 },
    { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings = [
    { student: "Andi", bookId: 1, days: 7 },
    { student: "Budi", bookId: 2, days: 3 },
    { student: "Citra", bookId: 1, days: 10 },
    { student: "Deni", bookId: 3, days: 5 },
    { student: "Eka", bookId: 1, days: 4 },
    { student: "Andi", bookId: 3, days: 8 },
];

const bookMap = new Map(books.map((book) => [book.id, book]));

const borrowingCounts = borrowings.reduce<Record<string, number>>((acc, record) => {
    const book = bookMap.get(record.bookId);
    if (book) {
        acc[book.title] = (acc[book.title] || 0) + 1;
    }
    return acc;
}, {});

const mostBorrowedBook = Object.entries(borrowingCounts).reduce(
    (max, [title, count]) => (count > max.count ? { title, count } : max),
    { title: "", count: 0 }
);

const remainingStock = books.map((book) => {
    const borrowedCount = borrowings.filter((b) => b.bookId === book.id).length;
    return {
        ...book,
        stock: Math.max(0, book.stock - borrowedCount),
    };
});

const lateBorrowers = borrowings
    .filter((record) => record.days > 7)
    .map((record) => {
        const extraDays = record.days - 7;
        const fine = extraDays * 2000;
        const book = bookMap.get(record.bookId);
        return {
            student: record.student,
            bookTitle: book?.title,
            days: record.days,
            fine,
        };
    });

console.log("Borrowing Counts:", borrowingCounts);
console.log("Most Borrowed Book:", mostBorrowedBook);
console.log("Remaining Stock:", remainingStock);
console.log("Late Borrowers & Fines:", lateBorrowers);