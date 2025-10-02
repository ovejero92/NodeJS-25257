// fetch("https://fakestoreapi.com/products")
// .then((respuesta)=> respuesta.json())
// .then((data)=> console.log(data))

async function getProducts() {
    try{
    const respuesta = await fetch("https://fakestoreapi.com/products")
    const data = await respuesta.json()
    console.log(data)
    } catch (err){
        console.log(err)
    }
}

getProducts()

import axios from "axios";

axios.get("https://fakestoreapi.com/products")
  .then((res) => {
    console.log("Usuarios:", res.data);
  })
  .catch((err) => {
    console.error("Error en axios:", err.message);
  });
