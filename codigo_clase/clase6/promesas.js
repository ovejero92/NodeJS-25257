const promesa = new Promise((resolve,reject) => {
    setTimeout(() => {
        if(Math.random() < 0.5){
            resolve("Tarea asincronica completada.")
        } else{
            reject(new Error("tarea asincronica fallida."))
        }
    },1000)
})

promesa
    .then((respuesta) => {console.log(respuesta)})
    .catch((error) => {console.log(error);})
    .finally(() => {console.log("final")})


import readline from "readline";

// Configuración de readline para leer desde consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirNombre() {
  return new Promise((resolve, reject) => {
    rl.question("👉 Ingresá tu nombre: ", (respuesta) => {
      if (respuesta && respuesta.trim().length > 2) {
        resolve(`Bienvenido, ${respuesta}! 😀`);
      } else {
        reject("❌ Error: Debes ingresar un nombre válido (mínimo 3 letras).");
      }
    });
  });
}

pedirNombre()
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error))
  .finally(() => rl.close());