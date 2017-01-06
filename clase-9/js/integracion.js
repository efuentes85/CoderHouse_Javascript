
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
    

        var estadoTarea = document.createElement("input");
        estadoTarea.setAttribute("type","checkbox");
        estadoTarea.setAttribute("class","checkbox_estado");
        estadoTarea.setAttribute("checked", function(){
                                               if(tarea.estado){
                                                    return false

                                                    } else {return true}
        });

         


       /* var atributoTarea = document.appendChild("type","checkbox");

        estadoTarea.appendChild(atributoTarea);
        var atributoTarea = document.appendChild("class","checkbox");
*/

        elementoTarea.appendChild(estadoTarea);
        /*
        checkbox.setAttribute("type","checkbox");
        checkbox.setAttribute("class","estado");
        checkbox.appendChild(checkbox);
*/
        


        document.body.appendChild(elementoTarea);
    });
}
