//ciclo for
for (let i = 2; i < 50; i += 5) {
    console.log(`Pedido número: ${i}`);
}

for (let i = 40; i > 0; i -= 5) {
    console.log(`Pedido número: ${i}`);
    if (i === 20) {
        console.log("El servicio ha terminado");
        break;
    }
    if (i === 30) {
        console.log("El servicio ha sido interrumpido");
        continue;
    }
    console.log(`Pedido número: ${i}`);

}

const platos: Record<string, number> = {
    "Hamburguesa": 10,
    "Pizza": 15,
    "Ensalada": 8
};

for (const plato in platos) {
    console.log(`Plato: ${plato}, Precio: ${platos[plato]}`);
}

const precios: Record<string, number> = {
    "Hamburguesa": 10,
    "Pizza": 15,
    "Ensalada": 8
};

for (const plato of Object.keys(precios)) {
    console.log(`Plato: ${plato}, Precio: ${precios[plato]}`);
}

const platosEspeciales: string[] = ["Sopa", "Pasta", "Arroz", "Pollo", "Postre"];
platosEspeciales.forEach((plato, index) => {
    console.log(`Plato ${index + 1}: ${plato}`);
});

platosEspeciales.map((plato, index) => {
    console.log(`Plato ${index + 1}: ${plato}`);
});
