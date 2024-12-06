let duck = {
  quack: function (arg) {
    console.log("quack");
  }
}

let object = Object.create(null);
object.quack = function (arg) {
  console.log("quack");
}

console.log(duck.hasOwnProperty("quack"));
console.log(Object.getPrototypeOf(object) === Object.prototype);
console.log(Object.getPrototypeOf(object) === null);
console.log(Object.prototype.hasOwnProperty.call(object, "quack"));