<?php

header('Access-Control-Allow-Origin: *');

include_once './BD.php';
// Instate the DB and Connection
/*
$result = BD::getAllSalas();
echo json_encode($result);
*/
print_r(json_encode(BD::getAllSalas()));