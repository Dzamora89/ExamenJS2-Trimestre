<?php
header('Access-Control-Allow-Origin: *');

include_once './BD.php';
BD::updateSala($_POST['select'], $_POST['filas'], $_POST['butacas']);