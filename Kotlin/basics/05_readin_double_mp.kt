fun main() {
    println("Registro de pedido - Restaurante Sabor Casero")
    print("Nombre del cliente: ")
    val nombre = readLine()?.trim().orEmpty()

    if (nombre.isBlank()) {
        println("Debes ingresar el nombre del cliente.")
        return
    }

    print("Cantidad de platos: ")
    val cantidad = readLine()?.trim()?.toIntOrNull()
    if (cantidad == null || cantidad <= 0) {
        println("La cantidad debe ser un numero mayor que cero.")
        return
    }

    print("Precio por plato: ")
    val precio = readLine()?.trim()?.toDoubleOrNull()
    if (precio == null || precio < 0) {
        println("El precio ingresado no es valido.")
        return
    }

    print("Pago recibido: ")
    val pago = readLine()?.trim()?.toDoubleOrNull()
    if (pago == null || pago < 0) {
        println("El pago ingresado no es valido.")
        return
    }

    val total = cantidad * precio
    val diferencia = pago - total

    println("Resumen del pedido")
    println("Cliente: $nombre")
    println("Cantidad de platos: $cantidad")
    println("Precio por plato: $$precio")
    println("Total a pagar: $$total")

    if (diferencia >= 0) {
        println("Cambio: $$diferencia")
    } else {
        println("Saldo pendiente: $${-diferencia}")
    }
}
