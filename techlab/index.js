// const cowsay = require("cowsay");

// console.log(cowsay.say({
//     text : "Hola como estan",
//     e : "oO",
//     T : "U "
// }));

// const {saludar} = require("./modulos.js")
// const modulo = require("./modulos.js")

// const [] = modulo.DB


// // console.log(saludar("gus"))
// const path = require("node:path")

// console.log(__dirname)
// console.log(path.join(__dirname,"archivos","ejemplo.txt"))


import path from "path";
import { fileURLToPath } from "url";
import fs from "fs"

// 🔹 reconstruimos __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ usamos __dirname para armar la ruta absoluta
const filePath = path.join(__dirname, "data", "prod.json");
console.log(__dirname)


const data = fs.readFileSync(filePath, "utf-8");

const productos = JSON.parse(data)

