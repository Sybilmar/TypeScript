/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Books = {
    ISBNNumber  : number,
    title : string,
    author : string,
    totalNumberOfPages : number,
    category : string,
    available : boolean
};
const Bok: Books = {
    ISBNNumber : 1234567890234,
    title : "5 Dosa Besar Prabowo",
    author : "Liviana",
    totalNumberOfPages : 25,
    category : "Mystery",
    available : false,
};
const Buk: Books = {
    ISBNNumber : 1289764567890,
    title : "Cara menjadi Bahlil",
    author : "Via",
    totalNumberOfPages : 40,
    category : "Horror",
    available : true,
};
const Bek: Books = {
    ISBNNumber : 1784972678935,
    title : "PayungTeduh",
    author : "Vi",
    totalNumberOfPages : 271,
    category : "Horror",
    available : true
};

console.log(`===Bok===`)
console.log(`ISBNNumber: ${Bok. ISBNNumber}`);
console.log(`Judul: ${Bok. title}`);
console.log(`Pencipta: ${Bok. author}`);
console.log(`Banyak Halaman: ${Bok. totalNumberOfPages}`);
console.log(`Kategori: ${Bok. category}`);
console.log(`Tersedia: ${Bok. available}`);

console.log(`===Buk===`)
console.log(`ISBNNumber: ${Buk. ISBNNumber}`);
console.log(`Judul: ${Buk. title}`);
console.log(`Pencipta: ${Buk. author}`);
console.log(`Banyak Halaman: ${Buk. totalNumberOfPages}`);
console.log(`Kategori: ${Buk. category}`);
console.log(`Tersedia: ${Buk. available}`);

console.log(`===Bek===`)
console.log(`ISBNNumber: ${Bek. ISBNNumber}`);
console.log(`Judul: ${Bek. title}`);
console.log(`Pencipta: ${Bek. author}`);
console.log(`Banyak Halaman: ${Bek. totalNumberOfPages}`);
console.log(`Kategori: ${Bek. category}`);
console.log(`Tersedia: ${Bek. available}`);