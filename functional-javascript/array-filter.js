function arregloFiltrado(arr, fn ) {
  const filtered = [];

  for (let item of arr) {
    if (fn(item)) {
      filtered.push(item);
    }
  }

  return filtered;
}

const arrInput = [1, true, null, "Hola", undefined, "Mundo", false];
const onlyStrings = arregloFiltrado(arrInput, (el) => typeof el === "string");

console.log(onlyStrings);

const onlyStringsB = arrInput.filter(el => typeof el === "string");
console.log(onlyStringsB);
