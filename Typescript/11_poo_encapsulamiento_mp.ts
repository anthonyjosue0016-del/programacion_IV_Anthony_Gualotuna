// Encapsulamiento del stock disponible para cada plato
class PlatoConStock {
    private cantidadDisponible: number;

    constructor(
        public nombre: string,
        cantidadInicial: number
    ) {
        this.cantidadDisponible = Math.max(0, cantidadInicial);
    }

    vender(cantidad: number): boolean {
        if (cantidad <= 0 || cantidad > this.cantidadDisponible) {
            return false;
        }
        this.cantidadDisponible -= cantidad;
        return true;
    }

    consultarStock(): number {
        return this.cantidadDisponible;
    }
}

const platoDelDia = new PlatoConStock("Pollo a la plancha", 10);
console.log(`Stock inicial de ${platoDelDia.nombre}: ${platoDelDia.consultarStock()}`);

if (platoDelDia.vender(3)) {
    console.log("Pedido registrado correctamente.");
} else {
    console.log("No hay suficientes platos disponibles.");
}

console.log(`Stock restante: ${platoDelDia.consultarStock()}`);
