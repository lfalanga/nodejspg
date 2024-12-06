function curry3(fun) {
  return function (one) {
    return function (two) {
      return function (three) {
        return fun(one, two, three);
      };
    };
  };
}

function abc(one, two, three) {
  return one / two / three;
}

var curryC = curry3(abc);
var curryB = curryC(6);
var curryA = curryB(3);

console.log(curryA(2)); // => 1

function add3(one, two, three) {
  return one + two + three;
}

var curryF = curry3(add3);
var curryE = curryF(1);
var curryD = curryE(2);
console.log(curryD(3)); // => 6
console.log(curryD(10)); // => 13

console.log(curry3(add3)(1)(2)(3)); // => 6
