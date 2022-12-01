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




/*MARKERS DU JEU*/
let dalidaIcon = new L.icon({iconUrl: obj_array[0][5], iconSize: [obj_array[0][6], obj_array[0][7]], popupAnchor: [0, -50]});
L.marker([obj_array[0][3],obj_array[0][2]], {icon: dalidaIcon}).addTo(map).bindPopup(obj_array[0][9]);


var boutonVoler = "<center><input type='submit' onclick = setMapOnParis() id='fly' value='Y aller'></center>";
var boutonRecupJournal = L.popup({minWidth : 375,content: '<center><img src="'+obj_array[10][5]+'"></center>'});


let planeIcon = L.icon({iconUrl: obj_array[1][5], iconSize: [obj_array[1][6], obj_array[1][7]]});
L.marker([obj_array[1][3], obj_array[1][2]], {icon: planeIcon}).addTo(map).bindPopup(obj_array[1][9] + boutonVoler);

function setMapOnParis(){
    map.setView([48.856, 2.341], 13);
}

let appartIcon = L.icon({iconUrl: obj_array[2][5], iconSize: [obj_array[2][6], obj_array[2][7]]});
L.marker([obj_array[2][3], obj_array[2][2]], {icon: appartIcon}).addTo(map).bindPopup(obj_array[2][9]);

let olympiaIcon = L.icon({iconUrl: obj_array[3][5], iconSize: [obj_array[3][6], obj_array[3][7]]});
L.marker([obj_array[3][3],obj_array[3][2]], {icon: olympiaIcon}).addTo(map);

let montmartreIcon = L.icon({iconUrl: obj_array[4][5], iconSize: [obj_array[4][6], obj_array[4][7]]});
L.marker([obj_array[4][3],obj_array[4][2]], {icon: montmartreIcon}).addTo(map);

let sanremoIcon = L.icon({iconUrl: obj_array[5][5], iconSize: [obj_array[5][6], obj_array[5][7]]});
L.marker([obj_array[5][3],obj_array[5][2]],{icon: sanremoIcon}).addTo(map);

let PDSIcon =  L.icon({iconUrl: obj_array[6][5], iconSize: [obj_array[6][6], obj_array[6][7]]});
L.marker([obj_array[6][3],obj_array[6][2]],{icon: PDSIcon}).addTo(map);

let alainIcon = L.icon({iconUrl: obj_array[7][5], iconSize: [obj_array[7][6], obj_array[7][7]]});

let dalidisqueIcon = L.icon({iconUrl: obj_array[8][5], iconSize: [obj_array[8][6], obj_array[8][7]]});
L.marker([obj_array[8][3],obj_array[8][2]], {icon: dalidisqueIcon}).addTo(map);

let journalIcon = L.icon({iconUrl: obj_array[9][5], iconSize: [obj_array[9][6], obj_array[9][7]]});
L.marker([obj_array[9][3],obj_array[9][2]], {icon: journalIcon}).addTo(map).bindPopup(boutonRecupJournal);

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