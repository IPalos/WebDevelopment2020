var frutas = ["manzana", "anana","pera", "mango", "sandía", "platano","orange"]
var vocales = ["a","e","i","o","u"]
var ul = document.getElementById("lista")
var inicial;

for (let i=0; i<frutas.length;i++){
	console.log(frutas[i]);

	guardarInicial(frutas[i]);
	checarVocal(frutas[i]);
}

function guardarInicial(palabra){
	inicial = palabra.toLowerCase()[0];
}

function checarVocal(palabra){
	if(vocales.includes(inicial)==true){
		ul.innerHTML += "<li style='Color:red;'>"+palabra+"</li>"
	}
	else{
		ul.innerHTML += "<li style='Color:green;'>"+palabra+"</li>"
	}

}

