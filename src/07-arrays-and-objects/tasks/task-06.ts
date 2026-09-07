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

interface Book {
  id: number;
  title: string;
  category: string;
  stock: number;
}

interface Borrowing {
  student: string;
  bookId: number;
  days: number;
}

interface BorrowingWithBookDetail extends Borrowing {
  book: Book | undefined;
}

const books: Book[] = [
  { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
  { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
  { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2 },
  { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings: Borrowing[] = [
  { student: "Andi", bookId: 1, days: 7 },
  { student: "Budi", bookId: 2, days: 3 },
  { student: "Citra", bookId: 1, days: 10 },
  { student: "Deni", bookId: 3, days: 5 },
  { student: "Eka", bookId: 1, days: 4 },
  { student: "Andi", bookId: 3, days: 8 },
];

const andiBorrowings: Borrowing[] = borrowings.filter(
  (b) => b.student === "Andi"
);

const borrowingsWithBookInfo: BorrowingWithBookDetail[] = borrowings.map((b) => ({
  ...b,
  book: books.find((book) => book.id === b.bookId),
}));

const programmingBookIds = new Set(
  books.filter((b) => b.category === "Programming").map((b) => b.id)
);

const programmingStudents: string[] = Array.from(
  new Set(
    borrowings
      .filter((b) => programmingBookIds.has(b.bookId))
      .map((b) => b.student)
  )
);

const totalTransactions: number = borrowings.length;

const averageDuration: number =
  borrowings.reduce((sum, b) => sum + b.days, 0) / borrowings.length;

const longBorrowers: string[] = Array.from(
  new Set(
    borrowings.filter((b) => b.days > 7).map((b) => b.student)
  )
);

console.log("Task 1 - Andi's Borrowings:", andiBorrowings);
console.log("Task 2 - Borrowings with Book Details:", borrowingsWithBookInfo);
console.log("Task 3 - Students who borrowed Programming books:", programmingStudents);
console.log("Task 4 - Total Transactions:", totalTransactions);
console.log("Task 5 - Average Borrowing Duration:", Number(averageDuration.toFixed(2)));
console.log("Task 6 - Students who borrowed > 7 days:", longBorrowers);