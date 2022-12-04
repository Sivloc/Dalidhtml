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
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hof`
--

INSERT INTO `hof` (`id`, `pseudo`, `score`) VALUES
(1, 'test', 200);

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
(1, 'Dalida', 30.048361, 31.245389, 1, '../images/dalida_jeune.jpg', 78, 100, 13, "<center>Naissance de Dalida au Caire le 17 janvier 1933. <br/> A l'âge de 18 ans, elle participe au concours de Miss Egypte et gagne le premier prix ce qui va faire qu'elle va être engagée comme actrice pour tourner des films au Caire (le Hollywood de l'Orient). <br/><b>Trouvez l'aéroport du Caire !</b></center>"),
(2, 'Aéroport', 30.114404, 31.410849, 2, '../images/avion.png', 150, 150, 13, "<center>Repérée par un réalisateur français, elle s'envole pour Paris le 24 décembre 1954.</center>"),
(3, 'Appartement', 48.871099, 2.304455, 4, '../images/appartement.png', 100, 100, 17, "<center>Installation dans un appartement proche des Champs Élysées où elle fait la rencontre d'Alain Delon, son voisin de palier.<br/><b>Allez à l'Olympia (Près de l'opéra Garnier) pour débuter la carrière de Dalida.</b></center>"),
(4, 'Olympia', 48.870119, 2.328325, 6, '../images/olympia_paris.jpg', 72, 96, 17, "<center>Elle rencontre Lucien Morisse (directeur artistique d'Europe 1) et Eddie Barclay (éditeur de disques) à l'Olympia, salle de spectacle et de musique dans Paris, Lucien Morisse prend sa carrière en main.</center>"),
(5, 'Montmartre', 48.886719, 2.341305, 8, '../images/charles_aznavour.png', 55, 110, 18, "<center>♫ Emmenez-moi au bout de la terre<br/>Emmenez-moi au pays des merveilles<br/>Il me semble que la misère<br/>Serait moins pénible au soleil ♫</center>"),
(6, 'Sanremo', 43.816546, 7.77597, 9, '../images/micro.png', 57, 155, 14, "<center>Le 26 janvier 1967, Dalida participe au festival de chanson de Sanremo avec Luigi Tenco, le nouvel homme de sa vie qu'elle a convaincu de participer à la compétition. <br/><b>Elle retourne à l'Olympia pour enregistrer son prochain tube.</b></center>"),
(7, 'Palais des sports', 48.832714, 2.285051, 14, '../images/palais_des_sports.jpg', 128, 81, 15, "<center>Après cette période, Dalida commence à se fatiguer et elle se produit une dernière fois sur scène en Turquie. Elle a ce soir rendez-vous avec François Naudy au <b>Mogador, au sud-est de la gare Saint-Lazare</b>. Elle se prépare chez elle. </center>"),
(8, 'Alain Delon', NULL, NULL, 5, '../images/alain_delon.jpg', 87, 110, NULL, NULL),
(9, 'Disque Dalida', 48.870420, 2.329555, 7, '../images/disque_dalida.png', 80, 80, 17, "<center>Elle enregistre son premier <b>45 tours</b>, elle va ensuite faire les premières parties d'un artiste que vous trouverez à Montmartre. <br/><b>Allez le voir pour récupérer le disque.<b></center>"),
(10,'Journal', 48.851644, 2.350219, 11, '../images/newspaper.png', 100, 100, 18, NULL),
(11,'Coupure', NULL, NULL, 12, '../images/coupure.jpg', 87, 110, NULL, NULL),
(12,'Boule Disco', NULL, NULL, 13, '../images/boule_disco.png', 100, 100, 17, NULL),
(13,'Mogador', 48.875389, 2.331026, 16, '../images/mogador.jpg', 122, 81, 17, "<center>Dalida devrait être ici pourtant, où peut-elle bien être ?</center>"),
(14,'Maison Dalida', 48.886999, 2.336988, 15, '../images/house.png', 80, 80, 16, "<center>En réalité, dans la nuit du 2 au 3 mai 1987, restée seule dans sa maison, elle se suicide par surdose de barbituriques, qu’elle avale avec du whisky.</center>"),
(15,'Tourne-Disque', 48.869861, 2.326614, 10, '../images/tourne_disque.png', 90, 68, 17, NULL),
(16,'Paris', 48.863295, 2.346045, 3, '../images/baguette.png', 90, 60, NULL, "<center>Dalida arrive à Paris, elle emménage sur la plus belle avenue du monde.</center>");
COMMIT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;