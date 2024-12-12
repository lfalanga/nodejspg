const EventEmmitter = require("events");

// console.log(EventEmmitter);

const emitterProducts = new EventEmmitter();
emitterProducts.on("buy", (total) => {
  console.log(`Product has been bought. Total = ${total}. Thank you!`);
})

// emitterProducts.emit("buy");
emitterProducts.emit("buy", 500);
