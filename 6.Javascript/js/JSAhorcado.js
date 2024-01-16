
let letraIntroducida = document.getElementById("campoLetra").value
let palabra = "CALLE"
let arrayPalabra;



function reiniciar(){
	for(i=1 ; i<=5 ; i++){
		console.log("entra en el bucle, esta es la vuelta " + i)
		document.getElementById("espacio" + i).value = ""
		console.log("termina la vuelta " + i + " del bucle")
	}
}

function setLetter(){
		for(i=1 ; i<=5 ; i++){
			letraVuelta = document.getElementById("espacio" + i).value
			if(letraIntroducida == letraVuelta){
				
			}
			
	}
}