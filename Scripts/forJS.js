var frutas = ["manzana","pera","platano", "naranja", "zanahoria"];

console.log("Frutas antes: "+frutas);

for (let index = 0; index < frutas.length; index++) {
	frutas[index]=frutas[index].toUpperCase();
}
console.log("Frutas despues: "+frutas);

// =========================
// Estado Inicial
var tablero =
	[[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0]];
// Estado Deseado
	var tableroDeseado =
	[[0, 0, "I"],
	[0, 0, 1],
	[0, 0, 1]];
	
	contador=1;
	for (let fila = 0; fila < tablero.length; fila++) {
		for (let celda = 0; celda < tablero[fila].length; celda++) {
			tablero[fila][celda] = contador;
			contador++;
			console.log(contador);
		}
		
	}

	console.log(tablero);

	function buscarCols(f,c) {
		// Modificar tablero
		var tableroDeseado =
	[[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0]];

	for (let fila = 0; fila < tablero.length; fila++) {
		for (let columna = 0; columna < tablero[fila].length; columna++) {
			// La columna que estoy checando es igual al input?
			if(columna == c){
				// Sobreescribo la info que esta en esa celda
				tableroDeseado[fila][columna] = 1;
			}
		}
	}
	return tableroDeseado
	}