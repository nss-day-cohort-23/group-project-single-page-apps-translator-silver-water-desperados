"use strict";

let christmasFrench = {
    "have":"avoir",
    "a":"une",
    "very":"très",
    "merry":"joyeux",
    "christmas":"Noël",
    "and":"et",
    "happy":"content",
    "new":"nouveau",
    "year":"an",
    "you":"toi",
    "filthy":"crasseux",
    "animal":"animal",
    "you'll":"tu vas",
    "shoot":"tirer",
    "your":"votre",
    "eye":"œil",
    "out":"en dehors"
};

function translateToFrench(input) {
    console.log(input);
    let frenchTranslation = "";
    let inputArr = input.split(" ");
    for (var i = 0; i < inputArr.length; i++) {
        let translateMe = inputArr[i];
        if(christmasFrench[translateMe]) {
            frenchTranslation += christmasFrench[translateMe] + " ";
        }        
    } 
    return frenchTranslation;
}
// translateToFrench("merry christmas"); 

module.exports = {translateToFrench};