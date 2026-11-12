

import costoViajefun
import costoViaje main(){
    println("Condicionales If")
    println("Condicional Simple o un camino")
    val energia = 80
    if ( energia>=50){
        println("Rick puede abrir el portal")
    }

    println("Condicional if-else o dos caminos")
    energia =30
    if(energia>=50){
        println("Rick puede abrir el portal")
    } else {
        println("Energía Insuficiente")
    }

    println("Condicional multiple")
    energia =70
    if(energia>=100){
        println("Rick puede abrir el portal")
    } else if (energia>=50){
        println("Energía suficiente")
    } else {
        println("Energía Insuficiente")
    }

    println("Condicional enlazada")
    energia =70
    val motorActivo = true
    if(energia>=100){
        println("Rick puede abrir el portal")
        if (motorActivo){
            println("Puede Despegar")
        }
    } else if (energia>=50){
        println("Energía suficiente")
        if (motorActivo){
            println("Puede Despegar")
        }
    } else {
        println("Energía Insuficiente")
    }

}





