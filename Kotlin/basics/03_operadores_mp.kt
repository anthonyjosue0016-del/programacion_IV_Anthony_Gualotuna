const val PRECIO_MINIMO_PEDIDO = 5.0

fun main() {
    println("Menu del restaurante - operadores")

    val precioHamburguesa = 6.50
    val precioBebida = 1.50
    val cantidad = 2

    val subtotal = (precioHamburguesa + precioBebida) * cantidad
    println("Subtotal: ($precioHamburguesa + $precioBebida) x $cantidad = $$subtotal")
    println("Descuento de 1 dolar: ${subtotal - 1.0}")
    println("Precio de dos bebidas: ${precioBebida * 2}")
    println("Precio de una hamburguesa dividido para dos: ${precioHamburguesa / 2}")
    println("Un dolar de residuo al dividir para dos: ${1.0 % 2}")

    println("Comparaciones")
    println("El pedido supera el minimo: ${subtotal >= PRECIO_MINIMO_PEDIDO}")
    println("La bebida cuesta mas que la hamburguesa: ${precioBebida > precioHamburguesa}")
    println("El subtotal es igual a 16: ${subtotal == 16.0}")

    val localAbierto = true
    val hayHamburguesas = true
    val pedidoDisponible = localAbierto && hayHamburguesas
    println("Se puede pedir una hamburguesa: $pedidoDisponible")
    println("El local esta cerrado: ${!localAbierto}")

    var platosPreparados = 10
    platosPreparados -= cantidad
    println("Platos preparados restantes: $platosPreparados")
}
