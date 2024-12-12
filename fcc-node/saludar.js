const saludo = require("./saludo.js");
const saludos = require("./saludos.js");

console.log("saludo.js = ", saludo);
console.log("saludos.js = ", saludos);

console.log(saludo("freeCodeCamp"));

console.log(saludos.hello("freeCodeCamp"));
console.log(saludos.bye("freeCodeCamp"));
