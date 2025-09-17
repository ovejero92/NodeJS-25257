// Parte 1
const numeros = [1,2,3,4,5];
console.log( numeros.length ) // 5
console.log( numeros[3] ) // 4;
let resultado = numeros[1] + numeros[2]
console.log( resultado ) // 5;

// Parte 2 - Recorriendo con array
const num = [1, 2, 3, 4, 5,4,7,5,3];
for (let index = 0; index < num.length; index++) {
alert(num[index]);
}

// Parte 3 - Length
const miArray1 = ["marca", 3 ,"palabra"];
console.log( miArray1.length ); //imprime 3
//---------------------------------------//
const nu = [1, 2, 3, 4, 5, 6, 7, 8]
for (let i= 0; i < nu.length; i++) {
alert(nu[i]);
}

// Parte 4 push        -Agrega un elemento al final de la lista-
const miArray2 = ["marca", 3, "palabra"]
miArray2.push('otro elemento')
let objeto5 = prompt('Ingresa algo que quieras guardar:')
miArray2.push(objeto5)
console.log(miArray2.length) // ⇒ 5
console.log(miArray2)
//["marca", 3, "palabra", “otro elemento”]

// Parte 5 unshift     -Agrega un elemento al principio-
const miArray3 = ["marca", 3, "palabra"]
miArray3.unshift('otro elemento')
console.log(miArray3)
//[“otro elemento”, "marca", 3, "palabra"]

//Parte 6 Quitar elementos
const nombres1 = ["Luis", "Ana", "Julia", "Juan"]
//pop                             ||eliminar ultimo elemento||
let elementoEliminado = nombres1.pop()
console.log(elementoEliminado)
console.log(nombres1) // ["Luis", "Ana", "Julia"]
//shift                             ||eliminar primer elemento||
nombres1.shift()
console.log(nombres1) // ["Ana", "Julia"]

//Parte 7 splice                || elimina en cualquier posicion ||
const nombres2 = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa','Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres2.splice(1,2)
nombres2.splice(4,1)
nombres2.splice(2,1,"gus")
nombres2.splice(3,0,"eze","alan")
console.log(nombres2)
// ['Rita', 'Ana', 'Vanesa']

//Parte 8 join
const nombres3 = ["Luis", "Ana", "Julia", "Juan"]
console.log( nombres3.join(",") )
// Luis, Ana, Julia, Juan
console.log( nombres3.join("*") )
// Luis*Ana*Julia
console.log( nombres3.join(" | ") )
// Luis | Ana | Julia

//Parte 9 concat
const perros = ["Pupy", "Ronnie"]
const gatos = ["Mishi", "Garfield", "Zuri"]
const mascotas = perros.concat(gatos)
console.log(mascotas)
// ["Pupy", “Ronnie”, "Mishi", “Garfield”, "Zuri"]

//Parte 10 slice
const nombres4 = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres4.slice(1, 3); // Nuevo array desde la posición 1 a 3.
// masculinos contiene ['Pedro','Miguel']

//Parte 11 indexof
const nombres5 = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
console.log( nombres5.indexOf('Rita') ) // ⇒ 0
console.log( nombres5.indexOf('Ana') ) // ⇒ 3
console.log( nombres5.indexOf('Julieta') ) // ⇒ -1

//Parte 12 includes
const nombres6 = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
console.log( nombres6.includes('Rita') ) // ⇒ true
console.log( nombres6.includes('Miguel') ) // ⇒ true
console.log( nombres6.includes('Julieta') ) // ⇒ false

//Parte 13 reverse
const nombres7 = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
nombres7.reverse()
console.log( nombres7 )
// ⇒ ['Vanesa', 'Ana','Miguel', 'Pedro','Rita']

