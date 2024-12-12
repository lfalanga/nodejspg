function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}!`);
}

function sumar(a, b) {
  console.log(a + b);
}

// setTimeOut(funcion, retraso, argumento)
// setTimeOut(funcion, retraso, arg1, arg2, arg3, ...)

// mostrarTema("Node.js");

console.log("Wait 3 seconds...")

// setTimeout(mostrarTema, 3000, "Node.js");

setTimeout(sumar, 3000, 5, 6);
