var crearTareaForm = function(event) {
    var titulo = document.querySelector('#titulo').value;
    var descripcion = document.querySelector('#descripcion').value;
    var estado = document.querySelector('.estado').value;
    console.log("valor del radio: "+estado);
    var id = 10;

    ToDoList.crearNoticia(id,titulo, descripcion, estado);
    ToDoList.saveNoticias();
    mostrarNoticia();

    event.preventDefault();
};

var form = document.querySelector("form");
mostrarToDoList();