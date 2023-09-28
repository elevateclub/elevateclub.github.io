var textInput;

function convertToHex(str) {
    var hex = '\0';
    for(var i=0;i<str.length;i++) {
        hex += ''+str.charCodeAt(i).toString(16);
        hex.length % 24 == 0 ? hex += '\n' : hex += '\t';
    }
    return hex;
}

function updateTextArea(e) {
    document.getElementById("hex-textarea").innerHTML = convertToHex(textInput.value);
}

(function() {
    textInput = document.getElementById("text-input");
    textInput.addEventListener("change", updateTextArea);
})();