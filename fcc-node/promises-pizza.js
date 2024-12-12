const orderStatus = () => {
  const status = Math.random() < 0.8;
  // console.log(status);
  return status;
};

// for (let i = 0; i < 10; i++) {
//   orderStatus();
// }

const pizzaOrder = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (orderStatus()) {
      resolve("Success");
    } else {
      reject("Fail");
    }
  }, 300);
});

const handleOrder = (msg) => {
  console.log(msg);
}

const rejectOrder = (msg) => {
  console.log(msg);
}

pizzaOrder.then(handleOrder, rejectOrder);
