function orderProduct(product) {
  return new Promise((resolve, reject) => {
    console.log(`You order a ${product} from freeCodeCamp!`);
    setTimeout(() => {
      if (product === "cup") {
        resolve("cup")
      } else {
        reject("Product not available.")
      }
    }, 2000);
  });
}

function processOrder(res) {
  return new Promise((resolve) => {
    console.log("Processing response...");
    console.log(`Response: "${res}" from freeCodeCamp!`);
    setTimeout(() => {
      resolve("Thank you!");
    }, 4000);
  })
}

// Chaining promises
orderProduct("cup")
  .then(res1 => {
    console.log(`Ordered product: "${res1}".`);
    return processOrder(res1);
  })
  .then(res2 => {
    console.log(`Process order response: "${res2}".`);
  })
  .catch(err => {
    console.log(err);
  })
