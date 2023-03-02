<?php

class InfoBasica
{
    private $nombreCine;
    private $anoConstruccion;

    /**
     * @param array $fila
     */
    public function __construct(array $fila)
    {
        $this->nombreCine = $fila['nombreCine'];
        $this->anoConstruccion = $fila['anoConstruccion'];
    }

    /**
     * @return mixed
     */
    public function getNombreCine()
    {
        return $this->nombreCine;
    }

    /**
     * @param mixed $nombreCine
     */
    public function setNombreCine($nombreCine)
    {
        $this->nombreCine = $nombreCine;
    }

    /**
     * @return mixed
     */
    public function getAnoConstruccion()
    {
        return $this->anoConstruccion;
    }

    /**
     * @param mixed $anoConstruccion
     */
    public function setAnoConstruccion($anoConstruccion)
    {
        $this->anoConstruccion = $anoConstruccion;
    }


}
