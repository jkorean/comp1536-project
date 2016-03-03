

function nameValidate(){

var name = document.lessonForm.name.value;

if (name == "") {

	document.getElementById("nameError").innerHTML = "Please enter a name.";
    document.getElementById("nameError").style.display = "inline";
	
	}
	}
	
function emailValidate(){

var email = document.getElementById("email").value;

var emailRegex = email.match;

if (email.match(/^[a-zA-Z0-9._]{1,}@[a-zA-Z._]{1,10}.[a-zA-Z._]{1,4}$/ == null){

document.getElementById("Invalid").innerHTML = "Invalid Email.";
	
	}else {
	
	document.getElementbyId(Invalid").innerHTML = "";
	
	}
}

function