const products = [

    // FASHION
    {
        id: 1,
        name: "Premium Oversized T-Shirt",
        category: "Fashion",
        price: 699,
        image: "👕"
    },

    {
        id: 2,
        name: "Classic Hoodie",
        category: "Fashion",
        price: 1299,
        image: "🧥"
    },

    {
        id: 3,
        name: "Urban Sneakers",
        category: "Fashion",
        price: 1999,
        image: "👟"
    },

    {
        id: 4,
        name: "Minimal Watch",
        category: "Fashion",
        price: 1499,
        image: "⌚"
    },


    // TECH
    {
        id: 5,
        name: "Wireless Earbuds",
        category: "Tech",
        price: 999,
        image: "🎧"
    },

    {
        id: 6,
        name: "Smart Watch",
        category: "Tech",
        price: 2499,
        image: "⌚"
    },

    {
        id: 7,
        name: "Portable Speaker",
        category: "Tech",
        price: 1299,
        image: "🔊"
    },

    {
        id: 8,
        name: "Fast Charging Adapter",
        category: "Tech",
        price: 599,
        image: "🔌"
    },


    // HOME
    {
        id: 9,
        name: "Modern Table Lamp",
        category: "Home",
        price: 899,
        image: "💡"
    },

    {
        id: 10,
        name: "Desk Organizer",
        category: "Home",
        price: 499,
        image: "🗂️"
    },

    {
        id: 11,
        name: "Decorative Plant",
        category: "Home",
        price: 699,
        image: "🌿"
    },

    {
        id: 12,
        name: "Premium Wall Clock",
        category: "Home",
        price: 1199,
        image: "🕐"
    },


    // BEAUTY
    {
        id: 13,
        name: "Face Care Kit",
        category: "Beauty",
        price: 799,
        image: "✨"
    },

    {
        id: 14,
        name: "Grooming Kit",
        category: "Beauty",
        price: 1099,
        image: "🧴"
    },

    {
        id: 15,
        name: "Hair Care Set",
        category: "Beauty",
        price: 699,
        image: "🧖"
    },

    {
        id: 16,
        name: "Travel Care Kit",
        category: "Beauty",
        price: 599,
        image: "👜"
    }

];


let cart = [];


/*DISPLAY PRODUCTS*/

function displayProducts(productList) {

    const grid = document.getElementById("productGrid");

    grid.innerHTML = "";

    productList.forEach(product => {

        grid.innerHTML += `

            <div class="product">

                <div class="product-image">
                    ${product.image}
                </div>

                <div class="product-info">

                    <h3>
                        ${product.name}
                    </h3>

                    <p class="product-category">
                        ${product.category}
                    </p>

                    <p class="price">
                        ₹${product.price}
                    </p>

                    <button
                        class="add-btn"
                        onclick="addToCart(${product.id})"
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        `;

    });

}


/*CATEGORY*/

function showCategory(category) {

    const filteredProducts =
        products.filter(
            product => product.category === category
        );

    document.getElementById("productTitle")
        .textContent = category;

    displayProducts(filteredProducts);

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/*ADD TO CART*/

function addToCart(id) {

    const product =
        products.find(product => product.id === id);

    cart.push(product);

    updateCart();

}


/*UPDATE CART*/

function updateCart() {

    document.getElementById("cartCount")
        .textContent = cart.length;

    const cartItems =
        document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `

            <div class="cart-item">

                <div>

                    <strong>
                        ${item.name}
                    </strong>

                    <p>
                        ₹${item.price}
                    </p>

                </div>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>

            </div>

        `;

    });

    document.getElementById("cartTotal")
        .textContent = total;

}


/*REMOVE FROM CART*/

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


/*OPEN CART*/

function openCart() {

    document.getElementById("cartOverlay")
        .style.display = "flex";

}


/*CLOSE CART*/

function closeCart() {

    document.getElementById("cartOverlay")
        .style.display = "none";

}


/*INITIAL PRODUCTS*/

displayProducts(products);