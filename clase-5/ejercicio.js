
// Ejercicio


function Auto() {
	this.peso;
	this.patente;

}

Auto.prototype.getPatente = function(){return this.patente};
Auto.prototype.getPeso = function(){return this.peso};

var auto1= new Auto;
auto1.peso= 350;
auto1.patente="AAAA";

var auto2= new Auto;
auto2.peso=240;
auto2.patente="BBBB";

var auto3 = new Auto;
auto3.peso=700;
auto3.patente="CCCC";

var auto4 = new Auto;
auto4.peso=500;
auto4.patente="AAAA";


function Camion() {
	this.pesoMaximo;
	this.pesoActual;
	this.AutosCargados=[];
}

Camion.prototype.getPesoActual = function(){return this.pesoActual}
Camion.prototype.getPesoMaximo = function(){return this.pesoMaximo};
Camion.prototype.verificarPatente = function(auto){

	if (this.AutosCargados.length){
		var autoEnCamion = this.AutosCargados.find(function(subirAuto){
			/*console.log("Vehiculo "+ auto.getPatente() +" no está en el camion");*/
			return subirAuto.getPatente() == auto.getPatente()
			
		});
		return autoEnCamion === undefined;

}
	return true;
};

Camion.prototype.verificaPeso = function(auto){ 
	var pesoActual = this.pesoActual + auto.getPeso();
	return pesoActual < this.pesoMaximo;
};

Camion.prototype.cargarCamion = function(auto){

	if(this.verificarPatente(auto) && this.verificaPeso(auto)){
		 this.AutosCargados.push(auto);
		 this.pesoActual += auto.getPeso();
		 return true;
	}
	else {
		if (this.verificarPatente(auto)){
			console.log("El peso del auto: "+ auto.getPeso() +" supera el límite actual del camion: "+ this.getPesoActual());
		}
		else {
			
			console.log("El vehiculo con la patente: " +auto.getPatente()+ " ya está en el camión");

		}
		return false
	}

};

Camion.prototype.listarCarga = function(){return this.AutosCargados};

var camion1 = new Camion();
camion1.pesoMaximo=1000;
camion1.pesoActual=0;
//camion1.AutosCargados=[[100,"AAA"],[140,"BBB"]];


camion1.cargarCamion(auto1);
camion1.cargarCamion(auto2);
camion1.cargarCamion(auto3);
camion1.cargarCamion(auto4);



var auto5 = new Auto;
auto5.peso=100;
auto5.patente="DDDD";


var auto6 = new Auto;
auto6.peso=80;
auto6.patente="EEEE";


var auto7 = new Auto;
auto7.peso=210;
auto7.patente="FFFF";



camion1.cargarCamion(auto5);
camion1.cargarCamion(auto6);
camion1.cargarCamion(auto7);

camion1.getPesoActual();
camion1.listarCarga();