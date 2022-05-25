const add = function(a,b) {
	return a+b;
  
};

const subtract = function(c,d) {
	return c-d
};

const sum = function(array) {
  return array.reduce((total, current) => total + current,0);
 }



const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
  if (a==0) { 
    return 1 
  } 
  else {
  let result = a;
  for (let index = a-1; index >0; index--) {
    result = result * index
  }
  return result;
}
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
