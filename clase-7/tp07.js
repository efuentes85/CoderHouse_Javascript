(function(objWindow){

		var imdb = {};

		var peliculas=[];

		var existePelicula = function(film){
			if (peliculas.lenght !=0){
			var peliEnArray=peliculas.find(function(pelicula){
					return pelicula.id == film.id
			});

			return peliEnArray !== undefined;
/*
			for (index in peliculas){
				if (peliculas[index].id == film.id){
					return false;
				}
				return true
			}*/
		}
		};

		imdb.agregarPelicula = function(id,title){
			var film = { 

					id:id,
			   		titulo:title
				};

			if (!existePelicula(film)){
				peliculas.push(film);	
			} else {
				console.log("Pelicula ya se encuentra en IMDB");
			}
			


		};


		imdb.eliminarPelicula = function(id){
			for (index in peliculas){
				if (peliculas[index].id == id){
					peliculas.splice(index,1);
					break;
				}
			}
		};

		imdb.ordenarPeliculas = function(param){
				switch(param){
					case "id":
						peliculas.sort(function(a,b){return a["id"] - b["id"]};

						break;
					case "titulo":
						peliculas.sort(function(a,b){
							if (a.titulo > b.titulo)  {
								return 1;
							}
							else if (a.titulo < b.titulo){
								return -1;

							}
							return 0;

						break;
					default:
						console.log("Parametro desconocido");
						break;
				}

		};

		imdb.savePeliculas = function(){
			var strTmp=[];
			for (attr in peliculas){
				strTmp.push('{"id": "'"}
			}
			/*localStorage.peliculas = peliculas.toString();*/
		}

		imdb.getPeliculas = function(){
			peliculas = lcalStorage.getItem("peliculas");
		}

		imdb.listaPeliculas = function(){return peliculas;}
		//window.imbd
		objWindow.imdb = imdb;



})(window);