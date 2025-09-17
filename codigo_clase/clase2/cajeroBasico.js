const pin = "5701";
let ingresar = false;
  
for (let i = 3; i >= 1; i = i - 1) {
    let inputPin = prompt("Ingresa tu Pin");
    if(inputPin === pin) {
        alert("Bienvenido ya podes operar");
        ingresar = true
        break;
    } else {
        alert("Error de ingreso. Volver a intentar");
    }
}

if(ingresar){
    let saldo = 2000;
    let opt = prompt("Elegí una opción: \n1 - Saldo. \n2 - Rertiro de dinero \n3 - Depósito. \nPresioná x para finalizar.");
    while( opt.toLowerCase() != "x") {
        switch(opt) {
            case '1':
                alert("Tu saldo es: $" + saldo)
                break
            default: break;
        }
        opt = prompt("Elegí una opción: \n1 - Saldo. \n2 - Rertiro de dinero \n3 - Depósito. \nPresioná x para finalizar.");
    }
}else{
    alert("Retuvimos tu tarjeta comunicate con tu banco para poder hacer otra y cambiar el PIN")
}