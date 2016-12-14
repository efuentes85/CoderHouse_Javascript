

var diaSemana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

var diaSeleccionado = prompt("Qué día es hoy?");

if (diaSeleccionado=="Sabado" || diaSeleccionado == "sabado"){
		alert("Genial, faltan 2 dias para el Lunes!");
}


var edad = parseInt(prompt("Qué edad tienes?"));

if (edad == 10 ){
	alert("Eres muy pequeño aun!");
}

else if (edad == 20){
	console.log("Bueeena vamos de carrete!");
}


if ((edad >= 18 )&& (diaSeleccionado == "Sabado" || diaSeleccionado=="sabado")){
		console.log("Vamos al California!!!");
}
else if (diaSeleccionado == "Domingo" || diaSeleccionado=="domingo"){
		console.log("A la iglesia... boooring");
}

for (var x in diaSemana){
		/*console.log(diaSemana[x]);*/

	if (diaSemana[x] == "Lunes"){
		console.log( diaSemana[x]+" - "+ " Nueva Semana, con todo el ánimo!");

	}

	if (diaSemana[x] == "Viernes" && edad>=18){
		console.log( diaSemana[x]+" - "+ " Vamos al Barba Azul");
	}
}





var dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];


dias.forEach(function(element)
{
	console.log(element);
});		


