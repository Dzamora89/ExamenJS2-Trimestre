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


    /*
     * Funcion para obtener 1 registro de la Base de datos
     */

    public static function getPelicula($id){
        try {

            /*
             * Cambiar la Tabla si lo que necesito es otra cosa
             */

            $sql = 'Select * 
            From labutaca.peliculas
            where idPelicula = :id';

            $conexion = self::realizarConexion();
            $resultado = $conexion->prepare($sql);

            $resultado->bindParam(':id', $id);
            $resultado->execute();
            return new Peliculas($resultado->fetch(PDO::FETCH_ASSOC));
        }
        catch (Exception $e)
        {
            /*
             * Si la funciona da error retornara Null;
             */
            echo "Error al realizar la conexión: " . $e->getMessage();
            return null;
        }
    }

}
