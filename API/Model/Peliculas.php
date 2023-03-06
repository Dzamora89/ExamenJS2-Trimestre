<?php

class Peliculas
{
    private $idPelicula;
    private $nombrePelicula;
    private $duracion;
    private $imagen;
    private $descripcion;
    private $proyectadas;

    /**
     * @param $fila
     */
    public function __construct($fila)
    {
        $this->idPelicula = $fila['idPelicula'];
        $this->nombrePelicula = $fila['nombrePelicula'];
        $this->duracion = $fila['duracion'];
        $this->imagen = $fila['imagen'];
        $this->descripcion = $fila['descripcion'];
        $this->proyectadas = $fila['proyectadas'];
    }

    /**
     * @return mixed
     */
    public function getIdPelicula()
    {
        return $this->idPelicula;
    }

    /**
     * @param mixed $idPelicula
     */
    public function setIdPelicula($idPelicula)
    {
        $this->idPelicula = $idPelicula;
    }

    /**
     * @return mixed
     */
    public function getNombrePelicula()
    {
        return $this->nombrePelicula;
    }

    /**
     * @return mixed
     */
    public function getProyectadas()
    {
        return $this->proyectadas;
    }

    /**
     * @param mixed $proyectadas
     */
    public function setProyectadas($proyectadas): void
    {
        $this->proyectadas = $proyectadas;
    }

    /**
     * @param mixed $nombrePelicula
     */
    public function setNombrePelicula($nombrePelicula)
    {
        $this->nombrePelicula = $nombrePelicula;
    }

    /**
     * @return mixed
     */
    public function getDuracion()
    {
        return $this->duracion;
    }

    /**
     * @param mixed $duracion
     */
    public function setDuracion($duracion)
    {
        $this->duracion = $duracion;
    }

    /**
     * @return mixed
     */
    public function getImagen()
    {
        return $this->imagen;
    }

    /**
     * @param mixed $imagen
     */
    public function setImagen($imagen)
    {
        $this->imagen = $imagen;
    }

    /**
     * @return mixed
     */
    public function getDescripcion()
    {
        return $this->descripcion;
    }

    /**
     * @param mixed $descripcion
     */
    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;
    }
}
