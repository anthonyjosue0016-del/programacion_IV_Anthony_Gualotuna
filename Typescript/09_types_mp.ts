type Identificador = string | number;
type CategoriaMenu = "Entrada" | "Plato principal" | "Postre";
type CoordenadasMesa = [number, number];

type Ubicacion = {
    fila: number;
    columna: number;
};

const mesaPrincipal: Ubicacion = { fila: 1, columna: 1 };
const idPedido: Identificador = 42;
const idCliente: Identificador = "cli-001";
const mesaTerraza: CoordenadasMesa = [2, 4];

type PlatoCompleto = Ubicacion & {
    nombre: string;
    precio: number;
};

const platoEspecial: PlatoCompleto = {
    fila: 1,
    columna: 2,
    nombre: "Lomo saltado",
    precio: 14
};

interface Plato {
    readonly id: number;
    nombre: string;
    categoria: CategoriaMenu;
    precio: number;
    descripcion?: string;
}

interface PlatoPromocional extends Plato {
    porcentajeDescuento: number;
}

const sopa: Plato = {
    id: 1,
    nombre: "Sopa de verduras",
    categoria: "Entrada",
    precio: 4,
    descripcion: "Sopa preparada con verduras frescas"
};

const postre: Plato = {
    id: 2,
    nombre: "Tarta de chocolate",
    categoria: "Postre",
    precio: 5
};

const promocion: PlatoPromocional = {
    id: 3,
    nombre: "Pizza familiar",
    categoria: "Plato principal",
    precio: 20,
    porcentajeDescuento: 15
};

console.log(mesaPrincipal, mesaTerraza);
console.log(`Pedido: ${idPedido}, Cliente: ${idCliente}`);
console.log(platoEspecial);
console.log(sopa);
console.log(postre);
console.log(promocion);
