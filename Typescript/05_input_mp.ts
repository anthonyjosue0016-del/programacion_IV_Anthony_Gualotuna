let plato = prompt("Ingrese plato (Hamburguesa, Pizza, Ensalada, Pasta, Postre):");
let edad = Number(prompt("Ingrese edad del cliente:"));
let presupuesto = Number(prompt("Ingrese presupuesto disponible:"));


if (plato === "Hamburguesa" || plato === "Pizza" || plato === "Ensalada" || plato === "Pasta" || plato === "Postre") {
    if (edad >= 18 && edad <= 100) {
        if (presupuesto >= 0 && presupuesto <= 100) {
            console.log(`Plato: ${plato}, Edad: ${edad}, Presupuesto: ${presupuesto}`);
        } else {
            console.log("Presupuesto inválido. Debe estar entre 0 y 100.");
        }
    } else {
        console.log("Edad inválida. Debe estar entre 18 y 100.");
    }
}
