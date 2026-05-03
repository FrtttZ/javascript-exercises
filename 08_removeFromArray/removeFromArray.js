const removeFromArray = function(arr, ...remove) {
    return arr.filter((word) => remove.includes(word) == false)  

};

// Do not edit below this line
module.exports = removeFromArray;
