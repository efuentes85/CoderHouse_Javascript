function(exports){
	// Sabemos que ees un arreglo de obj de tipo usuario
	var _listaUsuarios = [];
	var TablaUsuarios = {}

	TablaUsuarios.setUsuariosLocalStorage = function(){
		if(this._listaUsuarios.lenght >0) {
		localStorage.setItem("lista-usuario",JSON.stringify(_listaUsuarios));
		}

	};

	TablaUsuarios.getUsuariosLocalStorage = function () {
			var localStorageData = localStorage.getItem("lista-usuario");

			if localStorageData !== 

	}

	exports.TablaUsuarios = TablaUsuarios;

}(window);