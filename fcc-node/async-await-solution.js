function orderProduct(product) {
  return new Promise((resolve, reject) => {
    console.log(`You order a ${product} from freeCodeCamp!`);
    setTimeout(() => {
      if (product === "cup") {
        resolve("cup");
      } else {
        reject("Product not available.");
      }
    }, 2000);
  });
}

function processOrder(res) {
  return new Promise((resolve) => {
    console.log("Processing response...");
    console.log(`Processing: "${res}" from freeCodeCamp!`);
    setTimeout(() => {
      resolve("Thank you!");
    }, 4000);
  });
}

async function buy(product) {
  try {
    const res = await orderProduct(product);
    console.log("Response received!");
    console.log(res);
    const process = await processOrder(res);
    console.log(process);
  } catch (err) {
    console.log(err);
  }
}

buy("cup");
// buy("pen");
