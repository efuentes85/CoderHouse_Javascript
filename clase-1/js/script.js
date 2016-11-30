/*Ejercicio 1*/
var persona = prompt ("Ingresa tu nombre");
alert("Bienvenido a CoderHouse " + persona + " !!!");

/*Ejercicio 2*/
var numero = prompt("Ingrese un numero");
var numero2 = 10;
alert ("Valor Suma: " + (parseInt(numero)+numero2));


/*Ejercicio 3*/
var resultado;
var x = prompt ("Ingrese el primer numero");
var y = prompt  ("Ingrese el segundo numero");
var opt = prompt ("Que operación desea? (Suma, Resta, Multiplicacion o División?");

if (opt=="Suma"){
	resultado=(parseInt(x)+parseInt(y));
}

if (opt=="Resta"){
	resultado=(parseInt(x)-parseInt(y));
}

if (opt=="Multiplicacion"){
	resultado=(parseInt(x)*parseInt(y));
}
if (opt=="Division"){
	resultado=(parseInt(x)/parseInt(y));
}

alert ("Resultado: " +resultado);

