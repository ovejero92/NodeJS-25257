function Persona (nombre, apellido, email = "sin correo") {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.saludar = function(){
        console.log("Hola, " + this.nombre)
    }
}

const persona1 = new Persona("Gustavo","Ovejero", "gus@")

console.log(persona1.apellido)

persona1.saludar()

Persona.prototype.cumplirAnios = function() {
    console.log("cumpliste años")
}

persona1.cumplirAnios()