<?php
include './Model/InfoBasica.php';
include './Model/Peliculas.php';
include './Model/Proyecciones.php';
include './Model/Salas.php';

class BD
{
    public static function realizarConexion() {
        try {
            $conexion = new PDO("mysql:host=localhost; dbname=labutaca","root", "");
            $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $conexion->exec("SET CHARACTER SET utf8");
            return $conexion;
        }
        catch(Exception $e)
        {
            echo "Error al realizar la conexión: " . $e->getMessage();
            return null;
        }
    }
}
