

// Ejercicio 2 


var opc = prompt("Tipo de día: ");
function dias(opc){

var diaSemana =["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

if (opc =="Habil" || opc == "Hábil" || opc=="habil" || opc == "hábil"){
	for (let i=0;i < (diaSemana.length-2); i++){	
		console.log(diaSemana[i]);
		}
	}

else  {
	console.log(diaSemana[5]);
	console.log(diaSemana[6]);
}
}

dias(opc);



// Trabajo Practico



var x = prompt (parseInt("Ingrese el primer numero"));
var y = prompt  (parseInt("Ingrese el segundo numero"));
var opt = prompt ("Que operación desea? (+, -, * o /");

if (opt=="+"){
	Suma(num1,num2);
}

if (opt=="-"){
	Resta(num1,num2);
}

if (opt=="*"){
	Multiplicacion(num1,num2);
}
if (opt=="/"){
	Division(num1,num2);
}

function Suma (num1,num2){
	return num1+num2;
}
function Resta (num1,num2){
	return num1-num2;
}
function Multiplicacion (num1,num2){
	return num1*num2;
}
function Division (num1,num2){
	return num1/num2;
}
