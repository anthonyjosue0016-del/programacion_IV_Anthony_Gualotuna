fun main(){
    val portales = mutableListOf("Tierra", "Marte", "Saturno")

    var option: Int
    do {
        println("Laboratorio de Apellido Nombre")
        println("1. Agregar Portal")
        println("2. Mostrar Portales")
        println("3. Modificar Portal")
        println("4. Eliminar Portal")
        println("5. Agregar Portal")
        option = readLine()!!.toInt()
        when(options){
            1->{
                val nombre = readLine()!!
                portales.add(nombre)
                println("Portal Incluido")
            }
            2->{
                println("Portales")
                for (portal in portales){
                    println("Portal: $Portal")
                }
            }
            3->{
                println("Eliminar")
                println("Indicer Eliminar")
                val indice = readLine()!!
                if(indice in portales.indices){
                    println("Nuevo Nombre")
                    portales.removeAt(indice)
                    println("Portal Eliminado")
                }else{
                    println("Indice no Valido")
                }
            }
        }
    }
}