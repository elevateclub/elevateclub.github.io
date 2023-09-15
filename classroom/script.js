var students = [];

function addStudent(e) {
	e.preventDefault();
}

$('document').ready(function(){
	$("#add-student").on("submit", null, addStudent);
});
