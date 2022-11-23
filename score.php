<?php

    if(isset($_POST['pseudo'])){
        $pseudo = $_POST['pseudo'];
        echo '<p>Pseudo : ' . $pseudo.'</p>';

        $link = mysqli_connect('localhost', 'root', 'root', 'dalidatabase');    
        $result = mysqli_query("INSERT INTO hof (pseudo) VALUES($pseudo)");

        if($result){
            echo "<p> Ajouté !</p>";
        }
        else{
            echo "<p> Erreur !!!!</p>";
        }
    }
?>