let xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "retete.json", true);
xmlhttp.send();


xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
	let retete = JSON.parse(this.responseText);
		for(let i = 0; i < retete.length; i++) {

			if(retete[i]['tip']=='mancare'){
				let reteta = document.createElement('a');
				reteta.classList.add('flex-item');

				let ascunde = document.createElement('p');
				ascunde.innerHTML = "Ascunde";
				
				ascunde.onclick = function() {
					//opreste eventul si default-ul elementului
					event.stopPropagation();
					event.preventDefault();
					//sterge parintele elementului (adica toata reteta)
					ascunde.parentElement.remove();
				}
				
			
				
				reteta.appendChild(ascunde);
				
				let yt = document.createElement('iframe');
				yt.src = retete[i]['yt_url'];
				yt.width = '200';
				yt.height = 'auto';

				reteta.appendChild(yt);

				let titlu = document.createElement('h1');
				reteta.style.display = "block";
				reteta.target="_blank";
				reteta.href = "http://127.0.0.1:8080/reteta.html/?id="+retete[i]['id'];
				titlu.innerHTML = retete[i].titlu;

				reteta.appendChild(titlu);

				for(let j=0; j<retete[i]['ingrediente'].length; j++)
				{
					let ingredient = document.createElement('p');
					ingredient.innerHTML = retete[i]['ingrediente'][j];
					reteta.appendChild(ingredient);
				}
				document.getElementById('mancaruri').appendChild(reteta);
			}
		}
   }
};


