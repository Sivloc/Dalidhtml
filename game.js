let map = L.map('map').setView([30.050, 31.235], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

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
