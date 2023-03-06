<?php
//Header

header('Access-Control-Allow-Origin: *');


include_once './BD.php';
// Instate the DB and Connection
$pelicula = BD::getPelicula($_GET['id']);

$array_Pelicula = array(
    'idPelicula' => $pelicula->getIdPelicula(),
    'nombrePelicula' => $pelicula->getNombrePelicula(),
    'duracion' => $pelicula->getDuracion(),
    'imagen' => $pelicula->getImagen(),
    'descripcion' => $pelicula->getDescripcion(),
    'proyectadas' => $pelicula->getProyectadas()
);

print_r(json_encode($array_Pelicula));