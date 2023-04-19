const contenedorSneakers = document.querySelector(".container-items")
console.log(sneakers)

const mostrarProductos = (sneakers) => {
    sneakers.forEach(sneaker => {
        const cardProducto = document.createElement("div")
        cardProducto.innerHTML = `
        <img class="destacados" src="${sneaker.imagen}" alt="${sneaker.nombre}">
            <div class="info-product">
                <h4>${sneaker.nombre}</h4>
                <p class="price">$${sneaker.precio}</p>
                <button id="${sneaker.id}">Añadir al carrito</button>
            </div>
        `

        contenedorSneakers.appendChild(cardProducto)

    })
    const button = document.querySelectorAll("button")
    button.forEach(el => {
        el.addEventListener("click", (e) =>{
            agregarAlCarrito(e.target.id)
        })
    })
}




mostrarProductos(sneakers)

const carrito = []

function agregarAlCarrito(id){
    console.log(id)
    let sneakerEncontrado = sneakers.find(sneaker => sneaker.id === parseInt(id))

    carrito.push(sneakerEncontrado)
    console.log(carrito)
}

