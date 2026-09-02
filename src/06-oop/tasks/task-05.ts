/**
 * An e-commerce company wants to manage product inventory.
 * Each product has:
 * - Product ID
 * - Product name
 * - Price
 * - Stock quantity
 * For example:
 * Product
 * - ID: PRD001
 * - Name: Gaming Laptop
 * - Price: Rp15,000,000
 * - Stock: 20
 * The company wants to make sure product data cannot be changed carelessly.
 * 
 * The system needs to support:
 * - Increasing stock
 * - Decreasing stock
 * - Changing price
 * - Checking stock availability
 * - Calculating inventory value
 * 
 * Student Tasks
 * - Create class Product
 * - Private Properties, at minimum:
 *   * private price: number;
 *   * private stock: number;
 * 
 * - Other properties can be public or private depending on the student's design.
 * - Required Methods
 *   * addStock(quantity)
 *   * removeStock(quantity)
 *   * changePrice(newPrice)
 *   * isAvailable()
 *   * getInventoryValue()
 *   * showProductInfo()
 * 
 * - Business Rules
 * addStock(): quantity must be greater than 0.
 * removeStock(): quantity must be greater than 0 and not greater than current stock
 * changePrice(): new price must be greater than 0.
 * isAvailable(): returns true when stock > 0, otherwise false
 * getInventoryValue(): calculate price × stock
 */

class Product {
  public id: string;
  public name: string;
  private price: number = 0;
  private stock: number = 0;

  constructor(id: string, name: string, initialPrice: number, initialStock: number) {
    this.id = id;
    this.name = name;
    this.changePrice(initialPrice);
    this.addStock(initialStock);
  }

  public getPrice(): number {
    return this.price;
  }

  public getStock(): number {
    return this.stock;
  }

  public addStock(quantity: number): void {
    if (quantity <= 0) {
      console.log(`[ADD STOCK FAILED] Quantity must be greater than 0.`);
      return;
    }
    this.stock += quantity;
  }

  public removeStock(quantity: number): void {
    if (quantity <= 0) {
      console.log(`[REMOVE STOCK FAILED] Quantity must be greater than 0.`);
      return;
    }
    if (quantity > this.stock) {
      console.log(`[REMOVE STOCK FAILED] Cannot remove ${quantity} items. Available stock: ${this.stock}.`);
      return;
    }
    this.stock -= quantity;
  }

  public changePrice(newPrice: number): void {
    if (newPrice <= 0) {
      console.log(`[CHANGE PRICE FAILED] Price must be greater than 0.`);
      return;
    }
    this.price = newPrice;
  }

  public isAvailable(): boolean {
    return this.stock > 0;
  }

  public getInventoryValue(): number {
    return this.price * this.stock;
  }

  public showProductInfo(): void {
    console.log(`=== PRODUCT DETAILS ===`);
    console.log(`Product ID      : ${this.id}`);
    console.log(`Product Name    : ${this.name}`);
    console.log(`Price           : Rp${this.price.toLocaleString()}`);
    console.log(`Stock           : ${this.stock}`);
    console.log(`Is Available    : ${this.isAvailable()}`);
    console.log(`Inventory Value : Rp${this.getInventoryValue().toLocaleString()}`);
  }
}

const laptop = new Product(
    "PRD001",
    "Gaming Laptop",
    15000000,
    20
);

laptop.addStock(5);
laptop.removeStock(3);
laptop.changePrice(14500000);
console.log("Is Available:", laptop.isAvailable());
console.log("Inventory Value:", laptop.getInventoryValue());
laptop.showProductInfo();