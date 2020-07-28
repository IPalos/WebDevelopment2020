//leer el numero y guardarlo en una variable
var num;

function leerNum(){
	num = document.getElementById("numero").value *1;
	cambiarEstilo();
}

//acceder al "resultado"
function cambiarEstilo(){
	if(num >= 0){
		// El estilo de "resultado" será azul
//cambiar el estilo

		document.getElementById("resultado").style = "Color:blue;"
	}
	else{
		// El estulo de "resultado será rojo"
//cambiar el estilo

		document.getElementById("resultado").style = "Color:red;"

	}
}

