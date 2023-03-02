<?php

class Proyecciones
{
    private $idProyeccion;
    private $idPelicula;
    private $idSala;
    private $entradasVendidas;
    private $fecha;

    /**
     * @param array $fila
     */
    public function __construct(array $fila)
    {
        $this->idProyeccion = $fila['idProyeccion'];
        $this->idPelicula = $fila['idPelicula'];
        $this->idSala = $fila['idSala'];
        $this->entradasVendidas = $fila['entradasVendidas'];
        $this->fecha = $fila['fecha'];
    }

    /**
     * @return mixed
     */
    public function getIdProyeccion()
    {
        return $this->idProyeccion;
    }

    /**
     * @param mixed $idProyeccion
     */
    public function setIdProyeccion($idProyeccion)
    {
        $this->idProyeccion = $idProyeccion;
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
    public function getIdSala()
    {
        return $this->idSala;
    }

    /**
     * @param mixed $idSala
     */
    public function setIdSala($idSala)
    {
        $this->idSala = $idSala;
    }

    /**
     * @return mixed
     */
    public function getEntradasVendidas()
    {
        return $this->entradasVendidas;
    }

    /**
     * @param mixed $entradasVendidas
     */
    public function setEntradasVendidas($entradasVendidas)
    {
        $this->entradasVendidas = $entradasVendidas;
    }

    /**
     * @return mixed
     */
    public function getFecha()
    {
        return $this->fecha;
    }

    /**
     * @param mixed $fecha
     */
    public function setFecha($fecha)
    {
        $this->fecha = $fecha;
    }
}
