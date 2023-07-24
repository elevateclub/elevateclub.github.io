(function() {
	var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var v = ["00", "56", "ac", "ff"];
  var i = 0;
  var r = 0xc0;
  var g = 0x30;
  var b = 0x0c;
  var a = 0x03;
  var clr = "#00000000";
  for (var x = 0; x < 16; x++) {
  	for (var y = 0; y < 16; y++) {
      ctx.fillStyle = clr;
      ctx.fillRect(x*64, y*64, 64, 64);
			i++;
      clr = "#" + v[(i&r)>>6] + v[(i&g)>>4] + v[(i&b)>>2] + v[i&a];
    }
  }
})();