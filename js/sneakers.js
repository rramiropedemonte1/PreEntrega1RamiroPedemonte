const contenedorSneakers = document.querySelector(".container-items")


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
    

}

mostrarProductos(productos)



   









