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

let greenIcon = L.icon({iconUrl: '../images/leaf-green.png', iconSize: [38, 95]});
L.marker([30.050, 31.235], {icon: greenIcon}).addTo(map).bindPopup("Naissance de Dalida au Caire le 17 janvier 1933");

let planeIcon = L.icon({iconUrl: '../images/avion.png', iconSize: [150, 150]});
L.marker([30.114404, 31.420849], {icon: planeIcon}).addTo(map).bindPopup("Repérée par un réalisateur français, elle s'envole pour Paris le 24 décembre 1954");

let appartIcon = L.icon({iconUrl: '../images/appartement.png', iconSize: [100, 100]});
L.marker([48.871099, 2.304455], {icon: appartIcon}).addTo(map).bindPopup("Installation dans un appartement proche des Champs Élysées où elle fait la rencontre d'Alain Delon, son voisin de palier");

let alainIcon = L.icon({iconUrl: '../images/alain_delon.jpg', iconSize: [349, 440]});


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