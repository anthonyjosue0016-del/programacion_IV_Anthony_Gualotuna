fun main() {
    println("Condicionales If - Restaurante Sabor Casero")

    println("Condicional simple")
    val platosDisponibles = 8
    if (platosDisponibles > 0) {
        println("Hay platos disponibles para ordenar.")
    }

    println("Condicional if-else")
    val cantidadSolicitada = 3
    if (cantidadSolicitada <= platosDisponibles) {
        println("El pedido se puede preparar.")
    } else {
        println("No hay suficientes platos disponibles.")
    }

    println("Condicional multiple")
    val hora = 13
    if (hora < 11) {
        println("Menu de desayunos")
    } else if (hora < 16) {
        println("Menu de almuerzos")
    } else {
        println("Menu de cenas")
    }

    println("Condicional enlazada")
    val localAbierto = true
    val totalPedido = 12.50
    val pagoRecibido = 15.00

    if (localAbierto) {
        println("El restaurante esta abierto.")
        if (platosDisponibles >= cantidadSolicitada) {
            println("Hay suficientes platos para el pedido.")
            if (pagoRecibido >= totalPedido) {
                println("Pedido confirmado. Cambio: $${pagoRecibido - totalPedido}")
            } else {
                println("El pago no cubre el total del pedido.")
            }
        } else {
            println("No hay suficientes platos disponibles.")
        }
    } else {
        println("El restaurante esta cerrado.")
    }
}
