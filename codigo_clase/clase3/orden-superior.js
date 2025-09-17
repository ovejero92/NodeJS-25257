// function calculadora (operacion) {
//     return function (num1,num2) {
//         if(operacion == "sumar" || operacion == "+") {
//             console.log("Suma: " , num1+num2);
//         } else if(operacion == "restar") {
//             console.log("Resta: ", num1-num2)
//         } else {
//             console.log("No elegiste ninguna operacion valida")
//         }
//     }
// }

// console.log("elegi una operacion")
// calculadora("+")(14,54)

const temporizador = () => {
    let contador = 1
    console.log('Iniciando temporizador')
    const timer = setInterval(()=> {
        console.log(contador++)
        if(contador > 5){ 
            clearInterval(timer)
        }
    },2000)
}

console.log('Inicio del proceso')
temporizador()
console.log('Fin del proceso')