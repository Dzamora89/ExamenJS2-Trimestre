<?php
include_once './BD.php';
echo BD::insertarEntrada(
    $_POST['sala'],
    $_POST['pelicula'],
    $_POST['proyeccion'],
    $_POST['fila'],
    $_POST['butaca'],
    $_POST['idUsuario']
);