let platosPreparados = 0;
const metaDePreparacion = 5;

while (platosPreparados < metaDePreparacion) {
    platosPreparados++;
    console.log(`Plato preparado: ${platosPreparados}`);
}

let numeroDeMesa = 1;
while (numeroDeMesa <= 5) {
    console.log(`Revisando la mesa ${numeroDeMesa}`);
    numeroDeMesa++;
}

let pedidosAtendidos = 0;
let pedidosConPostre = 0;
while (pedidosAtendidos < 5) {
    pedidosAtendidos++;
    const incluyePostre = Math.random() < 0.5;
    if (incluyePostre) {
        pedidosConPostre++;
        console.log(`Pedido ${pedidosAtendidos}: incluye postre. Total: ${pedidosConPostre}`);
    } else {
        console.log(`Pedido ${pedidosAtendidos}: no incluye postre. Total: ${pedidosConPostre}`);
    }
}

let platosDelDia = 0;
do {
    platosDelDia++;
    console.log(`Plato del día ${platosDelDia}`);
} while (platosDelDia < 3);

interface PlatoMenu {
    nombre: string;
    categoria: string;
    precio: number;
}

const menuDisponible: PlatoMenu[] = [
    { nombre: "Sopa de verduras", categoria: "Entrada", precio: 4 },
    { nombre: "Pollo a la plancha", categoria: "Plato principal", precio: 12 },
    { nombre: "Pasta Alfredo", categoria: "Plato principal", precio: 10 },
    { nombre: "Tarta de chocolate", categoria: "Postre", precio: 5 }
];

let indice = 0;
while (indice < menuDisponible.length) {
    const plato = menuDisponible[indice];
    if (plato === undefined) {
        break;
    }
    if (plato.categoria === "Entrada") {
        indice++;
        continue;
    }
    if (plato.precio > 10) {
        break;
    }
    console.log(`Plato: ${plato.nombre}, Categoría: ${plato.categoria}, Precio: $${plato.precio}`);
    indice++;
}
