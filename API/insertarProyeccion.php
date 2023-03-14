<?php
include_once './BD.php';
BD::insertarProyeccion(
    $_POST['idPelicula'],
    $_POST['idSala']
);
BD::updatePeliculaProyeccion(
    $_POST['idPelicula'],
    $_POST['idSala']
);

