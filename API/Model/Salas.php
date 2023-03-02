<?php

class Salas
{
    private $idSala;
    private $nombreSala;
    private $aforo;

    /**
     * @param array $fila
     */
    public function __construct(array $fila)
    {
        $this->idSala = $fila['idSala'];
        $this->nombreSala = $fila['nombreSala'];
        $this->aforo = $fila['aforo'];
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

    /**
     * @return mixed
     */
    public function getAforo()
    {
        return $this->aforo;
    }

    /**
     * @param mixed $aforo
     */
    public function setAforo($aforo)
    {
        $this->aforo = $aforo;
    }


}
