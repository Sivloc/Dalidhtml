let form_login = document.getElementById('login');
let form_button = document.getElementById('start');

form_login.addEventListener('submit', commencer)
form_button.addEventListener('click', commencer);

let champ_pseudo = '';

function commencer(event){
    let form_OK = true;
    champ_pseudo = form_login.value;
    console.log(champ_pseudo);
    if(champ_pseudo == ''){
        form_OK = false;
        console.log("C'est NON");
    }
    else if(champ_pseudo != ''){
        form_OK = true;
        event.preventDefault();
        console.log("Let's goo");
        window.location.href="game.html";
    }
    if(!form_OK){
        event.preventDefault();
        alert("Mets ton pseudo stp");
    }
}