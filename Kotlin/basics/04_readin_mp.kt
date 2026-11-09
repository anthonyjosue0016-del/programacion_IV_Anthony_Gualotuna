fun main() {
    val menu = listOf(
        "1. Seco de pollo - $4.50",
        "2. Hamburguesa - $6.50",
        "3. Ensalada - $3.75"
    )

    println("Bienvenido al restaurante Sabor Casero")
    print("¿Como te llamas? ")
    val nombre = readLine()?.trim().orEmpty()

    if (nombre.isEmpty()) {
        println("No ingresaste un nombre.")
        return
    }

    println("Hola, $nombre. Este es nuestro menu:")
    menu.forEach { println(it) }
    print("Escribe el numero del plato que deseas: ")

    val opcion = readLine()?.trim()?.toIntOrNull()
    val plato = when (opcion) {
        1 -> "Seco de pollo"
        2 -> "Hamburguesa"
        3 -> "Ensalada"
        else -> null
    }

    if (plato == null) {
        println("La opcion ingresada no es valida.")
    } else {
        println("Pedido registrado para $nombre: $plato")
    }
}
