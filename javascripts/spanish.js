"use strict";
// const varName = require(‘.filename’);

// spanish language object
let christmasSpanish = {
  "have":"tener",
  "a":"un",
  "very":"muy",
  "merry":"feliz",
  "christmas":"navidad",
  "and":"y",
  "happy":"contento",
  "new":"nuevo",
  "year":"año",
  "you":"tú",
  "filthy":"inmundo",
  "animal":"animal",
  "you'll":"tu vas a",
  "shoot":"disparar",
  "your":"tu",
  "eye":"ojo",
  "out":"fuera"  
};

// let christmasArray = Object.keys(christmas);


function translateToSpanish(input) {
  let spanishTranslation = "";
  let inputArr = input.split(" ");
  for (var i = 0; i < inputArr.length; i++) {
      let translateMe = inputArr[i];
      if(christmasSpanish[translateMe]) {
          spanishTranslation += christmasSpanish[translateMe] + " ";
      }        
  } 
  return spanishTranslation;
}
// translateToSpanish(input);



module.exports = {translateToSpanish};

