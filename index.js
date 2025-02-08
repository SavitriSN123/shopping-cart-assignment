const ShoppingCart = require("./cart");

async function main() {
  const cart = new ShoppingCart();

  await cart.addItem("cornflakes", 2);
  await cart.addItem("weetabix", 1);

  cart.printCart();
}

main();
