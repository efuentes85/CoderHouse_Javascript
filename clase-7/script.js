//  Patron de diseño por Modulo

var pelicula = {};

pelicula = (function(){ 
	var indice =0; // esta seria una variable privada, no se puede acceder desde afuera, pq no es parte del obj
	var obj ={};
	return pelicula;
	obj.addPelicula = function(){

	}

	obj.getIndice = function(){return indice} // De estaa manera es la unica forma de sacar el var indice

	return obj;
/* SIMILAR A RETURN { indice: indice ,
				 addPelicula:function(){}
				 getIndice:function(){}
				}
*/
})();


//modulo con la definicion de un objeto dentro




(function(exports){
		var pelicula = {
				title:"";
				id:0,
				director:"",
				actores:[]
		};

		var videoteca = [];

		var addPelicula = function (title,id,director){
			pelicula.title = title;
			pelicula.id=id;
			pelicula.director=director;

			videoteca.push(pelicula);
		}

		var removePelicula = function(id,alternativa){
			//Alternativa 1
		if (alternativa==1)
			var tmp=[];


		}	

		//Alternativa2

		else if{
			videoteca.forEach(peli,index){
				
			}



		}

})(window);