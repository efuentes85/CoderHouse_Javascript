
// Ejercicio


function Auto (){
	this.color;
	this.modelo;
	this.patente;
	this.marca;
	this.prendido;
	this.velocidad;
	this.velocidadMax;

}


	Auto.prototype.encender = function(){console.log("Auto Encendido")};
	Auto.prototype.acelerar = function(){
			console.log("Velocidad Maxima: "+this.velocidadMax);
			console.log("Velocidad: " +this.velocidad);

				/*while (this.velocidad < this.velocidadMax) {
				    this.velocidad += 1;
				    console.log(this.velocidad);

				    
				}*/
			
			for (var i=this.velocidad; i <= this.velocidadMax ; i++){
				console.log("Acelerando: "+ i);



			}

			//otra forma (for (i=0; i<this.velocidadMax; i++){this.velocidad=i})
	};


	Auto.prototype.mostrarVelocidad = function(){console.log("Velocidad Actual: " + this.velocidad)};
	Auto.prototype.frenar = function(){return this.velocidad=0};
	Auto.prototype.apagar = function(){console.log("Auto Apagado!")}; 



	var camaro = new Auto();
	camaro.velocidad=70;
	camaro.velocidadMax=150;
	//camaro.encender();
	camaro.acelerar();
	//camaro.mostrarVelocidad();
