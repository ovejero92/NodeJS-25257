console.log(process.argv.slice(2))
const argumentos = process.argv.slice(2)


// const [...arg] = argumentos
const [argumento1,argumento2] = argumentos

// console.log(arg);

if(argumento1 == 'desarrollo') {
    console.log("Servidor corriendo en modo desarrollo", "puerto:", argumento2);
}
if(argumento1 == 'testing') {
    console.log("Servidor corriendo en modo testing","puerto:", argumento2);
}
if(argumento1 == 'produccion') {
    console.log("Servidor corriendo en modo produccion", "puerto:", argumento2);
}