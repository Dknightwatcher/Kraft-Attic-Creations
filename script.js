let cart = [];
let cartTotal = 0;

// Load cart from local storage
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    updateCart();
}

// Function to add items to the cart
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

// Function to update cart display
function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let cartTotalDisplay = document.getElementById("cart-total");
    let cartCountDisplay = document.getElementById("cart-count");
    
    cartItems.innerHTML = "";
    cartTotal = 0;

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)} 
            <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
        cartTotal += item.price;
    });

    cartTotalDisplay.innerText = cartTotal.toFixed(2);
    cartCountDisplay.innerText = cart.length;

    document.getElementById("cart").style.display = cart.length > 0 ? "block" : "none";
}

// Function to remove items from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

// Function to handle checkout
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Thank you for shopping with Kraft Attic Creations! To complete your order, please contact us via email or social media.");
}
