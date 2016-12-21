(function(Obj){

		var Diario = {};

		var Noticias = [];

	
		var validarNoticia = function(noticia){
			if(Noticias.lenght !=0){
				var aux = Noticias.find(function(news){
					return noticia.id == news.id;
				});

				return aux !== undefined;
			}
		};



		Diario.crearNoticia = function(id,titulo,desc,URL){
			var noticia = { 
					id:id,
			   		titulo:titulo,
			   		desc:desc,
			   		URL:URL
				};
		
		if (!validarNoticia(noticia)){
			Noticias.push(noticia);
		} else{
			console.log("Noticia ya ingresada!!");
		}
	};

		Diario.eliminarNoticia = function(id){
			for (index in Noticias){
				if(Noticias[index].id == id){
					Noticias.splice(index,1);
					break;
				}
			}
			
			/*var tmp=[];  // Esta otra forma solo crea un arreglo sin la noticia
			Noticias.forEach(function (news){
				if (news.id != id) {
					tmp.push(news);
				}
			});
			return tmp;*/
			/** return Noticias=tmp; 
				*De esta manera forzamos a que el valor del array 
				ya no tenga el valor que borramos*/

		};


		Diario.ordenarNoticias = function(){
			Noticias.sort(function(a,b) {return a["id"] -b["id"] });
		}


		Diario.listarNoticias = function(){return Noticias;}

		Diario.saveNoticias = function(){
			var strTmp = [];

			for (index in Noticias){ //id,titulo,desc,URL
			//	strTmp.push('"id: "'+ Noticias[index].id + '", "titulo": "'+ Noticias[index].titulo + '" , "desc: " "',+Noticias[index].desc+'", "URL: " "'+Noticias[index].URL+ '"}');
				//strTmp.push()
			}
			localStorage.Noticias = "[" +strTmp.toString() + "]";

		};

		Diario.loadNoticias = function(){
			Noticias = JSON.parse(localStorage.getItem("Noticias"));

		};

	Obj.Diario = Diario;

})(window);


/*

Diario.crearNoticia(11,"Alza en BTC","Se registra un alza considerable de la moneda virtual BTC","http://www.bitcoinwisdom.com")
Diario.crearNoticia(20,"Feriado 2 Enero","Parlamentarios aprobaron el 2 de Enero como dia feriado","http://latercera.cl")
Diario.crearNoticia(33,"Atentado a Embajador","Embajador Ruso, resulta muerto tras un atentado en Turquía","http://RTnews.com")
Diario.crearNoticia(3,"Lala","Lala","http://google.cl")
Diario.crearNoticia(1,"Lolo","Lala","http://google.cl")
Diario.crearNoticia(4,"Lele","Lele","http://google.cl")
Diario.crearNoticia(6,"Lili","Lili","http://google.cl")
Diario.crearNoticia(2,"Lulu","Lulu","http://google.cl")
Diario.crearNoticia(2,"Lulu","Lulu","http://google.cl")

Diario.eliminarNoticia(3)

*/
