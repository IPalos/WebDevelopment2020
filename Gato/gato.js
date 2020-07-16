// CEREBRO
var currentPlayer = "jugador1";
var tablero = [[0,0,0],
							 [0,0,0],
							 [0,0,0]];

function Play(celda){
	console.log("Jugador Actual: "+currentPlayer);
	console.log("Celda Picada : "+celda);

	if ("jugador1" == currentPlayer){
		// Juega j1
		// Modificar el JS
		// TODO
		// Modificar el HTML
		document.getElementById(celda).className += " j1";


		currentPlayer = "jugador2";
	}else{
		// Juega j2
		// Modificar el JS
		// TODO
		// Modificar el HTML
		document.getElementById(celda).className += " j2";

		currentPlayer ="jugador1";
	}

	document.getElementById("jugador").innerHTML = "Jugador Actual: "+ currentPlayer;


}


// Registrar la condicion de victoria

// Administrar turno

// Mostrar los X y O que estan en el CSS

