var inicial;
var vocales =["a","e","i","o","u"]

function guardarInicial(){
	inicial = document.getElementById("palabra").value.toLowerCase()[0];
	checarVocal();
}

function checarVocal(){
	// pregunta si en nuestra lista "vocales" 
	//se encuentra el valor de "inicial"
	if (vocales.includes(inicial) == true){
		document.getElementById("resultado").style = "Color:green;"
	}
	else{
		document.getElementById("resultado").style = "Color:purple;"
	}
}