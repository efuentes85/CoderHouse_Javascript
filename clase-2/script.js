// Clase 2 , While, For, Switch


/*var limite = parseInt(prompt("Ingrese eel limite"));

//FOR
for (var iterador = 0;  iterador < limite  ; iterador++ j++)
{

	console.log(iterador);

}


//WHILE  es mas eficiente que el for.
lala=0;
while(lala<limite){
	lala++;
}

*/

/*var diaSemana =["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];*/


/*for(var indice=0 ; indice< diaSemana.length ; indice++)
{

	console.log(diaSemana[indice]);

}*/
/*
for ( var ix in diaSemana){

		console.log("Indice: " + ix);
		console.log("Valor: " + diaSemana[ix]);
}	

*/
/*
var objeto={ prop1:"uno" , prop2:"dos" , prop3:"tres", prop4:"cuatro"}

for (x in objeto){

	console.log(x);
	console.log(objeto[x]);
}*/
/*
var numero1 = parseInt(prompt("ingrese numero"));
var numero2 = parseInt(prompt("ingrese numero"));
var operador = (prompt("Operador"));

	switch(operador){
		case "+":
			alert(numero1+numero2);
			break;
		case "-":
			alert(numero1-numero2);
			break;
		case "*":
			alert(numero1*numero2);
			break;
		case "/":
			alert(numero1/numero2);
			break;

		default:
			alert("No Registrado");
			break;
	}
*/




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


