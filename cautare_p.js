function validareCautare(){

	var nume = document.getElementById('nume').value;
	var expresie = /^[0-9a-zA-Z]+$/;
	
	if(!nume.match(expresie) && nume.length>0) 
	{
	   alert("Numele retetei poate contine doar cifre si litere");
	   return false;
	}

	return true;
	
}