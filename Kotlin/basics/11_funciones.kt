fun activarPortal(){
    println("Activando portal interdimensional")
    println("Conteo Regresivo")
    println("3")
    println("2")
    println("1")
    println("Anthony Gualotuña activo el Portal")
}

fun viajar(dimension: String){
    println("Viajando a $dimension")
    val total =viajes*consumo
    println("Consumo Total : $total")
}



fun calcularPrecio(precio: Double): Double{
    var descuento : Double=0.0
    if (precio>=100){
        descuento =precio*0.15
    }
    return descuento
}
fun calcularEnergiaTotal(energias: Array<Int>){
    var total=0
    for (energia in energias){
        total+=energia
        if(energia>=100){
            println("Sobre energia $energia")
        }
    }
    return total
}


fun main(){
    activarPortal()
    activarPortal()
    viajar("TIERRA",5,4)
    viajar("MARTE",4,7)
    val decuentoCliente = calcularPrecio(123.5)
    println("El cliente Anthoy tiene este descuento : $descuentoCliente")
    val totalEnergias=arrayOf(30,50,80,100,60)
    println("Energia total $totalEnergias")
}