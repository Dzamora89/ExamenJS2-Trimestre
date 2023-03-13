<?php

class InfoBasica
{
    private $nombreCine;
    private $anoConstruccion;
    private $nombreSala;
    private $aforo;



    //Constructor por defecto
    public function __construct()
    {
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
