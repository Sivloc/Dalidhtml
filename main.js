let form_login = document.getElementById('login');
let form_button = document.getElementById('start');

form_login.addEventListener('submit', commencer)
form_button.addEventListener('click', commencer);

let champ_pseudo = '';

function commencer(event){
    
    let form_OK = true;
    champ_pseudo = form_login.value;

    if(champ_pseudo == ''){
        form_OK = false;
    }
    else if(champ_pseudo != ''){
        form_OK = true;
        window.localStorage.clear();
        window.localStorage.setItem('pseudo',champ_pseudo);
        window.location.href="game.php";
    }
    if(!form_OK){
        event.preventDefault();
        alert("Veuillez entrer un pseudo svp");
    }
}