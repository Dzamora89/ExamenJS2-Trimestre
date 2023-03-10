

$(document).ready(cargar)
function cargar() {
	const salas = [];
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
			$('#salasSelect').html('');
			$('#salasSelect').append(' <option selected hidden="hidden">Selecciona la Sala</option>')
			response.forEach((dato) => {
				$('#salasSelect').append(`<option value="${dato.idSala}">${dato.nombreSala}</option>`)
				salas.push(dato);
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

	$(document).on('change', '#salasSelect' , (element) => {
		let valor = $('#salasSelect').val()
		let sala = salas.find(element => element.idSala === parseInt(valor));
		$('#filas').val(sala.filas)
		$('#butacas').val(sala.butacas)
	})
}


$(document).on('click', '#actualizarid', () => {
	$.ajax({
		  // the server script you want to send your data to
			'url': '../api/updatesala.php',
			// all of your POST/GET variables
			'data':$('#formulario').serialize(),
			// you may change this to GET, if you like...
			'type': 'post',
			// the kind of response that you want from the server
			'dataType': 'html',
			'beforeSend': function () {
				// anything you want to have happen before sending the data to the server...
				// useful for "loading" animations
			}
		})
		.done( function (response) {
			// what you want to happen when an ajax call to the server is successfully completed
			// 'response' is what you get back from the script/server
			// usually you want to format your response and spit it out to the page
			$('#filas').val('')
			$('#butacas').val('')
			cargar()
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