var crearTareaForm = function(event) {
    var titulo = document.querySelector('#titulo').value;
    var descripcion = document.querySelector('#desc').value;
    
    ToDoList.agregarTarea(titulo, descripcion);
    ToDoList.saveTareas();
    
    mostrarToDoList();
    event.preventDefault();
    
};

var form = document.querySelector("form");
form.addEventListener("submit",crearTareaForm);
mostrarToDoList();