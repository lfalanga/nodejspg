function logger(namespace) {
  return function () {
    let slice = Array.prototype.slice;
    let argsx = [namespace].concat(slice.call(arguments));

    // console.log(argsx);
    console.log.apply(console, argsx);
  };
}

let info = logger("INFO:");
// info();
// info("");
info("this is an info message");
// INFO: this is an info message

let warn = logger("WARN:");
// warn();
// warn("");
warn("this is a warning message", "with more info");
// WARN: this is a warning message with more info