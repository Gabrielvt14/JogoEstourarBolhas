function addBolha() {
	// Cria uma div
	var bolha = document.createElement("div");
	// Coloca a classe bolha na div
	bolha.setAttribute("class", "bolha");
	// Define local onde aparece a bolha, com left e top no css
	var p1 = Math.floor(Math.random() * 500);
	var p2 = Math.floor(Math.random() * 400);
	// Define a cor da bolha
	var color = Math.floor(Math.random() * 999999);
	// Define o valor do left e top no css
	bolha.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background-color:#"+color+';');
	// Define onclick na div com class bolha, para chamar no click, a função estourar
	bolha.setAttribute("onclick", "estourar(this)");

	// Coloca elemento a tela
	document.body.appendChild(bolha);
}

function estourar(elemento) {
	// Remove o elemento do html
	document.body.removeChild(elemento);
}

function iniciar() {
	// seta intervalo de 1 em 1 segundo para chamar a função de addBolha
	setInterval(addBolha, 1000);

	// ### Modo Hard ###
	// setInterval(addBolha, 1);
}