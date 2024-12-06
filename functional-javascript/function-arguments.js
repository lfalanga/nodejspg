let notDuck = Object.create({ quack: true });
let duck = { quack: true };

function duckCount() {
  console.log(
    "duckCount:",
    Array.prototype.slice.call(arguments).length,
    "args:",
    Array.prototype.slice.call(arguments)
  );
}

function addParameter() {
  let args = ["new"].concat(Array.prototype.slice.call(arguments));
  console.log(
    "addParameter:",
    args.length,
    "args:",
    args
  );
}

duckCount(duck, notDuck, []);
addParameter(duck, notDuck, []);
