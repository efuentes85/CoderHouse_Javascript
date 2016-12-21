// Pelicula

/*La Pelicula tiene un titulo y un ID
El cine tiene varias peliculas
Listar peliculas
Eliminar Pelicula por ID
*/


function Cine (){
	this.nombre;
	this.Peliculas = [];
}

Cine.prototype.setNombreCine = function (cine){this.cine = cine};
Cine.prototype.ingresaPelicula = function(pelicula){this.Peliculas.push(pelicula)};
Cine.prototype.listarCartelera = function(){
	console.log("Peliculas en cartelera\n=================="); 
		this.Peliculas.forEach(function(peli,index){
			return peli.showPelicula();
		})
	};


Cine.prototype.eliminaID = function(ID){
	for (index in Peliculas){
		if(Peliculas[index].id == ID){
			Peliculas.splice(index,1);
			break;
		}

	}
};	






function Pelicula(){
	this.ID;
	this.nombre;
}

Pelicula.prototype.setPelicula = function(ID,nombre){this.ID=ID; this.nombre=nombre};
Pelicula.prototype.showPelicula = function(){console.log("Pelicula: "+ this.nombre)};
Pelicula.prototype.getID = function(){return this.ID };

var CineHoyts = new Cine();
var peli1 = new Pelicula();
var peli2 = new Pelicula();
var peli3 = new Pelicula();
var peli4 = new Pelicula();
var peli5 = new Pelicula();
var peli6 = new Pelicula();
var peli7 = new Pelicula();


CineHoyts.setNombreCine("CineHoyts La Reina");
peli1.setPelicula(10,"Lo que el viento se llevó");
peli2.setPelicula(25,"Terminator");
peli3.setPelicula(34,"Terminator II");
peli4.setPelicula(47,"Volver al Futuro");
peli5.setPelicula(5,"Volver al Futuro II ");
peli6.setPelicula(6,"Volver al Futuro III");
peli7.setPelicula(11,"Pesadilla");


CineHoyts.ingresaPelicula(peli1);
CineHoyts.ingresaPelicula(peli2);
CineHoyts.ingresaPelicula(peli3);
CineHoyts.ingresaPelicula(peli4);
CineHoyts.ingresaPelicula(peli5);
CineHoyts.ingresaPelicula(peli6);
CineHoyts.ingresaPelicula(peli7);
CineHoyts.listarCartelera();
CineHoyts.eliminaID(11);
CineHoyts.eliminaID(5);
CineHoyts.eliminaID(2);
CineHoyts.eliminaID(54);


console.log("=================================");

CineHoyts.listarCartelera();

/*
peli1.showPelicula();
peli2.showPelicula();
peli3.showPelicula();
peli4.showPelicula();
peli5.showPelicula();
peli6.showPelicula();
*/
