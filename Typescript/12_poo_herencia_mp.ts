class PlatoRestaurante {
    mostrarEnMenu(): void {
        console.log("El plato aparece en el menu")
    }
}

class Hamburguesa extends PlatoRestaurante {
    agregarAcompanamiento(): void {
        console.log("La hamburguesa se sirve con papas")
    }
}

class Pizza extends PlatoRestaurante {
    agregarIngrediente(): void {
        console.log("La pizza lleva queso")
    }
}

const hamburguesa = new Hamburguesa();
hamburguesa.mostrarEnMenu();
hamburguesa.agregarAcompanamiento();
const pizza = new Pizza();
pizza.mostrarEnMenu();
pizza.agregarIngrediente();
