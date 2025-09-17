// codigo bloqueante 
function tareaPasada(){ 
    const inicio = Date.now();
    while (Date.now() - inicio < 5000){

    }
    console.log('Tarea pasada terminada')
}
console.log('Inicio del programa');

tareaPasada();

console.log('fin del programa');