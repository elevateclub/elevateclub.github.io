var students = [];

function addStudent(e) {
	e.preventDefault();
	
	var el = $("#name").val();
	console.log(el);
}

$('document').ready(function(){
	$("#add-student").on("submit", null, addStudent);
});
