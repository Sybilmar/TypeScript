/**
 * A school library wants to create a digital system for managing books.
 * 
 * Each book has:
 * - ISBN
 * - Title
 * - Author
 * - Total pages
 * - Borrowing status
 * 
 * The library wants to prevent users from directly changing the borrowing status.
 * Instead, the status can only change through:
 * - borrow()
 * - returnBook()
 * 
 * Business Rules
 * - A book can only be borrowed when: status = available
 * - When a book is borrowed: available → borrowed
 * - A borrowed book cannot be borrowed again.
 * - When the book is returned: borrowed → available
 * - An available book cannot be returned.
 * 
 * Tasks:
 * - create class Book that minimum has property and method below:
 *   - private status: string;
 *   - borrow()
 *   - returnBook()
 *   - showInfo()
 *   - isAvailable()
 * - implement class with at least 2 objects
 */
type BorrowStatus = "available" | "borrowed";

class Book {
  public isbn: string;
  public title: string;
  public author: string;
  public totalPages: number;
  private status: BorrowStatus;

  constructor(isbn: string, title: string, author: string, totalPages: number) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.status = "available";
  }

  public borrow(): void {
    if (this.status === "borrowed") {
      console.log(`[BORROW FAILED] "${this.title}" is already borrowed.`);
      return;
    }

    this.status = "borrowed";
    console.log(`[BORROW SUCCESS] You have borrowed "${this.title}".`);
  }

  public returnBook(): void {
    if (this.status === "available") {
      console.log(`[RETURN FAILED] "${this.title}" was not borrowed.`);
      return;
    }

    this.status = "available";
    console.log(`[RETURN SUCCESS] You have returned "${this.title}".`);
  }

  public isAvailable(): boolean {
    return this.status === "available";
  }

  public showInfo(): void {
    console.log(`=== BOOK DETAILS ===`);
    console.log(`ISBN   : ${this.isbn}`);
    console.log(`Title  : ${this.title}`);
    console.log(`Author : ${this.author}`);
    console.log(`Pages  : ${this.totalPages}`);
    console.log(`Status : ${this.status}`);
  }
}


const book1 = new Book("978-0132350884", "Clean Code", "Robert C. Martin", 464);
const book2 = new Book("978-0201633610", "Design Patterns", "Erich Gamma", 395);

book1.showInfo();

book1.borrow();
book1.borrow(); 

console.log(`Is "${book1.title}" available? ${book1.isAvailable()}`);

book1.returnBook();
book1.returnBook(); 

console.log("");
book2.showInfo();