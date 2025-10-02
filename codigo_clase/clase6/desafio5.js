// Capturamos los argumentos pasados por consola
const args = process.argv.slice(2); // Ignora los dos primeros valores (node y script.js)

const comando = args[0];   // Ejemplo: GET, POST, PUT, DELETE
const valor = args[1];     // Ejemplo: data o id

switch (comando) {
  case "GET":
    console.log("Toma un dato");
    break;

  case "POST":
    if (!valor) {
      console.log("Falta el dato para POST");
    } else {
      console.log(`Recibimos ${valor} satisfactoriamente`);
    }
    break;

  case "PUT":
    if (!valor) {
      console.log("Falta el id para PUT");
    } else {
      console.log(`Modificamos el item con id: ${valor} satisfactoriamente`);
    }
    break;

  case "DELETE":
    if (!valor) {
      console.log("Falta el id para DELETE");
    } else {
      console.log(`El item con el id: ${valor} se eliminó con éxito`);
    }
    break;

  default:
    console.log("Comando no reconocido. Usa GET, POST {data}, PUT {id}, DELETE {id}");
}
