const width = 64, height = 64;
let canvas, ctx;
let rinput, ginput, binput;

function getRandomByte() {
	return Math.floor(Math.random() * 256);
  }

function randomButtonClicked(e) {
	e.preventDefault();

	rv = getRandomByte();
	rinput.value = rv;
	gv = getRandomByte();
	ginput.value = gv;
	bv = getRandomByte();
	binput.value = bv;

	updateColor();
}

function updateColor(e) {
	var val = "#" + 
  	rinput.valueAsNumber.toString(16).padStart(2, "0") +
  	ginput.valueAsNumber.toString(16).padStart(2, "0") +
  	binput.valueAsNumber.toString(16).padStart(2, "0") + "ff";
    ctx.fillStyle = val;
    ctx.fillRect(0, 0, width, height);
}

(function() {
	rinput = document.getElementById("red");
	ginput = document.getElementById("green");
    binput = document.getElementById("blue");
	canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    updateColor();
    [rinput, ginput, binput].forEach((v) => v.addEventListener("change", updateColor));

    document.getElementById("random-button").addEventListener("click", randomButtonClicked);
})();