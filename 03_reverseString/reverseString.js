const reverseString = function(string) {
    return string.split("").reverse().join("") // Split breaks the string and makes and array of its elements. Reverse will reverse the array and then join will convert the array into a string again 
};

// Do not edit below this line
module.exports = reverseString;
