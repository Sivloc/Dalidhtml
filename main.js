let form_login = document.getElementById('login');
let form_button = document.getElementById('start');

form_login.addEventListener('submit', bloque);
form_button.addEventListener('click', bloque);
form_login.addEventListener('submit', commencer);
form_button.addEventListener('click', commencer);

let champ_pseudo = form_login.elements["pseudo"];

function bloque(event){

    let form_OK = true;

    if(champ_pseudo.value == ''){
        form_OK = false;
        console.log("C'est NON");
    }

    if(!form_OK){
        event.preventDefault();
        alert("Mets ton pseudo stp");
    }
    
}

function commencer(event){
    console.log("Let's goo");
    window.location.href="game.html";
}

