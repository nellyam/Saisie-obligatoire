"use strict";

let nb;

do {
   nb = parseFloat(prompt("Veuillez sasisir un nombre").replace(",", "."));
} while(isNaN(nb)) 

document.querySelector("#content").innerHTML = `<p>Merci, vous avez saisie <b>${nb}</b></p>`; 