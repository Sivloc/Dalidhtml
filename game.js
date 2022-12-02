let map = L.map('map').setView([30.050, 31.235], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
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
L.marker([obj_array[0][3],obj_array[0][2]], {icon: dalidaIcon}).addTo(map).bindPopup(obj_array[0][9]);


var boutonVoler = "<center><input type='submit' onclick = setMapOnParis() id='fly' value='Y aller'></center>";
var boutonRecupJournal = L.popup({minWidth : 375,content: '<center><img src="'+obj_array[10][5]+'"></center>'});

// Les booléens pour gérer la progression du jeu

let lucien_morisse = false;
let sanremodone = false;
let partition_in_inventaire = false;
let code_resolu = false;
let boule_disco_in_inventaire = false;
let PDSdone = false;
let mogadorDone = false;
// Toutes les icônes et leurs marqueurs ainsi que les objets de l'inventaire

let planeIcon = L.icon({iconUrl: obj_array[1][5], iconSize: [obj_array[1][6], obj_array[1][7]]});
L.marker([obj_array[1][3], obj_array[1][2]], {icon: planeIcon}).addTo(map).bindPopup(obj_array[1][9] + boutonVoler);

function setMapOnParis(){
    map.setView([48.856, 2.341], 13);
}

let appartIcon = L.icon({iconUrl: obj_array[2][5], iconSize: [obj_array[2][6], obj_array[2][7]]});
//L.marker([obj_array[2][3], obj_array[2][2]], {icon: appartIcon}).addTo(map).bindPopup(obj_array[2][9]);

let olympiaIcon = L.icon({iconUrl: obj_array[3][5], iconSize: [obj_array[3][6], obj_array[3][7]]});
olympialain = L.marker([obj_array[3][3],obj_array[3][2]], {icon: olympiaIcon}).addTo(map);

let montmartreIcon = L.icon({iconUrl: obj_array[4][5], iconSize: [obj_array[4][6], obj_array[4][7]]});
L.marker([obj_array[4][3],obj_array[4][2]], {icon: montmartreIcon}).addTo(map);

let sanremoIcon = L.icon({iconUrl: obj_array[5][5], iconSize: [obj_array[5][6], obj_array[5][7]]});
sanremomicro = L.marker([obj_array[5][3],obj_array[5][2]],{icon: sanremoIcon}).addTo(map);

let PDSIcon =  L.icon({iconUrl: obj_array[6][5], iconSize: [obj_array[6][6], obj_array[6][7]]});
PDSmarker = L.marker([obj_array[6][3],obj_array[6][2]],{icon: PDSIcon}).addTo(map);

let alainIcon = L.icon({iconUrl: obj_array[7][5], iconSize: [obj_array[7][6], obj_array[7][7]]});

let dalidisqueIcon = L.icon({iconUrl: obj_array[8][5], iconSize: [obj_array[8][6], obj_array[8][7]]});
disquecode = L.marker([obj_array[8][3],obj_array[8][2]], {icon: dalidisqueIcon}).addTo(map);

let journalIcon = L.icon({iconUrl: obj_array[9][5], iconSize: [obj_array[9][6], obj_array[9][7]]});
L.marker([obj_array[9][3],obj_array[9][2]], {icon: journalIcon}).addTo(map).bindPopup(boutonRecupJournal);

let mogadorIcon = 'prout';
mogadorMarker = L.marker([NULL,NULL], {icon: NULL}).addTo(map);

// GESTION DU ZOOM

// Affichage = 1 = True



map.on('zoom', function(){
    if(obj_array[2][10] == 1){
        marker = L.marker([obj_array[2][3], obj_array[2][2]], {icon: appartIcon});
        zoom(marker, obj_array[2][8], obj_array[2][9]);
    }
});

// Fonction qui affiche le marker selon un certain niveau de zoom
function zoom(marker, minZoom, popup){
    console.log("minZoom = " + minZoom);
    console.log("Zoom actuel = " + map.getZoom());
    var okay = 1;

    if(map.getZoom() >= minZoom){
        marker.addTo(map).bindPopup(popup);
        console.log("Hibou");
    }
    else if(map.getZoom() < minZoom){
        marker.remove();
        console.log("Chouette");
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
disquecode.addEventListener('click',enigme);
olympialain.addEventListener('click',paroles);
sanremomicro.addEventListener('click',sanremoconcert);
PDSmarker.addEventListener('click',PDSconcert);
mogadorMarker.addEventListener('click',mogadorFin);

function enigme(){
    let code = prompt("What's your sign?");
    console.log(code);
    if (code=='1234'){
        alert('BRAVO TU AS GAGNÉ')
        code_resolu = true;
    }
    else{
        alert("TU PUES LA MERDE")
    }
}

function paroles(){
    if(sanremodone == true){
        let texte = prompt("N'oubliez pas les paroles: <br>Caramels, Bonbons et ________ ")
        if(texte == 'chocolat' || texte == 'chocolats' || texte == 'Chocolat' || texte == 'Chocolat'){
            alert("MERCI PAS POUR MOI,MAIS TU PEUX BIEN LES OFFRIR à UNE AUTRE")
        }
        else{
         alert("Dommage, écoute la musique et réessaye <br> Indice : Ca se mange")
        }
    }
    else if(lucien_morisse == true){
        let rand = Math.floor(Math.random() * 3) + 1;
        if(rand==1){
            olympialain.bindPopup("Cloclo ce soir: Le téléphone pleure");
        }
        if(rand==2){
            olympialain.bindPopup("Jacques Dutronc en concert : Cette vieille branche");
        }
        if(rand==3){
            olympialain.bindPopup("Koba la D : Un CoNcErT dAnS lE bAt 7");
        }
    }
}

function sanremoconcert(){
    if(partition_in_inventaire == true){
        sanremodone = true;
        sanremomicro.bindPopup("Le 26 janvier 1967, Dalida participe au festival de chanson de Sanremo avec Luigi Tenco, le nouvel homme de sa vie qu'elle a convaincu de participer à la compétition.");
    }
    else{
        sanremomicro.bindPopup("Rien à signaler ici");
    }
}

function PDSconcert(){
    if(boule_disco_in_inventaire == true){

    }
    else{
        PDSmarker.bindPopup("Le Dôme de Paris - Palais des Sports est une salle de spectacles de grandes dimensions située place de la Porte-de-Versailles dans le 15e arrondissement de Paris. Elle peut accueillir jusqu'à plus de cinq mille spectateurs.")
    }
}

function mogadorFin(){
    if(PDSdone == true){
        mogadorMarker.bindPopup("Dalida devrait être ici pourtant, où peut-elle bien être ?")
    }
    else{
    }
}

function FinDuJeu(){
    if(mogadorDone == true){
        DalidaMaison.bindPopup("En réalite, dans la nuit du 2 au 3 mai 1987, restée seule dans sa maison du 11 bis rue d'Orchampt, elle se suicide par surdose de barbituriques, qu’elle avale avec du whisky");
    }
    else{
    }
}