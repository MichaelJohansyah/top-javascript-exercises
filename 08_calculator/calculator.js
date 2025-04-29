const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (a = []) {
    let total = 0;
    a.forEach((num) => {
        total += num;
    });
    return total;
};

const multiply = function (a = []) {
  let total = 1;
    a.forEach((num) => {
        total *= num;
    });
    return total;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a <= 1) { 
    return 1;
  }
  else{
    return (a * factorial(a - 1));
  }

};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
