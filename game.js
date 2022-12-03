let map = L.map('map').setView([30.050, 31.235], 13);
window.onload = start();

function start(){
    startTime = new Date();
}

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var xhttp = new XMLHttpRequest();

let slot1 = document.getElementById("slot1");
let slot2 = document.getElementById("slot2");
let slot3 = document.getElementById("slot3");
let slot4 = document.getElementById("slot4");
let slot5 = document.getElementById("slot5");

class item {
    constructor(img,usable){
        this.img = "../images/bloc_default";
        this.usable = false;
    }
}

function slot_fill(n,item){
    str = item.img;
    n.innerHTML = "<img src="+str+"></img>";
    console.log("fill");
    console.log("<img src="+str+"></img>")
}

function slot_remove(n){
    n.innerHTML = null;
}


// MARKERS DU JEU
let dalidaIcon = new L.icon({iconUrl: obj_array[0][5], iconSize: [obj_array[0][6], obj_array[0][7]], popupAnchor: [0, -50]});
dalidaMarker = L.marker([obj_array[0][3],obj_array[0][2]], {icon: dalidaIcon}).addTo(map).bindPopup(obj_array[0][9]);


var boutonVoler = "<center><input type='submit' onclick = setMapOnParis() id='fly' value='Y aller'></center>";
var boutonRecupJournal = L.popup({minWidth : 375,content: '<center><img src="'+obj_array[10][5]+'"></center>'});
var boutonMaison = "<center><input type='submit' onclick = setMapOnMaison() id='fly' value='Y aller'></center>";

// Les booléens pour gérer la progression du jeu

let aznavour = false;
let alain_in_inventaire = false;
let lucien_morisse = false;
let sanremodone = false;
let partition_in_inventaire = false;
let disque_recuperable = false;
let disque_in_inventaire = false;
let parolesdone = false;
let code_resolu = false;
let boule_disco_in_inventaire = false;
let PDSdone = false;
let mogadorDone = false;
let maisonDone = false;
// Toutes les icônes et leurs marqueurs ainsi que les objets de l'inventaire

let planeIcon = L.icon({iconUrl: obj_array[1][5], iconSize: [obj_array[1][6], obj_array[1][7]]});
aeroportMarker = L.marker([obj_array[1][3], obj_array[1][2]], {icon: planeIcon});
zoom(aeroportMarker, obj_array[1][8], obj_array[1][9] + boutonVoler);

function setMapOnParis(){
    map.setView([48.856, 2.341], 13);
}
function setMapOnMaison(){
    map.setView([obj_array[13][3], obj_array[13][2]], 17)
}

let appartIcon = L.icon({iconUrl: obj_array[2][5], iconSize: [obj_array[2][6], obj_array[2][7]]});
appartMarker = L.marker([obj_array[2][3], obj_array[2][2]], {icon: appartIcon});

let olympiaIcon = L.icon({iconUrl: obj_array[3][5], iconSize: [obj_array[3][6], obj_array[3][7]]});
olympiaMarker = L.marker([obj_array[3][3],obj_array[3][2]], {icon: olympiaIcon});

let montmartreIcon = L.icon({iconUrl: obj_array[4][5], iconSize: [obj_array[4][6], obj_array[4][7]]});
montmartreMarker = L.marker([obj_array[4][3],obj_array[4][2]], {icon: montmartreIcon});

let sanremoIcon = L.icon({iconUrl: obj_array[5][5], iconSize: [obj_array[5][6], obj_array[5][7]]});
sanremoMicro = L.marker([obj_array[5][3],obj_array[5][2]],{icon: sanremoIcon});

let PDSIcon =  L.icon({iconUrl: obj_array[6][5], iconSize: [obj_array[6][6], obj_array[6][7]]});
PDSmarker = L.marker([obj_array[6][3],obj_array[6][2]],{icon: PDSIcon});

let alainIcon = L.icon({iconUrl: obj_array[7][5], iconSize: [obj_array[7][6], obj_array[7][7]]});

let dalidisqueIcon = L.icon({iconUrl: obj_array[8][5], iconSize: [obj_array[8][6], obj_array[8][7]]});
disquecode = L.marker([obj_array[8][3],obj_array[8][2]], {icon: dalidisqueIcon});

let journalIcon = L.icon({iconUrl: obj_array[9][5], iconSize: [obj_array[9][6], obj_array[9][7]]});
journalMarker = L.marker([obj_array[9][3],obj_array[9][2]], {icon: journalIcon});

let mogadorIcon = L.icon({iconUrl: obj_array[12][5], iconSize: [obj_array[12][6], obj_array[12][7]]});
mogadorMarker = L.marker([obj_array[12][3],obj_array[12][2]], {icon: mogadorIcon});

let partocheIcon = L.icon({iconUrl: obj_array[15][5], iconSize: [obj_array[15][6], obj_array[15][7]]});
partocheMarker = L.marker([obj_array[15][3],obj_array[15][2]], {icon: partocheIcon});

let tournedisqueIcon = L.icon({iconUrl: obj_array[14][5], iconSize: [obj_array[14][6], obj_array[14][7]]});
tournedisqueMarker = L.marker([obj_array[14][3],obj_array[14][2]], {icon: tournedisqueIcon});

let MaisonIcon = L.icon({iconUrl: obj_array[13][5], iconSize: [obj_array[13][6], obj_array[13][7]]});
MaisonMarker = L.marker([obj_array[13][3],obj_array[13][2]], {icon: MaisonIcon});


// GESTION DU ZOOM //

// Niveau de zoom Dalida jeune
map.on('zoom', function(){
    zoom(dalidaMarker, obj_array[0][8], obj_array[0][9]);
});
// Niveau de zoom appartement
map.on('zoom', function(){
    zoom(appartMarker, obj_array[2][8], obj_array[2][9]);
});
// Niveau de zoom Olympia
map.on('zoom', function(){
    zoom(olympiaMarker, obj_array[3][8], obj_array[3][9]);
});
// Niveau de zoom Montmartre
map.on('zoom', function(){
    zoom(montmartreMarker, obj_array[4][8], obj_array[4][9]);
});
// Niveau de zoom micro à Sanremo
map.on('zoom', function(){
    zoom(sanremoMicro, obj_array[5][8], obj_array[5][9]);
});
// Niveau de zoom Palais des Sports
map.on('zoom', function(){
    zoom(PDSmarker, obj_array[6][8], obj_array[6][9]);
});
// Niveau de zoom journal
map.on('zoom', function(){
    zoom(journalMarker, obj_array[9][8], boutonRecupJournal);
});
// Niveau de zoom Mogador
map.on('zoom', function(){
    zoom(mogadorMarker, obj_array[12][8], obj_array[12][9]);
});
// Niveau de zoom maison Dalida
map.on('zoom', function(){
    zoom(MaisonMarker, obj_array[13][8], obj_array[13][9]);
});
// Niveau de zoom partition
map.on('zoom', function(){
    zoom(partocheMarker, obj_array[15][8], obj_array[15][9]);
});


// Fonction qui affiche le marker selon un certain niveau de zoom
function zoom(marker, minZoom, popup){

    if(map.getZoom() >= minZoom){
        marker.addTo(map).bindPopup(popup);
    }
    if(map.getZoom() < minZoom){
        marker.remove();
    }
}

function addItem(item){ 
    item.usable = true;
    console.log("add")
    if(slot1.innerHTML == ""){
        slot_fill(slot1,item);
    }
    else if(slot2.innerHTML == ""){
        slot_fill(slot2,item);
    }
    else if(slot3.innerHTML == ""){
        slot_fill(slot3,item);
    }
    else if(slot4.innerHTML == ""){
        slot_fill(slot4,item);
    }
    else if(slot5.innerHTML == ""){
        slot_fill(slot5,item);
    }
}

//      Tous les listeners
montmartreMarker.addEventListener('click',boheme);
tournedisqueMarker.addEventListener('click',enigme);
disquecode.addEventListener('click',recupdisque);
olympiaMarker.addEventListener('click',disque);
olympiaMarker.addEventListener('click',paroles);
sanremoMicro.addEventListener('click',sanremoconcert);
PDSmarker.addEventListener('click',PDSconcert);
mogadorMarker.addEventListener('click',mogadorFin);
appartMarker.addEventListener('click',addDelon);
MaisonMarker.addEventListener('click',FinDuJeu);


function addDelon(){
    if(alain_in_inventaire == false){
        alain_in_inventaire = true;
        slot1.innerHTML = ("<center><img src='" + obj_array[7][5] + "', width ='" + obj_array[7][6] + "', height = " + obj_array[7][7] + "><center>");
        aeroportMarker.remove();
    }
}
function disque(){
    if(lucien_morisse == false){
        // Niveau de zoom Disque Dalida
        zoom(disquecode, obj_array[8][8], obj_array[8][9]);
        lucien_morisse = true;
    }
}

function boheme(){
    let texte = prompt("<center>Quel fameux chanteur apprécie Montmartre et ses lilas accrochés aux fenêtres?</center>");
    if(texte == 'Aznavour' || texte == 'aznavour'){
        montmartreMarker.remove();
        disque_recuperable = true;
    }
    else{
        alert('Donne moi juste son nom de famille !');
    }
}

var recupDisque = "<center><input type='submit' onclick = clickPourRecup() id='recupDisque' value='Récupérer'></center>";

function clickPourRecup(){
    slot2.innerHTML = ("<center><img src='" + obj_array[8][5] + "', width ='" + obj_array[8][6] + "', height = " + obj_array[8][7] + "></center>");
    disquecode.remove();
}

function recupdisque(){
    if(disque_recuperable == true){
        disquecode.bindPopup("<center>Dalida sort ensuite <I>Itsi Bitsi Petit Bikini</I> et rencontre un succès à l'international, particulièrement en Italie. <br/><b>Rendez vous au festival de la chanson de Sanremo, une ville italienne pas loin de la France</b>.</center>" + recupDisque);
        disque_in_inventaire = true;
        disque_recuperable = false;        
    }
}

var recupBouleDisco = "<center><input type='submit' onclick = clickPourRecupDisco() id='recupBouleDisco' value='Récupérer'></center>";

function clickPourRecupDisco(){
    slot2.innerHTML = "<center><img src='" + obj_array[11][5] + "', width ='" + obj_array[11][6] + "', height = " + obj_array[11][7] + "></center>";
}

function enigme(){
    let code = prompt("Trouve le code : Les deux premiers chiffres sont le nombres de pays où Dalida à été numéro 1 avec Gigi L'Amoroso,                 Les deux derniers sont un nombre associés aux musicales de l'époque");
    console.log(code);
    if (code == '1245'){
        //alert('Bravo! A partir de maintenant, Dalida va commencer à produire des titres disco, elle donne un concert phénoménal au Palais des Sports');
        //slot2.innerHTML.delete();        
        tournedisqueMarker.bindPopup('Bravo! A partir de maintenant, Dalida va commencer à produire des titres disco, elle donne un concert phénoménal au Palais des Sports' + recupBouleDisco);
        code_resolu = true;
        boule_disco_in_inventaire = true;
    }
    else{
        alert("Ce n'est pas le bon code : il y a un indice dans ton inventaire")
    }
}

function paroles(){
    if(sanremodone == true & parolesdone == false & alain_in_inventaire == true){
        let texte = prompt("N'oubliez pas les paroles:                  Caramels, Bonbons et ________ ");
        if(texte == 'chocolat' || texte == 'chocolats' || texte == 'Chocolat' || texte == 'Chocolats'){
            alert("MERCI PAS POUR MOI,MAIS TU PEUX BIEN LES OFFRIR À UNE AUTRE");
            // Niveau de zoom tourne disque
            zoom(tournedisqueMarker, obj_array[14][8], obj_array[14][9]);
            parolesdone = true;
        }
        else{
         alert("Dommage, écoute la musique et réessaye.                  Indice : Ca se mange")
        }
    }
    else if(disque_in_inventaire == true){
        let rand = Math.floor(Math.random() * 3) + 1;
        if(rand==1){
            olympiaMarker.bindPopup("Cloclo ce soir: Le téléphone pleure");
        }
        if(rand==2){
            olympiaMarker.bindPopup("Jacques Dutronc en concert : Cette vieille branche");
        }
        if(rand==3){
            olympiaMarker.bindPopup("Koba la D : Un CoNcErT dAnS lE bAt 7");
        }
    }
}

function sanremoconcert(){
    if(disque_in_inventaire == true){
        sanremodone = true;
        sanremoMicro.bindPopup(obj_array[5][9]);
    }
    else{
        sanremoMicro.bindPopup("Rien à signaler ici");
    }
}

function PDSconcert(){
    if(boule_disco_in_inventaire == true){
        MaisonMarker.addTo(map);
        PDSmarker.bindPopup(obj_array[6][9] + boutonMaison);
        PDSdone = true;
    }
    else{
        PDSmarker.bindPopup("<center>Le Dôme de Paris - Palais des Sports est une salle de spectacles de grandes dimensions située place de la Porte-de-Versailles dans le 15e arrondissement de Paris. Elle peut accueillir jusqu'à plus de cinq mille spectateurs.</center>")
    }
}

function mogadorFin(){
    if(PDSdone == true){
        mogadorMarker.bindPopup(obj_array[12][9]);
        mogadorDone = true;
    }
    else{
    }
}

function FinDuJeu(){
    if(mogadorDone == true){
        MaisonMarker.bindPopup(obj_array[13][9]);
        end()
    }
    else{
        MaisonMarker.bindPopup("Maison de Dalida au 11 bis rue d'Orchampt");
    }
}

function end() {
    endTime = new Date();
    var timeDiff = endTime - startTime; //en ms
    timeDiff /= 1000;
    console.log(timeDiff);
    localStorage.setItem('score',timeDiff);
}

