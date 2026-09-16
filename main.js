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
// 🛒 SHOPPING CART
// ==========================================


// ==========================================
// 1️⃣ GET CART FROM LOCAL STORAGE
// ==========================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];



// ==========================================
// 2️⃣ ADD PRODUCT TO CART
// ==========================================

// Get all ADD TO CART buttons
let addButtons = document.querySelectorAll(".add-to-cart");


addButtons.forEach(function(button) {

    button.addEventListener("click", function() {


        // Get product name
        let productName =
            button.getAttribute("data-name");


        // Get product price
        let productPrice =
            Number(button.getAttribute("data-price"));


        // Get product image
        let productImage =
            button.getAttribute("data-image");



        // ==================================
        // Check if product already exists
        // ==================================

        let existingProduct = cart.find(function(product) {

            return product.name === productName;

        });



        // ==================================
        // If product already exists
        // ==================================

        if (existingProduct) {

            // Increase quantity
            existingProduct.quantity++;

        }



        // ==================================
        // If product is new
        // ==================================

        else {

            cart.push({

                name: productName,

                price: productPrice,

                image: productImage,

                quantity: 1

            });

        }



        // ==================================
        // Save Cart
        // ==================================

        saveCart();



        // ==================================
        // Update Cart Number
        // ==================================

        updateCartCount();



        // ==================================
        // Change Button Text
        // ==================================

        button.innerHTML = "✓ ADDED TO CART";



        // Return button text
        setTimeout(function() {

            button.innerHTML = "ADD TO CART";

        }, 1000);

    });

});



// ==========================================
// 💾 SAVE CART
// ==========================================

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}



// ==========================================
// 🔢 UPDATE CART COUNT
// ==========================================

function updateCartCount() {


    // Get cart count element
    let cartCount =
        document.getElementById("cart-count");



    // If cart count does not exist
    if (!cartCount) {

        return;

    }



    // Calculate total quantity
    let totalQuantity = cart.reduce(
        function(total, product) {

            return total + product.quantity;

        },
        0
    );



    // Display total quantity
    cartCount.innerHTML = totalQuantity;

}



// ==========================================
// 🔍 PRODUCT FILTER
// ==========================================


// Get all filter buttons
let filterButtons =
    document.querySelectorAll(".filter-btn");


// Get all product cards
let products =
    document.querySelectorAll(".product-card");



filterButtons.forEach(function(button) {


    // When clicking a filter button
    button.addEventListener("click", function() {


        // Get selected category
        let selectedCategory =
            button.getAttribute("data-category");



        // Check every product
        products.forEach(function(product) {


            // Get ADD TO CART button
            let addButton =
                product.querySelector(".add-to-cart");



            // Get product category
            let productCategory =
                addButton.getAttribute("data-category");



            // ==================================
            // SHOW ALL PRODUCTS
            // ==================================

            if (selectedCategory === "All") {

                product.parentElement.style.display =
                    "block";

            }



            // ==================================
            // SHOW SELECTED CATEGORY
            // ==================================

            else if (
                productCategory === selectedCategory
            ) {

                product.parentElement.style.display =
                    "block";

            }



            // ==================================
            // HIDE OTHER PRODUCTS
            // ==================================

            else {

                product.parentElement.style.display =
                    "none";

            }

        });

    });

});



// ==========================================
// 🚀 RUN WHEN PAGE LOADS
// ==========================================

// Update cart number
updateCartCount();