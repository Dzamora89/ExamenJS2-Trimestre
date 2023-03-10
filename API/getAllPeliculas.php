<?php

header('Access-Control-Allow-Origin: *');

include_once './BD.php';
// Instate the DB and Connection
$result = BD::getAllPeliculas();
echo json_encode($result);


