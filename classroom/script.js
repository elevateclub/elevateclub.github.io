var students = [];
var points = [];

function addPoints(i) {
	points[i]++;
	$(`#student-point-${i}`).html(`Points: ${points[i]}`)
}

function addStudent(e) {
	e.preventDefault();
	
	var el = $("#add-student-name-input").val();
	students.push(el);
	points.push(0);

	var n = points.length-1;
	$("#students").append($(`<h1>${el}</h1><h2 id="student-point-${n}">Points: 0</h2><button onclick="addPoints(${n})" id="student-${el}-add-button">+</button>`));
}

$('document').ready(function(){
	$("#add-student").on("submit", null, addStudent);
});
