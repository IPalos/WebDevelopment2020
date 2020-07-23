// CEREBRO
var currentPlayer = "jugador1";

var pares = ["00","02","20","22","11"];
var nones = ["10","01","12","21"];

var tablero =
	[[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0]];

function Play(celda) {
	console.log("Jugador Actual: " + currentPlayer);
	console.log("Celda Picada : " + celda);

	var celdalibre = leerCelda(celda);
	console.log(tablero);




	if (celdalibre) {
		if ("jugador1" == currentPlayer) {
			// Juega j1
			// Modificar el JS
			// Modificar el HTML
			document.getElementById(celda).className += " j1";


			currentPlayer = "jugador2";
		} else {
			// Juega j2
			// Modificar el JS
			// TODO
			// Modificar el HTML
			document.getElementById(celda).className += " j2";

			currentPlayer = "jugador1";
		}

		checarVictoria(celda);


		document.getElementById("jugador").innerHTML = "Jugador Actual: " + currentPlayer;
	}




}


// Registrar la condicion de victoria
function checarVictoria(celda){
	// La celda que escribi se encuentra en el conjunto "pares"?
	if(pares.includes(celda)){

	}
}



// Mostrar los X y O que estan en el CSS



// Funcion que transforme palabras a celdas
// "00"  -> 0 , 0
function leerCelda(palabra) {
	var fila = palabra[0] * 1;
	var columna = palabra[1] * 1;

	// Si la celda que picamos está vacía
	if (tablero[fila][columna] === 0) {
		// jugamos en esa celda
		tablero[fila][columna] = currentPlayer[7] * 1;
		document.getElementById("error").innerText = ""
		return true

	} else {
		// Marcar mensaje de error
		document.getElementById("error").innerText = "ESTA CELDA YA ESTÁ OCUPADA"
		return false
	}

}
