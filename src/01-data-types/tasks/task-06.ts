/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */
type marketplace = {
    productCode : number,
    productName : string,
    sellingPrice : number,
    stock : number,
    productWeight : number,
    AverageRating : string,
    discount : boolean
}
const product1: marketplace ={
    productCode : 17637781,
    productName : "Juice",
    sellingPrice : 705000,
    stock : 60,
    productWeight : 80.9,
    AverageRating: "0.2",
    discount : true
};

const product2: marketplace ={
    productCode : 1745634,
    productName : "Via",
    sellingPrice : 1000,
    stock : 1,
    productWeight : 49.0,
    AverageRating: "0.2",
    discount : true
};

const product3: marketplace ={
    productCode : 32514781,
    productName : "mineral",
    sellingPrice : 748000,
    stock : 10,
    productWeight : 1.0,
    AverageRating: "10",
    discount : false
};

console.log(`===Product1===`)
console.log(`Code: ${product1. productCode}`);
console.log(`Name: ${product1. productName}`);
console.log(`Harga: ${product1. sellingPrice}`);
console.log(`stock: ${product1. stock}`);
console.log(`Berat Product: ${product1. productWeight}`);
console.log(`Ratting: ${product1. AverageRating}`);
console.log(`Bapakah barang ini discount? ${product1. discount}`);

console.log(`===Product2===`)
console.log(`Code: ${product2. productCode}`);
console.log(`Name: ${product2. productName}`);
console.log(`Harga: ${product2. sellingPrice}`);
console.log(`stock: ${product2. stock}`);
console.log(`Berat Product: ${product2. productWeight}`);
console.log(`Ratting: ${product2. AverageRating}`);
console.log(`Bapakah barang ini discount? ${product2. discount}`);

console.log(`===Product3===`)
console.log(`Code: ${product3. productCode}`);
console.log(`Name: ${product3. productName}`);
console.log(`Harga: ${product3. sellingPrice}`);
console.log(`stock: ${product3. stock}`);
console.log(`Berat Product: ${product3. productWeight}`);
console.log(`Ratting: ${product3. AverageRating}`);
console.log(`Bapakah barang ini discount? ${product3. discount}`);
