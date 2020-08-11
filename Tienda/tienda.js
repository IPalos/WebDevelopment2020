// Modelo del producto
// Tallas [4,5,6,7,8]
// Marca
// modelo
// departamento (mujeres, hombres, niños...)
// precio
// inventario [25,10,...]
// Categoría

// var producto1 = {
// 	"marca": "Adidas",
// 	"modelo": "Superstar",
// 	"tallas": [4, 5, 6, 7, 8],
// 	"precios": [300, 320, 350, 380, 400],
// 	"inventario": [23, 66, 44, 56, 79],
// 	"departamento": "Hombres",
// 	"categoria": "casual"
// }

// var producto2 = {
// 	"marca": "Nike",
// 	"modelo": "Jordan",
// 	"tallas": [4, 5, 6, 7, 8],
// 	"precios": [600, 640, 700, 760, 800],
// 	"inventario": [9, 15, 13, 36, 66],
// 	"departamento": "Hombres",
// 	"categoria": "deportivo"
// }

// var producto3 = {
// 	"marca": "Asics",
// 	"modelo": "Nimbus",
// 	"tallas": [4, 5, 6, 7, 8],
// 	"precios": [200, 220, 250, 270, 300],
// 	"inventario": [43, 12, 46, 57, 95],
// 	"departamento": "Unisex",
// 	"categoria": "casual"
// }

// var producto4 = {
// 	"marca": "Puma",
// 	"modelo": "RS-X",
// 	"tallas": [4, 5, 6, 7, 8],
// 	"precios": [600, 640, 700, 760, 800],
// 	"inventario": [48, 62, 1, 46, 35],
// 	"departamento": "Unisex",
// 	"categoria": "deportivo"
// }

// var producto5 = {
// 	"marca": "UnderArmor",
// 	"modelo": "Charged Assert",
// 	"tallas": [4, 5, 6, 7, 8],
// 	"precios": [300, 320, 350, 380, 400],
// 	"inventario": [14, 5, 15, 98, 11],
// 	"departamento": "Mujer",
// 	"categoria": "correr"
// }

class Tenis{
	constructor(modelo, marca, precio,categoria, depto){
		this.model = modelo
		this.brand = marca
		this.price = precio
		this.category = categoria
		this.dept = depto
	}
}

var productos = []
var prod = document.getElementById("productos")

var marca;
var modelo;
var precio;
var depto;
var categoria;



function AgregarProducto(){
	marca = document.getElementById("t-marca").value;
	modelo = document.getElementById("t-modelo").value;
	precio = document.getElementById("t-precio").value;
	depto = document.getElementById("t-depto").value;
	categoria = document.getElementById("t-categoria").value;


	var e = new Tenis (modelo, marca, precio, depto, categoria)
	productos.push(e)
	prod.innerHTML = ""
	productos.forEach(p => CrearTarjeta(p.model, p.brand, p.price, p.dept, p.category))

}
function GenerarInventario(n) {
	var lista = []
	for (let index = 0; index < n; index++) {
		lista[index] = Math.floor(Math.random() * 100)
	}
	return lista
}



function CrearTarjeta(modelo, marca, precio, depto, categoria) {
	// Crea la tarjeta
	card = document.createElement("div")
	card.setAttribute("class", "product-card")
	// Crea el elemento "modelo" y lo agrega a la tarjeta
	m = document.createElement("p")
	m.innerText = modelo
	m.setAttribute("class", "modelo")
	card.appendChild(m)

	// Crear el elemento "marca" y agrerlo a la tarjeta
	mc = document.createElement("p")
	mc.innerText = marca
	mc.setAttribute("class","marca")
	card.appendChild(mc)

	p = document.createElement("p")
	p.innerText = "$"+precio
	p.setAttribute("class","precio")
	card.appendChild(p)

	d = document.createElement("p")
	d.innerText = depto
	d.setAttribute("class","depto")
	card.appendChild(d)

	c = document.createElement("p")
	c.innerText = categoria
	c.setAttribute("class","categoria")
	card.appendChild(c)



	// Agrega la tarjeta al body del documento
	prod.appendChild(card)
}


