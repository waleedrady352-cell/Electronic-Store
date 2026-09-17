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



let cart = JSON.parse(localStorage.getItem("cart")) || [];






let addButtons = document.querySelectorAll(".add-to-cart");


addButtons.forEach(function(button) {

    button.addEventListener("click", function() {


        
        let productName =
            button.getAttribute("data-name");


       
        let productPrice =
            Number(button.getAttribute("data-price"));


       
        let productImage =
            button.getAttribute("data-image");



        

        let existingProduct = cart.find(function(product) {

            return product.name === productName;

        });



        // ==================================
        // If product already exists
        // ==================================

        if (existingProduct) {

            
            existingProduct.quantity++;

        }



        

        else {

            cart.push({

                name: productName,

                price: productPrice,

                image: productImage,

                quantity: 1

            });

        }



        

        saveCart();



     

        updateCartCount();




        button.innerHTML = "✓ ADDED TO CART";



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




            if (selectedCategory === "All") {

                product.parentElement.style.display =
                    "block";

            }



           
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