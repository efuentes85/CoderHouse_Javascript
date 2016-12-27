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
		var lista = {};
		var tareas = [];

		lista.agregarTarea = function(id,titulo,desc,estado){
			var tarea={};
			tarea.id = id;
			tarea.titulo = titulo;
			tarea.descripcion = desc;
			tarea.estado = estado;
			tareas.push(tarea);
		};


		lista.editarTarea = function(id,titulo,desc) {
        tareas.forEach(function(task, indice) {
           if (task.id == id) {
               tareas[indice].titulo=titulo;
               tareas[indice].descripcion=desc;
               console.log("Tarea actualizada");
               return;
           		}
        	});
   	 	};


   	 	lista.editarEstado = function(id,estado){
   	 		tareas.forEach(function(task, indice) {
           		if (task.id == id) {
              	 	tareas[indice].estado=estado;
               	console.log("Estado actualizado");
               return;
           		}
        	});
   	 	};

   	 	
   	 	lista.eliminarTarea = function(id,opc){
   	 		if (opc == true){
   	 			tareas.splice(0,tareas.length);

   	 		}
   	 		else {
   	 			 tareas.forEach(function(task, indice) {
           			if (task.id == id) {
           				tareas.splice(indice,1);               
           			}
        		});
   	 		}
   	 	};



   	 	lista.sortTareas = function(parametro,orden) {
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


		lista.mostrarTareas = function(){
			return tareas;
		};


		lista.getTareas = function() {
        	return tareas;
    	};

   		lista.setTareas = function(arrTarea) {
        tareas = arrTarea;
   		 }


		lista.saveTareas = function() {
        localStorage.tareas = JSON.stringify(tareas);
   		
   		 };

    	lista.getTareasDB = function() {
        var localTarea = localStorage.getItem("tareas");

        if (localTarea !== undefined) {
            tareas = JSON.parse(localTarea);
        } else {
            tareas = [];
        }
    	};

    


	exports.ToDoList = lista;

})(window);

/*
ToDoList.agregarTarea(1,"Hola","Prueba de la primera tarea",0)
ToDoList.agregarTarea(2,"Prueba","Workshop",0)
ToDoList.agregarTarea(3,"Test","Test de la aplicacion",1)
ToDoList.agregarTarea(4,"Words","More Words",1)
ToDoList.agregarTarea(5,"Algo que hacer","Implementar el modulo para integrar",0)

ToDoList.mostrarTareas()

ToDoList.eliminarTarea(1,false)

ToDoList.eliminarTarea(1,true)

ToDoList.sortTareas("id","asc")
ToDoList.sortTareas("titulo","asc")

*/