/**
 * An online shopping platform allows customers to purchase multiple products in one transaction. 
 * Every product added to the shopping cart stores the product code, product name, unit price, 
 * quantity purchased, and whether the product is eligible for free shipping.
 * Today, one customer added the following products to the cart.

| Product Code | Product Name        | Price   | Quantity | Free Shipping |
| ------------ | ------------------- | ------- | -------- | ------------- |
| KB001        | Mechanical Keyboard | 850000  | 1        | Yes           |
| MS002        | Wireless Mouse      | 275000  | 2        | Yes           |
| HD003        | External SSD 1TB    | 1650000 | 1        | No            |
| HP004        | Gaming Headset      | 720000  | 1        | Yes           |

 * Task:
 * 1. Define a proper type for the product information.
 * 2. Store the product data in a single collection.
 * 3. Display the product data using console.log.
 */
type platform ={
    ProductCode : string,
    ProductName: string,
    Price: number,
    Quantity: number,
    FreeShipping: boolean,

};

const customer : platform  []=[
    {ProductCode: "KB001", ProductName: "Mechanical Keyboard", Price: 850000,Quantity : 1,FreeShipping: true},
    {ProductCode: "MS002", ProductName: "Wireless Mouse", Price: 275000,Quantity : 2,FreeShipping: true},
    {ProductCode: "HD003", ProductName: "External SSD 1TB", Price: 1650000,Quantity : 1,FreeShipping: false},
   {ProductCode: "HD004", ProductName: "Gaming Headset", Price: 720000,Quantity : 1, FreeShipping: true},
]
console.log(customer);