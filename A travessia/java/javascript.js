var Barco = document.getElementById("Barco");
var Galinha = document.getElementById("Galinha");
var Raposa = document.getElementById("Raposa");
var Milho = document.getElementById("Milho");
var BotaoD = document.getElementById("BotaoD");
var BotaoE = document.getElementById("BotaoE");
var galinhaM = document.getElementById("galinhaM");
var raposaG = document.getElementById("raposaG");
BotaoD.addEventListener("click", moveBarcoD);
BotaoE.addEventListener("click", moveBarcoE);
Galinha.addEventListener("click", trocaG);
Raposa.addEventListener("click", trocaR);
Milho.addEventListener("click", trocaM);


function moveBarcoD() {
	MargemD.appendChild(Barco);
}
function moveBarcoE() {
	MargemE.appendChild(Barco);
}
/*function moveBarco(){
	if(Barco.parentElement == MargemD){
		MargemE.appendChild(Barco);
		BotaoD.innerText = ">";
	}else{
		MargemD.appendChild(Barco);
		BotaoD.innerText = "<";
	}
}*/

function trocaG() {
	if (Barco.parentElement == MargemE && Galinha.parentElement == Inicio) {
		Barco.appendChild(Galinha);
	} else if (Barco.parentElement == MargemE && Galinha.parentElement == Barco) {
		Inicio.appendChild(Galinha);
	} else if (Barco.parentElement == MargemD && Galinha.parentElement == Barco) {
		Termino.appendChild(Galinha);
	} else if (Galinha.parentElement == Termino && Barco.parentElement == MargemD) {
		Barco.appendChild(Galinha);
	} if (Galinha.parentElement == Termino && Raposa.parentElement == Termino && Milho.parentElement == Termino) {
		alert("Parabéns, você VENCEU!!");
	}
}

function trocaR() {
	if (Barco.parentElement == MargemE && Raposa.parentElement == Inicio) {
		Barco.appendChild(Raposa);
	} else if (Barco.parentElement == MargemE && Raposa.parentElement == Barco) {
		Inicio.appendChild(Raposa);
	} else if (Barco.parentElement == MargemD && Raposa.parentElement == Barco) {
		Termino.appendChild(Raposa);
	} else if (Raposa.parentElement == Termino && Barco.parentElement == MargemD) {
		Barco.appendChild(Raposa);
	} if (Raposa.parentElement == Termino && Galinha.parentElement == Inicio && Milho.parentElement == Inicio) {
		alert("Galinha COMEU o milho!");
	}
}

function trocaM() {
	if (Barco.parentElement == MargemE && Milho.parentElement == Inicio) {
		Barco.appendChild(Milho);
	} else if (Barco.parentElement == MargemE && Milho.parentElement == Barco) {
		Inicio.appendChild(Milho);
	} else if (Barco.parentElement == MargemD && Milho.parentElement == Barco) {
		Termino.appendChild(Milho);
	} else if (Milho.parentElement == Termino && Barco.parentElement == MargemD) {
		Barco.appendChild(Milho);
	} if (Milho.parentElement == Termino && Galinha.parentElement == Inicio && Raposa.parentElement == Inicio) {
		alert("Raposa DEVOROU a Galinha!");
	}
}