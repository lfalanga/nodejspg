function valorDePrueba(val, fn) {
  return fn(val);
}

function prueba(val) {
  if (val > 3) return true;
}

function testValue(val, fn) {
  return fn(val);
}

function test(val) {
  return val > 3 ? true : false;
}

console.log(valorDePrueba(2, prueba));  // undefined
console.log(valorDePrueba(4, prueba));  // true

console.log(testValue(2, test));
console.log(testValue(4, test));

const chequearString = testValue('Twitter',  valor  =>  typeof  valor === 'string');
console.log(chequearString);

const edadLegalEnEEUU = 21;
const chequearEstadoLegal = (edad, edadLegal) => {
    return edad >= edadLegal ? 'Mayor de edad.' : 'Menor de edad.';
};
const johnEstado = chequearEstadoLegal(18, edadLegalEnEEUU);
console.log(johnEstado); // Menor de edad.
console.log(edadLegalEnEEUU); // 21
