<?php
    $pseudo = $_POST['pseudo'];
    $score = $_POST['score'];
    $link = mysqli_connect('localhost', 'root', 'root', 'dalidatabase');    
    $result = mysqli_query($link, "INSERT INTO hof VALUES(NULL," . $pseudo . ", " . $score . ")");
?>
<script type="text/javascript">
    console.log("Tout va bien!")
</script>