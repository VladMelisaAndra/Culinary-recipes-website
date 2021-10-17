let request = new XMLHttpRequest();
request.open("GET","quiz.json", true);
request.send();

let quiz;
request.onreadystatechange = function(){
		if(this.readyState==4 && this.status == 200){
			quiz = JSON.parse(request.responseText);
			showRaspuns(quiz);
		}
	}


function showRaspuns(quiz){

	let random ;

  document.getElementById('b1').onclick = function() {
    random = Math.floor(Math.random() * quiz.test.length);
  	document.getElementById('intrebare').innerHTML = quiz.test[random].question;

	  document.getElementById('raspuns').innerHTML = "";
	}

	document.getElementById('b2').onclick = function() {
		document.getElementById('raspuns').innerHTML = quiz.test[random].answer;
	}
}
