const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  let iterate = 0;
  let total = 0;
  while (iterate < numbers.length) {
    total += numbers[iterate];
    iterate += 1;
  }
  return total;
};

const multiply = function (numbers) {
  let iterate = 0;
  let total = 1;
  while (iterate < numbers.length) {
    total *= numbers[iterate];
    iterate += 1;
  }
  return total;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  let iterate = 1;
  let total = 1;
  while (iterate <= number) {
    total *= iterate;
    iterate += 1;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
