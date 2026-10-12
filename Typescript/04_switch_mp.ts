type Plato = "Hamburguesa" | "Pizza" | "Ensalada" | "Pasta" | "Postre"


let plato: Plato = prompt("Ingrese plato (Hamburguesa, Pizza, Ensalada, Pasta, Postre):") as Plato;

switch (plato) {
    case "Hamburguesa":
        console.log("La hamburguesa es un plato principal");
        break;
    case "Pizza":
        console.log("La pizza es un plato principal");
        break;
    case "Ensalada":
        console.log("La ensalada es una opción ligera");
        break;
    case "Pasta":
        console.log("La pasta es un plato principal");
        break;
    case "Postre":
        console.log("El postre es una opción dulce");
        break;
    default:
        console.log("Plato desconocido");
}

type CategoriasMenu = "Entrada" | "Plato principal" | "Postre";

let categoria: CategoriasMenu = "Plato principal";
let precio: number = 10;
let disponible: boolean = true;
