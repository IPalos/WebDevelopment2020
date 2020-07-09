		// Creo una variable llamada "name" y guardo el string "Ignacio"
		var name = "Ignacio";
		var age = 18;
		var calif = 8.1;
		// Accedo al documento completo, y luego busco un elemento cuyo ID sea "nuevo ID", y sustituyo su contenido entre los tags con el valor que guardé en "name"
		document.getElementById("nuevoID").innerHTML = name;
		// Este puede agregar nuevo HTML
		document.getElementById("parrafo1").innerHTML = "<b>nuevo parrafo</b>";
		// Este sólo agrega texto simple
		document.getElementById("parrafo2").innerText = "<b>nuevo parrafo</b>";

		document.getElementById("nameID").innerHTML = "Nombre: " + name;
		document.getElementById("ageID").innerHTML = "Edad: " + age;

		// Inicio del condicional
		if (age >= 18) {
			document.getElementById("olderthan18").innerHTML = "Mayor de edad: Si";

		}
		else {
			document.getElementById("olderthan18").innerHTML = "NO ERES MAYOR DE EDAD!";
		}
		// Fin del condicional


		// Sintaxis del condicional
		if (true) {
			
		} else {
			
		}

		if (calif <= 5) {
			document.getElementById("calif").innerHTML = "REPROBADO ";
		}
		else if (calif <= 6){
			document.getElementById("calif").innerHTML = "REGULAR";
		}
		else if (calif <= 7){
			document.getElementById("calif").innerHTML = "BIEN";
		}
		else if (calif <=8){
			document.getElementById("calif").innerHTML = "MUY BIEN";
		}
		else if (calif <=9){
			document.getElementById("calif").innerHTML = "EXCELENTE";
		}
		else if (calif <=10){
			document.getElementById("calif").innerHTML = "PERFECTO";
		}
		else{
			document.getElementById("calif").innerHTML = "EL NUMERO QUE ESCRIBISTE NO SE LE PUEDE ASIGNAR CLAIFICAiCIÓN";
		}