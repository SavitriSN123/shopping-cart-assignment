const axios = require("axios");

class ShoppingCart {
  constructor() {
    this.items = []; // Array to store cart items
  }

  // Add item to cart by fetching product details from API
  async addItem(productName, quantity) {
    try {
      const response = await axios.get(`http://localhost:3001/products/${productName}`);
      const product = response.data;

      if (!product || !product.price) {
        throw new Error("Product not found or missing price!");
      }

      this.items.push({ name: productName, price: product.price, quantity });
      console.log(`${quantity} x ${productName} added to cart.`);
    } catch (error) {
      console.error("Error fetching product price:", error.message);
      throw error; // Rethrow error for better debugging
    }
  }

  // Print the cart contents
  printCart() {
    console.log("\nShopping Cart:");
    if (this.items.length === 0) {
      console.log("Your cart is empty.");
    } else {
      this.items.forEach(item => {
        console.log(`${item.quantity} x ${item.name} @ $${item.price.toFixed(2)} each`);
      });

      // Calculate and display totals
      const { subtotal, tax, total } = this.calculateTotal();
      console.log(`\nSubtotal: $${subtotal.toFixed(2)}`);
      console.log(`Tax (12.5%): $${tax.toFixed(2)}`);
      console.log(`Total: $${total.toFixed(2)}\n`);
    }
  }

  // Calculate subtotal, tax, and total
  calculateTotal() {
    let subtotal = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let tax = subtotal * 0.125; // 12.5% tax
    let total = subtotal + tax;

    return { subtotal, tax, total };
  }
}

module.exports = ShoppingCart;
