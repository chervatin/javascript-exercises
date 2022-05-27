const fibonacci = function(input) {


let series = [1, 1];
let number = input;
if (number>0){
    for (let index = 1; index < number; index++) {
        series.push(series[index] + series[index-1]);
    }
} else 
return 'OOPS'

return series[input-1];


//1 1 2 3 5 8 

};

// Do not edit below this line
module.exports = fibonacci;
