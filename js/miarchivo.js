let nombre = "Los merjores Sneakers!";
console.log(nombre)

let mensajePrecio = ""

const mensaje = "Ingrese su modelo de sneaker favorito: \n"+
"a) Air Jordan \n"+
"b) Nike Dunk \n"+
"c) Air Force \n"+
"d) Retro \n"

function Precios(){
    let sneaker = prompt(mensaje).toLowerCase().trim()


    if (sneaker !== "a" && sneaker !== "b" && sneaker !== "d" && sneaker !== "d"){
        alert("Debes ingresar un modelo de sneaker valido")
        return Precios()
    }


    switch(sneaker) {
        case "a":
            mensajePrecio = "Air Jordan cuesta $70.000"
            break        
        case "b":
            mensajePrecio = "Nike Dunk cuesta $62.300"
            break
        case "c":
             mensajePrecio = "Air Force cuesta $50.000"
        break
        case "d": mensajePrecio = "Retro cuesta desde $65.000 hasta $143.000"
            default: 
    }
    alert(mensajePrecio)


    }




















