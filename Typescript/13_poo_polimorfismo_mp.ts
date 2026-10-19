abstract class PlatoRestaurante {
    abstract preparar(): void;
    mostrarEnMenu(): void {
        console.log("El plato esta disponible en el menu")
    }
}

class Ensalada extends PlatoRestaurante {
    preparar(): void {
        console.log("Se prepara una ensalada fresca")
    }
}

class Pasta extends PlatoRestaurante {
    preparar(): void {
        console.log("Se prepara una pasta")
    }
}

const platos: PlatoRestaurante[] = [
    new Ensalada(),
    new Pasta(),
]
console.log(platos);
platos.forEach(plato => plato.preparar());
