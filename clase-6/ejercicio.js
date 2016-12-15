/* Crear un curso de un colegio.
	Tips
		Alumno es un objero que tiene:
			Nota final
			Nombres
			Apellidos
			Edad
		Curso es un objeto que tiene:
			Alumnos
			Profesor Jefe
		Profesor Jefe es un objeto que tiene:
			Nombre
			Apellidos
			Asignatura

Ingresar Alumnos
Listar Alumnos aprobados (mayor a 4)
Listar Alumnos reprobados
Calcular promedio del curso
Calcular la nota mas alta y la más baja
*/


function Persona (nombres,apellidos){
	this.nombres=nombres;
	this.apellidos=apellidos;

};

Persona.prototype.getNombres = function(){return this.nombres};
Persona.prototype.getApellidos = function() {return this.apellidos};
Persona.prototype.getNombreCompleto = function(){return this.nombres+" "+this.apellidos};


function Alumno (nombre,apellido,notaFinal,edad) {
	this.notaFinal=notaFinal;
	this.edad=edad;
	Persona.call(this,nombre,apellido);
};

Alumno.prototype = Object.create(Persona.prototype);
Alumno.prototype.getNotaFinal = function (){return this.notaFinal};
Alumno.prototype.getEdad = function(){console.log("Edad: "+ this.edad)};

function Profesor(nombre,apellido,asignatura){
		this.asignatura=asignatura;
		Persona.call(this,nombre,apellido);

};

Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.getAsignatura = function(){return this.asignatura};



function Curso () {
	this.Alumnos=[];
	this.profesor = {}; // Este solo recibe un objeto de tipo profesor, se tiene que crear para poder asignar el objeto
};

Curso.prototype.setAlumno = function(alumno){return this.Alumnos.push(alumno)};
Curso.prototype.setProfesor = function(profesor){return this.profesor=profesor};
Curso.prototype.getProfesor = function(){console.log(this.profesor.getNombreCompleto())};
Curso.prototype.listarAlumnos = function(){
			console.log("LISTA DE ALUMNOS\n=======================\nCURSO: "+this.profesor.getAsignatura()+" PROFESOR: "+this.profesor.getNombreCompleto());
	          this.Alumnos.forEach(function(alumno, index) {
                console.log(index+1+". "+ alumno.getNombreCompleto());
            });
        };



Curso.prototype.listarAprobados = function(){
			console.log("LISTA DE ALUMNOS APROBADOS\n=======================\nCURSO: "+this.profesor.getAsignatura()+" PROFESOR: "+this.profesor.getNombreCompleto());
	          this.Alumnos.forEach(function(alumno, index) {
	          if(alumno.getNotaFinal() >= 4){
                console.log("Alumno: " + alumno.getNombreCompleto() + "   Nota Final: "+alumno.getNotaFinal());
            	}
            });

        };

Curso.prototype.listarReprobados = function(){
			console.log("LISTA DE ALUMNOS REPROBADOS\n=======================\nCURSO: "+this.profesor.getAsignatura()+" PROFESOR: "+this.profesor.getNombreCompleto());
	          this.Alumnos.forEach(function(alumno, index) {
	          if(alumno.getNotaFinal() < 4){
                console.log("Alumno: " + alumno.getNombreCompleto() + "   Nota Final: "+alumno.getNotaFinal());
            	}
            });

        };



Curso.prototype.getPromedio = function(){
		var promedio = 0;
		var total = 0;
		this.Alumnos.forEach(function(alumno,index){
			promedio += alumno.getNotaFinal();
			total = index+1;

		});
		console.log("Promedio: "+ promedio / total);

};


Curso.prototype.notasCurso = function(opc){
		if (opc){
			this.Alumnos.sort();

		}

}
/*
Curso.prototype.obtenerAlumnos = function(valor){
	if(valor){
		this.autos.filter(function() {
     	return autoArriba.getPatente() == auto.getPatente()
			};

	else  {
	
		}
};
*/


var alumno1 = new Alumno("Juan Pablo","Perez Iturra",4.5,12);
var alumno2 = new Alumno("Martin Ignacio","Gonzales Fuentes",6.4,12);
var alumno3 = new Alumno("Sofia Martina","Guerrero Ibacache",3,12);
var alumno4 = new Alumno("Valentina Ximena","Carrasco Latorre",7,11);
var alumno5 = new Alumno("Patricio Humberto","Fuentes Velasco",4,11);
var alumno6 = new Alumno("Claudio Andres","Guerra Zegpi",6,10);
var alumno7 = new Alumno("Glenda Rosario","Sepulveda Carvajal",5,13);

var profesor = new Profesor("Javier Andres","Espinoza Cortez","Matemáticas");

/*alumno1.getNombreCompleto();
alumno2.getNombreCompleto();
alumno3.getNombreCompleto();
*/

var cursoMatematicas = new Curso();
cursoMatematicas.setAlumno(alumno1);
cursoMatematicas.setAlumno(alumno2);
cursoMatematicas.setAlumno(alumno3);
cursoMatematicas.setAlumno(alumno4);
cursoMatematicas.setAlumno(alumno5);
cursoMatematicas.setAlumno(alumno6);
cursoMatematicas.setAlumno(alumno7);
cursoMatematicas.setProfesor(profesor);
/*cursoMatematicas.getProfesor();*/
cursoMatematicas.listarAlumnos();
cursoMatematicas.listarAprobados();
cursoMatematicas.listarReprobados();
cursoMatematicas.getPromedio();
cursoMatematicas.notasCurso(true);