fun main() {
    println("Inputs en terminal Readline")
    println("¿Cómo te llamas?")

    val nombre = readLine()

    println("Welcome a otro universo: $nombre")
    println("Cristales de Rick: ")
    val cristalesRick = readLine()!!.toInt()
    println("cristalesMorty: ")
    val cristalesMorty = readLine()!!.toInt()
    val total = cristalesRick+cristalesMorty
    println("Total de cristales: $total")

    println("Calculadora de Energía")
    println("Energía Inicial")
    val energiaInicial = readLine( )!!.toInt()
    println("Energía Consumida")
    val energiaConsumida = readLine()!!.toInt()
    val energiaRestante = energiaInicial-energiaConsumida
    println("Energía restante $energiaRestante")


}
