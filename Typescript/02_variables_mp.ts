//constantes
const PI = 3.14159;
const IVA: number = 15;
const SERVICIO_API: string = "menuRestaurant";
const ACTIVE: boolean = true;
console.log("Constantes:");
console.log("PI:", PI);
console.log("IVA:", IVA);
console.log("SERVICIO_API:", SERVICIO_API);
console.log("Menú ACTIVO:", ACTIVE);

//variables
//let
let contador: number = 0;
console.log(contador);
contador = 5;
console.log(contador);
contador++;
console.log(contador);
contador += 5;
console.log(contador);
contador = contador + 3;
console.log(contador);
let cliente: string = "Pedro Perez";
let pedidoPagado: boolean = false;
console.log(cliente);
console.log(pedidoPagado);

let menu: string[] = ["HAMBURGUESA", "PIZZA", "ENSALADA"];
console.log(menu);

let platoSeleccionado: string | null = null;
let platoEspecial: string | undefined;

let ventasAcumuladas: bigint = 987654321n;
//tipo symbol
let mesa1: symbol = Symbol("Mesa 1");
console.log(mesa1.description);
let mesa2: symbol = Symbol("Mesa 1");
console.log(mesa2);
console.log(mesa1 === mesa2);

let plato: {
    nombre: string;
    precio: number;
    cantidad: number;
    disponible: boolean;
} = {
    nombre: "Hamburguesa",
    precio: 5,
    cantidad: 1,
    disponible: true
};
