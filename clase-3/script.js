
// Clase 3 Funciones

function funcionSuma(numero1, numero2){

	return numero1+numero2;

}

funcionSuma(2,3);







function funcionEjemplo1(num1){
	return num1;
}



function funcionEjemplo2(num1,num2){
	return num1 + num2;
}



function funcionEjemplo3(num1,num2){
	return(funcionEjemplo1(num1) + funcionEjemplo2(num1,num2));

}


console.log(funcionEjemplo3(3,4));



// Funcion anonima, es la que no tiene nombre y es asignada a una variable

var resultado = function(numero1,numero2){
		return numero1+numero2;
}

console.log(resultado(5,4));



setTimeout(function() {
	alert("Hola!");
} , 1000);


function alerta(){
	alert("Otra");
}


setTimeout(alerta,2000);


// Funcion self-invoking


function lala () {
		alert("Hola");
}

lala();


(function(){
	alert("Hola self-invoking");
})();




//Ejercicio 1
function nombre(){
	var nombre = prompt("Ingrese Nombre");
	var apellido = prompt("Ingrese Apellido");
	console.log(nombre +" "+ apellido);

}

nombre();



// Ejercicio 2 
// Forma A

 
// Forma B



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
