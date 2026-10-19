// Funciones simples
function sumarPrecios(precio1: number, precio2: number): number {
    return precio1 + precio2;
}

const totalEntradas = sumarPrecios(4, 5);
console.log(`Total de las entradas: $${totalEntradas}`);

// Funciones sin devolver un valor
function mostrarMenu(nombreRestaurante: string): void {
    console.log(`Menú de ${nombreRestaurante}:`);
    const platos: string[] = ["Sopa de verduras", "Pollo a la plancha", "Tarta de chocolate"];
    for (const plato of platos) {
        console.log(`Plato disponible: ${plato}`);
    }
}

mostrarMenu("El Buen Sabor");

// Funciones con parámetros opcionales
function registrarPedido(nombreCliente: string, cantidad?: number): void {
    if (cantidad !== undefined) {
        console.log(`Pedido de ${nombreCliente}: ${cantidad} plato(s).`);
    } else {
        cantidad = 1;
        console.log(`Pedido de ${nombreCliente}: ${cantidad} plato por defecto.`);
    }
}

registrarPedido("Ana", 3);
registrarPedido("Luis");

function mostrarPrecioConPropina(precio: number, propina?: number): void {
    const porcentajePropina = propina ?? 10;
    const total = precio + precio * porcentajePropina / 100;
    console.log(`Total con propina: $${total.toFixed(2)}`);
}

mostrarPrecioConPropina(20, 15);
mostrarPrecioConPropina(20);

// Funciones flecha
function aplicarDescuento(precio: number): number {
    return precio * 0.9;
}

const aplicarDescuentoFlecha = (precio: number): number => precio * 0.9;

const precioOriginal = 25;
const precioConDescuento = aplicarDescuento(precioOriginal);
console.log(`Precio original: $${precioOriginal}, con descuento: $${precioConDescuento.toFixed(2)}`);

const precioConDescuentoFlecha: number = aplicarDescuentoFlecha(precioOriginal);
console.log(`Precio original: $${precioOriginal}, con descuento (flecha): $${precioConDescuentoFlecha.toFixed(2)}`);
