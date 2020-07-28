var booleano;

function changeValue(){
	booleano = !booleano;
	if( booleano == true){
		document.getElementById("resultado").innerText = "Boolean o es verdadero"
	}
	else {
		document.getElementById("resultado").innerText = "Boolean o es falso"

	}
}
