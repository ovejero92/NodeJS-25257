const fs = require("fs")

let index = ""

fs.writeFile('./archivo.txt',"Estoy creando un archivo desde node",() => {
    try{console.log("Exito"); }
    catch(error){console.log("el error es:" + error);
    }
})