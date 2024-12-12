const orderStatus = () => {
  return Math.random() < 0.8;;
};

const pizzaOrder = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (orderStatus()) {
      resolve("Success");
    } else {
      reject("Fail");
    }
  }, 300);
});

pizzaOrder
  .then((msg) => {
    console.log(msg);
  })
  .then(null, (msg) => {
    console.log(msg);
  });
