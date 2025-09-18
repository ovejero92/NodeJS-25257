const usuario1 = ["Juan", 25, 1.90]

let nombre = usuario1[0]
let edad = usuario1[1]
let altura = usuario1[2]

let [nombre_usuario1 ,  , altura_usuario1] = usuario1;

console.log(nombre_usuario1)

const persona = {
    nombre_obj: "gus",
    apellido: 'ovejero',
    edad_obj: 32
}
persona.edad_obj = 42

let { nombre_obj:nom , apellido , edad_obj} = persona

edad_obj = 45

console.log(persona)

// Spread operator (...)

const array1 = [1,2,3];
const array2 = [4,2,5,6];

const combinado = [...array1,...array2]

const pers = {nombre:"Ana", edad:30}
const copia = {...pers,cuidad:"Buenos Aires"}

console.log(copia)