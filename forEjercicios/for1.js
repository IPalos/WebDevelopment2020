var frutas = ["manzana","pera", "mango", "sandía", "platano"]
var ul = document.getElementById("lista")

for (let i=0; i<frutas.length;i++){
	console.log(frutas[i]);
	ul.innerHTML += "<li>"+frutas[i]+"</li>"
}