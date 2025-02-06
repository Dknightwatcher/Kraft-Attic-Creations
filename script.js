let cart = [];
function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}
