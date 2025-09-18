const automoviles = [
  { marca: "Toyota", modelo: "Corolla", año: 2019, color: "Rojo" },
  { marca: "Honda", modelo: "Civic", año: 2021, color: "Azul" },
  { marca: "Ford", modelo: "Focus", año: 2017, color: "Negro" },
  { marca: "Chevrolet", modelo: "Onix", año: 2020, color: "Blanco" },
  { marca: "Volkswagen", modelo: "Golf", año: 2018, color: "Gris" },
  { marca: "Nissan", modelo: "Sentra", año: 2022, color: "Rojo" },
  { marca: "Kia", modelo: "Rio", año: 2016, color: "Verde" },
  { marca: "Hyundai", modelo: "Elantra", año: 2019, color: "Negro" },
  { marca: "Peugeot", modelo: "208", año: 2021, color: "Azul" },
  { marca: "Renault", modelo: "Clio", año: 2023, color: "Blanco" }
];

automoviles.forEach(auto => { 
   if(auto.año > 2018) {
    console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Año: ${auto.año}, Color: ${auto.color}`);
   }
})


function contarPorColor(colorBuscado) {
    let cont = 0;

    automoviles.forEach( ( {color} ) => {
        if(color.toLocaleLowerCase()  === colorBuscado.toLocaleLowerCase()) {
            cont++;
        }
    } )

    console.log(`Hay ${cont} autos de color ${colorBuscado.toLocaleLowerCase()}`)
}

contarPorColor("RoJo")