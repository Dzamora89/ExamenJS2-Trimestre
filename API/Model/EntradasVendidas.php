<?php

class EntradasVendidas
{
    private $codExSala;
    private $codExPelicula;
    private $codExProyeccion;
    private $fila;
    private $butaca;
    private $idUsuario;

    /**
     * @param $row
     */
    public function __construct(array $row)
    {
        $this->codExSala = $row['codExSala'];
        $this->codExPelicula = $row['codExPelicula'];
        $this->codExProyeccion = $row['codExProyeccion'];
        $this->fila = $row['Fila'];
        $this->butaca = $row['Butaca'];
        $this->idUsuario = $row['idUsuario'];
    }

    /**
     * @return mixed
     */
    public function getCodExSala()
    {
        return $this->codExSala;
    }

    /**
     * @param mixed $codExSala
     */
    public function setCodExSala($codExSala): void
    {
        $this->codExSala = $codExSala;
    }

    /**
     * @return mixed
     */
    public function getCodExPelicula()
    {
        return $this->codExPelicula;
    }

    /**
     * @param mixed $codExPelicula
     */
    public function setCodExPelicula($codExPelicula): void
    {
        $this->codExPelicula = $codExPelicula;
    }

    /**
     * @return mixed
     */
    public function getCodExProyeccion()
    {
        return $this->codExProyeccion;
    }

    /**
     * @param mixed $codExProyeccion
     */
    public function setCodExProyeccion($codExProyeccion): void
    {
        $this->codExProyeccion = $codExProyeccion;
    }

    /**
     * @return mixed
     */
    public function getFila()
    {
        return $this->fila;
    }

    /**
     * @param mixed $fila
     */
    public function setFila($fila): void
    {
        $this->fila = $fila;
    }

    /**
     * @return mixed
     */
    public function getButaca()
    {
        return $this->butaca;
    }

    /**
     * @param mixed $butaca
     */
    public function setButaca($butaca): void
    {
        $this->butaca = $butaca;
    }

    /**
     * @return mixed
     */
    public function getIdUsuario()
    {
        return $this->idUsuario;
    }

    /**
     * @param mixed $idUsuario
     */
    public function setIdUsuario($idUsuario): void
    {
        $this->idUsuario = $idUsuario;
    }





}