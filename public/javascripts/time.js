"use strict";
import { $ } from "./modules/nQuery.js";
import { Ajax } from "./modules/Ajax.js";
import { isoFormat, parseISOString, diff } from "./modules/Time.js";

//var url = window.location.href.substring(22);

const getTime = function (ev) { //continents
    let req = Object.create(Ajax);
    req.init();
    req.getFile("/times", showTime);
};

//Show to do
const showTime = function (e) {
    console.log(e.target.getResponseHeader("Content-Type"));
    let element = $("time");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    let times = JSON.parse(e.target.responseText);

    times.forEach(function (time) {
        let arr = ["#FFFA94", "#FFAAFB", "#AAFFAD", "#AABFFF"]; //Gul, pink, grøn, blå
        var randomValue = arr[Math.floor(arr.length * Math.random())];

        let tabel = document.createElement("table");
        tabel.setAttribute("style", "background-color:"+randomValue);
        let tr = document.createElement("tr");
        let td = document.createElement("td");

        let lnk = document.createElement('a');                        // denne blok i stedet for
        //lnk.setAttribute("href", "user/delete/"+todo.created);
        let delI = document.createTextNode("X");
        lnk.setAttribute("class", "delete");
        lnk.appendChild(delI);
        td.appendChild(lnk);
        tr.appendChild(td);

        let tr1 = document.createElement('tr');
        let p = document.createElement("p");
        p.setAttribute("class", "smallHeading");
        let tit = document.createTextNode("Title");
        let TOp = document.createElement("p");
        let TODOtit = document.createTextNode(time.title);
        p.appendChild(tit);
        TOp.appendChild(TODOtit);
        tr1.appendChild(p);
        tr1.appendChild(TOp);

        var date = isoFormat(parseISOString(time.deadline)) // 03/11/2014
        var dates = diff(time.deadline);
        console.log(dates);

        let p3 = document.createElement("p");
        p3.setAttribute("class", "smallHeading");
        let dead = document.createTextNode("Deadline");
        let TOp3 = document.createElement("p");
        let TODOdead = document.createTextNode(date);
        p3.appendChild(dead);
        TOp3.appendChild(TODOdead);
        tr1.appendChild(p3);
        tr1.appendChild(TOp3);

        let p2 = document.createElement("p");
        p2.setAttribute("class", "smallHeading");
        let back = document.createTextNode("Days back");
        let pp2 = document.createElement("p");
        let pn2 = document.createTextNode(dates);
        p2.appendChild(back);
        pp2.appendChild(pn2);
        tr1.appendChild(p2);
        tr1.appendChild(pp2);

        tabel.appendChild(tr);
        tabel.appendChild(tr1);

        $("time").appendChild(tabel);
        
    });
}

function work(){
    getTime();
}


window.addEventListener("load", work);
 
