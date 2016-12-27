
function mostrarToDoList() {
    ToDoList.getTareasDB();

    var tareas = ToDoList.mostrarTareas() || [];
    ToDoList.setTareas(tareas);

    tareas.forEach(function (tarea) {
        var elementoTarea = document.createElement("div");

        // Titulo Tarea
        var tituloTarea = document.createElement("h1");
        var textoTarea = document.createTextNode(tarea.titulo);

        tituloTarea.appendChild(textoTarea);
        elementoTarea.appendChild(tituloTarea);

        // Descripcion Tarea
        var descripcionTarea = document.createElement("p");
        var textoDescripcion = document.createTextNode(tarea.descripcion);

        descripcionTarea.appendChild(textoDescripcion);
        elementoTarea.appendChild(descripcionTarea);

        // Estado Tarea

        var estadoTarea = document.createElement("INPUT");
        estadoTarea.setAttribute("type", "checkbox");
        estadoTarea.setAttribute("checked", "false");

        if (tarea.estado == 1){          
            estadoTarea.setAttribute("checked", "true");
        }
              
  
        elementoTarea.appendChild(estadoTarea);

        document.body.appendChild(elementoTarea);
    });
}
