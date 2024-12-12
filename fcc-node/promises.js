const accomplished = false;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (accomplished) {
      resolve("Promise accomplished!");
    } else {
      reject("Promise rejected!");
    }
  }, 3000)
});

// myPromise.then((arg1) => {
//   console.log(arg1);
// })

const handleAccomplishedPromise = (value) => {
  console.log(value);
}

const handleRejectedPromise = (value) => {
  console.log(value);
}

myPromise.then(handleAccomplishedPromise, handleRejectedPromise);
