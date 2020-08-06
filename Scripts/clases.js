class Tenis{
	constructor(modelo, marca, precio,categoria, depto){
		this.model = modelo
		this.brand = marca
		this.price = precio
		this.category = categoria
		this.dept = depto
	}
}

productos=[]

var p1 = new Tenis ("RS-X", "Puma", 700,"unisex","deportivo")
var p2 = new Tenis ("Numbus", "Asics", 250, "unisex", "casual")
productos.push(p1)
productos.push(p2)

function AgregarProducto(modelo, marca, precio, categoria, depto){
	var e = new Tenis (modelo, marca, precio, categoria, depto)
	productos.push(e)

}


