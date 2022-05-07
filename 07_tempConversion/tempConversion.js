const ftoc = function(fahr) {
let celsius = (fahr-32)*(5/9);
return parseFloat((Math.round(celsius * 10) / 10).toFixed(1))

};

const ctof = function(cels) {
fahrenheit = cels*(9/5) + 32;
return parseFloat((Math.round(fahrenheit * 10) / 10).toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
