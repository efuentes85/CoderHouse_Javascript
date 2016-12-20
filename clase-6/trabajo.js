
/*
Trabajo Practico
- Crear una funcion que agrege una pelicula al array de peliculas
- La pelicula debera tener un ID y un Titulo
- Crear una funcion que evalue antes de agregar que la pelicula no fue ingresada previamente
- Crear una funcion que ordene las peliculas por Titulo y por ID
- Crear una funcion que elimine una pelicula por su ID.
*/



function Pelicula(titulo,ID){
	this.titulo=titulo;
	this.ID=ID;

};

Pelicula.prototype.setPelicula = function(pelicula){this.pelicula = pelicula};
Pelicula.prototype.getPelicula = function(){return this.titulo};
Pelicula.prototype.setID = function(id){this.ID = id};
Pelicula.prototype.getID = function(){return this.ID};

function Cine (){
	this.Peliculas = [];

};

Cine.prototype.ingresaPelicula = function(pelicula){
	if (this.validarID(pelicula) && this.validarTitulo(pelicula)){
		this.Peliculas.push(pelicula);
	}
	else {
		console.log("Pelicula ya ingresada en cartelera");
	}
};

Cine.prototype.listarPelicula = function(){
			this.Peliculas.forEach(function(pel,index){
				console.log("Titulo: "+ pel.getPelicula()+"\n====================\nID: "+pel.getID());
	})
};


Cine.prototype.validarTitulo = function(pelicula){
		if (this.Peliculas.length !=0){
		var Cartelera = this.Peliculas.find(function(pel){
				return pelicula.getPelicula() == pel.getPelicula();
		})
		return Cartelera === undefined;

	}
	return true;
};


Cine.prototype.validarID = function(pelicula){
		if (this.Peliculas.length !=0){
		var Cartelera = this.Peliculas.find(function(pel){

				return pelicula.getID() == pel.getID();
		})
		return Cartelera === undefined;

	}

	return true;
};

Cine.prototype.eliminarID = function(id){
	var busqueda=this.Peliculas.find(function(pel){
		return parseInt(id) == pel.getID();

	});
	
	if (busqueda != -1){
		var posicion=this.Peliculas.indexOf(busqueda);
		return this.Peliculas.splice(posicion,1);	
	}
	else{
		console.log("No existe ninguna Pelicula con ese ID en cartelera");
	}
	

	
};


var peli1 = new Pelicula("Terminator 2",1);
var peli2 = new Pelicula("Shrek 3",2);
var peli3 = new Pelicula("StarWars Episodio IV",5);
var peli4 = new Pelicula("Driver",8);
var peli5 = new Pelicula("Driver",11);
var peli6 = new Pelicula("El Despertar",1);
var peli7 = new Pelicula("El Resplandor",15);
var peli8 = new Pelicula("Leon the Profesional",7);
var peli9 = new Pelicula("The Fantasy",3);
var peli10 = new Pelicula("Cars",4);



var CineHoyts = new Cine();
CineHoyts.ingresaPelicula(peli1);
CineHoyts.ingresaPelicula(peli2);
CineHoyts.ingresaPelicula(peli3);
CineHoyts.ingresaPelicula(peli4);
CineHoyts.ingresaPelicula(peli5);
CineHoyts.ingresaPelicula(peli6);
CineHoyts.ingresaPelicula(peli7);
CineHoyts.ingresaPelicula(peli8);
CineHoyts.ingresaPelicula(peli9);
CineHoyts.ingresaPelicula(peli10);
CineHoyts.listarPelicula();
/*console.log(CineHoyts.eliminarID(1));*/


console.log("\n=============================================\nELIMINANDO UNA PELICULA EN CARTELERA\n=============================================");
CineHoyts.eliminarID(2);
CineHoyts.eliminarID(3);
CineHoyts.listarPelicula();

