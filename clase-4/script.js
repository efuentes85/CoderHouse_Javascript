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

var ClassObjeto {
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

function Vehiculo () {
	this.nro_ruedas;
	this.color;
	this.nro_asientos;

}

Vehiculo.prototype.partir = function(){console.log("BRRRRUMM!!")};
Vehiculo.prototype.getNroRuedas = function(){ return this.nro_ruedas};


function Camioneta (nro_ruedas){
	this.nro_ruedas = nro_ruedas;

}

Camioneta.prototype = Object.create(Vehiculo.prototype);
Camioneta.prototype.constructor = Camioneta;
Camioneta.prototype.partir = function (){alert("Tracacacacacaca")};


var chevrolet = new Camioneta(5);

console.log(chevrolet.getNroRuedas);
console.log(chevrolet.partir());

var vehiculo = new Vehiculo ();




// Ejercicio


function Auto (){
	this.color;
	this.modelo;
	this.patente;
	this.marca;
	this.prendido;
	this.velocidad;
	this.velocidadMax;

}


	Auto.prototype.encender = function(){console.log("Auto Encendido")};
	Auto.prototype.acelerar = function(){
			console.log("Velocidad Maxima: "+this.velocidadMax);
			console.log("Velocidad: " +this.velocidad);

				/*while (this.velocidad < this.velocidadMax) {
				    this.velocidad += 1;
				    console.log(this.velocidad);

				    
				}*/
			
			for (var i=this.velocidad; i <= this.velocidadMax ; i++){
				console.log("Acelerando: "+ i);



			}

			//otra forma (for (i=0; i<this.velocidadMax; i++){this.velocidad=i})
	};


	Auto.prototype.mostrarVelocidad = function(){console.log("Velocidad Actual: " + this.velocidad)};
	Auto.prototype.frenar = function(){return this.velocidad=0};
	Auto.prototype.apagar = function(){console.log("Auto Apagado!")}; 



	var camaro = new Auto();
	camaro.velocidad=70;
	camaro.velocidadMax=150;
	//camaro.encender();
	camaro.acelerar();
	//camaro.mostrarVelocidad();
