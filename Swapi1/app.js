console.log("Esto es una api")

// Aqui estoy guardando el URL
var link = "https://swapi.dev/api/people/";

// Aqui estoy llamando al URL
fetch(link)
// Aqui estoy obteniendo respuesta y llamando a su JSON
.then(respuesta => respuesta.json()
// Aqui estoy entrando a los resultados del JSON y filtrandolos por altura
	.then (resultado => console.log(resultado.results.filter(e => e.height < 170)) 
	) 
)

