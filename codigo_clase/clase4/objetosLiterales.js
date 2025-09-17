const persona = {
    nombre:"Juan",
    edad:25,
    isActive:true,
    lenguajes:["javascript","pyhton"],
    saludar() {
        console.log(`Hola, soy ${this.nombre}`)
    }
}

persona.edad = 35;
persona.nacionalidad = "Argentina";

persona.lenguajes.forEach((len)=> { console.log(len)})

console.log(persona.edad); // 25
console.log(persona["isActive"]);  // true
console.log(persona);
persona.saludar()

