const val MAX_PORTALES=10
fun main(){
    var energia =100
    println(energia)
    println("Autor: Anthony Gualotuña")
    energia= 80
    println("Energia")
    println(energia)
    println("Tipos de Varibales en Kotlin")
    var edad: Int = 14
    var portales: Int = 10
    print("edad : $edad")
    println("portales : $portales")
    print("Tipo Long")
    var particulas: Long = 9000000000L
    println("Particulas : $particulas")
    println("Tipo Float")
    var combustible: Float = 45.5f
    println("Combustible : $combustible")
    println("Tipo Double")
    var distancia: Double = 12.50.55
    println("Distancia : $distancia")
    var particulas: Long = 9000000000L
    println("Particulas : $particulas")
    println("Tipo Char un Caracter")
    var codigo: Char = 'C'
    print("Codigo : $codigo")
    println("Tipo String")
    var nombre: String = "Morty Smith"
    var dimension: String = "C-137"
    print("Nombre: $nombre, Dimension: $dimension")
    println("Tipo Boolean")
    var portalActivo: Boolean = true
    println("portalActivo: $portalActivo")

    println("VAL CONST VAR")
    val cientifico: "Rick Sanchez"
    val portalesDisponibles=5
    println("Nombre del cientifico: $cientifico")
    println("Portales Disponibles: $portalesDisponibles")
    println("Constante Limite: $MAX_PORTALES")
}