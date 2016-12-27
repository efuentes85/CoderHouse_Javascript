/*
var crearNoticiaForm = function(event){

	var titulo = document.querySelector('#titulo').value;
	var desc = document.querySelector('#desc').value;
	var URL = document.querySelector('#imagen').value;

	Diario.crearNoticia(99,titulo,desc,URL);
	Diario.saveNoticias();
    mostrarNoticia();

    event.preventDefault();
};



var form = document.querySelector("form");
form.addEventListener("submit", crearNoticiaForm);
Diario.listarNoticias();
*/


var crearNoticiaForm = function(event) {
    var titulo = document.querySelector('#titulo').value;
    var descripcion = document.querySelector('#descripcion').value;
    var foto = document.querySelector('#foto').value;

    Diario.crearNoticia(titulo, descripcion, foto);
    Diario.saveNoticias();
    mostrarNoticia();

    event.preventDefault();
};

var form = document.querySelector("form");
form.addEventListener("submit", crearNoticiaForm);
mostrarNoticia();

