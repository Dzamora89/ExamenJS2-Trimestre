<?php
include "./BD.php";

try {
    $sql = 'Select * from labutaca.infocine';
    $conn = BD::realizarConexion();
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $fila = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($fila);
}catch (PDOException $e){
    echo $e->getMessage();
}
