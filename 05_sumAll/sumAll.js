const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  }

  let totalNum = 0;
  if (num1 < num2) {
    i = num1;
    while (i <= num2) {
      totalNum += i;
      i++;
    }
  } else if (num1 > num2) {
    i = num2;
    while (i <= num1) {
      totalNum += i;
      i++;
    }
  } else {
    return num1;
  }
  return totalNum;
};

// Do not edit below this line
module.exports = sumAll;
