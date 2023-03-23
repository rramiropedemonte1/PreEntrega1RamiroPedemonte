let nombre = "Los merjores Sneakers!";
console.log(nombre)

class Compra {
    constructor(carrito) {
        this.carrito = carrito
    }

    total() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acc, producto)=>
            acc + producto.precio)
        } else {
            return "Error en la compra"
        }
    }

    sneakerConfirmarCompra() {
        if (this.total() !== "Error en la compra") {
            return `Ya acreditamos su pago de $ ${this.total()}. \n Disfrute de su Sneaker 👟`
        }
    }
}




    




















