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

            $sql = 'Select peliculas.idPelicula, peliculas.nombrePelicula, peliculas.duracion,
                        peliculas.imagen, peliculas.descripcion, peliculas.proyectadas, salas.nombreSala
            From labutaca.peliculas 
                join labutaca.salas on labutaca.peliculas.proyectadas = labutaca.salas.idSala
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


    public static function getAllPeliculas() {
        try {

            /*
             * Cambiar la Tabla si lo que necesito es otra cosa
             */

            $sql = 'Select peliculas.idPelicula, peliculas.nombrePelicula, peliculas.duracion,
                        peliculas.imagen, peliculas.descripcion,peliculas.proyectadas, salas.nombreSala
            From labutaca.peliculas 
                join labutaca.salas on labutaca.peliculas.proyectadas = labutaca.salas.idSala';

            $conexion = self::realizarConexion();
            $resultado = $conexion->prepare($sql);
            $resultado->execute();
            $rowNumber = $resultado->rowCount();

            if ($rowNumber > 0) {
                //Driver Array
                $peliculaArray = array();
//    $post_Array['Data'] = [];
                while ($row = $resultado->fetch(PDO::FETCH_ASSOC)) {
                    extract($row);
                    $peliculaItem = array(
                        'idPelicula' => $idPelicula,
                        'nombrePelicula' => $nombrePelicula,
                        'duracion' => $duracion,
                        'imagen' => $imagen,
                        'descripcion' => $descripcion,
                        'proyectadas' => $proyectadas,
                        'nombreSala' => $nombreSala
                    );
                    $peliculaArray[] = $peliculaItem;
                }
                //Turn into Json & Output
                return $peliculaArray;

            } else {
                //No found
                echo json_encode(array(
                    'message' => 'No post found'
                ));
        }}
        catch (Exception $e)
        {
            /*
             * Si la funciona da error retornara Null;
             */
            echo "Error al realizar la conexión: " . $e->getMessage();
            return null;
        }
    }

    public static function getAllSalas() {
        try {
            /*
             * Cambiar la Tabla si lo que necesito es otra cosa
             */
            $sql = 'Select *
            From labutaca.salas';

            $conexion = self::realizarConexion();
            $resultado = $conexion->prepare($sql);
            $resultado->execute();
            $rowNumber = $resultado->rowCount();

            if ($rowNumber > 0) {
                $array = array();
                while ($row = $resultado->fetch(PDO::FETCH_ASSOC)) {
                    extract($row);
                    $item = array(
                        'idSala' => $idSala,
                        'nombreSala' => $nombreSala,
                        'filas' => $filas,
                        'butacas' => $butacas
                    );
                    $array[] = $item;
                }
                return $array;
            } else {
                echo json_encode(array(
                    'message' => 'No sala found'
                ));
            }
        }catch (Exception $e) {
            /*
             * Si la funciona da error retornara Null;
             */
            echo "Error al realizar la conexión: " . $e->getMessage();
            return null;
        }
        return null;
    }

    public static function updateSala($idSala, $filas, $butacas){
        try {
            $sql = "UPDATE labutaca.salas
                    set filas = :filas,
                        butacas = :butacas
                    where idSala = :idSala";

            $conexion = BD::realizarConexion();
            $resultado = $conexion->prepare($sql);
            $resultado->bindParam(':filas', $filas);
            $resultado->bindParam(':butacas', $butacas);
            $resultado->bindParam(':idSala', $idSala);
            $resultado->execute();
            $afectados = $resultado->rowCount();
            $conexion = null;
            $resultado->closeCursor();
            if ($afectados == 1) {
                return "Modificacion realizada";
            }else {
                return "Modificacion Fallida";
            }
        }catch (Exception $e){
            /*
            * Si la funciona da error retornara Null;
            */
            echo "Error al realizar la conexión: " . $e->getMessage();
            return null;
        }

    }

    public static function getSala($id) {
        try {

            /*
             * Cambiar la Tabla si lo que necesito es otra cosa
             */

            $sql = 'Select *
            from labutaca.salas
            where idSala = :id';

            $conexion = self::realizarConexion();
            $resultado = $conexion->prepare($sql);

            $resultado->bindParam(':id', $id);
            $resultado->execute();
            return new Salas($resultado->fetch(PDO::FETCH_ASSOC));
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
