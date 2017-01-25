
function Persona (props){

	this.nombreCompleto = props.nombreCompleto;
	this.rut = props.rut;
	this.fechaNacimiento = props.fechaNacimiento;



}



Persona.prototype.getNombreCompleto = function () {
		return this.nombreCompleto;
}

Persona.protoype.getRut = function () {
	return this.rut;
}

Persona.protoype.getFechaNacimiento = function () {
	return this.fechaNacimiento;
}

