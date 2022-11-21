<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
     integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
     crossorigin=""/>
    <link rel="stylesheet" href="hof.css">
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=acme:400" rel="stylesheet" />
    <title>Hall Of Fame</title>
</head>
<body>
    <ul id="barre">
        <li class="test" id="accueil">
            <a href="main.html" class="button_link"><b>Jouer</b></a>
        </li>
        <li class="test" id="hof">
            <a href="hof.html" class="button_link"><b>Hall of Fame</b></a>
        </li>
        <li class="test" id="chansons"><b>Chansons</b></li>
        <li class="test" id="ressources"><b>Ressources</b></li>
        <li id="eg"><b>Escape Game</b></li>
    </ul>

    <div id="map"></div>
    <?php
        if(isset($_POST['submit'])){
            $pseudo = $_POST['pseudo'];
            echo 'Pseudo : ' . $pseudo;

            $link = mysqli_connect('localhost', 'root', 'root', 'players');
            //$result = mysqli_query();
        }

    ?>



    <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
    integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
    crossorigin=""></script>
</body>
</html>