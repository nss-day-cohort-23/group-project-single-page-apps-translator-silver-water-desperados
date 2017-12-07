"use strict";

let christmasGerman = {
    "have":"haben",
    "a":"ein",
    "very":"sehr",
    "merry":"frohlich",
    "christmas":"weihnachten",
    "and":"und",
    "happy":"glucklich",
    "new":"neu",
    "year":"jahr",
    "you":"she",
    "filthy":"schmutzig",
    "animal":"tier",
    "you'll":"du wirst",
    "shoot":"schieben",
    "your":"ihre",
    "eye":"auge",
    "out":"aus",
    "kid":"kind"
};

function translateToGerman(input) {
    let germanTranslation = "";
    let inputArr = input.split(" ");
    for (var i = 0; i < inputArr.length; i++) {
        let translateMe = inputArr[i];
        if(christmasGerman[translateMe]) {
            germanTranslation += christmasGerman[translateMe] + " ";
        }        
    } 
    return germanTranslation;
}
//translateToGerman(input);

module.exports = {translateToGerman};