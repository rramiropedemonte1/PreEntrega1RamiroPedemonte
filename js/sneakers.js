const contenedorSneakers = document.querySelector(".container-items")
let botonesAgregar = document.querySelectorAll("button")
const numerito = document.querySelector("#numerito")

function mostrarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("item")
        div.innerHTML = `
        <img class="destacados" src="${producto.imagen}" alt="${producto.nombre}">
            <div class="info-product">
                <h4>${producto.nombre}</h4>
                <p class="price">$${producto.precio}</p>
                <button id="${producto.id}">Añadir al carrito</button>
            
            </div> `

            contenedorSneakers.append(div)
            

    })
    actualizarBotonesAgregar()

}

mostrarProductos(productos)


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll("button")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}


const productosEnCarrito = []

function agregarAlCarrito(e) {
    const idBoton = parseInt(e.currentTarget.id)
    const productoAgregado = productos.find(producto => producto.id === idBoton)

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
       const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++
    }else {
        productoAgregado.cantidad = 1
        productosEnCarrito.push(productoAgregado)
    }  
    
    actualizarNumerito()
    

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))

}


function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) =>acc + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito
    
}






