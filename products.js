var cart = [];

var cartCountElement = document.getElementById("cart-count");
var totalPriceElement = document.getElementById("total-price");


    // Function to add items to the cart
    function addToCart(productId) {
        // Retrieve product information based on the productId
        var productInfo = getProductInfo(productId);

        // Add the product to the cart array
        if (productInfo.stock > 0) {
            // Prompt the user to enter the quantity
            var quantity = prompt("Enter the quantity:");
    
            // Parse the quantity as an integer
            quantity = parseInt(quantity);
    
            // Check if the quantity is a valid number
            if (!isNaN(quantity) && quantity > 0) {
                // Check if the ordered quantity is greater than the available stock
                if (quantity > productInfo.stock) {
                    alert("Sorry, the ordered quantity is greater than the available stock.");
                    return;
                }
                var totalCost = quantity * productInfo.price;

                // Add the product to the cart array
                cart.push({
                    id: productId,
                    name: productInfo.name,
                    price: productInfo.price,
                    quantity: quantity,
                    totalCost: totalCost
                });
    
                // Update stock count
                productInfo.stock -= quantity;
    
                updateCartDisplay();
                updateTotalPrice();
            } else {
                alert("Invalid quantity. Please enter a valid number.");
            }
        } else {
            alert("Sorry, this item is out of stock.");
        }
    }


    /*function removeFromCart(productId) {
        var index = cart.findIndex(item => item.id === productId);
        if (index !== -1) {
            cart.splice(index, 1);
            updateCartDisplay();
            updateTotalPrice();
        }
    }
*/




    // Function to retrieve product information based on productId
    function getProductInfo(productId) {
        // Implement logic to fetch product information from your data
        // You may have an array or object containing product details
        // For simplicity, a dummy object is used here
        var products = {
            product1:{name:"Rina cooking oil 10ltrs",price:16.34,stock:25},
            product2:{name:"Fresh fry cooking oil 10ltrs",price:16.01,stock:25},
            product3:{name:"Golden frycooking oil 10ltrs",price:15.69,stock:31},
            product4:{name:"Pika  cooking oil 10ltrs",price:16.01,stock:21},
            product5:{name:"fresh fri cooking oil 2ltrs",price:2.75,stock:40},
            product6:{name:"fresh fri garlic cooking oil 2ltrs",price:2.75,stock:26},
            product7:{name:"Top fry cooking oil 2ltrs",price:2.48,stock:19},
            product8:{name:"golden fry cooking oil 3ltrs",price:4.64,stock:34},
            product9:{name:"Kabras sugar 2kg",price:3.398,stock:42},
            product10:{name:"Kabras sugar 1kg",price:1.69,stock:50},
            product11:{name:"Mara sugar 2kg",price:3.33,stock:56},
            product12:{name:"Mara sugar 1kg",price:1.57,stock:38},
            product13:{name:"Ndhiwa sugar 2kg",price:3.46,stock:25},
            product14:{name:"Ndhiwa sugar 1kg",price:1.63,stock:3},
            product15:{name:"Kensalt 500g",price:0.26,stock:40},
            product16:{name:"Kensalt 1kg",price:0.42,stock:25},
            product17:{name:"Kensalt 2kg",price:0.75,stock:25},
            product18:{name:"Daawat pishori 5kg original",price:6.21,stock:20},
            product19:{name:"Daawat pishori long grain 5kg",price:6.34,stock:25},
            product20:{name:"Mwea original 2kg",price:3.5,stock:10},
            product21:{name:"Mwea brown rice 1kg",price:1.24,stock:50},
            product22:{name:"Local rice",price:1.05,stock:60},
            product23:{name:"Pembe maize flour 5kg",price:3.79,stock:25},
            product24:{name:"Pembe maize flour 2kg",price:1.24,stock:19},
            product25:{name:"Soko maize flour 2kg",price:1.31,stock:30},
            product26:{name:"Ajab maize flour 2kg",price:1.37,stock:25},
            product27:{name:"Dola maize flour 2kg",price:1.27,stock:25},
            product28:{name:"Santa maria 400g",price:1.14,stock:16},
            product29:{name:"Santa Lucia 400g",price:1.14,stock:25},
            product30:{name:"Daawat spaghetti 400g",price:0.55,stock:31},
            product31:{name:"Ranee spaghetti 400g",price:0.52,stock:21},
            product32:{name:"Ajab all purpose wheat flour 2kg",price:1.44,stock:21},
            product33:{name:"Dola wheat flour 2kg",price:1.31,stock:15},
            product34:{name:"Exe all purpose wheat flour 2kg",price:1.41,stock:23},
            product35:{name:"Pembe wheat flour 2kg",price:1.37,stock:18},
            product36:{name:"Soko all purpose wheat flour 2kg",price:1.31,stock:21},

            
        };

        return products[productId];
    }

    // Function to update the cart display
    function updateCartDisplay() {
        var cartItemsContainer = document.getElementById("cart-items");
        cartItemsContainer.innerHTML = ""; // Clear previous items

        // Iterate through the cart and display each item
        cart.forEach(function (item) {
            var listItem = document.createElement("li");
            listItem.textContent = item.name + " - $" + item.price.toFixed(2);
            cartItemsContainer.appendChild(listItem);
        });

        cartCountElement.textContent = cart.length;
    }
    function updateTotalPrice() {
        var totalPriceElement = document.getElementById("total-price");
    
        // Calculate the total price
        var total = cart.reduce(function (sum, item) {
            return sum + item.totalCost;
        }, 0);
    
        // Update the total price display
        totalPriceElement.textContent = total.toFixed(2);
    }
    function checkout() {
        // Check if the cart is not empty
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items before checking out.");
            return;
        }
    
        // Calculate the total price
        var total = cart.reduce(function (sum, item) {
            return sum + item.totalCost;
        }, 0);
    
        // Display the total price to the user
        alert("Total Price: $" + total.toFixed(2));
    
        // Prompt the user for payment information (you can replace this with a more sophisticated payment form)
        var paymentMethod = prompt("Enter your credit card number to complete purchase:");
    
        // Perform payment processing (you would typically send this information to a server for processing)
        // For simplicity, let's just show a success message here
        if (confirm("Payment successful! Thank you for your purchase.")) {
            // Clear the cart and update the display
            cart = [];
            updateCartDisplay();
            updateTotalPrice();
        } else {
            alert("Payment failed. Please try again.");
        }
    }
    
    // Add an event listener to a checkout button or link in your HTML
    var checkoutButton = document.getElementById("checkout-button");
    checkoutButton.addEventListener("click", checkout);