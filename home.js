	function mareste(evt) {
	  evt.target.style.width = '100%';
	}
	function micsoreaza(evt) {
	  evt.currentTarget.style.width = '82px';
	}
	function schimbaculoare(evt) {
		let culoare =  window.getComputedStyle(evt.currentTarget, null).getPropertyValue("background-color");
		if(culoare=='rgb(255, 192, 203)')
			evt.currentTarget.style.backgroundColor  = 'lightblue';
		else
			evt.currentTarget.style.backgroundColor  = 'pink';
	}

	document.getElementById('descriere').addEventListener('mouseover', mareste);
	document.getElementById('descriere').addEventListener('mouseout', micsoreaza);
	document.getElementById('descriere').addEventListener('click', schimbaculoare);

	  if(localStorage.getItem("username") == null){
		  let nume = prompt("Cum te cheama?");
		  localStorage.setItem('username', nume);
	  }
	  else
		console.log("Numele tau e " + localStorage.getItem('username'));


  //schimbam titlul de pe pagina home din albastru in roz peste 3 secunde
  var pl=document.getElementsByTagName("h1");
  for(var i=0;i<pl.length;i++)
    setTimeout(colorare, 3000*(i+1),"lightpink",pl[i]);

  function colorare(culoare,ob)
  {
    ob.style.color=culoare;
  }

  //schimbam fundalul sectiunii quiz din albastru in roz odata la 300 milisecunde si tot asa
  var myVar = setInterval(setColor, 300);

  function setColor() {
    var x = document.getElementsByClassName("quiz");
    x[0].style.backgroundColor = x[0].style.backgroundColor == "lightpink" ? "lightblue" : "lightpink";
  }

	document.querySelector("#sterge").remove();

	let data = new Date();
	
	document.getElementById('data').innerHTML = "Data de astazi: " +  data.getDate() + " / " + (data.getMonth()+1) + " / " + data.getFullYear();