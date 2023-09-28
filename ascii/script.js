var textInput;
var outputTextarea;
var hexRadio;
var binRadio;

function convertToHex(str) {
    var hex = '\0';
    for(var i=0;i<str.length;i++) {
        hex += ''+str.charCodeAt(i).toString(16).padStart(2, "0");
        hex.length % 24 == 0 ? hex += '\n' : hex += '\t';
    }
    return hex;
}

function convertToBin(str) {
    var bin = '';
    for(var i=0;i<str.length;i++) {
        bin += ''+str.charCodeAt(i).toString(2).padStart(8, "0") +'\n';
    }
    return bin;
}

function updateTextArea(e) {
    var output = hexRadio.checked ? convertToHex(textInput.value) : convertToBin(textInput.value);
    outputTextarea.innerHTML = output;
}

(function() {
    textInput = document.querySelector("#input");
    outputTextarea = document.querySelector("#output-textarea");
    hexRadio = document.querySelector("#hex-radio");
    binRadio = document.querySelector("#bin-radio");

    textInput.addEventListener("change", updateTextArea);
    hexRadio.addEventListener("change", updateTextArea)
    binRadio.addEventListener("change", updateTextArea)
})();