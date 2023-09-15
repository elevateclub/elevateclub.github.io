var students = [];

function addStudent(e) {
	e.preventDefault();
	
	var el = $("#add-student-name-input").val();
	students.push(el);

	$("#students").append($(`<h1>${el}</h1>`));
}

$('document').ready(function(){
	$("#add-student").on("submit", null, addStudent);
});
