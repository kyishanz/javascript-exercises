const repeatString = function(string, n) {
    let repeated = "";
    if (n < 0) {
        return "ERROR";
    }
    for (let i = 0; i < n; i++) {
        repeated += string;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;