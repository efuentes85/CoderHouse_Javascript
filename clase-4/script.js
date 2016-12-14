// Clase 4 Objetos

//Def de objeto como funcion
// Clase y Objeto van de la mano!

function Persona (edad,nombre,apellido,peso,estatura) {
	this.edad = edad;
	this.nombre = nombre;
	this.apellido = apellido;
	this.peso = peso;
	this.estatura = estatura;
}


var juanito = new Persona (21,"Juan","Perez",90,190);

var persona2 = new Persona (35,"Pedro","Gonzales",200,170);



function Animal(){
	this.tipo;
	this.patas;
	this.peludo;
}

	Animal.prototype = Animal;
	Animal.prototype.setPatas = function(patas){this.patas = patas};

// Segunda forma

function ClassObjeto {
	forma :"";
	tamaño : "";
	peso : "";
	material:"";

 // Asi se puede instanciar un objeto con prototype
	ClassObjeto.prototype = ClassObjeto;
	ClassObjeto.prototype.getForma = function(){return this.forma};

// Es otra forma para crear o inicializar la clase Objeto
	ClassObjeto : function (){},
	getForma: function(){return this.forma},
	setTamaño: function(tamaño){this.tamaño=tamaño}
};






function Persona() {
	this.nombre;
	this.apellido;
	this.telefono;
	this.edad;
	this.estatura;

}

Persona.prototype = Persona;
Persona.prototype.getNombreCompleto = function (){return this.nombre +" "+this.apellido};

Persona.prototype = Persona;
Persona.prototype.printFicha = function(){ 
		var ficha = document.createElement("div");
		ficha.setAttribute("id","ficha");

		var capaNombre = document.createElement("div");



	}

var persona1 = new Persona();

var inputNombre = prompt("Ingrese Nombre");
var inputApellido =prompt("Ingrese Apellido");
var inputTelefono = prompt ("Ingrese Telefono");
var inputEdad = prompt ("Ingreese Edad");
var inputEstatura = prompt ("Ingrese Estatura");

persona1.nombre = inputNombre;
persona1.apellido= inputApellido;
persona1.telefono=inputTelefono;
persona1.edad=inputEdad;
persona1.estatura=inputEdad;

console.log(persona1);



// Herencia

function Vehiculo (nro_asientos) {
	this.nro_ruedas;
	this.color;
	this.nro_asientos=nro_asientos;

}

Vehiculo.prototype.partir = function(){console.log("BRRRRUMM!!")};
Vehiculo.prototype.getNroRuedas = function(){ return this.nro_ruedas};


function Camioneta (nro_ruedas,nro_asientos){
	this.nro_ruedas = nro_ruedas;
	Vehiculo.call(this,nro_asientos);

}



Camioneta.prototype = Object.create(Vehiculo.prototype);
Camioneta.prototype.constructor = Camioneta;
Camioneta.prototype.partir = function (){console.log("Tracacacacacaca")};
Camioneta.prototype.getNroAsientos = function(){return this.nro_asientos};


var chevrolet = new Camioneta(5,3);
console.log("Chevrolet");
console.log("Numero de Ruedas"+ chevrolet.getNroRuedas());
console.log(chevrolet.partir());
console.log(chevrolet.nro_asientos);

var toyota = new Camioneta(5,8);
console.log("Toyota: "+ toyota.getNroAsientos());


var vehiculo = new Vehiculo(8);
console.log(vehiculo.getNroRuedas());
console.log(vehiculo.partir());
console.log(vehiculo.nro_asientos);


var moto = new Vehiculo();
moto.nro_ruedas = 2;

moto.partir = function (){console.log("Pruuuuuuum")};

console.log("Moto \n");
console.log(moto.getNroRuedas());
console.log(moto.partir());
console.log(vehiculo.partir());

