var TeslaS = {
	"modelo": "Modelo S",
	"placa":"ABC123",
	"llantas":4,
	"verificado":true,
	"color":"negro",
	"motor":"electrico"
}

var Toyota = {
	"modelo": "Prius",
	"placa":"DEF456",
	"motor":"hibrido",
	"verificado":false,
	"llantas":4,
	"color":"blanco",
}

var coleccion = {
	1:TeslaS,
	2:Toyota
}

console.log(TeslaS.color)
console.log(Toyota["motor"])

console.log(coleccion[1].placa)
console.log(coleccion[2]["color"])
