
function Usuario (props){
	Persona.call(this,props);
	this.username = props.username;
	this.password = props.password;
	this.fechaCreacion = props.fechaCreacion;



}


Usuario.prototype = Object.create(Persona.prototype)




Usuario.prototype.getUsuario = function () {
		return this.username;
}

Usuario.protoype.getPassword = function () {
	return this.password;
}

Usuario.protoype.getFechaCreacion = function () {
	return this.fechaCreacion;
}


