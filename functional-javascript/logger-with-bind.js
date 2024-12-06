function logger(namespace) {
  return console.log.bind(console, namespace);
}

let info = logger("INFO:");
info("this is an info message");
// INFO: this is an info message

let warn = logger("WARN:");
warn("this is a warning message", "with more info");
// WARN: this is a warning message with more info
