// Funciones Simples

function sumarCreditos(credito1: number, credito2: number): number {
    return credito1 + credito2;
}

const totalCreditos = sumarCreditos(10, 20);
console.log(`Total de créditos: ${totalCreditos}`);
// Sin devolver un valor
function mostrarcentroDeEntrenamiento(nombre: string): void {
    console.log(`Centro de Entrenamiento Jedi: ${nombre}`);
    const naves: string[] = ["X-Wing", "TIE Fighter", "Millennium Falcon"];
    for (const nave of naves) {
        console.log(`Nave disponible: ${nave}`);
    }
}

mostrarcentroDeEntrenamiento("Templo Jedi");

//Funciones con parámetros opcionales
function entrenarJedi(nombre: string, nivel?: number): void {
    if (nivel !== undefined) {
        console.log(`El Jedi: ${nombre}está entrenando en el Nivel: ${nivel}`);
    } else {
        console.log(`El Jedi: ${nombre} está entrenando`);
        nivel = 1;
        console.log(`Nivel de entrenamiento por defecto: ${nivel}`)
    }
}

entrenarJedi("Luke Skywalker",5);
entrenarJedi("Yoda");
function entrenarJedi2(nombre: string, nivel?: number): void {
        console.log(`El Jedi: ${nombre}está entrenando en el Nivel: ${nivel}`);
    }
entrenarJedi2("Leia Organa",5);
entrenarJedi2("obi-Wan Kenobi");

//Funciones Flecha
function potenciarFuerza(fuerza: number): number {
    return fuerza * 2;
}
const potenciarFuerzaFlecha = (fuerza: number): number => fuerza * 2;

const fuerzaOriginal = 50;
const fuerzaPotenciada = potenciarFuerza(fuerzaOriginal);
console.log(`Fuerza original: ${fuerzaOriginal}, Fuerza potenciada: ${fuerzaPotenciada}`);

const fuerzaPotenciadaFlecha: number = potenciarFuerzaFlecha(fuerzaOriginal);
console.log(`Fuerza original: ${fuerzaOriginal}, Fuerza potenciada (Flecha): ${fuerzaPotenciadaFlecha}`);