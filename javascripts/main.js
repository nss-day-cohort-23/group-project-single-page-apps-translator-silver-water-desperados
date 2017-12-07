"use strict";


const french = require('./french.js');
//console.log(french.translateToFrench("merry christmas")); 
// const varName = require(‘./filename’);

const german = require('./german.js');
//console.log(german.translateToGerman("merry christmas"));

const spanish = require('./spanish.js');
//console.log(spanish.translateToSpanish("merry christmas"));



let userInput = document.getElementById("input");
let spanishBtn = document.getElementById("spanishBtn");
let germanBtn = document.getElementById("germanBtn");
let frenchBtn = document.getElementById("frenchBtn");
let translate = document.getElementById("translate");
let userOutput = document.getElementById("output");


translate.addEventListener("click", function() {
    if (germanBtn.checked) {
      console.log("german button is clicked");
      userOutput.innerHTML = german.translateToSpanish(userInput.value);
    } 
  }); 

