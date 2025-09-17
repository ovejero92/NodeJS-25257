// cajero.js
const readline = require("readline");

// Interfaz para leer desde consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Datos del cliente
let cliente = {
  pin: "1234",
  saldo: 1000,
};

// ---- Funciones ----
function pedirPIN(intentos = 3) {
  if (intentos === 0) {
    console.log("❌ Ha superado los intentos. Comuníquese con el banco.");
    rl.close();
    return;
  }

  rl.question("Ingrese su PIN: ", (inputPin) => {
    if (inputPin === cliente.pin) {
      console.log("✅ Bienvenido al cajero automático.\n");
      mostrarMenu();
    } else {
      console.log(`PIN incorrecto. Le quedan ${intentos - 1} intentos.\n`);
      pedirPIN(intentos - 1);
    }
  });
}

function mostrarMenu() {
  console.log("Seleccione una opción:");
  console.log("1 - Ver saldo");
  console.log("2 - Retirar dinero");
  console.log("3 - Depositar dinero");
  console.log("4 - Salir");

  rl.question("Opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        console.log(`💰 Su saldo es: $${cliente.saldo}\n`);
        mostrarMenu();
        break;
      case "2":
        rl.question("Ingrese monto a retirar: ", (monto) => {
          monto = parseFloat(monto);
          if (monto > 0 && monto <= cliente.saldo) {
            cliente.saldo -= monto;
            console.log(`✅ Ha retirado $${monto}. Saldo restante: $${cliente.saldo}\n`);
          } else {
            console.log("❌ Fondos insuficientes o monto inválido.\n");
          }
          mostrarMenu();
        });
        break;
      case "3":
        rl.question("Ingrese monto a depositar: ", (monto) => {
          monto = parseFloat(monto);
          if (monto > 0) {
            cliente.saldo += monto;
            console.log(`✅ Ha depositado $${monto}. Nuevo saldo: $${cliente.saldo}\n`);
          } else {
            console.log("❌ Monto inválido.\n");
          }
          mostrarMenu();
        });
        break;
      case "4":
        console.log("👋 Gracias por usar nuestro cajero. ¡Hasta pronto!");
        rl.close();
        break;
      default:
        console.log("❌ Opción inválida.\n");
        mostrarMenu();
    }
  });
}

// ---- Inicio ----
console.log("🏦 Bienvenido al cajero automático");
pedirPIN();