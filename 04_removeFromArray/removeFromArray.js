const removeFromArray = function(array, v1, v2, v3, v4) {
    let newArray = [];
    array.forEach(value => {
        let index = array.indexOf(value);
        if (value !== v1 && value !== v2 && value !== v3 && value !== v4) {
            newArray.push(value);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
