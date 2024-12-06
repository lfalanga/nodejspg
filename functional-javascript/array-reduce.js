function map(arr, fn, thisArg) {
  console.log("INPUT:", arr);
  // The reduce() method of Array instances executes a user-supplied
  // "reducer" callback function on each element of the array, in order,
  // passing in the return value from the calculation on the preceding element.
  // The final result of running the reducer across all elements of the array is a single value.
  // reduce(callbackFn);
  // reduce(callbackFn, initialValue);
  // callbackFn(accumulator, currentValue, currentIndex, array)
  return arr.reduce(function (acc, item, index, arr) {
    acc.push(fn.call(thisArg, item, index, arr)); // call(thisArg, arg1, arg2, /* …, */ argN)
    // acc.push(fn.call(thisArg, item)); // also works!
    return acc;
  }, []);
}

let nums = [1, 2, 3, 4, 5];
let output = map(nums, function double(item) {
  // console.log(Array.prototype.slice.call(arguments).length);
  console.log("args:", Array.prototype.slice.call(arguments));
  // console.log("hello");
  return item * 2;
});

console.log("OUTPUT:", output); // => [2,4,6,8,10]


const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

function reduce(arr, fn, acc) {
  let accx = acc;

  for (let item of arr) {
    accx = fn(accx, item);
  }

  return accx;
}

const array2 = [2, 4, 6, 8, 10];
let reducedA = reduce(array2, (a, b) => a + b, 0);
console.log(reducedA);

let reducedB = array2.reduce((a, b) => a + b, 0);
console.log(reducedB);
