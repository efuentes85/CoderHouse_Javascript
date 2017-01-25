$('.menu-element').click(function(){

	var id_categoria = $(this).data("id");
	$('.content .row').


	$.ajax({

		url:"https//api.mercadolibre.com/sites/MLC/search",
		data: {category: id_categoria, limit:10},
		method : "GET",
		dataType: "json",
		success: function(response){
			var data = response.results;
			

			data.forEach(function(elemento){
				var contenido = $('.product').eq(0).clone();
				contenido.find('.imagen img').attr("src",elemento.thumbnail).attr("alt",elemento.id);
				//contenido.find('.imagen').html("<img src='" + elemento.thumnail + "' alt='"+ elemento.id +"' />");
				contenido.find('.price').text("$ "+ elemento.price);
				contenido.find('.titulo').html("<a href='"+ elemento.permalink +"' target='_blank'>" + elemento.title);
				contenido.css("display","block");

			$('.content .row').append(contenido);

			});

			

		}


	})


});