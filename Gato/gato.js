// CEREBRO
var currentPlayer = "jugador1";
var victory = false;

var pares = ["00", "22", "11"];
var impares = ["02", "20", "11"];

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
		victory = checarVictoria(currentPlayer[7] * 1, celda); 
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

		if(victory){
		document.getElementById("victoria").innerText = "GANASTE!"

		}

		document.getElementById("jugador").innerHTML = "Jugador Actual: " + currentPlayer;

	}




}


// Registrar la condicion de victoria
function checarVictoria(jugador, celda) {
	var fila = celda[0] * 1;
	var columna = celda[1] * 1;
	var f = checarFilas(jugador, fila);
	var c = checarCols(jugador, columna);
	var d = checarDiags(jugador)
	if (f || c || d) {
		return true
	}
	else return false


}

// Devuelve True si todas las celdas de la misma fila son iguales
function checarFilas(jugador, fila) {
	return tablero[fila].every(e => e==jugador)
}

function checarCols(jugador, col) {
	t=[]
	for (let fila = 0; fila < tablero.length; fila++) {
		t[fila] =tablero[fila][col]
	}
	return t.every(e=> e==jugador)
}

function checarDiags(jugador){
	p=[tablero[0][0],tablero[1][1],tablero[2][2]]
	i=[tablero[2][0],tablero[1][1],tablero[0][2]]

	return (p.every(e=> e==jugador) || i.every(e=>e==jugador))
	
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
