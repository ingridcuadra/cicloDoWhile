let recomendacion, genero
do {
    recomendacion = prompt("¿Quiere que le recomendemos un libro?").toLowerCase()

    if(recomendacion != "si".toLowerCase()) {
        alert("¿No quiere o ingreso mal la respuesta?")
        recomendacion = prompt("Diga si para recibir una recomendación").toLowerCase()
    }

    genero = prompt("¿De qué género? Ingrese uno: terror, fantasía, romance").toLowerCase()

}while(recomendacion != "si")

switch(genero) {
    case "terror":
        alert(`Le recomendamos leer It de Stephen King`)
        break
    case "fantasía":
        alert(`Le recomendamos leer Harry Potter y la piedra filosofal de J.K. Rowling`)
        break
    case "romance":
        alert(`No tenemos una recomendación de ese género`)
}

alert("¡Hasta luego!")