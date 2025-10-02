import chalk from "chalk";
import readline from "readline";

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})
function pedirNombre(){
    rl.question("Ingrese su nombre: ", (nombre) => {
        if(!nombre.trim()){
           console.log(chalk.red("⚠️Error : el nombre no puede estar vacio."));
            pedirNombre();
        } else {
            console.log(chalk.green("Bienvenido/a ", nombre));
            pedirEdad(nombre);
        }
    })
}
function pedirEdad(nom){
    rl.question("Ingrese su edad: ", (edad) => {
    if (isNaN(edad) || edad <= 0) {
      console.log(chalk.red("❌ Error: Debe ingresar un número válido mayor a 0."));
      pedirEdad(nom); // vuelve a pedir si está mal
    } else {
      console.log(chalk.blue(`📢 Hola ${nom}, tenés ${edad} años.`));
      rl.close();
    }
  });
}

pedirNombre()