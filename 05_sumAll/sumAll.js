const sumAll = function(int1,int2) {

    var difBetweenInt = int2-int1;
    var sumBetweenInt = int1

if(typeof int1 == 'number' && typeof int2 == 'number' && int1>=0 && int2>=0){

if (int2<int1){
    var difBetweenInt = int1-int2;
    var sumBetweenInt = int2;
}

console.log(difBetweenInt)

for (let i = 1; i <= difBetweenInt ; i++) {
    sumBetweenInt = sumBetweenInt + (i+1)
}

return sumBetweenInt;

}

else

return 'ERROR'
};

// Do not edit below this line
module.exports = sumAll;
