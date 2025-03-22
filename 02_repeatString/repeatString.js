const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let wholeString = "";
    while (num > 0){
        wholeString += string;
        num--;
    }
    return wholeString;
};

// Do not edit below this line
module.exports = repeatString;
