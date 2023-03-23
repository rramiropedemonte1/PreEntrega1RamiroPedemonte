const carrito = []


const productos = [
    {id: 1 ,  nombre: "Air Jordan 1 High x Travis Scott" , precio: 70000},
    { id: 2 ,  nombre: "Air Force Low Pearl White", precio: 50000 },
    { id: 3 ,  nombre: "Nike Dunk Pale Ivory", precio: 62300 },
    { id: 4 ,  nombre: "Air Jordan Retro 4 Off-White", precio: 120500 },
    { id: 5 ,  nombre: "Air Jordan Retro 3 Triple White", precio: 89500 },
    { id: 6 ,  nombre: "Air Jordan Retro 5 Racer Blue", precio:  143300 },
    { id: 7 ,  nombre: "Air Jordan Retro 2 Black Varsity Royal", precio: 65000 },
    { id: 8 ,  nombre: "Air Jordan Retro 6 Midnight Navy", precio: 98500 }

]

const tarjetas = [
    {Nombre:"Visa"}, {Nombre:"Mastercard"}, {Nombre:"Naranja"}, {Nombre: "Mercado Pago"}
]


const mensajeInicial = "Selecciona tu Sneaker según orden numerico (1 - 8)"


function buscarSneaker(id) {
    let resultado = productos.find((producto) =>{
        return producto.id === parseInt(id)
    })
    return resultado
}


function verCarrito() {
    console.table(carrito)
}


function finalizarCompra() {
    if (carrito.length > 0) {
        let Nombre = prompt("¿Con que metodo de pago quiere abonar?")
        if (!parseInt(Nombre)) {
            alert("Muchas gracias por su compra")
        }
    } else {
        if (respuesta !== tarjetas){
            alert("No existe la tarjeta ingresada")
        }
    }
}




function ComprarSneaker() {
    let id = prompt(mensajeInicial)
    if (!parseInt(id)) {
        alert("No existe el Sneaker ingresado")
        let respuesta = confirm ("¿Quieres volver a intentar?")
        if (respuesta) {
            ComprarSneaker()
        }
        return
    }

    let SneakerElegido = buscarSneaker(id)
     if (SneakerElegido !== undefined) {
        alert (` ${SneakerElegido.nombre} seleccionado se agrego al carrito, con un precio de $${SneakerElegido.precio}`)
        carrito.push(SneakerElegido)
        let respuesta = confirm ("¿Quieres llevar otro sneaker?")
        if (respuesta) {
            ComprarSneaker()
        } else {
            finalizarCompra()
        }
     } else {
        alert("No existe el sneaker seleccionado")
        let respuesta = confirm ("¿Quieres volver a intentar?")
        if (respuesta) {
            ComprarSneaker()
        }
        return
     }


}