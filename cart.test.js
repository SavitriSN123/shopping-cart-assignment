const axios = require("axios");
const ShoppingCart = require("./cart");

jest.mock("axios"); // Mock Axios globally

describe("ShoppingCart", () => {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  test("should add an item and calculate total", async () => {
    // Mock API response
    axios.get.mockResolvedValue({ data: { price: 1000 } });

    await cart.addItem("Laptop", 2); // Add 2 Laptops

    const total = cart.calculateTotal();
    
    expect(cart.items.length).toBe(1); // Check if item added
    expect(total.subtotal).toBe(2000); // 2 * 1000
    expect(total.tax).toBeCloseTo(250); // 12.5% tax
    expect(total.total).toBeCloseTo(2250); // Subtotal + tax
  });

  test("should handle API failure", async () => {
    // Mock API error response
    axios.get.mockRejectedValue(new Error("Product not found"));

    await expect(cart.addItem("NonExistent", 1)).rejects.toThrow("Product not found");
  });
});
