<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Escape Game</title>
    <link rel="stylesheet" media="screen" href="findujeu.css">
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=alex-brush:400" rel="stylesheet" />
    <link href="https://fonts.bunny.net/css?family=acme:400" rel="stylesheet" />
</head>
<body>
    <?php
        //Le problème est après : 
        $request_raw = file_get_contents('php://input');
        $json_object = json_decode($request_raw);
        $pseudo = $json_object['pseudo'];
        $score = $json_object['score'];
        $link = mysqli_connect('localhost', 'root', 'root', 'dalidatabase');    
        $result = mysqli_query($link, "INSERT INTO hof VALUES(NULL," . $pseudo . ", " . $score . ")");
        $js_code = 'console.log(' . $pseudo . $score .')';
        echo $js_code;
    ?>
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
    
    <h1><b>Dalida</b></h1>
    <div id="fin">
        <p>
            Merci d'avoir joué à notre jeu ! On espère qu'il vous aura plus ! 
            Dalida ayant eu une vie tragique, nous avons essayé de rendre l'histoire la plus "gaie" possible.
            <br/>Mais nous vous invitons à aller voir l'onglet Ressources afin d'en connaître plus sur elle !
            <br/>Et allez voir votre classement dans le Hall of Fame !
        </p>
    </div>
    <footer>Escape game réalisé par Clovis et Clément</footer>
</body>
</html>