var inputC = 0;
var inputF = 0;

function guardarInputC(){
	inputC = document.getElementById("celsius").value;
	console.log(inputC);
}

function guardarInputF(){
	inputF = document.getElementById("fahrenheit").value;
	console.log(inputF);
}

function CaF(){
	document.getElementById("fahrenheit").value = inputC*(9/5)+32;
	console.log("ESTOY CORRIENTO LA FUNCION CAF")
}

function FaC(){
	document.getElementById("celsius").value = (inputF - 32 ) * 5/9;
}

