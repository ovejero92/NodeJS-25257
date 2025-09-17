function tareaPasadaNoBloqueante(){
    setTimeout(() => {
        console.log('tarea pasada (no bloqueante) terminada')
    }, 5000);

}
console.log('Inicio del programa');
tareaPasadaNoBloqueante();
console.log('Fin del programa')
