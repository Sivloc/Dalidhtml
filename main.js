let form_login = document.getElementById('login');
let form_button = document.getElementById('start');

form_login.addEventListener('submit', commencer);
form_button.addEventListener('click', commencer);
form_login.addEventListener('submit', bloque);
form_button.addEventListener('click', bloque);

function commencer(event){
    event.preventDefault();
    console.log("Let's goo");
    window.location.href="game.html";
}

let champ_pseudo = form_login.elements["pseudo"];

function bloque(event){
    
    let form_OK = true;

    if(champ_pseudo.value.length == 0){
        form_OK = false;
    }

    if(!form_OK){
        event.preventDefault();
    }
    console.log("C'est NON");
}