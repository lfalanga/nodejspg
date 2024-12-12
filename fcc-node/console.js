let count = 3;
let counter = 9;

console.log("count: %d, counter: %d", count, counter); // https://developer.mozilla.org/en-US/docs/Web/API/console#using_string_substitutions
console.log("count:", count, "counter:", counter);

console.warn("Warning message!");

const code = 5;
console.error("error", code);
console.error(new Error("¡Ocurrió un error!"))

const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number++) {
  console.log(`the # is ${number}`);
  console.assert(number % 2 === 0, "%o", { number, errorMsg });
}

const car = "Dodge Charger";
const someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", someObject);

console.table(["apples", "oranges", "bananas"]);

