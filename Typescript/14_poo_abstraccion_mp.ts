class PlatoRestaurante {
    preparar(): void {
        console.log("Preparacion basica del plato")
    }
}

class Hamburguesa extends PlatoRestaurante {
    override preparar(): void {
        console.log("La hamburguesa se prepara a la parrilla")
    }
}

class Pizza extends PlatoRestaurante {
    override preparar(): void {
        console.log("La pizza se prepara en el horno")
    }
}

const platos: PlatoRestaurante[] = [
    new Hamburguesa(),
    new Pizza(),
]
platos.forEach(plato => plato.preparar());
