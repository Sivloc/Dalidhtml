-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 01, 2022 at 01:52 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dalidatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `hof`
--

CREATE TABLE `hof` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(20) NOT NULL,
  `score` int(11) NOT NULL,
  `classement` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hof`
--

INSERT INTO `hof` (`id`, `pseudo`, `score`, `classement`) VALUES
(1, 'test', 200, 1);

-- --------------------------------------------------------

--
-- Table structure for table `object`
--

CREATE TABLE `object` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `ordre` int(11) NOT NULL,
  `iconUrl` text,
  `largeurIcon` int(11) DEFAULT NULL,
  `longueurIcon` int(11) DEFAULT NULL,
  `minZoom` int(11) DEFAULT NULL,
  `textePopup` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `object`
--

INSERT INTO `object` (`id`, `name`, `latitude`, `longitude`, `ordre`, `iconUrl`, `largeurIcon`, `longueurIcon`, `minZoom`, `textePopup`) VALUES
(1, 'Dalida', 30.048361, 31.245389, 1, '../images/dalida_jeune.jpg', 78, 100, 12, "<center>Naissance de Dalida au Caire le 17 janvier 1933. <br/> A l'âge de 18 ans, elle participe au concours de Miss Egypte et gagne le premier prix ce qui va faire qu'elle va être engagée comme actrice pour tourner des films au Caire (le Hollywood de l'Orient). <br/><b>Trouvez l'aéroport du Caire !</b></center>"),
(2, 'Aéroport', 30.114404, 31.400849, 2, '../images/avion.png', 150, 150, 12, "<center>Repérée par un réalisateur français, elle s'envole pour Paris le 24 décembre 1954.</center>"),
(3, 'Appartement', 48.871099, 2.304455, 3, '../images/appartement.png', 100, 100, 17, "<center>Installation dans un appartement proche des Champs Élysées où elle fait la rencontre d'Alain Delon, son voisin de palier.</center>"),
(4, 'Olympia', 48.870119, 2.328325, 4, '../images/olympia_paris.jpg', 72, 96, 17, "<center>Elle rencontre Lucien Morisse (directeur artistique d'Europe 1) et Eddie Barclay (éditeur de disques) à l'Olympia,salle de spectacle et de musique dans Paris, Lucien Morisse prend sa carrière en main</center>"),
(5, 'Montmartre', 48.886719, 2.341305, 5, '../images/charles_aznavour.png', 55, 110, 18, NULL),
(6, 'Sanremo', 43.816546, 7.77597, 6, '../images/micro.png', 57, 155, 14, NULL),
(7, 'Palais des sports', 48.832714, 2.287051, 7, '../images/palais_des_sports.jpg', 128, 81, 17, NULL),
(8, 'Alain Delon', NULL, NULL, NULL, '../images/alain_delon.jpg', 87, 110, NULL, NULL),
(9, 'Disque Dalida', 48.870420, 2.330827, NULL, '../images/disque_dalida.png', 80, 80, 17, "<center>Elle enregistre son premier 45 tours, elle va ensuite faire les premières parties d'un artiste que vous trouverez à Montmartre. <br/><b>Allez le voir pour récupérer le disque<b></center>"),
(10,'Journal', 48.851644, 2.350219, NULL, '../images/newspaper.png', 100, 100, 18, NULL),
(11,'Coupure', NULL, NULL, NULL, '../images/coupure.jpg', 87, 110, NULL, NULL),
(12,'Boule Disco',NULL, NULL, NULL, '../images/boule_disco.jpg', 100, 100, 17, NULL),
(13,'Mogador', 48.875389, 2.331026, NULL, '../images/mogador.jpg', 171, 114, 17, NULL),
(14,'Maison Dalida', 48.886999, 2.336988, NULL, '../images/house.png', 100, 100, 17, NULL),
(15,'Tourne-Disque', 48.869861, 2.327614,NULL,'../images/tourne_disque.jpg', 90, 68, 17, NULL),
(16,'Partition',NULL,NULL,NULL,'../images/partoche.jpg', 56, 73, 17, NULL);
COMMIT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;