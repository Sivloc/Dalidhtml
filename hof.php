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
    <link href="https://fonts.bunny.net/css?family=alex-brush:400" rel="stylesheet" />
    <link href="https://fonts.bunny.net/css?family=acme:400" rel="stylesheet" />
    <title>Hall Of Fame</title>
</head>
    <?php
        $link = mysqli_connect('localhost', 'root', 'root', 'dalidatabase'); 
        $results = mysqli_query($link, "SELECT * FROM hof ORDER BY score DESC LIMIT 5");
        $classement = [];
        foreach ($results as $result) {
            $pseudo = $result["pseudo"];
            $score = $result["score"];
            $classement[] = [$pseudo,$score];
        }

    ?>
<body class="grid-container">
    <ul id="barre">
        <li class="test" id="accueil">
            <a href="main.html" class="button_link"><b>Jouer</b></a>
        </li>
        <li class="test" id="hof">
            <a href="hof.php" class="button_link"><b>Hall of Fame</b></a>
        </li>
        <li class="test" id="chansons">
            <a href="chansons.html" class="button_link"><b>Chansons</b></a>
        </li>
        <li class="test" id="ressources">
            <a href="https://fr.wikipedia.org/wiki/Dalida" class="button_link"><b>Ressources</b></a>
        </li>
        <li id="eg"><b>Escape Game</b></li>
    </ul>  
    <div id="centrage">
    <div id="liste">
        <div id="titre">
            <h1><b>Hall Of Fame</b></h1>
        </div>  
        <div id="slot">
            <div id="colonne">
                <b id="top1">1er</b><b id="pseudo1">
                    <?php echo$classement[0][0] ?>
                </b><b id="score1">
                    <?php echo $classement[0][1] ?>
                </b>
            </div>
        </div>
        <div id="slot">
            <div id="colonne">
                <b id="top2">2??me</b><b id="pseudo2">
                    <?php echo $classement[1][0] ?>
                </b><b id="score2">
                    <?php echo $classement[1][1] ?>
                </b>
            </div>
        </div>
        <div id="slot">
            <div id="colonne">
                <b id="top3">3??me</b><b id="pseudo3">
                    <?php echo $classement[2][0] ?>
                </b>
                <b id="score3">
                    <?php echo $classement[2][1] ?>
                </b>
            </div>
        </div>
        <div id="slot">
            <div id="colonne">
                <b id="top">4??me</b><b id="pseudo4">
                    <?php echo $classement[3][0] ?>
                </b><b id="score4">
                    <?php echo $classement[3][1] ?>
                </b>
            </div>
        </div>
        <div id="slot">
            <div id="colonne">
                <b id="top">5??me</b><b id="pseudo5">
                    <?php echo $classement[4][0] ?>
                </b><b id="score5">
                    <?php echo $classement[4][1] ?>
                </b>
            </div>
        </div>
    </div>
    </div>
    <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
    integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
    crossorigin=""></script>
    <script src="hof.js"></script>
</body>
</html>