<?php

class Salas
{
    private $idSala;
    private $nombreSala;
    private $filas;
    private $butacas;

    /**
     * @param array $fila
     */
    public function __construct(array $fila)
    {
        $this->idSala = $fila['idSala'];
        $this->nombreSala = $fila['nombreSala'];
        $this->filas = $fila['filas'];
        $this->butacas = $fila['butacas'];
    }

    /**
     * @return mixed
     */
    public function getFilas(): mixed
    {
        return $this->filas;
    }

    /**
     * @param mixed $filas
     */
    public function setFilas(mixed $filas): void
    {
        $this->filas = $filas;
    }

    /**
     * @return mixed
     */
    public function getButacas(): mixed
    {
        return $this->butacas;
    }

    /**
     * @param mixed $butacas
     */
    public function setButacas(mixed $butacas): void
    {
        $this->butacas = $butacas;
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
    public function getNombreSala()
    {
        return $this->nombreSala;
    }

    /**
     * @param mixed $nombreSala
     */
    public function setNombreSala($nombreSala)
    {
        $this->nombreSala = $nombreSala;
    }

}
