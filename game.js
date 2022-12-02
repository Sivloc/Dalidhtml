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
var boutonMaison = "<center><input type='submit' onclick = setMapOnMaison() id='fly' value='Y aller'></center>";

// Les booléens pour gérer la progression du jeu

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
// Toutes les icônes et leurs marqueurs ainsi que les objets de l'inventaire

let planeIcon = L.icon({iconUrl: obj_array[1][5], iconSize: [obj_array[1][6], obj_array[1][7]]});
L.marker([obj_array[1][3], obj_array[1][2]], {icon: planeIcon}).addTo(map).bindPopup(obj_array[1][9] + boutonVoler);

function setMapOnParis(){
    map.setView([48.856, 2.341], 13);
}
function setMapOnMaison(){
    map.setView([obj_array[13][2],obj_array[13][3]],)
}

let appartIcon = L.icon({iconUrl: obj_array[2][5], iconSize: [obj_array[2][6], obj_array[2][7]]});
appartMarker = L.marker([obj_array[2][3], obj_array[2][2]], {icon: appartIcon}).addTo(map).bindPopup(obj_array[2][9]);

let olympiaIcon = L.icon({iconUrl: obj_array[3][5], iconSize: [obj_array[3][6], obj_array[3][7]]});
olympialain = L.marker([obj_array[3][3],obj_array[3][2]], {icon: olympiaIcon}).addTo(map).bindPopup("Elle rencontre Lucien Morisse (directeur artistique d'Europe 1) et Eddie Barclay (éditeur de disques) à l'Olympia,salle de spectacle et de musique dans Paris, Lucien Morisse prend sa carrière en main");

let montmartreIcon = L.icon({iconUrl: obj_array[4][5], iconSize: [obj_array[4][6], obj_array[4][7]]});
montmartreMarker = L.marker([obj_array[4][3],obj_array[4][2]], {icon: montmartreIcon}).addTo(map);

let sanremoIcon = L.icon({iconUrl: obj_array[5][5], iconSize: [obj_array[5][6], obj_array[5][7]]});
sanremomicro = L.marker([obj_array[5][3],obj_array[5][2]],{icon: sanremoIcon}).addTo(map);

let PDSIcon =  L.icon({iconUrl: obj_array[6][5], iconSize: [obj_array[6][6], obj_array[6][7]]});
PDSmarker = L.marker([obj_array[6][3],obj_array[6][2]],{icon: PDSIcon}).addTo(map);

let alainIcon = L.icon({iconUrl: obj_array[7][5], iconSize: [obj_array[7][6], obj_array[7][7]]});

let dalidisqueIcon = L.icon({iconUrl: obj_array[8][5], iconSize: [obj_array[8][6], obj_array[8][7]]});
disquecode = L.marker([obj_array[8][3],obj_array[8][2]], {icon: dalidisqueIcon});

let journalIcon = L.icon({iconUrl: obj_array[9][5], iconSize: [obj_array[9][6], obj_array[9][7]]});
L.marker([obj_array[9][3],obj_array[9][2]], {icon: journalIcon}).addTo(map).bindPopup(boutonRecupJournal);

let mogadorIcon = L.icon({iconUrl: obj_array[12][5], iconSize: [obj_array[12][6], obj_array[12][7]]});
mogadorMarker = L.marker([obj_array[12][3],obj_array[12][2]], {icon: mogadorIcon}).addTo(map);

let partocheIcon = L.icon({iconUrl: obj_array[15][5], iconSize: [obj_array[15][6], obj_array[15][7]]});
partocheMarker = L.marker([obj_array[15][3],obj_array[15][2]], {icon: mogadorIcon});

let tournedisqueIcon = L.icon({iconUrl: obj_array[14][5], iconSize: [obj_array[14][6], obj_array[14][7]]});
tournedisqueMarker = L.marker([obj_array[14][3],obj_array[14][2]], {icon: tournedisqueIcon});
// GESTION DU ZOOM

// Affichage = 1 = True

marker = L.marker([obj_array[2][3], obj_array[2][2]], {icon: appartIcon});

map.on('zoom', function(){
        zoom(marker, obj_array[2][8], obj_array[2][9]);
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
olympialain.addEventListener('click',disque);
olympialain.addEventListener('click',paroles);
sanremomicro.addEventListener('click',sanremoconcert);
PDSmarker.addEventListener('click',PDSconcert);
mogadorMarker.addEventListener('click',mogadorFin);
appartMarker.addEventListener('click',addDelon)

function addDelon(){
    if(alain_in_inventaire == false){
        alain_in_inventaire = true;
        slot1.innerHTML = ("<center><img src='"+obj_array[7][5]+"', width = 80, height = 80 ><center>");
        alert("Allez à l'Olympia pour débuter la carrière de Dalida")
    }
}
function disque(){
    if(lucien_morisse == false){
        disquecode.addTo(map).bindPopup("Elle enregistre son premier <b>45</b> tours, elle va ensuite faire les premières parties d'un artiste que vous trouverez à Montmartre, allez le voir pour récupérer le disque");
        lucien_morisse = true;
    }
}

function boheme(){
    let texte = prompt("Quel fameux chanteur apprécie Montmartre et ses lilas accrochés aux fenêtres?");
    if(texte == 'Aznavour' || texte == 'aznavour'){
        montmartreMarker.remove();
        disque_recuperable = true;
    }
    else{
        alert('Donne moi juste son nom de famille !');
    }
}

function recupdisque(){
    if(disque_recuperable == true){
        slot2.innerHTML = ("<center><img src='"+obj_array[8][5]+"', width = 80, height = 80 ><center>");
        disque_in_inventaire = true;
        disque_recuperable = false;
        alert("Dalida sort ensuite Itsi Bitsi Petit Bikini et rencontre un succès à l'international, particulièrement en Italie. Elle se rend donc à Sanremo au festival de la chanson")
        disquecode.remove();
    }
}


function enigme(){
    let code = prompt("Trouve le code : Les deux premiers chiffres sont le nombres de pays où Dalida à été numéro 1 avec Gigi L'Amoroso, <br> Les deux derniers sont un nombre associés aux musicales de l'époque");
    console.log(code);
    if (code=='1245'){
        alert('Bravo! A partir de maintenant, Dalida va commencer à produire des titres disco, elle donne un concert phénoménal au Palais des Sports')
        code_resolu = true;
        boule_disco_in_inventaire = true;
        slot2.innerHTML = "<center><img src='"+obj_array[11][5]+"', width = 80, height = 80 ><center>";
    }
    else{
        alert("Ce n'est pas le bon code : il y a un indice dans ton inventaire")
    }
}

function paroles(){
    if(sanremodone == true & parolesdone == false & alain_in_inventaire == true){
        let texte = prompt("N'oubliez pas les paroles: <br>Caramels, Bonbons et ________ ");
        if(texte == 'chocolat' || texte == 'chocolats' || texte == 'Chocolat' || texte == 'Chocolats'){
            alert("MERCI PAS POUR MOI,MAIS TU PEUX BIEN LES OFFRIR À UNE AUTRE");
            tournedisqueMarker.addTo(map);
            parolesdone = true;
        }
        else{
         alert("Dommage, écoute la musique et réessaye <br> Indice : Ca se mange")
        }
    }
    else if(disque_in_inventaire == true){
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
    if(disque_in_inventaire == true){
        sanremodone = true;
        sanremomicro.bindPopup("Le 26 janvier 1967, Dalida participe au festival de chanson de Sanremo avec Luigi Tenco, le nouvel homme de sa vie qu'elle a convaincu de participer à la compétition.");
    }
    else{
        sanremomicro.bindPopup("Rien à signaler ici");
    }
}

function PDSconcert(){
    if(boule_disco_in_inventaire == true){
        PDSmarker.bindPopup("Après cette période, Dalida commence à se fatiguer et elle se produit une dernière fois en Turquie. <br> Elle a ce soir rendez-vous avec François Naudy au Mogador, au sud-est de la gare de Saint-Lazare. Elle se prépare chez elle. " + boutonMaison);
        PDSdone = true;
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