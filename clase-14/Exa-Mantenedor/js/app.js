function submitFormulario(event){
	event.preventDefault;
	var flag = true;



if (document.querySelector('#nombre').value =="");
	flag = false;

}


if (document.querySelector('#rut').value =="");
	flag = false;

}


if (document.querySelector('#fnac').value =="");
	flag = false;

}


if (document.querySelector('#usr').value =="");
	flag = false;

}

if (document.querySelector('#passwd').value =="");
	flag = false;

}

if (flag){
	// Crea Usuario
} else {
	alert("El formulario contiene al menos 1 error");

}



var form = document.forms['crear-user'];
form.addEventListener('submit', submitFormulario);