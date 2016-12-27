(function(exports) {
    var diario = {};
    var noticias = [];

    diario.getLastId = function() {
        if (noticias.length !== 0) {
            Diario.sortNoticias("id");
            return parseInt(noticias[noticias.length-1].id) + 1;
        }

        return 1;
    };

    diario.crearNoticia = function(titulo, descripcion, imagen) {
        var noticia = {};
        noticia.id = Diario.getLastId();
        noticia.titulo = titulo;
        noticia.descripcion = descripcion;
        noticia.imagen = imagen;

        noticias.push(noticia);
        diario.saveNoticias();
     
    };

    diario.existeNoticia = function(noticia) {
        var existeNoticia = noticias.find(function(news) {
            return noticia.id == news.id;
        });

        return existeNoticia !== undefined;
    };

    diario.eliminarNoticia = function(id) {
        noticias.forEach(function(noticia, indice) {
           if (noticia.id == id) {
               noticias.splice(indice, 1);
               return;
           }
        });
    };

    diario.sortNoticias = function(parametro) {
        switch(parametro) {
            case "id":
                noticias.sort(function(a, b) {
                    return a["id"] - b["id"];
                });
                break;
            case "titulo":
                noticias.sort(function(a, b) {
                    if (a.titulo > b.titulo) {
                        return 1
                    } else if (a.titulo < b.titulo) {
                        return -1
                    }

                    return 0
                });
                break;
            default:
                console.log("Parametro desconocido");
        }
    };

    diario.saveNoticias = function() {
        localStorage.noticias = JSON.stringify(noticias);
    };

    diario.getNoticiasDB = function() {
        var localNoticias = localStorage.getItem("noticias");

        if (localNoticias !== undefined) {
            noticias = JSON.parse(localNoticias);
        } else {
            noticias = [];
        }
    };

    diario.getNoticias = function() {
        return noticias;
    };

    diario.setNoticias = function(arrNoticia) {
        noticias = arrNoticia;
    }

    exports.Diario = diario;
})(window);


/*(function(Obj){

		var Diario = {};

		var Noticias = [];

	
		var validarNoticia = function(noticia){
			if(Noticias.length !=0){
				var aux = Noticias.find(function(news){
					return noticia.id == news.id;
				});

				return aux !== undefined;
			}
		};



  		Diario.crearNoticia = function(titulo, descripcion, imagen) {
		        var noticia = {};
		        noticia.id = Diario.getLastId();
		        noticia.titulo = titulo;
		        noticia.descripcion = descripcion;
		        noticia.imagen = imagen;

        	Noticias.push(noticia);
    };



		/*Diario.crearNoticia = function(id,titulo,desc,URL){
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
	};*/

	/*	Diario.eliminarNoticia = function(id){
			for (index in Noticias){
				if(Noticias[index].id == id){
					Noticias.splice(index,1);
					break;
				}
			}
			

			Otra opcion para poder hacerlo!!!
			Noticias.forEach(function(noticia,index){
				if (Noticias.id == noticia.id){
					Noticias.splice(index,1);
					return;
				}
			})*/
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
/*
		};


		Diario.ordenarNoticias = function(){
			Noticias.sort(function(a,b) {return a["id"] - b["id"] });
		}


		Diario.listarNoticias = function(){return Noticias;}

		Diario.saveNoticias = function(){
			//var strTmp =[];

			//		strTmp = JSON.stringify(Noticias);
					localStorage.Noticias = JSON.stringify(Noticias);
			
			};

			
		Diario.loadNoticias = function(){
			Noticias = JSON.parse(localStorage.getItem("Noticias"));

		};

		Diario.getLastId = function() {
        if (Noticias.length !== 0) {
            Diario.sortNoticias("id");
            return parseInt(noticias[noticias.length-1].id) + 1;
        }

        return 1;
    };


	Obj.Diario = Diario;

})(window);*/


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

Diario.crearNoticia(44,"RIF en ORACLE","Inminente RIF, esperemos que sea muy pronto, no estoy ni ahi con esta wea!!!","http://www.fujitsu.com/global/Images/oracle-580x224_tcm100-102907.png")

Diario.eliminarNoticia(3)

*/
