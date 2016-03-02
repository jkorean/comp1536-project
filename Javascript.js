

function nameValidate(){

var date = document.getElementById("dateError").value;

if (name.match(/^[a-zA-Z]{1,35}$/ == null) {

	document.getElementById("Invalid").innerHTML = "Invalid Name.";
	
	}else {
	
	document.getElementbyId("Invalid").innerHTML = "";
	
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
