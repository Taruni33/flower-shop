// Function to add items to the cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + " added to cart!");
}

// Function to display cart items
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center">Your cart is empty</p>';
        return;
    }

    cart.forEach((item, index) => {
        cartItemsContainer.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">$${item.price.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
}

// Display cart items when the cart page loads
if (document.getElementById('cart-items')) {
    displayCart();
}
