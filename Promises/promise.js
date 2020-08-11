function promiseCallback() {
	return new Promise((resolve, reject) =>

		fetch("https://swapi.dev/api/people/")
			.then((respuesta) => {
				if (respuesta.status == 200) {
					document.getElementById("resultado").innerText = "Conexión Establecida"
					document.getElementById("resultado").className = "acc"
					resolve(respuesta.json())
				}
				else {
					reject(respuesta)

				}
			}
		)
		.catch(error => {
			console.log(error)
			document.getElementById("resultado").innerText = "Error de Conexión"
			document.getElementById("resultado").className = "reg"
		})
	)
}

function resolvedAnswer(data){
	console.log("--resuelto--")
	console.log(data)
}

function rejectedAnswer(data){
	console.log("--rechazado--")
	console.log(data)
}


promiseCallback().then(resolvedAnswer, rejectedAnswer)


