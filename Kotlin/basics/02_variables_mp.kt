const val NOMBRE_RESTAURANTE = "Sabor Casero"

fun main() {
    println("Restaurante: $NOMBRE_RESTAURANTE")
    println("Menu del dia")

    val nombrePlato: String = "Seco de pollo"
    val precioPlato: Double = 4.50
    var platosDisponibles: Int = 20
    val tienePostre: Boolean = true
    val categoria: Char = 'P'

    println("Plato: $nombrePlato")
    println("Categoria: $categoria")
    println("Precio: $$precioPlato")
    println("Platos disponibles: $platosDisponibles")
    println("Incluye postre: $tienePostre")

    platosDisponibles -= 1
    println("Platos restantes despues de un pedido: $platosDisponibles")
}
