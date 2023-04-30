const contenedorSneakers = document.querySelector(".container-items")
let botonesAgregar = document.querySelectorAll(".producto-agregar")


function mostrarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("item")
        div.innerHTML = `
        <img class="destacados" src="${producto.imagen}" alt="${producto.nombre}">
            <div class="info-product">
                <h4>${producto.nombre}</h4>
                <p class="price">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Añadir al carrito</button>
            
            </div> `

            contenedorSneakers.append(div)
            

    })
    
    actualizarBotonesAgregar()

}

mostrarProductos(productos)


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    });
}


const carrito = []

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idBoton)
    console.log(productoAgregado)
}

   









