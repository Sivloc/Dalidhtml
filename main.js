let form_login = document.getElementById('login');
let form_button = document.getElementById('start');

form_login.addEventListener('submit', test);
form_button.addEventListener('click', test);
/*form_login.addEventListener('submit', commencer);
form_button.addEventListener('click', commencer);*/

let champ_pseudo = form_login.innerHTML;

function bloque(event){

    let form_OK = true;

    if(champ_pseudo == ''){
        form_OK = false;
        console.log("C'est NON");
    }

    if(!form_OK){
        event.preventDefault();
        alert("Mets ton pseudo stp");
    }
    
}

function commencer(event){
    event.preventDefault();
    console.log("Let's goo");
    window.location.href="game.html";
}

function test(event){
    let form_OK = true;

    if(champ_pseudo == ''){
        form_OK = false;
        console.log("C'est NON");
    }
    if(!form_OK){
        event.preventDefault();
        alert("Mets ton pseudo stp");
    }
    else{
        event.preventDefault();
        console.log("Let's goo");
        window.location.href="game.html";
    }
}