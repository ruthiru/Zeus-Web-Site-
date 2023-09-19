let total = 0;
let itemsInCart = 0;
const shopping_cart = [];

function AddToCart(id) {
    const button = document.getElementById(id);

    //set button to remove from cart
    button.classList.replace("add_to_cart", "remove_cart");

    //update the text on the button
    button.getElementsByTagName("span")[0].innerText = "Remove from cart";

    const quantityId = `${parseInt(id)}_quantity`;
    const quantity = document.getElementById(quantityId);

    //disabled the quantity button
    quantity.disabled = true;
    const cart = document.querySelector("#cart");

    //add the items to order list
    const item = document.createElement("tr");
    const item_name = document.createElement("td");

    item_name.classList.add("order-item");
    item_name.innerText = button.getAttribute("data-itemName") + " x " + quantity.value;
    item.append(item_name);

    const itemprice = document.createElement("td");
    itemprice.innerText = button.getAttribute("data-price") * quantity.value + " LKR";
    item.append(itemprice);
    item.id = `order-${id}`;
    cart.prepend(item);

    //calculating total
    total += parseFloat(button.getAttribute("data-price")) * quantity.value;
    itemsInCart += 1;
    // GetTotal();

    shopping_cart.push({
        name: button.getAttribute("data-itemName"),
        quantity: quantity.value,
        price: button.getAttribute("data-price") * quantity.value,
    });

    //set the button to red
    button.classList.replace("add_to_cart", "remove_cart");

    button.onclick = function () {
        RemoveFromCart(id);
    };
}
//remove from the cart and set to button as add to cart
function RemoveFromCart(id) {
    const button = document.getElementById(id);

    const quantityId = `${parseInt(id)}_quantity`;
    const quantity = document.getElementById(quantityId);

    button.classList.replace("remove_cart", "add_to_cart");
    button.getElementsByTagName("span")[0].innerText = "Add to Cart";
    button.onclick = function () {
        AddToCart(id);
    };
    const item = document.querySelector(`#order-${id}`);
    document.querySelector("#cart").removeChild(item);
    total -= parseFloat(button.getAttribute("data-price")) * quantity.value;
    itemsInCart -= 1;
    // GetTotal();

    //remove item from cart array
    shopping_cart.splice(
        {
            name: button.getAttribute("data-itemName"),
            quantity: quantity.value,
            price: button.getAttribute("data-price") * quantity.value,
        },
        1
    );

    //enable the quantity button
    quantity.disabled = false;
}

//update the total after adding a item
function GetTotal() {
    document.querySelector("#totalOrder").innerHTML = `${roundToTwo(total)} LKR`;

    //upate the number of items in the floating cart
    if (itemsInCart === 0) {
        const cart = document.querySelector("#items_in_cart");
        cart.classList.remove("d-inline-block");
        cart.classList.add("d-none");
    } else {
        const cart = document.querySelector("#items_in_cart");
        cart.classList.remove("d-none");
        cart.classList.add("d-inline-block");
        cart.innerHTML = itemsInCart;
    }
}

//set display to block on the checkout page
function opencheckout(myvalue) {
    document.querySelector("#checkout-popout").classList.add("d-block");
    document.querySelector("#checkout-popout").classList.remove("d-none");
    document.querySelector("#shop_section").classList.add("d-none");

    let total = 0;
    shopping_cart.forEach((item) => {
        total += item.price;
    });
    document.querySelector("#totalOrder").innerHTML = `${total} LKR`;
}

//set display to none on the checkout page
function closecheckout() {
    document.querySelector("#checkout-popout").classList.remove("d-block");
    document.querySelector("#checkout-popout").classList.add("d-none");
    document.querySelector("#shop_section").classList.remove("d-none");
}
