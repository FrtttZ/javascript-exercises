const add = function(x,y) {
  return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((startVal, current) => startVal + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((startVal, current) => startVal * current, 1);

};

const power = function(base, power) {
  return base ** power;
	
};

const factorial = function(num) {
  let arr = [];
  for(let i = 1; i <= num; i++){
    arr.push(i);
  }
  return arr.reduce((startVal, current ) => startVal * current, 1);
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
