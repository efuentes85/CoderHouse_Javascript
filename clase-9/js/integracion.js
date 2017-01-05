
function mostrarToDoList() {
    ToDoList.getTareasDB();

    var tareas = ToDoList.mostrarTareas() || [];
    ToDoList.setTareas(tareas);

    // Creando menu para las tareas (Mostrar)
    var menuTareas = document.createElement("div");
    menuTareas.setAttribute("id","menu");

    var btnMostrar = document.createElement("button");
    btnMostrar.setAttribute("id","mostrar");
    var txtBtn = document.createTextNode("Mostrar Tareas");
    btnMostrar.appendChild(txtBtn);

    var btnBorrar = document.createElement("button");
    btnBorrar.setAttribute("id","borrarTodo");
    var txtBtn2 = document.createTextNode("Borrar Todo");
    btnBorrar.appendChild(txtBtn2);


    menuTareas.appendChild(btnMostrar);
    menuTareas.appendChild(btnBorrar);
    document.body.appendChild(menuTareas);




    tareas.forEach(function (tarea) {
        


        var elementoTarea = document.createElement("div");
        elementoTarea.setAttribute("class","fondo");


        // Botones
        // Eliminar

        var btnEliminar = document.createElement("button");
        var textoEliminar = document.createTextNode("Eliminar");

        btnEliminar.appendChild(textoEliminar);
        btnEliminar.setAttribute("class","eliminar");
        btnEliminar.addEventListener("click",function(){
                ToDoList.eliminarTarea(this.id,"")
        });


    


        elementoTarea.appendChild(btnEliminar);

        // Cambiar estado

        var btnEstado = document.createElement("button");
        var textoEstado = document.createTextNode("Cambiar Estado");

        btnEstado.appendChild(textoEstado);
        btnEstado.setAttribute("class","estado");
        elementoTarea.appendChild(btnEstado);



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

    
        // Estado Tarea, checkbox
        var estadoTarea = document.createElement("input");
        estadoTarea.setAttribute("type","checkbox");



          if (tarea.estado) {
                 
                elementoTarea.appendChild(estadoTarea);
        } else {
                estadoTarea.setAttribute("checked","checked");  
                elementoTarea.appendChild(estadoTarea);
           
        }
   


        document.body.appendChild(elementoTarea);
    });



}
