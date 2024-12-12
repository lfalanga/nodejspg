function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}!`);
}

function sumar(a, b) {
  console.log(a + b);
}

// setInterval(funcion, intervalo, arg1, arg2, ...)
// setInterval(mostrarTema, 1000, "Node.js");

setInterval(sumar, 1000, 3, 4);
