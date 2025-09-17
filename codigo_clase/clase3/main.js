const array = [ "Leonardo" , "Cesar" , "Mariano" , "Martin"]

array.length

console.log(array[1]);

const numeros = [2,4,6,8,10]

const doble = numeros.map(numero=>numero * 2)

const suma = numeros.reduce( (acum,numero) => acum + numero, 0)


console.log(suma)