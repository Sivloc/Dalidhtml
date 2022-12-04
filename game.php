<!DOCTYPE HTML>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=alex-brush:400" rel="stylesheet" />
    <link href="https://fonts.bunny.net/css?family=acme:400" rel="stylesheet" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
    integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
    crossorigin=""/>
    <link rel="stylesheet" href="game.css"/>
    <title>Escape Dalida</title>
</head>
<body>
    <ul id="barre">
        <li class="test" id="accueil">
            <a href="main.html" class="button_link"><b>Jouer</b></a>
        </li>
        <li class="test" id="hof">
            <a href="hof.html" class="button_link"><b>Hall of Fame</b></a>
        </li>
        <li class="test" id="chansons">
            <a href="chansons.html" class="button_link"><b>Chansons</b></a>
        </li>
        <li class="test" id="ressources">
            <a href="https://fr.wikipedia.org/wiki/Dalida" class="button_link"><b>Ressources</b></a>
        </li>
        <li id="eg"><b>Escape Game</b></li>
    </ul>
    <?php

    $objets = [];

    $link = mysqli_connect('localhost', 'root', 'root', 'dalidatabase'); 
    $results = mysqli_query($link, "SELECT * FROM object");
    foreach($results as $result){
        $id = $result['id'];
        $lat = $result['latitude'];
        $lon = $result['longitude'];
        $name = $result['name'];
        $ordre = $result['ordre'];
        $iconUrl = $result['iconUrl'];
        $largeurIcon = $result['largeurIcon'];
        $longueurIcon = $result['longueurIcon'];
        $minZoom = $result['minZoom'];
        $textePopup = $result['textePopup'];
        $affichage = $result['affichage'];
        $objets[] = [$id,$name,$lon,$lat,$ordre,$iconUrl,$largeurIcon,$longueurIcon,$minZoom,$textePopup,$affichage];
    }
    ?>
        <script type="text/javascript">
    var obj_array = <?php echo json_encode($objets); ?>; // create the JavaScript array
    /*initArray(obj_array); // use it
    function initArray(obj_array){
        for(var i = 0; i < obj_array.length; i++){
            alert(obj_array[i]);
        }
    }*/
    </script>

    <div id="jeu">
        <div id="map"></div>

        <div id="inventaire">
            <div id="titre_inv"><p>Inventaire</p></div>
            <div id="slot1"></div>
            <div id="slot2"></div>
            <div id="slot3"></div>
            <div id="slot4"></div>
            <div id="slot5"></div>
        </div>
    </div>

    <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
     integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
     crossorigin=""></script>
     <script src="game.js"></script>
</body>
</html>
