const datos = ["gus","Mariano","Fesal","Ramiro"]

datos.push("Martin")
datos.push("Flavio")


console.log("primer FOR")
for( let i = 0 ; i < datos.length ; i = i + 2 ) {
    console.log(datos[i])
}

console.log("2 FOR")
for( let nombres of datos ) {
    console.log(nombres)
}

console.log("3 FOR")
datos.forEach((nom, i) => {
    console.log(i,nom)
})


// 🔹 Métodos de Transformación

// .join()  -> Útil para generar salidas legibles, como una lista con formato.
const stack = ["Node.js", "Express", "MongoDB", "Docker"];
// Generar un string tipo CV
const techList = stack.join(" | ");
console.log("Mi stack es:", techList);
//  Mi stack es: Node.js | Express | MongoDB | Docker

// Incluso podés usarlo para armar queries:
const fields = ["name", "email", "age"];
const sql = `SELECT ${fields.join(", ")} FROM users;`;
console.log(sql);
//  SELECT name, email, age FROM users;
