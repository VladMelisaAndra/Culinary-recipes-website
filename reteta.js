
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');


let xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "../retete.json", true);
xmlhttp.send();


xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let reteta = JSON.parse(this.responseText);
		for(let i = 0; i < reteta.length; i++) {
				if(reteta[i]['id'] == id )
					afisare(reteta[i]);
		}
  }
};

function afisare(arr) {

		let reteta = document.getElementById('reteta');

		let titlu = arr['titlu'];


		let h1 = document.createElement('h1');
		h1.innerHTML = titlu;

		reteta.append(h1);

		let yt = document.createElement('iframe');
		yt.src = arr['yt_url'];
		yt.width = '500';
		yt.height = '500';
		yt.style.display = 'block';
		yt.style.margin = 'auto';

		reteta.appendChild(yt);

		let h3 = document.createElement('h3');

		h3.innerHTML = "Ingrediente necesare <br>";

		reteta.append(h3);

		for(i=0;i<arr['ingrediente'].length; i++)
		{
			let ingredient = document.createElement('p');
			ingredient.innerHTML = arr['ingrediente'][i];

			reteta.append(ingredient);
		}

		h3.innerHTML = "Descriere <br>";
		reteta.append(h3);

		let descriere = document.createElement('p');
		descriere.innerHTML = arr['descriere'];

		reteta.append(descriere);


}
