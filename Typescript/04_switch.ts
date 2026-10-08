type Personaje  =
|"Luke Skywalker"
|"ºDarth Vader"
|"Leia Organa"
|"Han Solo"
|"Yoda"


let personaje: Personaje = "Luke Skywalker";

switch (personaje) {
    case "Luke Skywalker":
        console.log("Luke Skywalker es un Jedi");
        break;
    case "Darth Vader":
        console.log("Darth Vader es un Sith");
        break;
    case "Leia Organa":
        console.log("Leia Organa es una princesa");
        break;
    case "Han Solo":
        console.log("Han Solo es un contrabandista");
        break;
    case "Yoda":
        console.log("Yoda es un maestro Jedi");
        break;
    default:
        console.log("Personaje desconocido");
}

type Jedis = "Luke" | "Obiwan" | "Yoda";

let jedi:Jedis = "Luke";
let nivelFuerza: number = 100;
let tieneSable: boolean = true;

