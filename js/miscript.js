let listadoPeliculas = ["Avatar2. El camino del agua;192", "Babylon;189", "Los renglones torcidos de Dios;154"]
const listadoPelisJSON = []
let id = 0
listadoPeliculas.forEach((peli) => {
    let nombrePeli = peli.split(';')[0]
    let duraPeli = peli.split(';')[1]
    const pelijSon = {
        "id" : id++,
        "nombre" : nombrePeli,
        "duracion" : duraPeli,
        'selecionada' : false,
        'entradas' : []
    }
    listadoPelisJSON.push(pelijSon)
})


//La funcion para que muestre.

function mostrarReserva() {
    $('#seleccionEntradas').toggleClass('d-none')
    $('.peliculas').empty()
    listadoPelisJSON.forEach((peli) => {
        $('.peliculas').append(filaPeliculaHtml(peli.id,peli.nombre,peli.duracion))
    })

}

function seleccionarPelicula(indice){
    $('.peliculas').children().each(function (){
        $( this ).css('backgroundColor', $('.peliculas').css('backgroundColor'))
    })
    $('.peliculas').children().eq(indice).css('backgroundColor', 'lightgrey')

    listadoPelisJSON.forEach((peli) => {
        if (peli.id === indice){
            peli.selecionada = true
            $('#peliculaSeleccionada').text(peli.nombre)
        }else {
            peli.selecionada = false
        }
    })
}


function reservarPelicula(){
    let pelicula = listadoPelisJSON.find((peli) => peli.selecionada)
    if (pelicula === undefined){
        alert('1º Hay que selecionar una pelicula')
    }else {
        //Los damos como ok hasta que se demuestre le contrario
        let datosOK = true

        let nombre = $('#nombreEspectador').val()
        let fila = $('#filaEspectador').val()
        let butaca = $('#butacaEspectador').val()

        if (nombre === ''){
            datosOK = false
        }
        if (fila === ''){
            datosOK = false
        }
        if (butaca === ''){
            datosOK = false
        }

        if (!datosOK){
            alert("El nombre, la fila y la butaca son obligatorios")
            return false
        }



        let entradaOK = true
        pelicula.entradas.forEach((entrada) => {
            if (entrada.fila === fila && entrada.butaca === butaca){
                entradaOK = false
            }
        })

        if (!entradaOK){
            alert('Esa fila y butaca estan ocupadas')
            return false
        }



        if (datosOK && entradaOK){
            const entrada = {
                'titular' : nombre,
                'fila' : fila,
                'butaca' : butaca
            }
            pelicula.entradas.push(entrada)
            let espectadores = pelicula.entradas.length
            if (espectadores === 1){
                $('.listadoVendidas').append(tituloDePeliculaHtml(pelicula.nombre))
            }else {
                $('.listadoVendidas').find('.cabecera').each(function (){
                    if ($(this).children().eq(0).text() === pelicula.nombre){
                        $(this).children().eq(1).text(`${espectadores} asientos vendidos`)
                    }
                })
            }

            $('.listadoVendidas').find('.cabecera').each(function () {
                if ($(this).children().eq(0).text() === pelicula.nombre){
                    $(this).parent().append(filaReservaHtml(entrada.titular,entrada.fila,entrada.butaca,pelicula.nombre))
                }
            })
    }

}}



function borrar(pelicula, fila, butaca){
    let peliculaOBJ = listadoPelisJSON.find((peli) => peli.nombre === pelicula)
    $('.bi').parent().parent().click(function () {
        $(this).parent().remove()
    })
    peliculaOBJ.entradas.pop(peliculaOBJ.entradas.find((entrada) => entrada.fila === fila && entrada.butaca === butaca))
    let espectadores = peliculaOBJ.entradas.length

    if (espectadores === 0 ){
        $('.listadoVendidas').find('.cabecera').each(function (){
            if ($(this).children().eq(0).text() === peliculaOBJ.nombre){
                $(this).remove()
            }
        })
    }else {
        $('.listadoVendidas').find('.cabecera').each(function (){
            if ($(this).children().eq(0).text() === peliculaOBJ.nombre){
                $(this).children().eq(1).text(`${espectadores} asientos vendidos`)
            }
        })
    }
}









function tituloDePeliculaHtml(peliculaSeleccionada) {
    return "<div class='row'>\
    <div class='bg-secondary text-center text-white cabecera'>\
        <h3>" + peliculaSeleccionada + "</h3>\
        <p>1 asiento ocupado</p>\
    </div>"
}

function filaReservaHtml(nombre, fila, butaca, peliculaSeleccionada) {
    let filaHtml = "<div class='row'><div class='col-8 offset-1 border-bottom border-dark border-2 mt-2'>\
    <p>" + nombre + "</p>\
    <p>Fila: " + fila + "</p>\
    <p>Butaca: " + butaca + "</p>\
    </div>\
    <div class='col-2 d-flex align-items-center border-bottom border-dark border-2'>\
    <button class='btn' onclick='borrar(\""+ peliculaSeleccionada + "\"," + fila + "," + butaca + ")'><i class='bi bi-trash-fill'></i></button>\
    </div></div>"
    return filaHtml
}
function filaPeliculaHtml(indice, nombre, minutos) {
    let filaHtml = "<div class='fila mt-3 d-flex justify-content-between align-items-center'>\
    <div class='col-9 ps-2'>\
    <p class='fw-bold mb-0 fs-5'>" + nombre + "</p>\
    <span class='text-muted'>" + minutos + "minutos</span>\
    </div>\
    <div class='col-3'>\
    <button onclick='seleccionarPelicula(" + indice + ")' class='btn btn-warning'>Seleccionar</button>\
    </div></div>"
    return filaHtml
}