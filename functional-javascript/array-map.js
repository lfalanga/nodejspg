function map(arr, fn) {
  maped = [];

  for (let item of arr) {
    maped.push(fn(item));
  }

  return maped;
}

let ages = [12, 15, 19, 22, 38];
const doubleAges = map(ages, (age) => age * 2);

console.log(doubleAges);

const doubleAgesB = ages.map((age) => age * 2);
console.log(doubleAgesB);
