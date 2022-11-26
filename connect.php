<?php
$link = mysqli_connect('localhost', 'root', 'root', 'dalidatabase');

if (!$link) {
  die('Erreur de connexion');
} else {
  echo 'Succès... ';
}
?>