// Este modulo sirve para agregar en el HTML el articulo (Titulo, Descripcion y URL de la imagen)



function mostrarNoticia() {
    Diario.getNoticiasDB();

    var noticias = Diario.getNoticias() || [];
    Diario.setNoticias(noticias);

    noticias.forEach(function (noticia) {
        var elementoNoticia = document.createElement("div");

        // Titulo
        var tituloNoticia = document.createElement("h1");
        var textoTituloNoticia = document.createTextNode(noticia.titulo);

        tituloNoticia.appendChild(textoTituloNoticia);
        elementoNoticia.appendChild(tituloNoticia);

        // Cuerpo noticia
        var cuerpoNoticia = document.createElement("p");
        var textoCuerpoNoticia = document.createTextNode(noticia.descripcion);

        cuerpoNoticia.appendChild(textoCuerpoNoticia);
        elementoNoticia.appendChild(cuerpoNoticia);

        // Imagen noticia
        var imagenNoticia = document.createElement("img");
        imagenNoticia.setAttribute("src", noticia.imagen);

        elementoNoticia.appendChild(imagenNoticia);

        document.body.appendChild(elementoNoticia);
    });
}




/*Diario.loadNoticias();
var noticias = Diario.listarNoticias();

noticias.forEach(function(noticia){



var elementoNoticia = document.createElement("div");
var tituloNoticia = document.createElement("h1");
var textoTituloNoticia = document.createTextNode(noticia.titulo);

tituloNoticia.appendChild(textoTituloNoticia);
elementoNoticia.appendChild(tituloNoticia);

// Agregando la descripcion de la noticia
var cuerpoNoticia = document.createElement("p")
var textoCuerpoNoticia = document.createTextNode(noticia.desc);

cuerpoNoticia.appendChild(textoCuerpoNoticia);
elementoNoticia.appendChild(cuerpoNoticia);



// Agregando la Imagen
var imagenNoticia = document.createElement("img");
imagenNoticia.setAttribute("src", noticia.URL);
elementoNoticia.appendChild(imagenNoticia);

document.body.appendChild(elementoNoticia);



});
*/

// Agregando el titulo y el div donde va todo

