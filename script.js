// Cart Count
let cartCount = localStorage.getItem("cartCount") || 0;

const cartCounter = document.getElementById("cart-count");
cartCounter.innerText = cartCount;

// Add to Cart Buttons
const addButtons = document.querySelectorAll(".add-cart");

addButtons.forEach((button) => {
    button.addEventListener("click", () => {

        cartCount++;

        cartCounter.innerText = cartCount;

        localStorage.setItem("cartCount", cartCount);

        button.innerText = "Added ✓";

        button.style.background = "#28a745";

        setTimeout(() => {
            button.innerText = "Add";
            button.style.background = "#0c831f";
        }, 1000);

    });
});


// Search Functionality
const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keyup", () => {

    let value = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".product-card");

    cards.forEach((card) => {

        let product = card.querySelector("h3").innerText.toLowerCase();

        if (product.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


// Shop Now Button
const shopBtn = document.querySelector(".banner button");

shopBtn.addEventListener("click", () => {

    document.querySelector(".products").scrollIntoView({

        behavior: "smooth"

    });

});


// Category Hover Animation
const categories = document.querySelectorAll(".category");

categories.forEach((category) => {

    category.addEventListener("mouseenter", () => {

        category.style.transform = "scale(1.05)";

    });

    category.addEventListener("mouseleave", () => {

        category.style.transform = "scale(1)";

    });

});