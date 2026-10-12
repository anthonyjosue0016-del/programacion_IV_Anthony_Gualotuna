//ciclo for
for (let i = 2; i < 50; i+=5) {
    console.log('Entrenamiento Jedi: ${i}');
}

for (let i = 40; i > 0; i-=5) {
    console.log('Entrenamiento Jedi: ${i}');
    if (i === 20) {
        console.log('El entrenamiento Jedi ha terminado');
        break;
    }
    if (i === 30){
        console.log('El entrenamiento Jedi ha sido interrumpido');
        continue;
    }
    console.log('Entrenamiento Jedi: ${i}');

}

const planetas: Record<string, number> = {
    "Tatooine": 1000,
    "Hoth": 500,
    "Endor": 750
};

for (const planeta in planetas) {
    console.log('Planeta: ${planeta}, Población: ${planetas[planeta]}');
}

const distancias: Record<string, number> = {
    "Tatooine": 1000,
    "Hoth": 500,
    "Endor": 750
};

for (const planeta of Object.keys(distancias)) {
    console.log('Planeta: ${planeta}, Distancia: ${distancias[planeta]}');
}

const criaturasStarWars: string [] = ["Wampa ", "Tauntaun", "Rancor", "Sarlacc", "Ewok"];
criaturasStarWars.forEach((criatura, index) => {
    console.log('Criatura ${index + 1}: ${criatura}');
});

criaturasStarWars.map((criatura, index) => {
    console.log('Criatura ${index + 1}: ${criatura}');
});

