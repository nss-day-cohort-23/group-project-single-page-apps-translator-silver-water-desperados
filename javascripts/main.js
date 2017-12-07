"use strict";

const french = require('./french.js');
const german = require('./german.js');
const spanish = require('./spanish.js');

let userInput = document.getElementById("input");
let spanishBtn = document.getElementById("spanishBtn");
let germanBtn = document.getElementById("germanBtn");
let frenchBtn = document.getElementById("frenchBtn");
let translate = document.getElementById("translate");
let userOutput = document.getElementById("output");


translate.addEventListener("click", function(){
    console.log("translate button clicked");
    if (frenchBtn.checked) {
        console.log("frenchBtn pushed");
        userOutput.innerHTML = french.translateToFrench(userInput.value);
    }  
});
