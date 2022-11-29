-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 29, 2022 at 03:09 PM
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
  `ordre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `object`
--

INSERT INTO `object` (`id`, `name`, `latitude`, `longitude`, `ordre`) VALUES
(1, 'plante', 30.048361, 31.245389, 1),
(2, 'aéroport', 30.114404, 31.400849, 2),
(3, 'Appartement', 48.871099, 2.304455, 3),
(4, 'Olympia', 48.870119, 2.328325, 4),
(5, 'Montmartre', 48.886719, 2.341305, 5),
(6, 'Sanremo', 43.816546, 7.77597, 6),
(7, 'Palais des sports', 48.832714, 2.287051, 7);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
