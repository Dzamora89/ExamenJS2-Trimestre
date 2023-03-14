
function inicio() {
	$.ajax({
		// the server script you want to send your data to
		'url': '../Api/getAllPeliculas.php',
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
			$('#peliculas').html('')
			response.forEach(pelicula => {
				let options = rellenarSelect(pelicula.proyectadas)
				$('#peliculas').append(`
			<div class="container border-1 border d-flex flex-column flex-lg-row justify-content-lg-between">
				<h3 class="text-black">${pelicula.nombrePelicula}</h3>
				 <form id="guardarSala${pelicula.idPelicula}" action="" method="post">
				 	<select id="sala" class="form-select" name="idSala">
						${options}
					</select>
					<input type="text" name="idPelicula" id="" hidden="hidden" value="${pelicula.idPelicula}">
				</form>
			</div>
            `)
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
}
inicio();

function rellenarSelect(opcionSelected){
	let opciones = ''
	opcionSelected = parseInt(opcionSelected)
	if (opcionSelected === 1) {
		return `<option value="1" selected>Sala 1</option>
					<option value="2">Sala 2</option>
					<option value="3">Sala 3</option>
					<option value="4">Aun no se ha Proyectado</option>
					<option value="5">Ya Proyectada</option>`;
	}
	if (opcionSelected === 2) {
		return `<option value="1" >Sala 1</option>
					<option value="2" selected>Sala 2</option>
					<option value="3">Sala 3</option>
					<option value="4">Aun no se ha Proyectado</option>
					<option value="5">Ya Proyectada</option>`;
	}
	if (opcionSelected === 3) {
		return `<option value="1" >Sala 1</option>
					<option value="2">Sala 2</option>
					<option value="3" selected>Sala 3</option>
					<option value="4">Aun no se ha Proyectado</option>
					<option value="5">Ya Proyectada</option>`;
	}
	if (opcionSelected ===  4) {
		return `<option value="1" >Sala 1</option>
					<option value="2">Sala 2</option>
					<option value="3">Sala 3</option>
					<option value="4" selected>Aun no se ha Proyectado</option>
					<option value="5">Ya Proyectada</option>`;
	}
	if (opcionSelected ===  5) {
		return `<option value="1" >Sala 1</option>
					<option value="2">Sala 2</option>
					<option value="3">Sala 3</option>
					<option value="4" >Aun no se ha Proyectado</option>
					<option value="5" selected>Ya Proyectada</option>`;
	}
	return opciones
}


$(document).on('change', '#sala' , (event) => {

	$.ajax({
		  // the server script you want to send your data to
			'url': '../Api/insertarProyeccion.php',
			// all of your POST/GET variables
			'data': $(event.target).parent().serialize(),
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
			console.log(response)
		})
		.fail( function (code, status) {
			// what you want to happen if the ajax request fails (404 error, timeout, etc.)
			// 'code' is the numeric code, and 'status' is the text explanation for the error
			// I usually just output some fancy error messages
		})
		.always( function (xhr, status) {
			inicio()
			// what you want to have happen no matter if the response is success or error
			// here, you would "stop" your loading animations, and maybe output a footer at the end of your content, reading "done"
		});

})