//condicionales

let presupuesto: number = 5
if (presupuesto < 5) {
    console.log("El cliente puede pedir una entrada");
}


// condicionales dobles o dos caminos

if (presupuesto < 16) {
    console.log("El cliente puede pedir un plato del menú");
} else {
    console.log("El cliente no tiene presupuesto para ese plato");
}

//condicionales multiples o varios caminos

if (presupuesto < 16) {
    console.log("El cliente puede pedir un plato del menú");
} else if (presupuesto >= 8) {
    console.log("El cliente puede pedir un plato especial");
} else {
    console.log("El cliente no puede pedir ningún plato");
}


//condicionales aninadas

if (presupuesto >= 16) {
    console.log("El cliente puede pedir un plato especial");
} else {
    if (presupuesto >= 8) {
        console.log("El cliente puede pedir un plato del menú");
    } else {
        console.log("El cliente no puede pedir ningún plato");
    }
}

presupuesto = -220;
let totalPedido: number = 25;

// condicionales if con operadores logicos

if (presupuesto >= 8 && presupuesto < 16 && totalPedido >= 20) {
    console.log("El cliente puede pedir un plato del menú");
} else if (presupuesto >= 16) {
    console.log("El cliente puede pedir un plato especial");
} else {
    console.log("El cliente no puede pedir ningún plato");
}





presupuesto = 5;
totalPedido = 25;
//condicionales if con operadores logicos or

if (presupuesto >= 8 || totalPedido >= 20) {
    console.log("El cliente puede pedir un plato del menú");
} else if (presupuesto >= 16) {
    console.log("El cliente puede pedir un plato especial");
} else {
    console.log("El cliente no puede pedir ningún plato");
}


//condicionales if
