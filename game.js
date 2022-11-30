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
    n.innerHTML = "<img src='"+str+"'></img>";
    console.log("fill");
    console.log("<img src="+str+"></img>")
}

function slot_remove(n){
    n.innerHTML = null;
}
/*MARKERS DU JEU*/

let dalidaIcon = L.icon({iconUrl: '../images/dalida_jeune.jpg', iconSize: [78, 100], popupAnchor: [0, -50]});
L.marker([obj_array[0][3],obj_array[0][2]], {icon: dalidaIcon}).addTo(map).bindPopup("<center>Naissance de Dalida au Caire le 17 janvier 1933. <br/> A l'âge de 18 ans, elle participe au concours de Miss Egypte et gagne le premier prix ce qui va faire qu'elle va être engagée comme actrice pour tourner des films au Caire (le Hollywood de l'Orient). <br/><b>Trouvez l'aéroport du Caire !</b></center>");

let planeIcon = L.icon({iconUrl: '../images/avion.png', iconSize: [150, 150]});
L.marker([obj_array[1][3], obj_array[1][2]], {icon: planeIcon}).addTo(map).bindPopup("<center>Repérée par un réalisateur français, elle s'envole pour Paris le 24 décembre 1954.</center>");

let appartIcon = L.icon({iconUrl: '../images/appartement.png', iconSize: [100, 100]});
L.marker([obj_array[2][3], obj_array[2][2]], {icon: appartIcon}).addTo(map).bindPopup("<center>Installation dans un appartement proche des Champs Élysées où elle fait la rencontre d'Alain Delon, son voisin de palier.</center>");

let alainIcon = L.icon({iconUrl: '../images/alain_delon.jpg', iconSize: [349, 440]});

let olympiaIcon = L.icon({iconUrl: '../images/olympia_paris.jpg', iconSize: [349, 440]});
L.marker([obj_array[3][3],obj_array[3][2]], {icon: olympiaIcon}).addTo(map);

let montmartreIcon = L.icon({iconUrl: '../images/charles_aznavour.png', iconSize: [220, 440]});
L.marker([obj_array[4][3],obj_array[4][2]], {icon: montmartreIcon}).addTo(map);

let sanremoIcon = L.icon({iconUrl: '../images/charles_aznavour.png', iconSize: [349, 440]});
L.marker([obj_array[5][3],obj_array[5][2]],{icon: sanremoIcon}).addTo(map);

let PDSIcon =  L.icon({iconUrl: '../images/palais_des_sports.jpg', iconSize: [349, 440]});
L.marker([obj_array[6][3],obj_array[6][2]],{icon: PDSIcon}).addTo(map);

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