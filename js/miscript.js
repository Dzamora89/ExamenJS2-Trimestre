
/*
Trozo de Codigo Encargado de la seccion de Reservas
 */
$('#reserva').on('click',() => {
    /*
    Cargamos los datos de seccion Entrada
     */
    $.ajax({
        url: '../seccionEntradas.html',
        success: (respuesta) => {
            $('#principal').html(respuesta)
            $('#seleccionEntradas').toggleClass('d-none')
            $('.peliculas').empty()
            $.ajax({
            	  // the server script you want to send your data to
            		'url': '../APi/getAllPeliculas.php',
            		// all of your POST/GET variables
            		'data': {
            			// 'dataname': $('input').val(), ...
            		},
            		// you may change this to GET, if you like...
            		'type': 'post',
            		// the kind of response that you want from the server
            		'dataType': 'json',
            		'beforeSend': function () {
            			// anything you want to have happen before sending the data to the server...
            			// useful for "loading" animations
            		}
            	})
            	.done( function (response) {
            		// what you want to happen when an ajax call to the server is successfully completed
            		// 'response' is what you get back from the script/server
            		// usually you want to format your response and spit it out to the page
                    response.forEach((data) => {
                        if (data.proyectadas > 0){
                            $('.peliculas').append(filaPeliculaHtml(data.idPelicula, data.nombrePelicula, data.duracion, data.nombreSala,data.proyectadas))
                        }
                    })
            	})
            	.fail( function (code, status) {
            		// what you want to happen if the ajax request fails (404 error, timeout, etc.)
            		// 'code' is the numeric code, and 'status' is the text explanation for the error
            		// I usually just output some fancy error messages
            	})
            	.always( function (xhr, status) {
            		// what you want to have happen no matter if the response is success or error
            		// here, you would "stop" your loading animations, and maybe output a footer at the end of your content, reading "done"
            	});




            /*
                Actividad 3: Modal para la info de la pelicula
            */


            $('#Peliculas').on('click' , '.btn-primary', (element) => {
                    $.ajax({
                    	  // the server script you want to send your data to
                    		'url': './API/getPelicula.php',
                    		// all of your POST/GET variables
                    		'data': {
                    			 'id': $(element.currentTarget).val()
                    		},
                    		// you may change this to GET, if you like...
                    		'type': 'get',
                    		// the kind of response that you want from the server
                    		'dataType': 'json',
                    		'beforeSend': function () {
                    			// anything you want to have happen before sending the data to the server...
                    			// useful for "loading" animations
                    		}
                    	})
                    	.done( function (response) {
                             $('#ModalInfo').html(`
                                    <div class="modal-content w-50 d-flex justify-content-center m-auto">
                                        <div class="modal-header">
                                            <h5 class="modal-title">${response.nombrePelicula} </h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Duracion: ${response.duracion} Minutos</p>
                                            <p>${response.descripcion}</p>
                                        </div>
                                        <img class="img-fluid w-50 m-auto" src="${response.imagen}">
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                `)
                    	})
                    	.fail( function (code, status) {
                    		// what you want to happen if the ajax request fails (404 error, timeout, etc.)
                    		// 'code' is the numeric code, and 'status' is the text explanation for the error
                    		// I usually just output some fancy error messages
                    	})
                    	.always( function (xhr, status) {
                    		// what you want to have happen no matter if the response is success or error
                    		// here, you would "stop" your loading animations, and maybe output a footer at the end of your content, reading "done"
                    	});
            })




        },
        error: (error) => {
            console.log(error)
        }
    });

})

/*
    Mostramos la seccion de Map en la web
 */

$('#map').on('click', () => {
    $.ajax({
        url: '../maps.html',
        success: (respuesta) => {
            $('#principal').html(respuesta)

        },
        error: (error) => {
            console.log(error)
        }
    });
})


/*
Mostramos la seccion de Acerca de  #AcercaDe
 */

$('#acercaDe').on('click', () => {
    $.ajax({
        url: '../API/acercaDe.php',
        dataType: 'json',
        success: (respuesta) => {
            $('#principal').html(`
            <div class="container d-flex justify-content-center align-items-center flex-column mt-5">
              <h1> ${respuesta.nombreCine} </h1>
              <h3>Construido en  ${respuesta.anoConstruccion}</h3>
            </div>
            
            `)

        }
    })
    $.ajax({
    	  // the server script you want to send your data to
    		'url': '../api/getAllSalas.php',
    		// all of your POST/GET variables
    		'data': {
    			// 'dataname': $('input').val(), ...
    		},
    		// you may change this to GET, if you like...
    		'type': 'post',
    		// the kind of response that you want from the server
    		'dataType': 'json',
    		'beforeSend': function () {
    			// anything you want to have happen before sending the data to the server...
    			// useful for "loading" animations
    		}
    	})
    	.done( function (response) {
    		// what you want to happen when an ajax call to the server is successfully completed
    		// 'response' is what you get back from the script/server
    		// usually you want to format your response and spit it out to the page
            response.forEach(sala => {
                if (sala.idSala != 4) {
                    let aforo = parseInt(sala.filas) * parseInt(sala.butacas)
                    $('#principal').append(`
                <div class="container d-flex justify-content-center align-items-center flex-column mt-5">
                    <h1> ${sala.nombreSala} </h1>
                    <h3>Aforo: ${aforo}</h3>
                </div>
            `)
                }
            })

    	})
    	.fail( function (code, status) {
    		// what you want to happen if the ajax request fails (404 error, timeout, etc.)
    		// 'code' is the numeric code, and 'status' is the text explanation for the error
    		// I usually just output some fancy error messages
    	})
    	.always( function (xhr, status) {
    		// what you want to have happen no matter if the response is success or error
    		// here, you would "stop" your loading animations, and maybe output a footer at the end of your content, reading "done"
    	});
})



/*
Funcion que selecciona la sala y la pelicula para la que se quiere comprar la pelicula
 */
function seleccionarPelicula(indice,proyectadas){
    $('#entradasSeleccionadas').html('')
    $('.peliculas').children().each(function (){
        $( this ).css('backgroundColor', $('.peliculas').css('backgroundColor'))
    })
    $(`#sel${indice}`).css('backgroundColor', 'lightgrey')
    $.ajax({
    		'url': './Api/get1sala.php?id=' + proyectadas,
            'data': {
                'id': proyectadas
            },
    		'type': 'GET',
    		'dataType': 'json'
    	})
    	.done( function (response) {
            /*
           Con esto dibujamos las butacas.Todo: Seria Necesario tener algun dato para saber cuales estan ocupadas y cuales no
            */
            $('#butacas').html('');
            for (let i = 0; i < response.filas; i++) {
                $('#butacas').append(`<div class="filaButacas d-flex justify-content-center " id="fila${i}">  </div>`)
                for (let j = 0; j < response.butacas; j++) {
                    if (j === (parseInt(response.butacas)/2)){
                        $(`#fila${i}`).append(`<img id="fila:${i+1}:butaca:${j+1}:sala:${indice}" src="../img/silla.png" class="butaca ms-5">`)
                    }else {
                        $(`#fila${i}`).append(`<img id="fila:${i+1}:butaca:${j+1}:sala:${indice}" src="../img/silla.png" class="butaca">`)
                    }
                }
            }
            /*
           Evento que me cambia el color de las butacas
            */

    	})
    	.fail( function (code, status) {
    		// what you want to happen if the ajax request fails (404 error, timeout, etc.)
    		// 'code' is the numeric code, and 'status' is the text explanation for the error
    		// I usually just output some fancy error messages
    	})




}
const entradasSeleccionadas = [];
$(document).on('click','.butaca',(event) => {
    let source = $(event.target).attr('src');
    let libre = '../img/silla.png'
    let ocupado = '../img/silla-roja.png'
    let seleccionado = '../img/silla-verde.png'
    let id = $(event.target).attr('id');
    let idCortado = id.split(':')
    if (source === libre) {
        $(event.target).attr('src',seleccionado)
        $('#entradasSeleccionadas').append(`
                <div id="Tarjetafila${idCortado[1]}butaca${idCortado[3]}sala${idCortado[5]}" class="card">
                <div class="card-body">
                    <h5 class="card-title">Entrada Seleccionada</h5>
                    <p class="card-text">Fila ${idCortado[1]} Butaca ${idCortado[3]}</p>
                </div>
            </div>
                `)
    }
    if (source === ocupado){
        alert('Esa butaca no esta disponible')
    }
    if (source === seleccionado){
        $(event.target).attr('src',libre)
        let idTarjeta = `#Tarjetafila${idCortado[1]}butaca${idCortado[3]}sala${idCortado[5]}`
        $(idTarjeta).remove()
    }

})

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
function filaPeliculaHtml(indice, nombre, minutos, nombreSala,proyectadas) {
    return `<div id="sel${indice}" class='fila mt-3 d-flex justify-content-between align-items-center'>
    <div class='col-9 ps-2'>
    <p class='fw-bold mb-0 fs-5'> ${nombre} <button value="${indice}"  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ModalInfo">
<i class="bi bi-info-circle"></i></button></p>\
    <span class='text-muted'>${minutos} minutos</span>\
    </div>
    <div class='col-3'>
    <button onclick='seleccionarPelicula(${indice},${proyectadas})' class='btn btn-warning'>${nombreSala}</button>\
    </div></div>`
}
