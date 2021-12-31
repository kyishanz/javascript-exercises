const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    } else {
        return recurse(Number(n));
    }

};

function recurse (n) {
    if (n <= 1) {
        return n;
    }
    return recurse(n-2) + recurse(n-1);
}

// Do not edit below this line
module.exports = fibonacci;
