// Clase 5   Metodos String & Array

var cadena = "Hola mundo";
cadena.indexOf("a");
cadena.length;
cadena.lastIndexOf("a");
cadena.charAt(9);
//cadena.Substr(inicio,cantidad)
cadena.substr(2,4);


function ucFirst(cadena){
		var tmp_cadena = cadena.toLowerCase();
		var letra = tmp_cadena.charAt(0).toUpperCase();
		return letra + tmp_cadena.substr(1);
}

var cadena = "Hola mundo";
cadena.split(" ");

var cadena = "uno,dos,tres,cuatro";
var cadena_split = cadena.split(",");


var arreglo = ["uno","dos","tres","cuatro"];
arreglo.toString();
arreglo.toString().split(",");

arreglo.push("cinco"); // Agrega al final del arreglo y entrega el lenght**
arreglo.pop(); //Muestra y elimina el ultimo elemento

var arreglo = ["uno","dos","tres","cuatro"];
arreglo.join(":"); // el parametro puede cambiar a lo que uno quiera
// "uno:dos:tres:cuatro"


var numeros =[1,3,4,5,6,100];
numeros.sort();
numeros.sort(function(a,b){return a-b });
numeros.reverse(); //modifica el vector, invirtiendo el orden.


var numeros =[1,3,4,5,6,100];
numeros.concat([4,7,8]);


var arreglo = ["uno","dos","tres","cuatro"];
arreglo.slice(1); // no muestra el elemento en la posicion 1 y me trae lo demas
arreglo.slice(2,3);

var arreglo = ["uno","dos","tres","cuatro"];
arreglo.forEach(function(elemento,index){console.log(elemento); console.log(index);});

var arreglo = ["uno","dos","tres","cuatro"];
arreglo.splice(1,3); // posicion, cantidad de elementos a eliminar
arreglo.splice(1,0,"cinco","seis","siete"); // aqui no elimino elementos, sino que agrego desde esa posicion.



var arreglo = ["uno","dos","tres","cuatro"];
arreglo.find(function(elemento){return elemento=="dos"}); //trae solo la primera que encuentra


var edades = [21,18,15,23,55];
edades.find(function(edad){ return edad > 18});
edades.filter(function(edad){return edad >18});


