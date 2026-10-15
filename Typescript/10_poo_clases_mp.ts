class PlatoRestaurante {
    public nombre: string;
    public precio: number;
    public disponible: boolean;

    constructor(nombre: string, precio: number, disponible: boolean) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    mostrarEnMenu(): void {
        const estado = this.disponible ? "Disponible" : "Agotado";
        console.log(`${this.nombre}: $${this.precio} - ${estado}`);
    }

    cambiarPrecio(nuevoPrecio: number): void {
        if (nuevoPrecio > 0) {
            this.precio = nuevoPrecio;
            console.log(`El precio de ${this.nombre} se actualizó.`);
        }
    }
}

const hamburguesa = new PlatoRestaurante("Hamburguesa de la casa", 12, true);
const ensalada = new PlatoRestaurante("Ensalada César", 8, true);

hamburguesa.mostrarEnMenu();
ensalada.mostrarEnMenu();
hamburguesa.cambiarPrecio(13);
hamburguesa.mostrarEnMenu();
