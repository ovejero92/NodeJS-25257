console.log("1");

function mostrar(callback) {
    setTimeout(() => {
       callback() 
    },1000)
}
console.log("2");


mostrar(() => {console.log("3")})

console.log("4")