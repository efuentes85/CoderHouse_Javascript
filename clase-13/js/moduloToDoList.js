/*Workshop!

Crear el modulo ToDoList que tenga los metodos
Agregar, Editar, Mostrar Todos, Buscar, Eliminar
Una tarea tiene : ID/Titulo/Descripcion y Completado (si esta o no ready)
Se debe:
Editar Titulo y Descripcion de una tarea
Eliminar una o todas las tareas
Ordenar por titulo asc o desc y por ID
Persistir las tareas en localStorage
*/
(function(exports){

  
		var toDoList = {};
		var tareas = [];

		toDoList.agregarTarea = function(titulo,desc){
			var tarea={};
			tarea.id = calcIdTarea();
			tarea.titulo = titulo;
			tarea.descripcion = desc;
			tarea.estado = false;
			
      tareas.push(tarea);
      toDoList.saveTareas();
		};

	toDoList.agregarTarea = function(titulo,desc,estado){
			var tarea={};
			tarea.id = calcIdTarea();
			tarea.titulo = titulo;
			tarea.descripcion = desc;
			tarea.estado = true;
			
      tareas.push(tarea);
      toDoList.saveTareas();
		};


    var calcIdTarea = function(){
         return tareas.length +1;
   /*   if (tareas.length == 0){
        return 1;
      }
      else {
        toDoList.sortTareas("id","asc");
        return parseInt(tareas[tareas.length -1].id)+1;
      }*/

    };

		toDoList.editarTarea = function(id,titulo,desc) {
        tareas.forEach(function(task, indice) {
           if (task.id == id) {
               
                tareas[indice].titulo=titulo;
                tareas[indice].descripcion=desc;
              
                console.log("Tarea actualizada");
               return;
           		}
        	});
   	 	};


   	 	toDoList.editarEstado = function(id,estado){
   	 		tareas.forEach(function(task, indice) {
           		if (task.id == id) {
              	 	tareas[indice].estado=estado;
               	console.log("Estado actualizado");
               return;
           		}
        	});
   	 	};

   	 	
   	 	toDoList.eliminarTarea = function(id,opc){
   	 		if (opc == true){
   	 			tareas.splice(0,tareas.length);
          toDoList.saveTareas(); 

   	 		}
   	 		else {
   	 			 tareas.forEach(function(task, indice) {
           			if (task.id == id) {
           				tareas.splice(indice,1);  
                  toDoList.saveTareas();             
           			}
        		});
   	 		}
   	 	};



   	 	toDoList.sortTareas = function(parametro,orden) {
        switch(parametro) {
            case "id":
            	if (orden=="asc"){
            		tareas.sort(function(a, b) {
                    return a["id"] - b["id"];
                    
                	});
            	}
            	else{
            		tareas.sort(function(a, b) {
                    return b["id"] - a["id"];
                    
                	});
            	}
                break;
          
             case "titulo":

             		if (orden=="asc"){
            		tareas.sort(function(a, b) {
                    return a["titulo"] > b["titulo"];
                    
                	});
            		}
             		else{
             			tareas.sort(function(a, b) {
                    	return b["titulo"] > a["titulo"];
                    
                		});
             		}
		            break;


            default:
                console.log("Parametro desconocido");
        		}
    	};


		toDoList.mostrarTareas = function(){
			return tareas;
		};


    toDoList.buscarTarea = function(id){
        aux={};
        tareas.forEach(function(tarea,indice){
            if (tarea.id == id){
                aux.id == tarea[indice].id;
                aux.titulo == tarea[indice].titulo;
                aux.descripcion == tarea[indice].descripcion;
                aux.estado == tarea[indice].estado;
                return aux;
            }

        });

    }

		toDoList.getTareas = function() {
        	return tareas;
    	};

   		toDoList.setTareas = function(arrTarea) {
        tareas = arrTarea;
   		 }


		toDoList.saveTareas = function() {
        localStorage.tareas = JSON.stringify(tareas);
   		
   		 };

    	toDoList.getTareasDB = function() {
        var localTarea = localStorage.getItem("tareas");

        if (localTarea !== undefined) {
            tareas = JSON.parse(localTarea);
        } else {
            tareas = [];
        }
    	};


    	toDoList.setEstado = function(id){
    	tareas.forEach(function(task, indice) {
           if (task.id == id) {
                tareas[indice].estado=true;
                console.log("Tarea actualizada");
               return;
           		}
        	});
   	 	};


    


	exports.ToDoList = toDoList;

})(window);

/*
ToDoList.agregarTarea("Hola","Prueba de la primera tarea")
ToDoList.agregarTarea("Prueba","Workshop")
ToDoList.agregarTarea("Test","Test de la aplicacion")
ToDoList.agregarTarea("Words","More Words")
ToDoList.agregarTarea("Algo que hacer","Implementar el modulo para integrar")

ToDoList.mostrarTareas()

ToDoList.eliminarTarea(1,false)

ToDoList.eliminarTarea(1,true)

ToDoList.sortTareas("id","asc")
ToDoList.sortTareas("titulo","asc")

*/