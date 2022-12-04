<?php
    $data = $_POST['data'];
    $pseudo = $data[0];
    $score = $data[1];
    $link = mysqli_connect('localhost', 'root', 'root', 'dalidatabase');    
    $result = mysqli_query($link, "INSERT INTO hof VALUES(NULL," . $pseudo . ", " . $score . ")");
    
?>