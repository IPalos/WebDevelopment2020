var esAzul = true; //Booleano, dice si la letra es azul o no

var clicks=0; // Entero, numero de clicks

var trig1 = 5;

// Definir una función
function cambiarColor(){
	if (esAzul == true) {
		document.getElementById("titulo").style = "Color:blue"
	} else {
		document.getElementById("titulo").style = "Color:red"
	}

	esAzul = !esAzul;
}

// Clicker
function aumentarClicks(banana){
	clicks +=banana;
document.getElementById("trig").innerText = "Numero de clicks dados al botón: " + clicks;

}

// Base * altura /2
function areaTriangulo(base, altura){
	return base*altura / 2;

}

 trig1 = areaTriangulo(3,4)
 var x = areaTriangulo(5,6)
document.getElementById("trig").innerText = "El área de la base es: "+ trig1
document.getElementById("x").innerText = "X es igual a: "+ x



