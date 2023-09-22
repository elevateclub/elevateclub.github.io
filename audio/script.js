// https://stackoverflow.com/a/44215748

// create web audio api context
var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
var notes = [];
var tempo = 100;

function resetNotes() {
    notes = [ 
      [659, 4], [659, 4], [659, 4], [523, 8], [0, 16], [783, 16],
      [659, 4], [523, 8], [0, 16], [783, 16], [659, 4], [0, 4],
      [987, 4], [987, 4], [987, 4], [1046, 8], [0, 16], [783, 16],
      [622, 4], [523, 8], [0, 16], [783, 16], [659, 4]
    ];
    notes.reverse();
}

function playNote(frequency, duration) {
    var duration = 1000 * 256 / (duration * tempo);

    // create Oscillator node
    var oscillator = audioCtx.createOscillator();

    oscillator.type = 'square';
    oscillator.frequency.value = frequency; // value in hertz
    oscillator.connect(audioCtx.destination);
    oscillator.start();

    setTimeout( function() {
        oscillator.stop();
        playMelody();
        }, duration);
}

function playMelody() {
  if (notes.length > 0) {
    note = notes.pop();
    playNote(note[0], note[1]);
  }
}

function playButtonClicked(e) {
    resetNotes();
    tempo = parseInt($("#tempo-input").val());
    playMelody();
}

function tempoInputChanged(e) {
    var t = $("#tempo-input").val();
    $("#tempo-input-label").html(`Tempo: ${t}`)
}

$('document').ready(function(){
	$("#play-button").on("click", null, playButtonClicked);
    $("#tempo-input").on("change", null, tempoInputChanged);
});