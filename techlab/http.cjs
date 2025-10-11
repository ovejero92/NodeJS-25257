const http = require("http")

const server = http.createServer((req,res) => {
    console.log("Alguien me hizo una peticion...")
    res.end("Hola desde el back, chau")
})

server.listen(8080, () => {
    console.log("Escuchando en el puerto 8080")
})