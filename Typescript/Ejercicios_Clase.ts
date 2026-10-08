type TipoPokemon = "Fuego" | "Agua" | "Planta" | "Eléctrico";

type Entrenador = {
    nombre: string;
    edad: number;
    medallas: number;
    suspendido: boolean;
};

type Pokemon = {
    nombre: string;
    nivel: number;
    vida: number;
    ataque: number;
    defensa: number;
    tipo: TipoPokemon;
};

const entrenador: Entrenador = {
    nombre: "Ash",
    edad: 12,
    medallas: 8,
    suspendido: false,
};

const pokemon: Pokemon = {
    nombre: "Charizard",
    nivel: 85,
    vida: 120,
    ataque: 95,
    defensa: 70,
    tipo: "Fuego",
};

if (entrenador.medallas >= 8 && entrenador.edad >= 12 && !entrenador.suspendido) {
    console.log(`${entrenador.nombre} cumple con los requisitos de ingreso a la Liga Pokémon.`);

    if (pokemon.nivel >= 40 && pokemon.vida > 0 && (pokemon.tipo === "Fuego" || pokemon.tipo === "Agua" || pokemon.tipo === "Eléctrico")) {
        console.log(`${pokemon.nombre} cumple con los requisitos mínimos del Pokémon.`);

        if (pokemon.nivel >= 80 && pokemon.ataque >= 90 && pokemon.vida >= 100) {
            console.log(`${pokemon.nombre} ha sido clasificado como Maestro.`);
        } else if (pokemon.nivel >= 60 && (pokemon.ataque >= 75 || pokemon.defensa >= 80)) {
            console.log(`${pokemon.nombre} ha sido clasificado como Élite.`);
        } else if (pokemon.nivel >= 40 && pokemon.ataque >= 50 && pokemon.vida > 0) {
            console.log(`${pokemon.nombre} ha sido clasificado como Avanzado.`);
        } else {
            console.log(`El Pokémon no cumple con los criterios para ser clasificado.`);
        }
    } else {
        console.log("El Pokémon no cumple con los requisitos mínimos para participar.");
    }
} else {
    console.log("El entrenador no cumple los requisitos para participar en la Liga Pokémon.");
}