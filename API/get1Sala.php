<?php
//Header

header('Access-Control-Allow-Origin: *');


include_once './BD.php';
// Instate the DB and Connection

$sala = BD::getSala($_GET['id']);
$array_Sala = array(
    'idSala' => $sala->getIdSala(),
    'nombreSala' => $sala->getNombreSala(),
    'filas' => $sala->getFilas(),
    'butacas' => $sala->getButacas()
);
print_r(json_encode($array_Sala));
