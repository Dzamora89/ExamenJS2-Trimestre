-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-03-2023 a las 17:43:02
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `labutaca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `infocine`
--

CREATE TABLE IF NOT EXISTS `infocine` (
  `nombreCine` varchar(255) DEFAULT NULL,
  `anoConstruccion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `infocine`
--

INSERT INTO `infocine` (`nombreCine`, `anoConstruccion`) VALUES
('La Butaca', '1992');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE IF NOT EXISTS `peliculas` (
  `idPelicula` int(11) NOT NULL AUTO_INCREMENT,
  `nombrePelicula` varchar(255) DEFAULT NULL,
  `duracion` int(11) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `descripcion` longtext DEFAULT NULL,
  `proyectadas` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idPelicula`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`idPelicula`, `nombrePelicula`, `duracion`, `imagen`, `descripcion`, `proyectadas`) VALUES
(1, 'Avatar: El sentido del agua', 192, './img/PosterPelicula/Avatar_El_sentido_del_agua-653971850-large.jpg', 'Jake Sully vive con su nueva familia en el planeta de Pandora. Cuando una amenaza conocida regresa, Jake debe trabajar con Neytiri y el ejército de la raza na\'vi para proteger su planeta.', 1),
(2, 'Babylon', 189, './img/PosterPelicula/Babylon-747027954-large.jpg', 'Una historia de ambición y excesos desmesurados que recorre la ascensión y caída de múltiples personajes durante una época de desenfrenada decadencia y depravación en los albores de Hollywood.', 1),
(3, 'Los renglones torcidos de Dios', 153, './img/PosterPelicula/Los_renglones_torcidos_de_Dios-670212742-large.jpg', 'Sigue a una mujer que se registra en una sala psiquiátrica para investigar un homicidio.\n\n', 1),
(4, 'Cuerpos de película', 86, './img/PosterPelicula/F4082504.jpg', 'An examination of how the nude female body is hypersexualized, under attack, and exploited on- and offscreen in Hollywood.\n\n', 0),
(5, 'Luther: Cae la noche\n', 129, './img/PosterPelicula/Luther_Cae_la_noche-939167358-large.jpg', 'El brillante pero caído en desgracia detective John Luther se fuga de la cárcel para dar caza a un sádico asesino en serie que está aterrorizando Londres.\n\n', 0),
(6, 'Sick of Myself\n', 95, './img/PosterPelicula/ilgi_manyagi-284404282-large.jpg', 'Signe y Thomas tienen una relación de pareja poco sana, que cambia, especialmente, cuando Thomas es notado como artista contemporáneo. Signe se inventará un nuevo personaje, para llamar la atención y recuperar su estatus.\n\n', 0),
(7, 'Johnny Puff Secret Mission\n', NULL, './img/PosterPelicula/Jhoney.jpg', 'Follows Johnny Puff and his friends as they embark on a secret mission to save Taigasville from the evil plans of Otto von Walrus.\n', 0),
(8, '¡Shazam! La furia de los dioses\n', 130, './img/PosterPelicula/A_Shazam_La_furia_de_los_dioses-942384944-large.jpg', 'The film continues the story of teenage Billy Batson who, upon reciting the magic word \"SHAZAM!\" is transformed into his adult Super Hero alter ego, Shazam.\n\n', 0),
(9, 'La balada de la mala suerte\n', 104, './img/PosterPelicula/F4076491.jpg', 'A gritty love story about a charismatic but down-on-his-luck troubadour living out of cheap motels and making bad decisions.\n\n', 0),
(10, 'Rimini', 114, './img/PosterPelicula/Rimini-978470641-large.jpg', 'La muerte de su madre trae a Richie Bravo de regreso de su hogar adoptivo en Italia a su dormitorio de adolescente en Baja Austria, donde Charlton Heston todavía está flexionando sus bíceps y Winnetou todavía está vivo.\n\n', 0),
(11, 'Dungeons & Dragons: Honor Entre Ladrones\n', 134, './img/PosterPelicula/Dungeons_Dragons_Honor_entre_ladrones-651649500-large.jpg', 'Un encantador ladrón y un grupo de aventureros improbables emprenden una búsqueda épica para recuperar una reliquia perdida', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecciones`
--

CREATE TABLE IF NOT EXISTS `proyecciones` (
  `idProyeccion` int(11) NOT NULL AUTO_INCREMENT,
  `idPelicula` int(11) DEFAULT NULL,
  `idSala` int(11) DEFAULT NULL,
  `entradasVendidas` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  PRIMARY KEY (`idProyeccion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salas`
--

CREATE TABLE IF NOT EXISTS `salas` (
  `idSala` int(11) NOT NULL AUTO_INCREMENT,
  `nombreSala` varchar(255) DEFAULT NULL,
  `filas` int(11) DEFAULT NULL,
  `butacas` int(11) DEFAULT NULL,
  PRIMARY KEY (`idSala`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `salas`
--

INSERT INTO `salas` (`idSala`, `nombreSala`, `filas`, `butacas`) VALUES
(1, 'Principal', 24, 12),
(2, 'Sala 2', 16, 10),
(3, 'Sala 3', 12, 12);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
