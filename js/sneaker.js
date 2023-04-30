const contenedorSneakers = document.querySelector(".container-items")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numero = document.querySelector("#numero")


function mostrarProductos() {
    sneakers.forEach(sneaker => {
        const div = document.createElement("div")
        div.classList.add("item")
        div.innerHTML = `
        <img class="destacados" src="${sneaker.imagen}" alt="${sneaker.nombre}">
            <div class="info-product">
                <h4>${sneaker.nombre}</h4>
                <p class="price">$${sneaker.precio}</p>
                <button class="producto-agregar" id="${sneaker.id}">Añadir al carrito</button>
            
            </div> `

            contenedorSneakers.append(div)
            

    })
    
    actualizarBotones()

}

mostrarProductos(sneakers)


function actualizarBotones() {
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    });
}


const carrito = []

function agregarAlCarrito(e) {
    const buttonId = e.currentTarget.id
    const sneakerAgregado = sneakers.find(sneaker => sneaker.id === buttonId)

    if (carrito.some(sneaker => sneaker.id === buttonId)){
        const index = carrito.findIndex(sneaker => sneaker.id === buttonId)
        carrito[index].cantidad++
    }else{
        sneakerAgregado.cantidad = 1
        carrito.push(sneakerAgregado)
    }   
    numeroSube()

    localStorage.setItem("nuevo-carrito", JSON.stringify(carrito))
    
}

function numeroSube() {
    let otroNumero = carrito.reduce((acc, sneaker) => acc + sneaker.cantidad, 0)
    numero.innerText = otroNumero
}
