let toggleBtn = document.getElementById("theme-toggle");

let html = document.documentElement;


function theme() {

    if (html.getAttribute("data-theme") == "dark") {

        html.setAttribute("data-theme", "light");

    } else {

        html.setAttribute("data-theme", "dark");

    }

    toggleBtn.classList.toggle("bi-sun-fill");

    toggleBtn.classList.toggle("bi-moon-fill");

}







// ==========================================
// SHOPPING CART
// ==========================================


// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ==========================================
// ADD PRODUCT TO CART
// ==========================================

let addButtons = document.querySelectorAll(".add-to-cart");

addButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get product information
        let productName = button.getAttribute("data-name");
        let productPrice = Number(button.getAttribute("data-price"));
        let productImage = button.getAttribute("data-image");


        // Check if product already exists
        let existingProduct = cart.find(function(product) {
            return product.name === productName;
        });


        if (existingProduct) {

            // Increase quantity
            existingProduct.quantity++;

        } else {

            // Add new product
            cart.push({
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1
            });

        }


        // Save cart
        saveCart();


        // Update cart number
        updateCartCount();


        // Change button text
        button.innerHTML = "✓ ADDED TO CART";


        setTimeout(function() {
            button.innerHTML = "ADD TO CART";
        }, 1000);

    });

});


// ==========================================
// SAVE CART
// ==========================================

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

}


// ==========================================
// UPDATE CART COUNT
// ==========================================

function updateCartCount() {

    let cartCount = document.getElementById("cart-count");

    if (!cartCount) {
        return;
    }


    // Calculate total quantity
    let totalQuantity = cart.reduce(function(total, product) {

        return total + product.quantity;

    }, 0);


    cartCount.innerHTML = totalQuantity;

}


// Run when page loads
updateCartCount();