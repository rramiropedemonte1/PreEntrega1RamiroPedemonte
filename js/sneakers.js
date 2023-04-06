const carrito = []


const productos = [
    {id: 1 ,  nombre: "Air Jordan 1 High x Travis Scott" ,precio: 70000},

    { id: 2 ,  nombre: "Air Force Low Pearl White", precio: 50000 },

    { id: 3 ,  nombre: "Nike Dunk Pale Ivory", precio: 62300 },

    {imagen: src="./img/jordan 4/Nike AirJordan 4 Retro Off-White Sail.jpg", id: 4 ,  nombre: "Air Jordan Retro 4 Off-White", precio: 120500 },

    { id: 5 ,  nombre: "Air Jordan Retro 3 Triple White", precio: 89500 },

    { id: 6 ,  nombre: "Air Jordan Retro 5 Racer Blue", precio:  143300 },

    { id: 7 ,  nombre: "Air Jordan Retro 2 Black Varsity Royal", precio: 65000 },

    { id: 8 ,  nombre: "Air Jordan Retro 6 Midnight Navy", precio: 98500 }

]

// 


const mensajeInicial = "Selecciona tu Sneaker según orden numerico (1 - 8)"


function buscarSneaker(id) {
    let resultado = productos.find((producto) =>{
        return producto.id === parseInt(id)
    })
    return resultado
}



function activarClickBotones() {
    const buttons = document.querySelectorAll("button")
    for (boton of buttons) {
        boton.addEventListener("click", (e)=>{
            agregarAlCarrito(e.target.id)
        })
    }
}


function agregarAlCarrito(id) {
    let resultado = productos.find(producto => producto.id === parseInt(id))
    if (resultado !== undefined) {
        carrito.push(resultado)
        console.log("Se agrego el producto", resultado.nombre, "al carrito")
        guardarElCarrito(carrito)
    }
}


function guardarElCarrito(carrito) {
    if (carrito.length > 0) {
        localStorage.setItem("carritoSneakers", JSON.stringify(carrito)
        )
    }
}


function recuperarCarrito() {
    const carritoRecuperado = JSON.parse(localStorage.getItem("carritoSneakers"))
    if (carritoRecuperado.length > 0) {
        carrito.push(...carritoRecuperado)
    }
}
recuperarCarrito()


function finalizarCompra() {
    let totalCarrito = carrito.reduce((acc, prenda)=> acc + producto.precio)
    alert("El importe del carrito es de: $" + totalCarrito)
}



function eliminarDelCarrito(codigo) {
    let borrar = carrito.findIndex((producto)=> producto.id === codigo)
    borrar > -1 && carrito.splice(borrar, 1)
}


// const tarjetas = [
//     {Nombre:"Visa"}, {Nombre:"Mastercard"}, {Nombre:"Naranja"}, {Nombre: "Mercado Pago"}
// ]

// function finalizarCompra() {
//     if (carrito.length > 0) {
//         let Nombre = prompt("¿Con que metodo de pago quiere abonar?")
//         if (!parseInt(Nombre)) {
//             alert("Muchas gracias por su compra")
//         }
//     } else {
//         if (respuesta !== tarjetas){
//             alert("No existe la tarjeta ingresada")
//         }
//     }
// }




// function ComprarSneaker() {
//     let id = prompt(mensajeInicial)
//     if (!parseInt(id)) {
//         alert("No existe el Sneaker ingresado")
//         let respuesta = confirm ("¿Quieres volver a intentar?")
//         if (respuesta) {
//             ComprarSneaker()
//         }
//         return
//     }

//     let SneakerElegido = buscarSneaker(id)
//      if (SneakerElegido !== undefined) {
//         alert (` ${SneakerElegido.nombre} seleccionado se agrego al carrito, con un precio de $${SneakerElegido.precio}`)
//         carrito.push(SneakerElegido)
//         let respuesta = confirm ("¿Quieres llevar otro sneaker?")
//         if (respuesta) {
//             ComprarSneaker()
//         } else {
//             finalizarCompra()
//         }
//      } else {
//         alert("No existe el sneaker seleccionado")
//         let respuesta = confirm ("¿Quieres volver a intentar?")
//         if (respuesta) {
//             ComprarSneaker()
//         }
//         return
//      }


// }