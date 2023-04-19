let cartIcon = document.querySelector("#cart-icon")
let cart = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")

// ABRIR Y CERRAR CART


cartIcon.onclick = () => {
    cart.classList.add("active")
}



closeCart.onclick = () => {
    cart.classList.remove("active")
}

// 


if (document.readyState == 'loading') {
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready()
}

function ready() {
    // remove items de las carts
    let reomveCartButtons = document.getElementsByClassName("cart-remove")
    console.log(reomveCartButtons)
    for (let i = 0; i < reomveCartButtons.length; i++) {
        let button = reomveCartButtons [i]
        button.addEventListener('click', removeCartItem)
    }
}



// cambios de cantiadad

let quantityInputs = document.getElementsByClassName("cart-quantity")
for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i]
    input.addEventListener("change", quantityChanged)
}




function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove()
    updateTotal()
}


// cambios de cantidad


function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateTotal()
}



// total


function updateTotal() {
    let cartContent = document.getElementsByClassName("cart-content") [0]
    let cartBoxes = cartContent.getElementsByClassName("cart-box")
    for (let i = 0; i < cartBoxes.length; i++){
        let total = 0
        let cartBox = cartBoxes[i]
        let priceElement = cartBox.getElementsByClassName("cart-price")[0]
        let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0]
        let price = parseFloat(priceElement.innerText.replace("$", ""))
        let quantity = quantityElement.value
        total = total + (price * quantity)

        document.getElementsByClassName("total-price"[0].innerText = "$" + total)
    }
}
